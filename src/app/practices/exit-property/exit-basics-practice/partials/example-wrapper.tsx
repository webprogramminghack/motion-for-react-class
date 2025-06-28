import { useState } from 'react';
import { ToggleButton } from './toggle-button';

type ExampleWrapperProps = {
  children: (isVisible: boolean) => React.ReactNode;
  label: string;
  itemLabel: string;
};

export const ExampleWrapper: React.FC<ExampleWrapperProps> = ({
  children,
  label,
  itemLabel,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className='flex flex-col items-center gap-xl'>
      <ToggleButton
        isVisible={isVisible}
        onClick={() => setIsVisible(!isVisible)}
        label={itemLabel}
      />
      <div className='relative size-100'>{children(isVisible)}</div>
      <span className='text-neutral-400 text-xs-regular'>{label}</span>
    </div>
  );
};
