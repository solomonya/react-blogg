import Tabs from 'components/ui/tabs/Tabs';
import { FC } from 'react';
import { data } from './data';

const AuthForm: FC = () => {
  return (
    <form className='p-5 bg-white rounded-md'>
      <Tabs
        tabsHeaders={data.tabsHeaders}
        tabsOutlets={data.tabsOutlets}
        type='underline'
      />
    </form>
  );
};

export default AuthForm;
