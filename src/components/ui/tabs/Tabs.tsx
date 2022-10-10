import { ReactNode, useEffect, useState } from 'react';
import { FC } from 'react';
import { ITabs } from './@types/tabs';
import { getTabTemplate } from './helpers/getTabTemplate';

interface Props extends ITabs {}

const Tabs: FC<Props> = ({ tabsHeaders, tabsOutlets, type }) => {
  const [activeTabId, setActiveTabId] = useState<string>(tabsHeaders[0].id);
  const [activeOutlet, setActiveOutlet] = useState<ReactNode>(
    tabsOutlets[0].element
  );

  useEffect(() => {
    const newActiveOutlet = tabsOutlets.find(
      (outlet) => outlet.id === activeTabId
    );
    if (newActiveOutlet) setActiveOutlet(newActiveOutlet.element);
  }, [activeTabId, tabsOutlets]);

  const handleActiveTabChange = (newId: string) => () => setActiveTabId(newId);

  return (
    <div>
      <nav>
        <ul className='flex items-center justify-center'>
          {tabsHeaders.map((tabHeader) => {
            return (
              <li key={tabHeader.id}>
                {getTabTemplate(
                  type,
                  tabHeader.title,
                  handleActiveTabChange(tabHeader.id),
                  tabHeader.id === activeTabId
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      <div>{activeOutlet}</div>
    </div>
  );
};

export default Tabs;
