"use client"

import * as React from "react"
import { motion, Transition } from "framer-motion"

import { cn } from "@/lib/utils"

interface FeatureListItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface StrategicDifferentialFeatureProps {
  className?: string;
  mainIcon?: React.ElementType;
  tag: {
    icon: React.ElementType;
    text: string;
  };
  title: string;
  mainDescription: string;
  featureItems: FeatureListItemProps[];
  visualElement: React.ReactNode;
  accentColorName: "orange" | "purple" | "cyan" | "green";
  accentColorHex: string;
  layoutOrder?: "textLeft" | "textRight";
}

const easeOutTransition: Transition = { duration: 0.5, ease: "easeOut" };

const StrategicDifferentialFeature: React.FC<StrategicDifferentialFeatureProps> = ({
  className = "",
  tag,
  title,
  mainDescription,
  featureItems,
  visualElement,
  accentColorName,
  accentColorHex,
  layoutOrder = "textLeft",
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: easeOutTransition,
    },
  };
  
  const textContent = (
    <motion.div className="space-y-8" variants={itemVariants}>
      <div className={`inline-flex items-center gap-2 px-4 py-2 bg-${accentColorName}-500/10 rounded-full text-${accentColorName}-600 text-sm font-medium`}
        style={{ backgroundColor: `${accentColorHex}1A`, color: accentColorHex }}
      >
        <tag.icon className="h-4 w-4" />
        {tag.text}
      </div>

      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
          {title}
        </h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
          {mainDescription}
        </p>
      </div>

      <motion.div className="grid gap-6" variants={itemVariants}>
        {featureItems.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4 group"
          >
            <div className={`h-8 w-8 rounded-full bg-${accentColorName}-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-${accentColorName}-500 transition-colors duration-300`}
              style={{ backgroundColor: `${accentColorHex}1A`}}
            >
              {React.createElement(feature.icon, { className: `h-4 w-4 text-${accentColorName}-500 group-hover:text-white transition-colors duration-300`, style: { color: accentColorHex } })}
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );

  return (
    <motion.div
      className={cn(
        "relative w-full",
        className
      )}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", className)}>
        {layoutOrder === 'textLeft' ? (
          <>
            <div className="lg:order-1">{textContent}</div>
            <div className="lg:order-2">{visualElement}</div>
          </>
        ) : (
          <>
            <div className="lg:order-2">{textContent}</div>
            <div className="lg:order-1">{visualElement}</div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default StrategicDifferentialFeature; 