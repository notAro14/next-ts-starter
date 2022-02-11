import { ChangeEventHandler, forwardRef, ReactNode } from 'react';

import Flex from '../shared/flex';
import Input from '../shared/input';
import Label from '../shared/label';

interface FieldProps {
  name: string;
  type?: string;
  children: ReactNode;
  required?: boolean;
  disabled?: boolean;
  value?: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
const Field = forwardRef<HTMLInputElement, FieldProps>((props, ref) => {
  const { children, name, type = 'text', ...rest } = props;
  return (
    <Flex flexDirection='column'>
      <Label htmlFor={name}>{children}</Label>
      <Input
        ref={ref}
        px={2}
        py={1}
        type={type}
        id={name}
        name={name}
        {...rest}
      />
    </Flex>
  );
});
Field.displayName = 'Field';

export default Field;
