# Supabase Integration Setup

This document outlines the Supabase integration that has been added to the Clinically Landing Page project.

## Overview

Supabase has been successfully integrated into the project to provide backend services including authentication, database, and real-time features.

## Files Added/Modified

### Core Integration Files

1. **`src/lib/supabase.ts`** - Main Supabase client configuration
2. **`src/hooks/useSupabase.ts`** - Custom React hook for Supabase operations
3. **`src/components/SupabaseExample.tsx`** - Example component demonstrating Supabase usage
4. **`src/components/SupabaseTest.tsx`** - Connection test component (for development)
5. **`.env.local`** - Environment variables (contains sensitive credentials)

### Dependencies Added

- `@supabase/supabase-js` - Official Supabase JavaScript client

## Environment Variables

The following environment variables are required in `.env.local`:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Current Setup

### Supabase Project Details
- **Project URL**: https://vwhkbybnicasckdnsada.supabase.co
- **Status**: ✅ Connected and working
- **Authentication**: Ready for implementation
- **Database**: Ready for table creation

### Available Components

#### useSupabase Hook
```typescript
const { user, loading, signIn, signOut, signUp } = useSupabase()
```

Features:
- User authentication state management
- Sign in/out/up functions
- Loading states
- Automatic session management

#### SupabaseExample Component
Demonstrates:
- User authentication flow
- Sign in/sign up forms
- User profile display
- Session management

## Usage Examples

### Basic Authentication
```typescript
import { useSupabase } from '@/hooks/useSupabase'

function MyComponent() {
  const { user, signIn, signOut } = useSupabase()
  
  if (user) {
    return <button onClick={signOut}>Sign Out</button>
  }
  
  return <button onClick={() => signIn('email@example.com', 'password')}>Sign In</button>
}
```

### Database Operations
```typescript
import { supabase } from '@/lib/supabase'

// Insert data
const { data, error } = await supabase
  .from('appointments')
  .insert({ patient_name: 'John Doe', date: '2024-01-15' })

// Query data
const { data, error } = await supabase
  .from('appointments')
  .select('*')
  .eq('patient_name', 'John Doe')
```

## Next Steps

1. **Database Schema**: Create tables for appointments, patients, etc.
2. **Authentication UI**: Integrate auth components into the main application
3. **Appointment System**: Build appointment booking functionality
4. **User Profiles**: Implement user profile management
5. **Real-time Features**: Add real-time updates for appointments

## Security Notes

- Environment variables are properly configured
- Anonymous key is used for client-side operations
- Row Level Security (RLS) should be enabled for production tables
- Service role key should only be used server-side

## Testing

The integration has been tested and verified:
- ✅ Connection established
- ✅ Authentication ready
- ✅ Environment variables loaded correctly
- ✅ No console errors

## Development Commands

```bash
# Start development server
npm run dev

# The Supabase connection will be automatically tested on startup
```

## Troubleshooting

If you encounter connection issues:

1. Verify environment variables in `.env.local`
2. Check Supabase project status in dashboard
3. Ensure API keys are correct and not expired
4. Check browser console for detailed error messages

## Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript)
- [Authentication Guide](https://supabase.com/docs/guides/auth)
- [Database Guide](https://supabase.com/docs/guides/database)
