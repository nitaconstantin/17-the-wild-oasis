import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ugdnbptswyczwpzluhta.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnZG5icHRzd3ljendwemx1aHRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkzNjQzODMsImV4cCI6MjA4NDk0MDM4M30.h1TZrV5kFFnHIJK6b6xwvUpr-cXM2bty0YYNKMCG6Pc";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
