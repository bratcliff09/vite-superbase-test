import { createClient } from "@supabase/supabase-js";

const VITE_SUPABASE_URL = "https://oifbtwniinwpurkxjurp.supabase.co";
const VITE_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pZmJ0d25paW53cHVya3hqdXJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2MjM2MTcsImV4cCI6MjA2ODE5OTYxN30.wEJ7B3rhoA5w6Svyu9rrSnr9hui1sIsMEfJ5ok_2F6w";

//const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
//const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabaseUrl = VITE_SUPABASE_URL;
const supabaseKey = VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
