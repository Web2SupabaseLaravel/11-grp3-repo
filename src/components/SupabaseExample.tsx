import { useState } from 'react'
import { useSupabaseQuery, useSupabaseInsert } from '@/hooks/useSupabase'
import { Button } from './ui/button'

// Example component showing how to use Supabase
const SupabaseExample = () => {
  const [newItem, setNewItem] = useState('')
  
  // Example: Fetch data from a table called 'items'
  const { data: items, isLoading, error } = useSupabaseQuery('items')
  
  // Example: Insert new item
  const insertMutation = useSupabaseInsert('items')
  
  const handleAddItem = async () => {
    if (!newItem.trim()) return
    
    try {
      await insertMutation.mutateAsync({
        name: newItem,
        created_at: new Date().toISOString()
      })
      setNewItem('')
    } catch (error) {
      console.error('Error adding item:', error)
    }
  }

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Supabase Example</h2>
      
      {/* Add new item */}
      <div className="mb-4">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter item name"
          className="border rounded px-3 py-2 mr-2"
        />
        <Button 
          onClick={handleAddItem}
          disabled={insertMutation.isPending}
        >
          {insertMutation.isPending ? 'Adding...' : 'Add Item'}
        </Button>
      </div>
      
      {/* Display items */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Items:</h3>
        {items && items.length > 0 ? (
          <ul className="space-y-2">
            {items.map((item: any) => (
              <li key={item.id} className="p-2 border rounded">
                {item.name}
              </li>
            ))}
          </ul>
        ) : (
          <p>No items found</p>
        )}
      </div>
    </div>
  )
}

export default SupabaseExample
