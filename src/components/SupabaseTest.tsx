import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

const SupabaseTest = () => {
  const [status, setStatus] = useState<'loading' | 'connected' | 'error'>('loading')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function testConnection() {
      try {
        // Test connection by getting the current user (doesn't require any tables)
        const { data, error } = await supabase.auth.getSession()
        
        if (error) throw error
        
        setStatus('connected')
        console.log('Supabase connection successful!', {
          session: data.session ? 'Present' : 'None'
        })
      } catch (err) {
        setStatus('error')
        setError(err instanceof Error ? err.message : 'Unknown error occurred')
        console.error('Supabase connection error:', err)
      }
    }

    testConnection()
  }, [])

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Supabase Connection Test</h2>
      
      <div className="space-y-2">
        <p>Status: {status}</p>
        {error && (
          <p className="text-red-500">Error: {error}</p>
        )}
        {status === 'connected' && (
          <p className="text-green-500">Successfully connected to Supabase!</p>
        )}
      </div>
    </div>
  )
}

export default SupabaseTest
