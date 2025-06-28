import { Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ToggleButtonProps = {
  isVisible: boolean;
  onClick: () => void;
  label: string;
};

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  isVisible,
  onClick,
  label,
}) => {
  return (
    <Button
      onClick={onClick}
      variant='outline'
      size='sm'
      className={cn(
        'min-w-140 cursor-pointer gap-sm',
        !isVisible &&
          'border-purple-400 bg-purple-400/20 text-purple-300 hover:bg-purple-400/30'
      )}
    >
      {isVisible ? (
        <>
          <Minus />
          Remove
        </>
      ) : (
        <>
          <Plus />
          Add
        </>
      )}{' '}
      {label}
    </Button>
  );
};
