# LOCK IN - Productivity Timer Application

## Overview
LOCK IN is a sharp, modern productivity app built for high-intensity workers. The app features a mission-control aesthetic designed to motivate users to lock in and stay focused with millisecond-precision tracking across four work modes.

## Purpose & Goals
- Track work sessions with millisecond precision
- Distinguish "Lock In Time" (Deep Work + Creative) from other activities
- Provide clear visual feedback on focus intensity and work patterns
- Support Replit authentication and Stripe subscriptions ($5/month with 7-day trial)
- Embody "locked in culture" through sharp, high-intensity UI design

## Recent Changes (November 21, 2025)
### UI/UX Improvements
- Made sidebar slimmer (reduced from 16rem to 13rem width)
- Reordered navigation: Activity Log now positioned below Journal
- Created PageHeader component for consistent headers across all pages
- Fixed LockInPage timer layout - removed overlapping footer, proper centering
- Standardized header heights and styling across all pages
- Added tech grid pattern overlay to headers for mission-control aesthetic

### Component Updates
- **PageHeader**: New reusable component with icon support and tech grid background
- **SessionTimer**: Maintains massive timer display with milliseconds
- **LockInPage**: Improved layout with centered timer, compact stats footer
- **IntentionPage**: Updated to use PageHeader component
- **JournalPage**: Updated to use PageHeader component
- **ActivitiesPage**: Updated to use PageHeader component
- **SettingsPage**: Updated to use PageHeader component

### Navigation Structure
1. Dashboard
2. Lock In (Active)
3. Intention
4. Journal
5. Activity Log
6. Settings

## Project Architecture

### Frontend Stack
- React + TypeScript
- Vite for build tooling
- Wouter for routing
- TanStack Query for data fetching
- Shadcn UI components with Tailwind CSS
- Framer Motion for animations

### Backend Stack
- Express.js server
- PostgreSQL database (Neon-backed)
- Drizzle ORM
- Replit Authentication (OIDC)
- Stripe integration for subscriptions

### Design System
**Mission-Control Aesthetic:**
- Deep charcoal backgrounds (#0A0B0D)
- Electric cyan primary (#00D9FF)
- Hot magenta secondary (#FF006E)
- Amber accent (#FFB800)
- Condensed sans-serif headlines, mono fonts for metrics
- Tech grid patterns and subtle animations
- Sharp, high-contrast UI elements

### Key Features
1. **Session Timer**: Massive display with milliseconds, tracks four modes
   - Deep Work (counts toward Lock In Time)
   - Creative (counts toward Lock In Time)
   - Social (does not count)
   - Rest (does not count)

2. **Lock In Time**: Calculated as Deep Work + Creative only

3. **Mode Switching**: Real-time mode changes during active sessions

4. **Activity Tracking**: Log and visualize work patterns

5. **Intention Setting**: Define goals before starting sessions

6. **Journal/Reflection**: Debrief after sessions

7. **Stripe Subscriptions**: $5/month with 7-day trial (keys currently placeholder)

## Environment Variables
### Production
- `DATABASE_URL`: PostgreSQL connection string (secret)
- `SESSION_SECRET`: Session encryption key (secret)
- `STRIPE_SECRET_KEY`: Currently placeholder - needs real key for production
- `VITE_STRIPE_PUBLIC_KEY`: Currently placeholder - needs real key for production
- `STRIPE_PRICE_ID`: Currently placeholder - needs real price ID for production

## User Preferences
- User prefers sharp, modern UI that embodies "locked in culture"
- High-intensity work aesthetic for builders
- Mission-control design language
- Slimmer sidebar for more screen space
- Consistent page headers across all views

## Deployment Status
- App is ready for deployment as free version for personal testing
- Stripe integration will require real keys before enabling subscriptions
- All core features (timer, modes, tracking) work without Stripe
- Authentication via Replit Auth is functional
- Database schema is ready

## Known Issues & TODO
- Stripe keys are placeholders - update before enabling subscriptions
- Accessibility: Need WCAG AA validation for color contrast ratios
- Consider adding keyboard shortcuts for timer controls
- May need to persist timer state across page refreshes

## Testing
- All pages have comprehensive data-testid attributes for QA automation
- E2E testing can be performed via playwright
- Timer functionality tested manually

## Current State
Application is running successfully with no LSP errors. All pages are using the new PageHeader component for consistency. The Lock In page timer is properly centered and visible. Navigation is ordered correctly with a slimmer sidebar for better screen space utilization.
