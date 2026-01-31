<<<<<<< HEAD
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
=======
# AI Agent Instructions for Home Service Booking App

## Project Overview
React Native app for booking local home services (plumbers, electricians, cleaners) with Firebase backend. Two-user-type system: Customers browse/book services, Providers offer services.

## Critical Architecture Patterns

### Navigation Structure (Key to All Screens)
```
RootNavigator (app entry point)
├── AuthNavigator (unauthenticated users)
│   ├── LoginScreen
│   └── RegisterScreen
└── AppNavigator (authenticated users)
    ├── CustomerHomeScreen
    └── ProviderHomeScreen
```
- **Location**: `src/navigation/` directory
- **Pattern**: Stack-based navigation using `@react-navigation/native-stack`
- **Type Safety**: Navigation param types defined in `types.ts` (AuthStackParamList, CustomerStackParamList, ProviderStackParamList, AppStackParamList)
- **Current Issue**: `RootNavigator.tsx` has hardcoded `isAuthenticated=false` - will need context/state management to replace

### Role-Based Routing
- **Not yet implemented**: Need to integrate authentication context to conditionally render AuthNavigator vs AppNavigator
- **Design expectation**: One unified entry point that checks auth state, then routes to appropriate navigator
- **Screens are role-separated**: `src/screens/auth/`, `src/screens/customer/`, `src/screens/provider/`

## Project Structure & Naming Conventions
- **Navigation files**: `*Navigator.tsx` files use `createNativeStackNavigator` with typed param lists
- **Screen files**: Simple functional components in role-specific folders under `src/screens/`
- **Types**: Centralized in `src/navigation/types.ts` for navigation types (other types go in `src/types/` when created)
- **Services**: Empty `src/services/` - will hold Firebase calls and API logic
- **Context**: Empty `src/context/` - should hold auth state, user data, booking state
- **Utils**: Empty `src/utils/` - helper functions, validators, formatters

## Known Issues & TODOs
1. **AppNavigator import bug** (line 6): Imports `ProviderHomeScreen` from `../screens/customer/` but should be `../screens/provider/`
2. **Missing authentication context**: `RootNavigator` needs real auth state check instead of hardcoded `isAuthenticated=false`
3. **Empty implementation**: Services, Context, Types, Utils directories need implementation
4. **Provider navigation**: No provider flow navigation defined yet

## Development Workflows

### Build & Run
```bash
npm run android       # Build and run Android
npm run ios          # Build and run iOS
npm start            # Start Metro bundler
npm run lint         # Run ESLint
npm test             # Run Jest tests
```
- **Node requirement**: Node >=20
- **Test file location**: `__tests__/App.test.tsx`

### Key Dependencies
- React 19.2.0 + React Native 0.83.1
- React Navigation 7.x (native-stack, safe-area-context, screens)
- TypeScript 5.8.3
- Jest for testing, ESLint for linting

## Common Development Patterns

### Adding New Screens
1. Create component in `src/screens/{role}/ComponentName.tsx`
2. Add type to appropriate ParamList in `src/navigation/types.ts`
3. Add Stack.Screen in relevant Navigator
4. Use typed navigation hooks from `@react-navigation/native`

### Component Structure
- Functional components with React hooks (useState, useEffect, etc.)
- Import from React Native (`View`, `Text`, `ScrollView`, etc.)
- No UI library installed yet - building with React Native primitives

## Integration Points to Implement
- **Authentication**: Will need Firebase Auth integration in `src/services/` and `src/context/AuthContext.tsx`
- **User Data**: Role-based state (Customer vs Provider) in context
- **Service Listings**: API calls for providers/services
- **Booking Management**: State for cart/bookings
- **Real-time Updates**: Firebase Firestore for live service/booking status

## Testing
- Jest configured with `jest.config.js`
- Test file co-located with app entry: `__tests__/App.test.tsx`
- Run with `npm test`

---

**Last Updated**: January 26, 2025
**Target Users**: AI agents implementing features across auth, customer, and provider flows
>>>>>>> 5edb4917d014192b845f690914c98c91874d06ec
