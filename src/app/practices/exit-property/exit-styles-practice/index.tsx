import { AnimatePresence, motion } from 'motion/react';
import type React from 'react';
import { useState } from 'react';
import { ElementToggleButton } from './partials/element-toggle-button';

type ExitStyleDemoProps = {
  style: 'fade' | 'slide' | 'scale' | 'rotate' | 'blur';
};

export const ExitStyleDemo: React.FC<ExitStyleDemoProps> = ({ style }) => {
  const [isVisible, setIsVisible] = useState(true);

  const getExitAnimation = () => {
    switch (style) {
      case 'fade':
        return { opacity: 0 };
      case 'slide':
        return {
          x: -200,
          opacity: 0,
        };
      case 'scale':
        return { scale: 0, opacity: 0 };
      case 'rotate':
        return { rotate: 180, opacity: 0 };
      case 'blur':
        return { filter: 'blur(10px)', opacity: 0 };
      default:
        return { opacity: 0 };
    }
  };

  const getInitialAnimation = () => {
    switch (style) {
      case 'fade':
        return { opacity: 0 };
      case 'slide':
        return {
          x: 200,
          opacity: 0,
        };
      case 'scale':
        return { scale: 0, opacity: 0 };
      case 'rotate':
        return { rotate: -180, opacity: 0 };
      case 'blur':
        return { filter: 'blur(10px)', opacity: 0 };
      default:
        return { opacity: 0 };
    }
  };

  return (
    <div className='flex flex-col items-center gap-xl'>
      <ElementToggleButton
        isVisible={isVisible}
        onClick={() => setIsVisible(!isVisible)}
      />

      <div className='relative size-150'>
        <AnimatePresence mode='wait'>
          {isVisible && (
            <motion.div
              key={style}
              className='absolute inset-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg'
              initial={getInitialAnimation()}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                rotate: 0,
                filter: 'blur(0px)',
              }}
              exit={getExitAnimation()}
              transition={{
                duration: 0.5,
                type: style === 'blur' ? 'tween' : 'spring',
                stiffness: 300,
                damping: 30,
              }}
            >
              <div className='text-center'>
                <div className='text-lg-bold text-white'>
                  {style.toUpperCase()}
                </div>
                <div className='text-sm-regular text-white/80'>Exit Style</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className='text-center'>
        <div className='rounded-full bg-neutral-800/50 px-lg py-sm'>
          <span className='text-neutral-300 text-sm-regular'>
            Current: <strong className='text-purple-300'>{style}</strong>
          </span>
        </div>
      </div>
    </div>
  );
};
