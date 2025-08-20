import React, { useState, useEffect } from 'react';
import { useId } from 'react';
import { Target, BarChart3, Handshake, Shield } from 'lucide-react';

interface FeatureType {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
}

interface FeatureCardProps extends React.ComponentProps<'div'> {
  feature: FeatureType;
}

function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: React.ComponentProps<'svg'> & { 
  width: number; 
  height: number; 
  x: string; 
  y: string; 
  squares?: number[][] 
}) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([xPos, yPos], index) => (
            <rect strokeWidth="0" key={index} width={width + 1} height={height + 1} x={xPos * width} y={yPos * height} />
          ))}
        </svg>
      )}
    </svg>
  );
}

function generateSquares(length: number = 5): number[][] {
  return Array.from({ length }, () => [
    Math.floor(Math.random() * 4) + 7,
    Math.floor(Math.random() * 6) + 1,
  ]);
}

function FeatureCard({ feature, className, ...props }: FeatureCardProps) {
  const [patternSquares, setPatternSquares] = useState<number[][] | undefined>(undefined);

  useEffect(() => {
    setPatternSquares(generateSquares());
  }, []);

  return (
    <div 
      className={`relative overflow-hidden p-8 bg-gradient-to-br from-background to-muted/20 border border-border rounded-xl hover:shadow-lg transition-all duration-300 ${className}`} 
      {...props}
    >
      <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A00]/5 via-purple-500/5 to-cyan-500/5 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
          {patternSquares && (
            <GridPattern
              width={20}
              height={20}
              x="-12"
              y="4"
              squares={patternSquares}
              className="absolute inset-0 h-full w-full mix-blend-overlay fill-[#FF7A00]/10 stroke-[#FF7A00]/20"
            />
          )}
        </div>
      </div>
      
      <div className="relative z-20">
        <div className="mb-6 inline-flex p-3 rounded-lg bg-[#FF7A00]/10 border border-[#FF7A00]/20">
          <feature.icon className="size-6 text-[#FF7A00]" strokeWidth={1.5} aria-hidden />
        </div>
        
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#FF7A00] transition-colors">{feature.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
      </div>
    </div>
  );
}

function SolutionOverview() {
  const features: FeatureType[] = [
    {
      title: 'Experiência Unificada',
      icon: Target,
      description: 'Integre todos os canais de atendimento em uma única solução, eliminando a fragmentação e criando jornadas fluidas.',
    },
    {
      title: 'Resultados Mensuráveis',
      icon: BarChart3,
      description: 'Acompanhe métricas de performance em tempo real e tome decisões baseadas em dados para otimizar resultados.',
    },
    {
      title: 'Parceria Estratégica',
      icon: Handshake,
      description: 'Conte com nossa equipe de especialistas para maximizar o valor da solução e alcançar seus objetivos de negócio.',
    },
  ];

  return (
    <section id="solution" className="py-24 bg-gradient-to-b from-background to-[#FF7A00]/5">
      <div className="container mx-auto w-full max-w-7xl px-4">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF7A00]/10 rounded-full text-[#FF7A00] text-sm font-medium">
            <Shield className="h-4 w-4" />
            Solução Integrada
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Vá além da plataforma.
            <span className="block text-[#FF7A00]">Conquiste resultados reais.</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground leading-relaxed">
            A Opens é uma solução estratégica que transforma seu atendimento em um motor de crescimento, unificando
            canais, dados e insights para criar experiências excepcionais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              feature={feature}
              className="hover:scale-105 transition-transform duration-300 group"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SolutionOverview; 