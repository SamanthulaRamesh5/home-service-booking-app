# Copilot Instructions for home-service-booking-app

## Project Overview
- This is a React Native app for booking local home services (plumbers, electricians, cleaners, etc.).
- The backend uses Supabase (see `src/services/supabase.tsx`).
- The project structure follows a clear separation of concerns: navigation, screens, components, context, and services.

## Key Architectural Patterns
- **Navigation**: All navigation logic is in `src/navigation/` (see `AppNavigator.tsx`, `AuthNavigator.tsx`, `RootNavigator.tsx`).
- **Screens**: UI screens are grouped by user role (`src/screens/auth/`, `src/screens/customer/`, `src/screens/provider/`).
- **Components**: Reusable UI elements are in `src/components/`.
- **Context**: App-wide state (e.g., authentication) is managed in `src/context/AuthContext.tsx`.
- **Constants**: Shared enums and lists (e.g., roles, services) are in `src/constants/`.
- **Services**: API and backend logic is in `src/services/`.

## Developer Workflows
- **Start Metro Bundler**: `npx react-native start`
- **Run on Android**: `npx react-native run-android`
- **Run on iOS**: `npx react-native run-ios`
- **Run Tests**: `npm test` (see `__tests__/App.test.tsx`)
- **Build Android**: Use Gradle files in `android/` (`./gradlew assembleDebug`)
- **iOS Build**: Use Xcode project in `ios/`

## Project-Specific Conventions
- Use TypeScript for all source files (`.tsx`, `.ts`).
- All API/backend calls go through `src/services/supabase.tsx`.
- Role-based navigation and UI: see `src/constants/role.ts` and navigation files.
- Service types and lists: see `src/constants/services.ts`.
- Use context for authentication state (`AuthContext`).
- Keep business logic out of UI components; use services and context.

## Integration Points
- **Supabase**: All backend data and auth handled via `src/services/supabase.tsx`.
- **React Navigation**: Navigation logic in `src/navigation/`.
- **Testing**: Jest config in `jest.config.js`, tests in `__tests__/`.

## Examples
- To add a new service type: update `src/constants/services.ts` and ensure UI reflects changes.
- To add a new screen: place in the appropriate `src/screens/` subfolder and register in the relevant navigator.

## References
- [README.md](../README.md) for high-level project info
- [src/services/supabase.tsx](../src/services/supabase.tsx) for backend integration
- [src/context/AuthContext.tsx](../src/context/AuthContext.tsx) for auth logic
- [src/navigation/](../src/navigation/) for navigation structure

---
For more, follow the patterns in the referenced files. When in doubt, prefer explicit, role-based, and modular code organization.
