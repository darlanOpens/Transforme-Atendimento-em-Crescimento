"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { 
  Target,
  LineChart,
  Heart, 
  Check,
  Users
} from "lucide-react";

interface FeatureItem {
  text: string;
}

interface CRFPillarCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: FeatureItem[];
  gradient: string;
  accentColorHex: string;
  className?: string;
}

const CRFPillarCard = ({
  icon,
  title,
  description,
  features,
  gradient, 
  accentColorHex,
  className
}: CRFPillarCardProps) => {
  return (
    <motion.div
      className={cn(
        "group h-full p-8 rounded-2xl overflow-hidden bg-white border shadow-lg hover:shadow-xl transition-all duration-300",
        className
      )}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <div className={cn("h-2 mb-6", gradient)}></div>

      <div className="relative z-10">
        <motion.div
          className={cn(
            "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",
            gradient
          )}
        >
          {icon} 
        </motion.div>

        <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>

        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
            >
              <Check 
                className="w-5 h-5 flex-shrink-0"
                style={{ color: accentColorHex }}
              />
              <span className="text-sm text-muted-foreground">{feature.text}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default function CRFPillarsSection({ className }: { className?: string }) {
  const pillarsData = [
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Conversão",
      description: "Transforme interações em oportunidades de negócio. Otimize a jornada de compra, personalize abordagens e remova atritos no processo de decisão.",
      features: [
        { text: "Qualificação inteligente de leads" },
        { text: "Personalização em escala" },
        { text: "Aceleração do ciclo de vendas" },
      ],
      gradient: "bg-gradient-to-r from-[#FF7A00] to-[#FFA500]",
      accentColorHex: "#FF7A00"
    },
    {
      icon: <LineChart className="w-8 h-8 text-white" />,
      title: "Retenção",
      description: "Mantenha seus clientes engajados e satisfeitos a longo prazo. Reduza o churn com experiências personalizadas e suporte excepcional.",
      features: [
        { text: "Atendimento proativo" },
        { text: "Análise preditiva de churn" },
        { text: "Experiências pós-venda personalizadas" },
      ],
      gradient: "bg-gradient-to-r from-[#B164F7] to-[#8A2BE2]",
      accentColorHex: "#B164F7"
    },
    {
      icon: <Heart className="w-8 h-8 text-white" />,
      title: "Fidelização",
      description: "Transforme clientes satisfeitos em verdadeiros promotores da sua marca. Maximize o valor do ciclo de vida do cliente.",
      features: [
        { text: "Criação de experiências 'wow'" },
        { text: "Programas de fidelidade inteligentes" },
        { text: "Cultivo de comunidades de marca" },
      ],
      gradient: "bg-gradient-to-r from-[#00A0A0] to-[#00C0C0]",
      accentColorHex: "#00A0A0"
    }
  ];

  return (
    <section id="pillars" className={cn("py-24", className)}>
      <div className="container mx-auto w-full max-w-7xl px-4">
        <motion.div 
          className="text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF7A00]/10 rounded-full text-[#FF7A00] text-sm font-medium">
            <Users className="h-4 w-4" />
            Pilares CRF
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Otimize todo o<span className="block text-[#FF7A00]">ciclo de vida do cliente</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground leading-relaxed">
            Nossa solução integrada atua nos três pilares essenciais para o crescimento sustentável do seu negócio.
          </p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            staggerChildren: 0.15,
            delayChildren: 0.2 
          }}
        >
          {pillarsData.map((pillar) => (
            <CRFPillarCard
              key={pillar.title}
              {...pillar}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
} 