# LOCK IN - Design Guidelines

## Design Philosophy
Sharp, modern, high-performance aesthetic for intense workers building the future. Mission-control meets performance dashboard. Every pixel reinforces grit, urgency, and forward momentum.

## Brand Voice
Ruthless. Focused. Relentless. No fluff, no distractions. Lock in and ship.

## Color Palette

### Core Colors
- **Background (Dark)**: Deep charcoal `#0A0A0F` - Primary background
- **Background (Light)**: Dark slate `#16161D` - Elevated surfaces
- **Foreground**: Crisp white `#FAFAFA` - Primary text

### Accent Colors (Electric, Saturated)
- **Primary (Cyan)**: `#00D9FF` - Lock In actions, timers, focus states
- **Secondary (Magenta)**: `#FF00D9` - Creative mode, achievements
- **Warning (Amber)**: `#FFB800` - Alerts, deadlines, intensity indicators
- **Success (Green)**: `#00FF88` - Completion, streaks

### Semantic Colors
- **Deep Work**: Electric cyan `#00D9FF`
- **Creative**: Neon magenta `#FF00D9`
- **Social**: Warm amber `#FFB800`
- **Rest**: Cool purple `#8B5CF6`

### UI States
- **Muted/Secondary Text**: `#94A3B8`
- **Border**: `#1E293B`
- **Border Hover**: `#334155`
- **Card Background**: `#16161D`

## Typography

### Display (Headlines)
- **Font**: System condensed sans-serif stack
- **Weight**: Bold (700) or ExtraBold (800)
- **Style**: Uppercase for major headings
- **Letter Spacing**: Tight (-0.02em)

### Data/Metrics
- **Font**: Monospace (JetBrains Mono, SF Mono, Consolas)
- **Weight**: Medium (500) or SemiBold (600)
- **Use for**: Timers, stats, Lock In Time

### Body
- **Font**: System grotesk/sans-serif (Inter, SF Pro, system-ui)
- **Weight**: Regular (400) for body, Medium (500) for emphasis
- **Line height**: 1.5 for readability

## Logo Design

### Primary Wordmark
```
LOCK
──/──
 IN
```
- Stacked LOCK above IN
- Forward-leaning diagonal slash through the O (/)
- Bold, condensed sans-serif
- Electric cyan for slash accent

### Badge Variant (Compact)
```
∥L // IN
```
- Use in navbar, favicon, small spaces
- Parallel bars (∥) + forward slashes (//)
- Monochrome or with cyan accent

## UI Patterns

### Mission Control Dashboard
- Quadrant layout (Intention, Timer, Output, Debrief)
- High contrast cards with subtle borders
- Data-dense, information-rich
- Real-time indicators and status chips

### Full-Bleed Timer Wall
- Timer fills viewport (180px+ font size)
- Animated progress beams framing edges
- Keyboard-accessible controls
- Mode indicators in corners

### Motivation Elements
- **Hero Typography**: Large, bold proclamations ("Lock In. Ship Relentlessly.")
- **Contextual Mantras**: Dynamic motivational text based on session state
- **Intensity Meter**: Visual indicator of focus depth
- **Streak Heatmap**: Calendar-style achievement tracking
- **Achievement Chips**: Small badges for milestones

### Interaction States
- **Hover**: Subtle glow effect (box-shadow with accent color)
- **Active**: Slight scale down (0.98) + stronger glow
- **Focus**: 2px solid accent border
- **Disabled**: 40% opacity, no interaction

## Animation Principles
- **Speed**: Fast (150-250ms) for micro-interactions
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1) for smooth, professional feel
- **Purpose**: Every animation reinforces action or feedback
- **Kinetic Gradients**: Subtle animated gradients on hero sections

## Component Specifications

### Cards
- Background: `#16161D`
- Border: 1px solid `#1E293B`
- Border radius: 8px (sharp, not too rounded)
- Padding: 24px
- Hover: Border `#334155`, subtle box-shadow with accent glow

### Buttons
- **Primary**: Electric cyan background, white text, bold
- **Secondary**: Transparent with cyan border, cyan text
- **Danger**: Amber background for destructive actions
- **Ghost**: No background, hover shows subtle background

### Progress Bars
- Height: 4px minimum
- Background: `#1E293B`
- Fill: Gradient from cyan to magenta
- Animated striped pattern for active states

### Badges/Chips
- Small (20-24px height)
- Rounded-full or rounded-md
- Colored backgrounds (20% opacity) with matching text
- Bold, uppercase, tight letter-spacing

## Design Principles

### DO
✓ Use high contrast
✓ Keep interactions tight and responsive
✓ Show real-time data prominently
✓ Create visual hierarchy through size and color
✓ Use monospace for all numbers/metrics
✓ Maintain sharp, angular aesthetic
✓ Reinforce urgency and momentum

### DON'T
✗ Use soft pastel colors
✗ Overuse rounded corners (rounded-pill everywhere)
✗ Add playful illustrations or cartoons
✗ Include gamified gimmicks
✗ Create cluttered layouts
✗ Use gentle, friendly copy
✗ Dilute the high-performance tone

## Accessibility
- Maintain WCAG AA contrast ratios (4.5:1 minimum for text)
- Provide clear focus indicators
- Support keyboard navigation
- Use semantic HTML
- Provide alternative text for graphics

## Responsive Design
- Mobile-first approach
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Stack cards vertically on mobile
- Maintain readability at all sizes
- Timer remains prominent on all devices
