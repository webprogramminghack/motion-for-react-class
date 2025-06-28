'use client';

import { useState } from 'react';
import { RefreshButton } from '@/components/ui/refresh-button';
import {
  UIBlock,
  UIBlockChallenge,
  UIBlockContent,
  UIBlockDescription,
  UIBlockTitle,
} from '@/components/ui/ui-block';
import { useScrollToHash } from '@/hooks/use-scroll-to-hash';
import { PremiumCard } from './animated-card-practice';
import { ProductCardDemo } from './product-card-practice';

export default function VariantsPracticePage() {
  useScrollToHash();
  const [productReplayKey, setProductReplayKey] = useState(0);

  return (
    <>
      <h1 className='display-xl-bold mb-lg text-neutral-25'>
        Variants Practice
      </h1>
      <p className='mb-3xl text-lg-regular text-neutral-100'>
        Master Motion variants for creating coordinated animations. Learn how
        parent variants propagate to children and how to manage complex state
        transitions.
      </p>

      <div className='space-y-3xl'>
        {/* Practice 1: Premium Animated Card */}
        <UIBlock>
          <div id='animated-card' className='scroll-mt-24' />
          <UIBlockTitle>Practice 1: Premium Animated Card</UIBlockTitle>
          <UIBlockDescription>
            Create a premium feature card with coordinated hover animations. All
            child elements should animate through variant propagation when the
            card is hovered, creating a cohesive and polished effect.
          </UIBlockDescription>

          <UIBlockContent>
            <PremiumCard />
          </UIBlockContent>

          <UIBlockChallenge>
            <li>Parent card has hover state that triggers all animations</li>
            <li>Icon rotates 360° while container counter-rotates</li>
            <li>Title slides right and description moves up</li>
            <li>Button scales and shifts with arrow animation</li>
            <li>Sparkles animate with staggered delays</li>
            <li>Badge appears with spring animation on hover</li>
            <li>All animations coordinate through variant propagation</li>
          </UIBlockChallenge>
        </UIBlock>

        {/* Practice 2: Interactive Product Card Gallery */}
        <UIBlock>
          <div id='product-card' className='scroll-mt-24' />
          <UIBlockTitle>
            Practice 2: Interactive Product Card Gallery
          </UIBlockTitle>
          <UIBlockDescription>
            Create an e-commerce product card gallery with variant-based state
            management. Each card has multiple states (idle, hover, selected,
            loading) with coordinated animations propagating to child elements.
          </UIBlockDescription>

          <div className='mb-lg flex justify-end'>
            <RefreshButton
              onClick={() => setProductReplayKey((prev) => prev + 1)}
              label='Reset Cart'
            />
          </div>

          <UIBlockContent>
            <ProductCardDemo key={productReplayKey} />
          </UIBlockContent>

          <UIBlockChallenge>
            <li>Cards have 4 states: idle, hover, selected, loading</li>
            <li>Image, price, and button respond to parent state</li>
            <li>Loading state shows spinner and disabled interaction</li>
            <li>Selected state shows green checkmark badge</li>
            <li>Cart counter animates when items are added</li>
            <li>Each card state has unique visual treatment</li>
            <li>State transitions are smooth with spring physics</li>
          </UIBlockChallenge>
        </UIBlock>

        {/* Practice 3: Music Player Controls */}
        <UIBlock>
          <div id='music-player' className='scroll-mt-24' />
          <UIBlockTitle>Practice 3: Music Player Controls</UIBlockTitle>
          <UIBlockDescription>
            Create a Spotify-style music player with variant-based animations.
            The player has multiple states (playing, paused, loading) with all
            child elements coordinating through parent variants.
          </UIBlockDescription>

          <UIBlockContent>{null}</UIBlockContent>

          <UIBlockChallenge>
            <li>Player states: playing, paused, loading</li>
            <li>Album art rotates continuously when playing</li>
            <li>Equalizer bars animate only during playback</li>
            <li>Play button changes color based on state</li>
            <li>Progress bar color reflects player state</li>
            <li>All animations coordinate through parent variants</li>
            <li>Loading state disables interactions temporarily</li>
          </UIBlockChallenge>
        </UIBlock>
      </div>
    </>
  );
}
