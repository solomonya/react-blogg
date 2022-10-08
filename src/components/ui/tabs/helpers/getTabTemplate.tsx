import { ReactNode } from 'react';
import UnderlineTab from '../ui-tabs/underline-tab/UnderlineTab';

interface ITabData {
  title: string;
  onClick: () => void;
  isActive: boolean;
}

const getTabs = ({
  title,
  onClick,
  isActive,
}: ITabData): Record<string, ReactNode> => {
  const templates = {
    underline: (
      <UnderlineTab title={title} onClick={onClick} isActive={isActive} />
    ),
  };
  return templates;
};

export const getTabTemplate = (
  type: string,
  title: string,
  onClick: () => void,
  isActive: boolean
) => {
  return getTabs({ title, onClick, isActive })[type];
};
