import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event)
  const { data, error } = await supabase
    .from('cabanas')
    .select('*')

  if (error) {
    console.error('Error fetching cabañas:', error)
    return []
  }

  // Transformar los datos de las cabañas a URLs para el sitemap
  const cabanasUrls = data.map(cabana => ({
    loc: `/${cabana.name_id}`, // Asumiendo que 'name_id' es el ID de la URL de la cabaña
    _sitemap: 'cabanas', // Especificar a qué sitemap pertenece esta URL
  }))

  return cabanasUrls
})
