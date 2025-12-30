import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  "https://iiwznmfamfnizixivoea.supabase.co";
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlpd3pubWZhbWZuaXppeGl2b2VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcwNzM0ODAsImV4cCI6MjA4MjY0OTQ4MH0.tlbj4BkSRVQ0CvS0VpURlU73S4fByWZNJW5PSglttl4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const STORAGE_BUCKET = "photos";
export const DEFAULT_USER_ID = "default_user";
