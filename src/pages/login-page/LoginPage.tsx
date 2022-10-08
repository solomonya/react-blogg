import { AuthForm } from 'components';
import React from 'react';

export default function LoginPage() {
  return (
    <main>
      <section className='w-screen h-screen flex items-center justify-center bg-slate-200'>
        <AuthForm />
      </section>
    </main>
  );
}
