# Digital Wellness Dashboard - Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing inspiration from Calm, Headspace (wellness aesthetics), Notion (flexible dashboards), and Linear (clean data presentation). Focus on creating a tranquil, focused experience that reduces cognitive load while remaining feature-rich and engaging.

**Core Principle**: Design should embody the app's purpose - every interaction should feel intentional, calm, and supportive of mindful technology use.

---

## Typography System

**Font Families**:
- Primary: Inter (UI elements, body text, data labels)
- Accent: Fraunces or Crimson Pro (section headers, daily intentions, journal entries)

**Hierarchy**:
- Hero/Main Headlines: text-4xl to text-6xl, font-medium
- Section Headers: text-2xl to text-3xl, font-medium  
- Card Titles: text-lg, font-semibold
- Body Text: text-base, font-normal, leading-relaxed
- Data Labels/Metrics: text-sm, font-medium, tracking-wide uppercase
- Micro-copy: text-xs, font-normal

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 3, 4, 6, 8, 12, 16, 20 for consistent rhythm (p-4, m-6, gap-8, etc.)

**Dashboard Structure**:
- Sidebar navigation (fixed, w-64)
- Main content area (max-w-7xl, px-8, py-12)
- Two-column layout for dashboard view (2/3 main content, 1/3 sidebar widgets)
- Single column for journal and intention setting (max-w-3xl centered)

**Card System**:
- Rounded corners: rounded-xl to rounded-2xl
- Padding: p-6 to p-8
- Spacing between cards: gap-6
- Elevated cards for interactive elements, flat for informational

---

## Component Library

### Navigation
- Fixed sidebar with app logo, main sections (Dashboard, Intention, Activity Log, Journal, Settings)
- Icon + label format for clarity
- Active state indicator (border accent or background treatment)
- Avatar/user section at bottom with wellness streak counter

### Dashboard Widgets

**Daily Intention Card** (prominent placement):
- Large, centered card with generous padding (p-10)
- Four intention options as pill buttons or rounded rectangles
- Selected state clearly differentiated
- Motivational micro-copy below selections

**Activity Timeline**:
- Horizontal timeline visualization showing today's digital sessions
- Time blocks as colored segments (different apps/activities)
- Hover tooltips with details
- Total duration displayed prominently

**Weekly Overview**:
- Bar chart or area chart showing 7-day pattern
- Gentle grid lines, no harsh borders
- Data labels positioned clearly
- Comparison to previous week (small metric)

**Break Reminder Widget**:
- Compact card with next break countdown
- "Start Breathing Exercise" button
- Settings icon for customization

### Activity Logger
- Quick-add form with autocomplete app/activity field
- Duration input (hrs/mins dropdowns or single input)
- Category tags (Work, Social, Entertainment, Learning)
- Recent activities list below for easy re-logging

### Breathing Exercise Modal
- Full-screen overlay with gentle backdrop blur
- Circular breathing animation (expand/contract rhythm)
- Simple instructions: "Breathe in... Hold... Breathe out..."
- Exit option in corner
- Progress indicator (3/5 cycles complete)

### Journal Interface
- Clean writing area (max-w-2xl)
- Date picker for viewing past entries
- Prompt suggestions ("How did technology serve you today?", "What would you change tomorrow?")
- Auto-save indicator
- Entry list sidebar with preview snippets

### Data Visualization
- Circular progress rings for daily goals
- Trend lines with smooth curves, no sharp angles
- Minimal gridlines and axes
- Focus on data, reduce chart junk
- Tooltips on hover for detailed information

---

## Images

**Hero Section (Dashboard Landing)**:
- Soft, abstract illustration of person in peaceful digital space (meditation pose with floating device icons, watercolor style)
- Position: Full-width background with content overlay
- Treatment: Subtle opacity or gradient overlay for text readability

**Empty States**:
- Gentle illustrations for:
  - First-time intention setting (sun rising, new day beginning)
  - No activities logged yet (peaceful scene, invitation to start)
  - Empty journal (open book, pen ready)
- Style: Line art or soft illustrations, not photographic

**Breathing Exercise**:
- Optional ambient nature imagery (sky, water, forest canopy) as subtle background
- Should enhance calm, not distract

---

## Interaction Patterns

**Micro-interactions**:
- Gentle scale on button press (scale-95)
- Smooth transitions for all state changes (transition-all duration-200)
- Progress bars fill with ease-in-out animation
- Cards lift slightly on hover (elevated interactive elements only)

**Breathing Exercise Animation**:
- Smooth circular scale animation (3-4 second inhale, hold, exhale cycle)
- Synchronized text fade transitions
- Gentle completion celebration (subtle success indicator, not jarring)

**Data Updates**:
- Fade-in new entries
- Chart animations on load (stagger effect, animate from zero)
- Counter animations for metrics (count up effect)

---

## Accessibility & Mindful Design

- Generous touch targets (min h-12 for buttons)
- Clear focus indicators for keyboard navigation
- Reduced motion option respected
- High contrast text on all backgrounds
- Breathing exercise includes audio option toggle
- Distraction-free reading mode for journal

---

## Page-Specific Layouts

**Dashboard**: 
- Two-column grid (lg:grid-cols-3)
- Daily Intention spans full width at top
- Activity Timeline and Weekly Overview in main column
- Break Reminder and Quick Stats in sidebar column

**Intention Setting**:
- Single centered card (max-w-2xl)
- Four large selection cards in 2x2 grid
- Confirmation view with selected intention displayed beautifully

**Activity Log**:
- Split view: Input form (1/3) + Timeline list (2/3)
- Chronological entries with edit/delete actions
- Filter by date range and category

**Journal**:
- Minimal interface, max-w-3xl centered
- Entry selector sidebar (collapsible on mobile)
- Large text area with comfortable line height (leading-loose)

---

This design creates a sanctuary for digital wellness - calming yet functional, beautiful yet purposeful. Every element supports the user's journey toward healthier technology habits.