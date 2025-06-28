import { Star } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import type React from 'react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { NavigationButton } from './partials/navigation-button';

type AnimatePresenceModeDemoProps = {
  mode: 'sync' | 'wait';
  useInitialFalse: boolean;
};

export const AnimatePresenceModeDemo: React.FC<
  AnimatePresenceModeDemoProps
> = ({ mode, useInitialFalse }) => {
  const [currentItem, setCurrentItem] = useState(0);

  const items = [
    { icon: Star, color: 'from-purple-500 to-pink-500' },
    { icon: Star, color: 'from-blue-500 to-cyan-500' },
    { icon: Star, color: 'from-green-500 to-emerald-500' },
    { icon: Star, color: 'from-orange-500 to-red-500' },
  ];

  const nextItem = () => {
    setCurrentItem((prev) => (prev + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentItem((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className='flex flex-col items-center gap-xl'>
      <div className='flex items-center gap-lg'>
        <NavigationButton direction='prev' onClick={prevItem} />

        <div className='relative size-150'>
          <AnimatePresence mode={mode} initial={!useInitialFalse}>
            <motion.div
              key={currentItem}
              className={cn(
                'absolute inset-0 flex items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg',
                items[currentItem].color
              )}
              initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
              transition={{
                duration: 0.3,
                type: 'spring',
                stiffness: 300,
                damping: 25,
              }}
            >
              {(() => {
                const Icon = items[currentItem].icon;
                return <Icon className='size-64 text-white' />;
              })()}
            </motion.div>
          </AnimatePresence>
        </div>

        <NavigationButton direction='next' onClick={nextItem} />
      </div>

      <div className='space-y-sm text-center'>
        <div className='rounded-lg bg-neutral-800/50 px-xl py-sm'>
          <span className='text-neutral-300 text-sm-regular'>
            Mode:{' '}
            <strong
              className={mode === 'sync' ? 'text-purple-300' : 'text-green-300'}
            >
              {mode}
            </strong>
          </span>
        </div>
        <div className='text-neutral-400 text-xs-regular'>
          {mode === 'sync'
            ? 'Exit and enter animations overlap'
            : 'Exit completes before enter starts'}
        </div>
        {useInitialFalse && (
          <div className='text-amber-400 text-xs-regular'>
            Initial animation suppressed on first mount
          </div>
        )}
      </div>
    </div>
  );
};
