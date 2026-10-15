import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// If the env vars are missing (e.g. a fresh clone without a .env file),
// export null so the site still loads and the Reviews page can show a
// friendly message instead of crashing.
//
// The anon/publishable key is designed to be public — it ships in the
// browser bundle. What keeps the data safe is the Row Level Security
// policies set up in Supabase, NOT hiding this key.
// Never put the "service_role" key in this project.
export const supabase = url && anonKey ? createClient(url, anonKey) : null;