"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface PopupContextType {
  isPopupOpen: boolean
  openPopup: () => void
  closePopup: () => void
}

const PopupContext = createContext<PopupContextType | undefined>(undefined)

export function PopupProvider({ children }: { children: ReactNode }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const openPopup = () => setIsPopupOpen(true)
  const closePopup = () => setIsPopupOpen(false)

  return (
    <PopupContext.Provider value={{ isPopupOpen, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  )
}

export function usePopup() {
  const context = useContext(PopupContext)
  if (context === undefined) {
    throw new Error('usePopup must be used within a PopupProvider')
  }
  return context
}