// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://djidtlgtpksggigizums.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqaWR0bGd0cGtzZ2dpZ2l6dW1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyMDE0MjUsImV4cCI6MjA2Nzc3NzQyNX0.RoItW0ILUua0VXaWLzkWWvHQ8szdsBD7oaybSXKkTqQ';
export const supabase = createClient(supabaseUrl, supabaseKey);
