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
- Created PageHeader component for consistent headers across all pages with full customization support
- Fixed LockInPage timer layout - removed overlapping footer, proper centering, responsive design
- Standardized header heights and styling across all pages
- Added background imagery throughout authenticated experience showing locked-in work culture
- Customized tech grid overlays per page to match icon colors and avoid contrast clashes

### Component Updates
- **PageHeader**: Fully flexible reusable component with:
  - Optional background image support
  - Customizable icon color (iconColor prop)
  - Customizable title color (titleColor prop)
  - Configurable grid color (gridColor prop)
  - Configurable grid opacity (gridOpacity prop)
  - Dark wash overlay for text readability over images
- **SessionTimer**: Maintains massive timer display with milliseconds
- **LockInPage**: Improved layout with centered timer, compact stats footer, subtle workspace background
- **Dashboard**: Now uses PageHeader with developer workspace imagery and cyan grid
- **IntentionPage**: Updated to use PageHeader with abstract workspace background and cyan grid
- **JournalPage**: Updated to use PageHeader with abstract workspace background and magenta grid
- **ActivitiesPage**: Updated to use PageHeader with abstract workspace background and amber grid
- **SettingsPage**: Updated to use PageHeader with abstract workspace background and muted gray grid
- **Landing**: Hero section with developer workspace imagery and proper layering

### Background Imagery Assets
Generated AI images located in `attached_assets/generated_images/`:
- `developer_focused_at_workstation.png`: Developer with headphones at PC workstation (used on Landing and Dashboard)
- `abstract_tech_workspace_background.png`: Moody tech workspace atmosphere (used across authenticated pages)
- All images created via Replit AI image generation for this project
- Usage: Project-specific assets for mission-control aesthetic

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
Application is deployment-ready and running successfully with no LSP errors. All pages use the PageHeader component with customized background imagery and grid overlays. The Lock In page timer is properly centered with responsive layout for various viewport sizes. Navigation is ordered correctly with a slimmer sidebar (13rem) for better screen space utilization.

### Deployment Readiness (Certified by Architect - November 21, 2025)
✅ All authenticated pages have background imagery showing locked-in work culture  
✅ PageHeader component with full flexibility (background, colors, grid customization)  
✅ LockInPage responsive layout with centered timer and separated footer  
✅ Sidebar optimizations (13rem width, Activity Log below Journal)  
✅ Active badge conditional rendering (only on /lock-in route)  
✅ No LSP errors or console warnings  
✅ Comprehensive data-testid attributes for QA automation  
✅ Authentication and database functional  

**Ready for deployment as free version for personal testing.**

### Pre-Public Launch Checklist
- [ ] Run responsive QA on viewports <700px height to verify timer visibility
- [ ] Replace Stripe placeholder keys with real credentials
- [ ] Verify Stripe billing flow end-to-end with test mode
- [ ] Consider WCAG AA accessibility audit for color contrast
- [ ] Add keyboard shortcuts for timer controls (optional enhancement)
