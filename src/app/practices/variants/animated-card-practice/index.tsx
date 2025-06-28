import { ArrowRight, Sparkles, Star, Zap } from 'lucide-react';
import { motion, type Variants } from 'motion/react';

export const PremiumCard = () => {
  // Card container variants
  const cardVariants: Variants = {
    idle: {
      scale: 1,
      rotate: 0,
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
    },
    hover: {
      scale: 1.05,
      rotate: 1,
      boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3)',
      background: 'linear-gradient(135deg, #764ba2, #f093fb)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  // Icon container variants
  const iconContainerVariants: Variants = {
    idle: {
      scale: 1,
      rotate: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    hover: {
      scale: 1.1,
      rotate: 360,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      transition: {
        rotate: {
          duration: 0.6,
          ease: 'easeInOut',
        },
        scale: {
          type: 'spring',
          stiffness: 400,
          damping: 15,
        },
      },
    },
  };

  // Icon variants
  const iconVariants: Variants = {
    idle: {
      scale: 1,
      rotate: 0,
    },
    hover: {
      scale: 1.2,
      rotate: -360,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  // Title variants
  const titleVariants: Variants = {
    idle: {
      x: 0,
      opacity: 1,
    },
    hover: {
      x: 10,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  // Description variants
  const descriptionVariants: Variants = {
    idle: {
      opacity: 0.8,
      y: 0,
    },
    hover: {
      opacity: 1,
      y: -5,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  // Button variants
  const buttonVariants: Variants = {
    idle: {
      scale: 1,
      x: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    hover: {
      scale: 1.05,
      x: 5,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 15,
      },
    },
  };

  // Arrow variants
  const arrowVariants: Variants = {
    idle: {
      x: 0,
      opacity: 0.7,
    },
    hover: {
      x: 5,
      opacity: 1,
      transition: {
        x: {
          type: 'spring',
          stiffness: 400,
          damping: 15,
        },
      },
    },
  };

  // Floating badges variants
  const badgeVariants: Variants = {
    idle: {
      scale: 0,
      opacity: 0,
      rotate: -180,
    },
    hover: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 15,
        delay: 0.1,
      },
    },
  };

  // Sparkle variants for decorative elements
  const sparkleVariants: Variants = {
    idle: {
      scale: 0,
      opacity: 0,
      rotate: 0,
    },
    hover: (custom: number) => ({
      scale: [0, 1.5, 1],
      opacity: [0, 1, 0],
      rotate: 360,
      transition: {
        duration: 1.5,
        delay: custom * 0.1,
        repeat: Infinity,
        repeatDelay: 1,
      },
    }),
  };

  return (
    <div className='flex h-500 w-full items-center justify-center rounded-xl bg-neutral-950 p-xl'>
      <motion.div
        className='relative w-full max-w-400 cursor-pointer overflow-hidden rounded-3xl p-2xl text-white'
        variants={cardVariants}
        initial='idle'
        whileHover='hover'
      >
        {/* Sparkle decorations */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className='absolute'
            style={{
              top: `${20 + i * 30}%`,
              left: `${80 + i * 5}%`,
            }}
            custom={i}
            variants={sparkleVariants}
          >
            <Sparkles className='size-16 text-yellow-300' />
          </motion.div>
        ))}

        {/* Main icon */}
        <motion.div
          className='mb-xl flex size-80 items-center justify-center rounded-2xl'
          variants={iconContainerVariants}
        >
          <motion.div variants={iconVariants}>
            <Zap className='size-40 text-white' />
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h3 className='mb-md text-xl-semibold' variants={titleVariants}>
          Premium Features
        </motion.h3>

        {/* Description */}
        <motion.p
          className='mb-xl text-md-regular text-white/90'
          variants={descriptionVariants}
        >
          Unlock advanced capabilities and boost your productivity with our
          premium tier
        </motion.p>

        {/* CTA Button */}
        <motion.button
          className='flex w-full cursor-pointer items-center justify-between rounded-xl px-lg py-md'
          variants={buttonVariants}
        >
          <span className='text-sm-semibold'>Get Started</span>
          <motion.div variants={arrowVariants}>
            <ArrowRight className='size-20' />
          </motion.div>
        </motion.button>

        {/* Floating badge */}
        <motion.div
          className='-top-20 -right-20 absolute flex size-80 items-center justify-center rounded-full bg-yellow-500'
          variants={badgeVariants}
        >
          <Star className='size-32 text-white' fill='white' />
        </motion.div>
      </motion.div>
    </div>
  );
};
