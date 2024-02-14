import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const supabase = await serverSupabaseClient(event)
    const { id } = event.context.params
    const { data, error } = await supabase
       .from('cabanas')
       .select('*')
       .eq('name_id', id)
       .single()
    return data;
  })