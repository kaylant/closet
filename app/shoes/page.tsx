'use client'

import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'

export default function Page() {
  const [shoes, setNotes] = useState<any[] | null>(null)
  const supabase = createClient()

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from('shoes').select()
      setNotes(data)
    }
    getData()
  }, [])

  console.log('shoes', shoes)

  return <pre>{JSON.stringify(shoes, null, 2)}</pre>
}