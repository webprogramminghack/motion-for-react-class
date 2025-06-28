import { Sparkles, X } from 'lucide-react';
import type React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ElementToggleButtonProps = {
  isVisible: boolean;
  onClick: () => void;
};

export const ElementToggleButton: React.FC<ElementToggleButtonProps> = ({
  isVisible,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      variant='outline'
      size='sm'
      className={cn(
        'min-w-180 cursor-pointer gap-sm',
        !isVisible
          ? 'border-green-500/50 bg-green-500/10 text-green-300 hover:bg-green-500/20'
          : 'border-red-500/50 bg-red-500/10 text-red-300 hover:bg-red-500/20'
      )}
    >
      {isVisible ? (
        <>
          <X className='size-14' />
          Remove Element
        </>
      ) : (
        <>
          <Sparkles className='size-14' />
          Add Element
        </>
      )}
    </Button>
  );
};
