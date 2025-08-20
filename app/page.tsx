"use client"

import React from "react"
import Header from "@/components/ui/header"
import HeroSection from "@/components/ui/hero-section"
import ClientsSection from "@/components/ui/clients-section"
import SolutionOverview from "@/components/ui/solution-overview"
import CRFPillarsSection from "@/components/ui/crf-pillars"
import StrategicDifferentials from "@/components/ui/strategic-differentials"
import ResultsSection from "@/components/ui/results-section"
import CTASection from "@/components/ui/cta-section"
import Footer from "@/components/ui/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <ClientsSection />
        
        {/* Solution Overview Section */}
        <section id="solution" className="py-20 bg-background">
          <SolutionOverview />
        </section>

        {/* CRF Pillars Section */}
        <section id="pillars" className="py-20 bg-gray-50">
          <CRFPillarsSection />
        </section>

        <StrategicDifferentials />
        <ResultsSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}
