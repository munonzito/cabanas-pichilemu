import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const supabase = await serverSupabaseClient(event)
    const { data, error } = await supabase
       .from('cabanas')
       .select('*')
    return data;
  })