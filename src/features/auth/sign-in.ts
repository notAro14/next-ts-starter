import { supabase } from '../../utils/supabase-client';

export const signIn = async ({ email }: { email: string }) => {
  try {
    const { error, user, session } = await supabase.auth.signIn({
      email,
    });
    if (error) throw error;
    return { user, session };
  } catch (e) {
    throw e;
  }
};
