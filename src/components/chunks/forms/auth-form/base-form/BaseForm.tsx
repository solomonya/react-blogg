import { TextInput } from 'components/ui/inputs';
import { FC } from 'react';

interface Props {
  btnText: string;
  onSubmit: () => void;
}

const BaseForm: FC<Props> = ({ btnText, onSubmit }) => {
  return (
    <div className='flex flex-col gap-y-5 py-3'>
      <TextInput placeholder='username' />
      <TextInput placeholder='password' />
      <button className='bg-sky-400 text-white rounded-md py-1'>
        {btnText}
      </button>
    </div>
  );
};

export default BaseForm;
