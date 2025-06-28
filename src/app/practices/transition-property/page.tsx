'use client';

import {
  UIBlock,
  UIBlockChallenge,
  UIBlockContent,
  UIBlockDescription,
  UIBlockList,
  UIBlockReplayButton,
  UIBlockTitle,
  UIBlockTrigger,
} from '@/components/ui/ui-block';
import { useScrollToHash } from '@/hooks/use-scroll-to-hash';

export default function TransitionPropertyPage() {
  useScrollToHash();
  return (
    <>
      <h1 className='display-xl-bold mb-lg text-neutral-25'>
        Transition Property
      </h1>
      <p className='mb-3xl text-lg-regular text-neutral-100'>
        Master the art of motion timing through hands-on practice. These
        exercises will help you understand how different transition properties
        affect the feel and personality of your animations.
      </p>

      <div className='space-y-3xl'>
        {/* Practice 1: Notification Cards */}
        <UIBlock defaultValue='success'>
          <div id='notification-cards' className='scroll-mt-24' />
          <UIBlockTitle>Practice 1: Notification Card Animations</UIBlockTitle>
          <UIBlockDescription>
            Create smooth notification animations with different easing curves.
            Each notification type should have a unique entrance that matches
            its urgency and tone.
          </UIBlockDescription>

          <UIBlockList>
            <UIBlockTrigger value='success'>Success</UIBlockTrigger>
            <UIBlockTrigger value='warning'>Warning</UIBlockTrigger>
            <UIBlockTrigger value='error'>Error</UIBlockTrigger>
            <UIBlockTrigger value='info'>Info</UIBlockTrigger>
          </UIBlockList>

          <UIBlockReplayButton />

          <UIBlockContent value='success'>{null}</UIBlockContent>

          <UIBlockContent value='warning'>{null}</UIBlockContent>

          <UIBlockContent value='error'>{null}</UIBlockContent>

          <UIBlockContent value='info'>{null}</UIBlockContent>

          <UIBlockChallenge>
            <li>
              <strong>Success:</strong> Smooth easeOut for reliability
            </li>
            <li>
              <strong>Warning:</strong> backOut easing for attention
            </li>
            <li>
              <strong>Error:</strong> Spring animation from top for urgency
            </li>
            <li>
              <strong>Info:</strong> anticipate easing with slight rotation
            </li>
            <li>Icon should animate with spring physics after card appears</li>
            <li>Text elements should slide in with staggered delays</li>
          </UIBlockChallenge>
        </UIBlock>

        {/* Practice 2: Dashboard Cards */}
        <UIBlock defaultValue='revenue'>
          <div id='dashboard-cards' className='scroll-mt-24' />
          <UIBlockTitle>Practice 2: Dashboard Card Interactions</UIBlockTitle>

          <UIBlockDescription>
            Create sophisticated hover and click interactions using per-property
            transitions. Mix spring and tween animations for natural, responsive
            behavior.
          </UIBlockDescription>

          <UIBlockList>
            <UIBlockTrigger value='revenue'>Revenue</UIBlockTrigger>
            <UIBlockTrigger value='users'>Users</UIBlockTrigger>
            <UIBlockTrigger value='orders'>Orders</UIBlockTrigger>
            <UIBlockTrigger value='conversion'>Conversion</UIBlockTrigger>
          </UIBlockList>

          <UIBlockReplayButton />

          <UIBlockContent value='revenue'>{null}</UIBlockContent>

          <UIBlockContent value='users'>{null}</UIBlockContent>

          <UIBlockContent value='orders'>{null}</UIBlockContent>

          <UIBlockContent value='conversion'>{null}</UIBlockContent>

          <UIBlockChallenge>
            <li>Hover: Lift with tween, background rotation with linear</li>
            <li>Click: Expand with spring, fade content with tween</li>
            <li>Each property uses appropriate transition type</li>
            <li>Value scales with high-stiffness spring on expand</li>
            <li>Smooth height animations using spring physics</li>
            <li>Different easing for expand vs collapse opacity</li>
          </UIBlockChallenge>
        </UIBlock>

        {/* Practice 3: Form Transitions */}
        <UIBlock>
          <div id='form-transitions' className='scroll-mt-24' />
          <UIBlockTitle>Practice 3: Multi-Stage Form Transitions</UIBlockTitle>

          <UIBlockDescription>
            Create smooth multi-step form flows with progress indicators and
            seamless transitions between steps. Master form UX patterns with
            motion.
          </UIBlockDescription>

          <UIBlockContent>{null}</UIBlockContent>

          <UIBlockChallenge>
            <li>Progress bar animates with spring physics</li>
            <li>Current step indicator scales up smoothly</li>
            <li>Form slides in from right with spring transition</li>
            <li>Success state appears with orchestrated animations</li>
            <li>Form fields stagger in with consistent delays</li>
            <li>Back/Next buttons maintain proper state</li>
          </UIBlockChallenge>
        </UIBlock>
      </div>
    </>
  );
}
