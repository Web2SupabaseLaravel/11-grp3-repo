import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase } from '@/lib/supabase'

// Example hook for fetching data from a table
export const useSupabaseQuery = (table: string, queryKey?: string[]) => {
  return useQuery({
    queryKey: queryKey || [table],
    queryFn: async () => {
      const { data, error } = await supabase
        .from(table)
        .select('*')
      
      if (error) throw error
      return data
    }
  })
}

// Example hook for inserting data
export const useSupabaseInsert = (table: string) => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (data: any) => {
      const { data: result, error } = await supabase
        .from(table)
        .insert(data)
        .select()
      
      if (error) throw error
      return result
    },
    onSuccess: () => {
      // Invalidate and refetch queries for this table
      queryClient.invalidateQueries({ queryKey: [table] })
    }
  })
}

// Example hook for updating data
export const useSupabaseUpdate = (table: string) => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async ({ id, data }: { id: string | number, data: any }) => {
      const { data: result, error } = await supabase
        .from(table)
        .update(data)
        .eq('id', id)
        .select()
      
      if (error) throw error
      return result
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [table] })
    }
  })
}

// Example hook for deleting data
export const useSupabaseDelete = (table: string) => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (id: string | number) => {
      const { error } = await supabase
        .from(table)
        .delete()
        .eq('id', id)
      
      if (error) throw error
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [table] })
    }
  })
}

// Hook for authentication
export const useSupabaseAuth = () => {
  return {
    signUp: async (email: string, password: string) => {
      const { data, error } = await supabase.auth.signUp({
        email,
        password
      })
      if (error) throw error
      return data
    },
    
    signIn: async (email: string, password: string) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      if (error) throw error
      return data
    },
    
    signOut: async () => {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
    },
    
    getCurrentUser: async () => {
      const { data: { user } } = await supabase.auth.getUser()
      return user
    }
  }
}
