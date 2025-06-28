import { AnimatePresence, motion } from 'motion/react';
import { ExampleWrapper } from './partials/example-wrapper';

export const FadeOutExample = () => {
  return (
    <ExampleWrapper label='Fade Out' itemLabel='Fade Out'>
      {(isVisible) => (
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className='absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 to-violet-500'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>
      )}
    </ExampleWrapper>
  );
};

export const ScaleDownExample = () => {
  return (
    <ExampleWrapper label='Fade Out' itemLabel='Fade Out'>
      {(isVisible) => (
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className='-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-100 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500'
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: 'spring' }}
            />
          )}
        </AnimatePresence>
      )}
    </ExampleWrapper>
  );
};

export const SlideOutExample = () => {
  return (
    <ExampleWrapper label='Fade Out' itemLabel='Fade Out'>
      {(isVisible) => (
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className='-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-100 rounded-full bg-gradient-to-r from-green-500 to-emerald-500'
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          )}
        </AnimatePresence>
      )}
    </ExampleWrapper>
  );
};

export const RotateExample = () => {
  return (
    <ExampleWrapper label='Fade Out' itemLabel='Fade Out'>
      {(isVisible) => (
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className='-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 h-80 w-60 rounded-lg bg-gradient-to-r from-orange-500 to-red-500'
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ type: 'spring' }}
            />
          )}
        </AnimatePresence>
      )}
    </ExampleWrapper>
  );
};
