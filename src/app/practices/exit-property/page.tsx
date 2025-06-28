'use client';

import {
  UIBlock,
  UIBlockChallenge,
  UIBlockContent,
  UIBlockDescription,
  UIBlockList,
  UIBlockTitle,
  UIBlockTrigger,
} from '@/components/ui/ui-block';
import { useScrollToHash } from '@/hooks/use-scroll-to-hash';
import { AnimatePresenceModeDemo } from './animate-presence-modes-practice';
import {
  FadeOutExample,
  RotateExample,
  ScaleDownExample,
  SlideOutExample,
} from './exit-basics-practice';
import { ExitStyleDemo } from './exit-styles-practice';
import { ListAnimationDemo } from './list-animations-practice';

export default function ExitPropertyPage() {
  useScrollToHash();
  return (
    <>
      <h1 className='display-xl-bold mb-lg text-neutral-25'>
        Exit Property Practice
      </h1>
      <p className='mb-3xl text-lg-regular text-neutral-100'>
        Master exit animations using AnimatePresence. Learn how to animate
        elements as they leave the DOM with different styles and modes.
      </p>

      <div className='space-y-3xl'>
        {/* Practice 1: Basic Exit Animations */}
        <UIBlock defaultValue='fade-out'>
          <div id='exit-basics' className='scroll-mt-24' />
          <UIBlockTitle>Practice 1: Basic Exit Animations</UIBlockTitle>
          <UIBlockDescription>
            Master the fundamentals of exit animations. Each element needs
            AnimatePresence to enable exit animations when removed from the DOM.
          </UIBlockDescription>

          <UIBlockList>
            <UIBlockTrigger value='fade-out'>Fade Out</UIBlockTrigger>
            <UIBlockTrigger value='scale-down'>Scale Down</UIBlockTrigger>
            <UIBlockTrigger value='slide-out'>Slide Out</UIBlockTrigger>
            <UIBlockTrigger value='rotate-fade'>Rotate & Fade</UIBlockTrigger>
          </UIBlockList>

          <UIBlockContent value='fade-out'>
            <FadeOutExample />
          </UIBlockContent>
          <UIBlockContent value='scale-down'>
            <ScaleDownExample />
          </UIBlockContent>
          <UIBlockContent value='slide-out'>
            <SlideOutExample />
          </UIBlockContent>
          <UIBlockContent value='rotate-fade'>
            <RotateExample />
          </UIBlockContent>

          <UIBlockChallenge>
            <li>AnimatePresence wraps elements that can be removed</li>
            <li>Exit prop defines animation when element leaves</li>
            <li>Initial and animate props work as usual</li>
            <li>Transition timing applies to all animation phases</li>
            <li>Elements must have unique keys for exit detection</li>
          </UIBlockChallenge>
        </UIBlock>

        {/* Practice 2: Exit Animation Styles */}
        <UIBlock defaultValue='fade'>
          <div id='exit-styles' className='scroll-mt-24' />
          <UIBlockTitle>Practice 2: Exit Animation Styles</UIBlockTitle>
          <UIBlockDescription>
            Explore different exit animation styles. Each style creates a unique
            visual effect when elements leave the page.
          </UIBlockDescription>

          <UIBlockList>
            <UIBlockTrigger value='fade'>Fade</UIBlockTrigger>
            <UIBlockTrigger value='slide'>Slide</UIBlockTrigger>
            <UIBlockTrigger value='scale'>Scale</UIBlockTrigger>
            <UIBlockTrigger value='rotate'>Rotate</UIBlockTrigger>
            <UIBlockTrigger value='blur'>Blur</UIBlockTrigger>
          </UIBlockList>

          <UIBlockContent value='fade'>
            <ExitStyleDemo style='fade' />
          </UIBlockContent>
          <UIBlockContent value='slide'>
            <ExitStyleDemo style='slide' />
          </UIBlockContent>
          <UIBlockContent value='scale'>
            <ExitStyleDemo style='scale' />
          </UIBlockContent>
          <UIBlockContent value='rotate'>
            <ExitStyleDemo style='rotate' />
          </UIBlockContent>
          <UIBlockContent value='blur'>
            <ExitStyleDemo style='blur' />
          </UIBlockContent>

          <UIBlockChallenge>
            <li>Fade: Simple opacity transition</li>
            <li>Slide: Element slides out to the left</li>
            <li>Scale: Element shrinks to nothing</li>
            <li>Rotate: Spins while fading out</li>
            <li>Blur: Applies blur filter during exit</li>
            <li>Combine multiple properties for complex effects</li>
          </UIBlockChallenge>
        </UIBlock>

        {/* Practice 3: AnimatePresence Modes */}
        <UIBlock defaultValue='sync'>
          <div id='animate-presence-modes' className='scroll-mt-24' />
          <UIBlockTitle>Practice 3: AnimatePresence Modes</UIBlockTitle>
          <UIBlockDescription>
            Understand how different AnimatePresence modes affect transitions.
            Try switching between sync and wait modes, and experiment with
            initial={`{false}`}.
          </UIBlockDescription>

          <UIBlockList>
            <UIBlockTrigger value='sync'>Sync Mode</UIBlockTrigger>
            <UIBlockTrigger value='wait'>Wait Mode</UIBlockTrigger>
            <UIBlockTrigger value='sync-no-initial'>
              Sync (No Initial)
            </UIBlockTrigger>
            <UIBlockTrigger value='wait-no-initial'>
              Wait (No Initial)
            </UIBlockTrigger>
          </UIBlockList>

          <UIBlockContent value='sync'>
            <AnimatePresenceModeDemo mode='sync' useInitialFalse={false} />
          </UIBlockContent>
          <UIBlockContent value='wait'>
            <AnimatePresenceModeDemo mode='wait' useInitialFalse={false} />
          </UIBlockContent>
          <UIBlockContent value='sync-no-initial'>
            <AnimatePresenceModeDemo mode='sync' useInitialFalse={true} />
          </UIBlockContent>
          <UIBlockContent value='wait-no-initial'>
            <AnimatePresenceModeDemo mode='wait' useInitialFalse={true} />
          </UIBlockContent>

          <UIBlockChallenge>
            <li>sync: Exit and enter animations happen simultaneously</li>
            <li>wait: Exit completes before enter animation starts</li>
            <li>initial={`{false}`} prevents animation on first mount</li>
            <li>Use unique keys to trigger exit/enter animations</li>
            <li>Mode affects timing of multi-element transitions</li>
          </UIBlockChallenge>
        </UIBlock>

        {/* Practice 4: List Exit Animations */}
        <UIBlock defaultValue='slide'>
          <div id='list-animations' className='scroll-mt-24' />
          <UIBlockTitle>Practice 4: List Exit Animations</UIBlockTitle>
          <UIBlockDescription>
            Practice animating lists where items can be added and removed.
            Notice how each item animates independently with optional delays for
            a cascading effect.
          </UIBlockDescription>

          <UIBlockList>
            <UIBlockTrigger value='slide'>Slide Style</UIBlockTrigger>
            <UIBlockTrigger value='scale'>Scale Style</UIBlockTrigger>
            <UIBlockTrigger value='fade'>Fade Style</UIBlockTrigger>
          </UIBlockList>

          <UIBlockContent value='slide'>
            <ListAnimationDemo animationStyle='slide' />
          </UIBlockContent>
          <UIBlockContent value='scale'>
            <ListAnimationDemo animationStyle='scale' />
          </UIBlockContent>
          <UIBlockContent value='fade'>
            <ListAnimationDemo animationStyle='fade' />
          </UIBlockContent>

          <UIBlockChallenge>
            <li>Each list item has unique key for proper exit detection</li>
            <li>AnimatePresence wraps entire list</li>
            <li>mode="sync" allows multiple items to animate simultaneously</li>
            <li>mode="popLayout" maintains layout during exits</li>
            <li>layout prop enables smooth position transitions</li>
            <li>Combine with stagger for cascading effects</li>
          </UIBlockChallenge>
        </UIBlock>
      </div>
    </>
  );
}
