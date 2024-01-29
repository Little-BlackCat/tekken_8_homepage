import dotenv from "dotenv"
dotenv.config()

import { createClient } from '@supabase/supabase-js'
const {SUPABASE_URL, SUPABASE_ANON_KEY} = process.env

// Create a single supabase client for interacting with your database
const supabase = createClient(SUPABASE_URL!, SUPABASE_ANON_KEY!)

export async function getTekken8Characters(name: string) {
    const { data, error } = await supabase
        .from('tekken_8_characters_details')
        .select()
    return data
}

