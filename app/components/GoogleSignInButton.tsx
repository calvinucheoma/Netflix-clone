'use client';

import { Button } from '@/components/ui/button';
import GoogleIcon from '@/public/google1.svg';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

const GoogleSignInButton = () => {
  return (
    <Button size="icon" onClick={() => signIn('google')}>
      <Image src={GoogleIcon} alt="google icon" className="w-6 h-6" />
    </Button>
  );
};

export default GoogleSignInButton;
