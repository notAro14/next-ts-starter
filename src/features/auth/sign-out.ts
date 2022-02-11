import toast from 'react-hot-toast';
import { supabase } from '../../utils/supabase-client';

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    toast.error('Unable to sign out');
    return;
  }
  toast.success('Signed out');
};
