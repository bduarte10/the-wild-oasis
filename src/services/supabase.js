import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://kfbfjvliouxdltbunvgp.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmYmZqdmxpb3V4ZGx0YnVudmdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAzNDk5MTgsImV4cCI6MjAxNTkyNTkxOH0.g6GZNjbIRbZSID2HXLOcSIcVW0TJ43Hi9weTnubNFaA';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
