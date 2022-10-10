import { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLInputElement> {}

const TextInput: FC<Props> = ({ ...otherProps }) => {
  return (
    <input
      className='border-2 px-3 py-1 rounded-md focus:outline-sky-400'
      type='text'
      {...otherProps}
    />
  );
};

export default TextInput;
