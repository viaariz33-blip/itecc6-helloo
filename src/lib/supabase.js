import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nmalnczybxjaltdmztya.supabase.co'
const supabaseKey = 'sb_publishable_3xdkig8v2YJfMAOA4AnPEQ_5PL74jxl'

export const supabase = createClient(supabaseUrl, supabaseKey)