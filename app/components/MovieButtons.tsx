'use client';

import { Button } from '@/components/ui/button';
import { InfoIcon, PlayCircle } from 'lucide-react';
import { useState } from 'react';
import PlayVideoModal from './PlayVideoModal';

interface MovieButtonsProps {
  id: number;
  title: string;
  overview: string;
  youtubeUrl: string;
  releaseDate: number;
  age: number;
  duration: number;
}

const MovieButtons = ({
  age,
  duration,
  id,
  overview,
  releaseDate,
  title,
  youtubeUrl,
}: MovieButtonsProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} className="text-lg font-medium">
        <PlayCircle className="mr-2 h-6 w-6" />
        Play
      </Button>
      <Button
        onClick={() => setOpen(true)}
        className="text-lg font-medium bg-white/40 hover:bg-white/30 text-white"
      >
        <InfoIcon className="mr-2 h-6 w-6" /> Learn More
      </Button>

      <PlayVideoModal
        state={open}
        changeState={setOpen}
        age={age}
        duration={duration}
        key={id}
        overview={overview}
        release={releaseDate}
        title={title}
        youtubeUrl={youtubeUrl}
      />
    </>
  );
};

export default MovieButtons;
