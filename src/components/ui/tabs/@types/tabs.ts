import { ReactNode } from 'react';

interface ITabHeader {
  title: string;
  id: string;
}

interface ITabOutlet {
  id: string;
  element: ReactNode;
}

export interface ITabs {
  type: string;
  tabsHeaders: ITabHeader[];
  tabsOutlets: ITabOutlet[];
}
