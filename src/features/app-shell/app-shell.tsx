import { Session } from '@supabase/supabase-js';
import { FC, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { supabase } from '../../utils/supabase-client';
import LoginForm from '../login/login-form';

const AppShell: FC = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((event, newSession) => {
      setSession(newSession);
    });
  }, []);
  return session ? (
    <>{children}</>
  ) : (
    <LoginForm
      onLoginSuccess={() => {
        toast.success('Check your inbox');
      }}
      onLoginFailure={() => {
        toast.error('Failed to send link');
      }}
    />
  );
};

export default AppShell;
