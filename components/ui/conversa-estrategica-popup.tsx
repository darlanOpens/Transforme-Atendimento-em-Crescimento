"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, ArrowRight } from "lucide-react"
import { usePopup } from "@/contexts/popup-context"

// Declare dataLayer type for GTM
declare global {
  interface Window {
    dataLayer: any[]
  }
}

// Opções do select
const segmentoOptions = [
  "Saúde", "Educação", "Varejo", "Tecnologia", "Serviços", "Indústria",
  "Construção e Imobiliário", "Finanças", "Entretenimento e Lazer",
  "Governamental", "Ecommerce", "ONG", "Automotivo", "Turismo",
  "Transporte", "Telecomunicações", "Segurança", "Hotelaria",
  "Advocacia", "Moda", "Marketing", "Alimentação", "Comunicação", "Outro"
]

// Função para formatar telefone
const formatPhoneNumber = (value: string) => {
  const cleaned = value.replace(/\D/g, "")
  if (cleaned.length <= 10) {
    return cleaned.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3").trim()
  } else {
    return cleaned.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3").trim()
  }
}

export default function ConversaEstrategicaPopup() {
  const { isPopupOpen, closePopup } = usePopup()

  // Estados do formulário
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    empresa: '',
    segmento: ''
  })

  const [formErrors, setFormErrors] = useState<{ email?: string; whatsapp?: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isPopupOpen])

  // Handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === "whatsapp") {
      const formattedValue = formatPhoneNumber(value)
      setFormData(prev => ({ ...prev, [name]: formattedValue }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }

    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const cleanWhatsapp = (formData.whatsapp || "").replace(/\D/g, "")

    // Validações
    const currentErrors: { email?: string; whatsapp?: string } = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email || !emailRegex.test(formData.email)) {
      currentErrors.email = "Por favor, insira um email válido."
    }

    if (!cleanWhatsapp || !(cleanWhatsapp.length === 10 || cleanWhatsapp.length === 11)) {
      currentErrors.whatsapp = "Telefone inválido. Use (XX) XXXXX-XXXX ou (XX) XXXX-XXXX."
    }

    if (!formData.segmento) {
      alert("Por favor, selecione o segmento da empresa.")
      setIsSubmitting(false)
      return
    }

    if (Object.keys(currentErrors).length > 0) {
      setFormErrors(currentErrors)
      alert("Por favor, corrija os erros no formulário.\n" +
            Object.values(currentErrors).filter(Boolean).join("\n"))
      setIsSubmitting(false)
      return
    }
    setFormErrors({})

    try {
      // Construir payload para envio
      const payload = {
        form_id: "conversa_estrategica",
        form_title: "Conversa Estratégica",
        form_data: {
          nome: formData.nome,
          email: formData.email,
          telefone: cleanWhatsapp,
          empresa: formData.empresa,
          Segmento: formData.segmento,
        },
        timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
        user_agent: typeof window !== 'undefined' ? navigator.userAgent : '',
        page_url: typeof window !== 'undefined' ? window.location.href : '',
        referer_url: typeof document !== 'undefined' ? document.referrer : '',
      }

      const response = await fetch('https://n8n.opens.com.br/webhook/hubspot-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      if (response.ok) {
        // Disparar evento para GTM/RD Station
        try {
          if (typeof window !== 'undefined' && window.dataLayer) {
            window.dataLayer.push({
              'event': 'form_submission',
              'formName': 'Conversa Estratégica',
              'formId': 'conversa_estrategica',
              'conversionName': 'Lead - Conversa Estratégica',
              'formData': {
                'nome': formData.nome,
                'email': formData.email,
                'telefone': cleanWhatsapp,
                'empresa': formData.empresa,
                'segmento': formData.segmento
              }
            })

            // Evento específico para RD Station
            window.dataLayer.push({
              'event': 'rdstation_conversion',
              'conversion_identifier': 'conversa-estrategica',
              'email': formData.email,
              'name': formData.nome,
              'mobile_phone': cleanWhatsapp,
              'company': formData.empresa,
              'cf_segmento': formData.segmento
            })
          }
        } catch (e) {
          console.error('Erro ao enviar para GTM:', e)
        }

        // Salvar nome no localStorage
        try {
          localStorage.setItem('nomeCliente', formData.nome)
        } catch (e) {
          // Silently fail if localStorage is not available
        }

        // Resetar o formulário
        setFormData({
          nome: '',
          email: '',
          whatsapp: '',
          empresa: '',
          segmento: ''
        })

        // Fechar popup
        closePopup()

        // Mensagem de sucesso
        alert("✅ Obrigado! Nossa equipe entrará em contato em breve para agendar sua conversa estratégica!")

      } else {
        throw new Error(`Erro HTTP: ${response.status}`)
      }

    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
      alert("⚠️ Houve um problema técnico, mas seus dados foram registrados. Nossa equipe entrará em contato em breve!")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closePopup()
    }
  }

  return (
    <AnimatePresence>
      {isPopupOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-2xl max-h-[95vh] overflow-y-auto bg-white rounded-xl sm:rounded-2xl shadow-2xl border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button - Mobile optimized */}
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2.5 sm:p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Fechar"
            >
              <X className="h-6 w-6 sm:h-5 sm:w-5" />
            </button>

            <div className="p-5 sm:p-8">
              {/* Header */}
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-block rounded-full bg-orange-100 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-orange-600 mb-3 sm:mb-4">
                  🎯 Conversa Estratégica
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 px-2">
                  Agende sua Conversa Estratégica
                </h2>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg px-2">
                  30 minutos para descobrir como transformar seu atendimento em crescimento
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="nome" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      id="nome"
                      name="nome"
                      placeholder="Seu nome completo"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      className="h-11 sm:h-12 text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="h-11 sm:h-12 text-base"
                    />
                    {formErrors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{formErrors.email}</p>}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="whatsapp" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                      WhatsApp *
                    </label>
                    <div className="flex items-center border border-input rounded-md focus-within:ring-1 focus-within:ring-ring h-11 sm:h-12">
                      <span className="pl-3 pr-2 text-gray-500 text-xs sm:text-sm">🇧🇷 +55</span>
                      <Input
                        id="whatsapp"
                        name="whatsapp"
                        placeholder="(XX) XXXXX-XXXX"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        required
                        className="border-0 focus-visible:ring-0 h-full flex-1 text-base"
                        maxLength={15}
                      />
                    </div>
                    {formErrors.whatsapp && <p className="text-red-500 text-xs sm:text-sm mt-1">{formErrors.whatsapp}</p>}
                  </div>
                  <div>
                    <label htmlFor="empresa" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                      Nome da Empresa *
                    </label>
                    <Input
                      id="empresa"
                      name="empresa"
                      placeholder="Nome da sua empresa"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      required
                      className="h-11 sm:h-12 text-base"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="segmento" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Segmento da Empresa *
                  </label>
                  <Select name="segmento" onValueChange={(value) => handleSelectChange("segmento", value)} value={formData.segmento} required>
                    <SelectTrigger className="h-11 sm:h-12">
                      <SelectValue placeholder="Selecione o segmento..." />
                    </SelectTrigger>
                    <SelectContent>
                      {segmentoOptions.map(option => (
                        <SelectItem key={option} value={option}>{option}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="pt-4 sm:pt-6">
                  {/* Desktop button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="hidden sm:flex w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base h-12 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>⏳ Enviando...</>
                    ) : (
                      <>🎯 Agendar Minha Conversa Estratégica <ArrowRight className="ml-2 h-5 w-5" /></>
                    )}
                  </Button>

                  {/* Mobile button - Shorter text */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="sm:hidden w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base h-12 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>⏳ Enviando...</>
                    ) : (
                      <>🎯 Agendar Conversa <ArrowRight className="ml-2 h-5 w-5" /></>
                    )}
                  </Button>

                  <p className="text-center text-gray-500 text-xs sm:text-sm mt-2 sm:mt-3">
                    ✅ Reunião online gratuita • Sem compromisso
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}