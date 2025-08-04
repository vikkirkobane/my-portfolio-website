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

