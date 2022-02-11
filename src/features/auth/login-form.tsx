import { FC, useRef } from 'react';
import { useMutation } from 'react-query';

import Button from '../../shared/button';
import Field from '../../shared/field';
import Flex from '../../shared/flex';

import { signIn } from './sign-in';

interface LoginFormProps {
  onLoginSuccess(): void;
  onLoginFailure(): void;
}

const LoginForm: FC<LoginFormProps> = ({ onLoginSuccess, onLoginFailure }) => {
  const { isLoading, mutate: sendMagicLink } = useMutation(signIn, {
    onSuccess: () => onLoginSuccess(),
    onError: () => onLoginFailure(),
  });

  const emailRef = useRef<HTMLInputElement>(null);
  return (
    <Flex
      flexDirection='column'
      gap={5}
      mx='auto'
      maxWidth='400px'
      width='100%'
      as='form'
      onSubmit={(evt) => {
        evt.preventDefault();
        const email = emailRef.current?.value || '';
        if (!email) return;
        sendMagicLink({ email });
      }}
    >
      <Field ref={emailRef} required name='email' type='email'>
        Email
      </Field>
      <Button
        fontWeight='bold'
        variant='filled'
        color='text'
        backgroundColor='accent'
        disabled={isLoading}
      >
        Send magic link
      </Button>
    </Flex>
  );
};

export default LoginForm;
