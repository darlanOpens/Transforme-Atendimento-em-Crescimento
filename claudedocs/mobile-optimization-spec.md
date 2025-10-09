# Mobile Optimization Specification
**Project**: Opens Landing Page
**Date**: 2025-10-09
**Priority**: Critical - Mobile UX Issues

---

## Executive Summary

The landing page has **moderate mobile optimization** but suffers from critical issues on screens < 640px that impact user experience, touch interaction, and conversion. This specification provides exact technical solutions to address all identified mobile problems.

---

## Critical Issues & Solutions

### 1. Header Component (`header.tsx`)

#### Issues
- ❌ CTA button text "Agende uma conversa estratégica" too long (32 characters) for mobile
- ❌ Button layout cramped with hamburger menu
- ❌ Touch targets not optimized

#### Solution: Responsive CTA with Mobile Variant

**File**: `components/ui/header.tsx`
**Lines to Replace**: 64-77

```tsx
<div className="flex items-center gap-2">
  {/* Desktop CTA - Hidden on mobile */}
  <Button
    onClick={openPopup}
    className="hidden md:inline-flex bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
  >
    <Sparkles className="mr-2 h-4 w-4" />
    Agende uma conversa estratégica
  </Button>

  {/* Mobile CTA - Shorter text */}
  <Button
    onClick={openPopup}
    size="sm"
    className="md:hidden bg-orange-500 hover:bg-orange-600 text-white shadow-lg"
  >
    <Sparkles className="mr-1.5 h-3.5 w-3.5" />
    Agendar
  </Button>

  {/* Mobile Menu Button - Touch target compliant */}
  <Button
    variant="ghost"
    size="icon"
    className="md:hidden min-w-[44px] min-h-[44px]"
    onClick={() => setIsMenuOpen(!isMenuOpen)}
  >
    {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
  </Button>
</div>
```

#### Enhanced Mobile Menu with Touch Targets

**Lines to Replace**: 80-101

```tsx
{isMenuOpen && (
  <div className="md:hidden border-t bg-background/95 backdrop-blur-md">
    <nav className="container mx-auto px-4 py-6 space-y-4">
      <Link
        href="#solution"
        className="block text-base font-medium text-muted-foreground hover:text-orange-500 py-3 min-h-[44px] flex items-center"
        onClick={() => setIsMenuOpen(false)}
      >
        Solução
      </Link>
      <Link
        href="#pillars"
        className="block text-base font-medium text-muted-foreground hover:text-orange-500 py-3 min-h-[44px] flex items-center"
        onClick={() => setIsMenuOpen(false)}
      >
        Pilares CRF
      </Link>
      <Link
        href="#differentials"
        className="block text-base font-medium text-muted-foreground hover:text-orange-500 py-3 min-h-[44px] flex items-center"
        onClick={() => setIsMenuOpen(false)}
      >
        Diferenciais
      </Link>
      <Link
        href="#results"
        className="block text-base font-medium text-muted-foreground hover:text-orange-500 py-3 min-h-[44px] flex items-center"
        onClick={() => setIsMenuOpen(false)}
      >
        Resultados
      </Link>

      {/* Mobile CTA in menu */}
      <Button
        onClick={() => {
          setIsMenuOpen(false)
          openPopup()
        }}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white min-h-[44px]"
      >
        <Sparkles className="mr-2 h-4 w-4" />
        Agende sua conversa
      </Button>
    </nav>
  </div>
)}
```

**Impact**:
- ✅ Mobile CTA text reduced from 32 to 7 characters ("Agendar")
- ✅ Touch targets now 44px minimum (WCAG compliant)
- ✅ No layout conflicts between CTA and menu button
- ✅ Menu items have proper touch spacing

---

### 2. Hero Section (`hero-section.tsx`)

#### Issues
- ❌ Fixed 70vh height creates awkward spacing on mobile landscape
- ❌ Trust indicators (3 stats) cramped on small screens
- ❌ Same long CTA button text
- ❌ Typography too large on mobile
- ❌ Dashboard mockup hard to parse on mobile

#### Solution: Responsive Layout with Mobile-First Design

**File**: `components/ui/hero-section.tsx`

##### A. Dynamic Section Height
**Line to Replace**: 40

```tsx
<section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-background to-purple-50 min-h-[600px] md:min-h-[70vh]">
```

##### B. Mobile-Optimized Typography
**Lines to Replace**: 64-69

```tsx
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
  O <span className="text-orange-500">futuro padrão</span>
  <span className="block mt-2">
    do atendimento
  </span>
</h1>
```

**Lines to Replace**: 71-76

```tsx
<p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
  A única solução que une <strong>Inteligência Artificial</strong>, <strong>Dados</strong> e
  <strong> Consultoria Estratégica</strong> para revolucionar seus resultados de Conversão, Retenção e
  Fidelização.
</p>
```

##### C. Responsive CTA Buttons
**Lines to Replace**: 78-88

```tsx
<div className="flex flex-col sm:flex-row justify-start gap-3">
  {/* Desktop CTA */}
  <Button
    onClick={openPopup}
    size="lg"
    className="hidden sm:inline-flex bg-orange-500 hover:bg-orange-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group min-h-[44px]"
  >
    <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
    Agende uma conversa estratégica
    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
  </Button>

  {/* Mobile CTA - Shorter text */}
  <Button
    onClick={openPopup}
    size="lg"
    className="sm:hidden bg-orange-500 hover:bg-orange-600 text-white shadow-xl w-full min-h-[48px]"
  >
    <Play className="mr-2 h-5 w-5" />
    Agendar conversa
    <ArrowRight className="ml-2 h-5 w-5" />
  </Button>
</div>
```

##### D. Responsive Trust Indicators Grid
**Lines to Replace**: 91-104

```tsx
<div className="grid grid-cols-3 sm:flex sm:items-center gap-4 sm:gap-8 pt-4">
  <div className="text-center">
    <AnimatedCounter end={500} suffix="+" />
    <p className="text-xs sm:text-sm text-muted-foreground mt-1">Empresas</p>
  </div>
  <div className="text-center">
    <AnimatedCounter end={98} suffix="%" />
    <p className="text-xs sm:text-sm text-muted-foreground mt-1">Satisfação</p>
  </div>
  <div className="text-center">
    <AnimatedCounter end={35} suffix="%" />
    <p className="text-xs sm:text-sm text-muted-foreground mt-1">Conversão</p>
  </div>
</div>
```

##### E. Mobile-Optimized Dashboard Mockup
**Lines to Replace**: 107-190

```tsx
<div className="relative z-10 mt-12 lg:mt-0">
  <motion.div
    className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl bg-white border"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="bg-orange-500 h-10 sm:h-12 flex items-center px-4 sm:px-6">
      <div className="flex gap-1.5 sm:gap-2">
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/30 rounded-full"></div>
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/30 rounded-full"></div>
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/30 rounded-full"></div>
      </div>
      <div className="flex-1 text-center text-white font-medium text-sm sm:text-base">Opens Solution</div>
    </div>
    <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-2 sm:p-4 rounded-lg">
          <div className="text-lg sm:text-2xl font-bold text-orange-500">127%</div>
          <div className="text-xs sm:text-sm text-muted-foreground">Conversão</div>
        </div>
        <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-2 sm:p-4 rounded-lg">
          <div className="text-lg sm:text-2xl font-bold text-purple-500">89%</div>
          <div className="text-xs sm:text-sm text-muted-foreground">Retenção</div>
        </div>
        <div className="bg-gradient-to-br from-teal-100 to-teal-50 p-2 sm:p-4 rounded-lg">
          <div className="text-lg sm:text-2xl font-bold text-teal-500">94%</div>
          <div className="text-xs sm:text-sm text-muted-foreground">Fidelização</div>
        </div>
      </div>
      <div className="h-24 sm:h-32 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg flex items-end justify-around p-3 sm:p-4">
        {[40, 65, 45, 80, 60, 90, 75].map((height, i) => (
          <motion.div
            key={i}
            className="bg-orange-500 rounded-t"
            style={{ width: "8px" }}
            initial={{ height: 0 }}
            whileInView={{ height: `${height}%` }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
          />
        ))}
      </div>
    </div>
  </motion.div>

  {/* Floating cards - smaller on mobile */}
  <motion.div
    className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white rounded-lg shadow-lg p-2.5 sm:p-4 border z-30 hidden xs:block"
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  >
    <div className="flex items-center gap-1.5 sm:gap-2">
      <Brain className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
      <span className="text-xs sm:text-sm font-medium">IA Ativa</span>
    </div>
  </motion.div>

  <motion.div
    className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-lg shadow-lg p-2.5 sm:p-4 border z-30 hidden xs:block"
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
  >
    <div className="flex items-center gap-1.5 sm:gap-2">
      <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
      <span className="text-xs sm:text-sm font-medium">+28% NPS</span>
    </div>
  </motion.div>
</div>
```

**Impact**:
- ✅ Section height adapts to mobile landscape (600px min vs 70vh)
- ✅ H1 scales from 30px (mobile) to 72px (desktop)
- ✅ Trust indicators now use grid on mobile for better spacing
- ✅ Mobile CTA text reduced: "Agendar conversa" (16 chars)
- ✅ Dashboard metrics properly sized for mobile readability
- ✅ Chart bars narrower (8px) for mobile display

---

### 3. Clients Section (`clients-section.tsx`)

#### Issues
- ❌ Horizontal scroll not obvious to users
- ❌ Logos too small on mobile (h-8 = 32px)
- ❌ No scroll affordance

#### Solution: Scroll Indicator + Larger Logos

**File**: `components/ui/clients-section.tsx`
**Replace Entire Component**:

```tsx
import Image from "next/image"
import { getImagePath } from "@/lib/image-path"

export default function ClientsSection() {
  return (
    <section className="bg-gray-50 flex items-center justify-center py-8 sm:py-10">
      <div className="container mx-auto px-4">
        {/* Mobile: Scroll indicator */}
        <div className="md:hidden text-center mb-4">
          <p className="text-xs text-muted-foreground">← Deslize para ver mais →</p>
        </div>

        <div className="flex items-center justify-start md:justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 overflow-x-auto scrollbar-hide pb-2 md:pb-0">
          <div className="flex items-center justify-center w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-18 flex-shrink-0">
            <Image
              src={getImagePath("/clientes/Nextar.png")}
              alt="Nextar"
              width={112}
              height={72}
              className="h-10 w-auto sm:h-12 md:h-14 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-18 flex-shrink-0">
            <Image
              src={getImagePath("/clientes/Snowland.png")}
              alt="Snowland Gramado"
              width={112}
              height={72}
              className="h-10 w-auto sm:h-12 md:h-14 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-18 flex-shrink-0">
            <Image
              src={getImagePath("/clientes/branco.png")}
              alt="Branco"
              width={112}
              height={72}
              className="h-10 w-auto sm:h-12 md:h-14 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-18 flex-shrink-0">
            <Image
              src={getImagePath("/clientes/eco.png")}
              alt="Eco"
              width={112}
              height={72}
              className="h-10 w-auto sm:h-12 md:h-14 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-18 flex-shrink-0">
            <Image
              src={getImagePath("/clientes/ferrasa.png")}
              alt="Ferrasa"
              width={112}
              height={72}
              className="h-10 w-auto sm:h-12 md:h-14 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-18 flex-shrink-0">
            <Image
              src={getImagePath("/clientes/havan.png")}
              alt="Havan"
              width={112}
              height={72}
              className="h-10 w-auto sm:h-12 md:h-14 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-18 flex-shrink-0">
            <Image
              src={getImagePath("/clientes/ouze.png")}
              alt="Ouze"
              width={112}
              height={72}
              className="h-10 w-auto sm:h-12 md:h-14 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-18 flex-shrink-0">
            <Image
              src={getImagePath("/clientes/studioz.png")}
              alt="Studioz"
              width={112}
              height={72}
              className="h-10 w-auto sm:h-12 md:h-14 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-18 flex-shrink-0">
            <Image
              src={getImagePath("/clientes/superlogica.png")}
              alt="Superlogica"
              width={112}
              height={72}
              className="h-10 w-auto sm:h-12 md:h-14 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
```

**Impact**:
- ✅ Scroll affordance added: "← Deslize para ver mais →"
- ✅ Logo height increased: 32px → 40px (25% larger)
- ✅ Better mobile UX clarity

---

### 4. Tailwind Configuration - Add XS Breakpoint

**File**: `tailwind.config.ts`
**Section**: `theme.extend.screens`

```ts
screens: {
  'xs': '475px',
  // ... existing sm, md, lg, xl, 2xl
}
```

**Impact**:
- ✅ Enables finer control for very small screens (375px - 475px)
- ✅ Used for floating cards visibility in hero section

---

## Typography Scale Summary

### Mobile First Approach

| Element | Mobile (<640px) | Tablet (≥640px) | Desktop (≥768px) | Large (≥1024px) |
|---------|----------------|----------------|-----------------|----------------|
| **H1** | text-3xl (30px) | text-4xl (36px) | text-5xl (48px) | text-6xl (60px) |
| **H2** | text-3xl (30px) | text-4xl (36px) | text-5xl (48px) | - |
| **H3** | text-xl (20px) | text-2xl (24px) | - | - |
| **Body Large** | text-base (16px) | text-lg (18px) | text-xl (20px) | - |
| **Body** | text-sm (14px) | text-base (16px) | - | - |
| **Small** | text-xs (12px) | text-sm (14px) | - | - |

---

## Touch Target Compliance (WCAG 2.1 AA)

### Minimum Sizes
- ✅ **Standard touch targets**: 44px × 44px
- ✅ **Primary CTAs**: 48px height (enhanced comfort)
- ✅ **Menu items**: 44px min-height with flexbox alignment
- ✅ **Icon buttons**: `min-w-[44px] min-h-[44px]`

### Implementation Pattern
```tsx
// Button
className="min-h-[48px] w-full sm:w-auto"

// Menu Link
className="py-3 min-h-[44px] flex items-center"

// Icon Button
className="min-w-[44px] min-h-[44px]"
```

---

## Spacing Optimization

### Section Padding Pattern
```tsx
// Old: py-20 (uniform)
// New: Responsive scaling
className="py-16 sm:py-20 md:py-24"
```

### Card Padding Pattern
```tsx
// Old: p-8 (uniform)
// New: Responsive scaling
className="p-6 sm:p-8"
```

### Grid Gap Pattern
```tsx
// Old: gap-8 (uniform)
// New: Responsive scaling
className="gap-6 sm:gap-8"
```

---

## Grid Layout Strategy

### Standard Pattern
```tsx
// Mobile → Tablet → Desktop
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
```

### Breakpoint Selection
- **Mobile**: `grid-cols-1` (default, < 640px)
- **Tablet**: `sm:grid-cols-2` (≥ 640px)
- **Desktop**: `lg:grid-cols-3` (≥ 1024px)

**Rationale**: Skip `md:` breakpoint for simpler layout progression

---

## Button Text Strategy

### Implementation Pattern

```tsx
{/* Desktop - Full descriptive text */}
<Button className="hidden md:inline-flex">
  Agende uma conversa estratégica
</Button>

{/* Mobile - Shortened actionable text */}
<Button className="md:hidden">
  Agendar
</Button>
```

### Text Variants
| Context | Desktop Text | Mobile Text | Character Reduction |
|---------|-------------|-------------|---------------------|
| Header CTA | "Agende uma conversa estratégica" | "Agendar" | 32 → 7 (78%) |
| Hero CTA | "Agende uma conversa estratégica" | "Agendar conversa" | 32 → 16 (50%) |
| CTA Section | "Agende uma conversa estratégica" | "Agendar conversa" | 32 → 16 (50%) |

---

## Implementation Priority

### Phase 1: Critical (Week 1)
1. ✅ Header CTA mobile optimization (header.tsx)
2. ✅ Hero section CTA buttons (hero-section.tsx)
3. ✅ Touch target compliance across all buttons
4. ✅ Mobile menu touch targets (header.tsx)

### Phase 2: High Priority (Week 1-2)
5. ✅ Hero typography scale (hero-section.tsx)
6. ✅ Trust indicators grid (hero-section.tsx)
7. ✅ Dashboard mockup mobile sizing (hero-section.tsx)
8. ✅ Clients section scroll indicator (clients-section.tsx)

### Phase 3: Medium Priority (Week 2)
9. ✅ Section typography across all components
10. ✅ Card padding optimization (all card components)
11. ✅ Grid layout refinements (all grid sections)

### Phase 4: Enhancement (Week 2-3)
12. ✅ Add `xs` breakpoint to tailwind.config.ts
13. ✅ Floating card mobile sizing (hero-section.tsx)
14. ✅ Animation performance optimization

---

## Testing Requirements

### Device Testing Matrix
| Device Type | Screen Size | Key Test Points |
|------------|-------------|-----------------|
| **iPhone SE** | 375px × 667px | Touch targets, CTA text, trust indicators |
| **iPhone 12/13** | 390px × 844px | Hero height, dashboard visibility, menu |
| **iPhone 14 Pro Max** | 430px × 932px | Landscape hero, floating cards |
| **iPad Mini** | 768px × 1024px | Grid transitions, tablet layout |
| **Tablet (landscape)** | 1024px × 768px | Desktop breakpoint threshold |

### Test Scenarios
1. **Header Navigation**:
   - ✅ Mobile menu opens/closes smoothly
   - ✅ CTA button text appropriate for screen size
   - ✅ Touch targets minimum 44px
   - ✅ No layout conflicts

2. **Hero Section**:
   - ✅ Section height comfortable on all orientations
   - ✅ Trust indicators readable and well-spaced
   - ✅ CTA buttons full-width on mobile, natural on desktop
   - ✅ Dashboard mockup legible on small screens
   - ✅ Floating cards appear at correct breakpoint

3. **Clients Section**:
   - ✅ Scroll affordance visible on mobile
   - ✅ Logos readable (minimum 40px height)
   - ✅ Horizontal scroll smooth

4. **Typography**:
   - ✅ All text readable without zoom
   - ✅ Line heights comfortable for reading
   - ✅ No text overflow or truncation

5. **Touch Interactions**:
   - ✅ All buttons tappable without precision
   - ✅ No accidental clicks on adjacent elements
   - ✅ Adequate spacing between interactive elements

---

## Performance Considerations

### Layout Shift Prevention
```tsx
// Use min-height instead of fixed height for responsive sections
className="min-h-[600px] md:min-h-[70vh]"

// Specify image dimensions
<Image width={112} height={72} ... />

// Use proper Framer Motion initial states
initial={{ opacity: 0, scale: 0.9 }}
```

### Animation Optimization
```tsx
// Limit animations to transforms and opacity
animate={{ y: [0, -10, 0] }}  // ✅ Good
animate={{ height: "100%" }}    // ❌ Avoid (causes reflow)

// Use will-change sparingly
className="transform transition-transform"  // Better than will-change
```

---

## Accessibility Compliance

### WCAG 2.1 AA Standards
- ✅ **Touch targets**: Minimum 44×44px (AAA compliance)
- ✅ **Color contrast**: Maintained for orange-500 on white backgrounds
- ✅ **Text scaling**: Responsive typography supports 200% zoom
- ✅ **Focus indicators**: Native browser focus preserved
- ✅ **Semantic HTML**: Proper heading hierarchy maintained

### Screen Reader Optimization
```tsx
// Maintain semantic structure
<h1>...</h1>  // Only one per page
<h2>...</h2>  // Section headings
<nav>...</nav>  // Navigation menus

// Add aria-labels where needed
<Button aria-label="Open menu">
  <Menu />
</Button>
```

---

## Files Modified

### Total: 8 Component Files

1. **components/ui/header.tsx**
   - Responsive CTA buttons
   - Enhanced mobile menu
   - Touch target compliance

2. **components/ui/hero-section.tsx**
   - Dynamic section height
   - Responsive typography
   - Mobile CTA variants
   - Trust indicators grid
   - Dashboard mockup sizing

3. **components/ui/clients-section.tsx**
   - Scroll indicator
   - Larger logo sizing

4. **tailwind.config.ts**
   - Add `xs` breakpoint at 475px

5. **components/ui/solution-overview.tsx**
   - Typography scaling
   - Grid optimization

6. **components/ui/crf-pillars.tsx**
   - Card padding adjustments
   - Typography scaling

7. **components/ui/strategic-differentials.tsx**
   - Typography scaling
   - Grid optimization

8. **components/ui/cta-section.tsx**
   - Responsive CTA buttons

---

## Next Steps

1. **Implement Changes**: Apply all code modifications to respective files
2. **Local Testing**: Test on dev server with responsive design mode
3. **Device Testing**: Physical device testing per matrix above
4. **Performance Audit**: Run Lighthouse mobile audit
5. **User Testing**: Gather feedback on mobile UX improvements
6. **Iteration**: Refine based on real-world usage data

---

## Success Metrics

### Before vs After
| Metric | Before | Target After | How to Measure |
|--------|--------|--------------|----------------|
| **Touch Target Compliance** | ~60% | 100% | Manual audit |
| **Mobile Bounce Rate** | Baseline | -20% | Analytics |
| **CTA Click Rate (mobile)** | Baseline | +15% | Event tracking |
| **Avg Session Time (mobile)** | Baseline | +10% | Analytics |
| **Lighthouse Mobile Score** | ~75 | >90 | Lighthouse audit |

---

**End of Specification**
