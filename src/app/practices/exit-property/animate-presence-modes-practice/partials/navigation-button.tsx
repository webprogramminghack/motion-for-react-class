import { ChevronLeft, ChevronRight } from 'lucide-react';
import type React from 'react';
import { Button } from '@/components/ui/button';

type NavigationButtonProps = {
  direction: 'prev' | 'next';
  onClick: () => void;
};

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  direction,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      variant='outline'
      size='icon'
      className='size-40 cursor-pointer bg-neutral-700 hover:bg-neutral-600'
    >
      {direction === 'prev' ? (
        <ChevronLeft className='size-16' />
      ) : (
        <ChevronRight className='size-16' />
      )}
    </Button>
  );
};
