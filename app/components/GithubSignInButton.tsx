'use client';

import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import GithubIcon from '@/public/github1.svg';

const GithubSignInButton = () => {
  return (
    <Button size="icon" onClick={() => signIn('github')}>
      <Image src={GithubIcon} alt="github icon" className="w-6 h-6" />
    </Button>
  );
};

export default GithubSignInButton;
