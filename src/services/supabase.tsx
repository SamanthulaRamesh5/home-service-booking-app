
import 'react-native-url-polyfill/auto';
import 'react-native-get-random-values';
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://gtcuktjeiegfmkjjybab.supabase.co',
  'sb_publishable_i1rwlSwGnt4DZpn4yitTxQ_NNH8RJYP',
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false, // Set to false for native apps
  },
  }
);
export const signUp = async (email: string, password: string, role: 'customer' | 'provider') => {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;

  await supabase.from('profiles').insert({
    id: data.user?.id,
    role,
  });

  return data;
};
export const signOut = async () => {
  await supabase.auth.signOut();
};

export const getUserRole = async (userId: string) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', userId)
    .single();

  if (error) throw error;
  return data.role as 'customer' | 'provider';
};
