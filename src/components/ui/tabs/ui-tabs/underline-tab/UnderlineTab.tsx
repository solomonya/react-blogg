import 'twin.macro';

import { FC } from 'react';

interface Props {
  title: string;
  onClick: () => void;
  isActive: boolean;
}

const getBorderColor = (isActive: boolean) =>
  isActive ? 'rgb(56 189 248)' : '';

const UnderlineTab: FC<Props> = ({ title, onClick, isActive }) => {
  return (
    <div
      onClick={onClick}
      className='p-3 border-b-2 cursor-pointer'
      style={{ borderColor: getBorderColor(isActive) }}
    >
      <span>{title}</span>
    </div>
  );
};

export default UnderlineTab;
