import BaseForm from './base-form/BaseForm';

export const data = {
  tabsHeaders: [
    { id: 'Login', title: 'Log In' },
    { id: 'create-account', title: 'Create account' },
  ],
  tabsOutlets: [
    {
      id: 'Login',
      element: <BaseForm btnText='Log In' onSubmit={console.log} />,
    },
    {
      id: 'create-account',
      element: <BaseForm btnText='Sign Up' onSubmit={console.log} />,
    },
  ],
};
