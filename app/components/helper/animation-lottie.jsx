'use client'

import dynamic from 'next/dynamic'
import { memo } from 'react'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

function AnimationLottie({ animationData, loop = true, autoplay = true, width = '95%' }) {
  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      style={{ width }}
    />
  )
}

export default memo(AnimationLottie)

/*
'use client';

import { useEffect } from 'react';
import Lottie from 'lottie-react';

const AnimationLottie = ({ animationPath }) => {
  useEffect(() => {
    // Optional: you can log or perform DOM-safe logic here
  }, []);

  return (
    <Lottie
      animationData={animationPath}
      loop
      autoplay
      style={{ width: '95%' }}
    />
  );
};

export default AnimationLottie;
*/

/*
"use client";

import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;
*/