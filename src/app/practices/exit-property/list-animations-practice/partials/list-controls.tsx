import { Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type TaskButtonProps = {
  onClick: () => void;
  icon: 'add' | 'clear';
  label: string;
  disabled?: boolean;
};

export const TaskButton: React.FC<TaskButtonProps> = ({
  onClick,
  icon,
  label,
  disabled,
}) => {
  return (
    <Button
      onClick={onClick}
      variant='outline'
      size='sm'
      className='cursor-pointer'
      disabled={disabled}
    >
      {icon === 'add' ? (
        <Plus className='size-14' />
      ) : (
        <Trash2 className='size-14' />
      )}
      {label}
    </Button>
  );
};

type ModeButtonProps = {
  mode: 'sync' | 'popLayout';
  currentMode: 'sync' | 'popLayout';
  onClick: () => void;
};

export const ModeButton: React.FC<ModeButtonProps> = ({
  mode,
  currentMode,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      variant='outline'
      size='sm'
      className={cn(
        'cursor-pointer',
        currentMode === mode &&
          'border-purple-400 bg-purple-400/20 text-purple-300 hover:bg-purple-400/30'
      )}
    >
      mode="{mode}"
    </Button>
  );
};
