'use client'

import AnimationLottie from './helper/animation-lottie'
import animationData from '../assets/lottie/development.json'   // pick the JSON you need

export default function LottieExperience() {
  return (
    <AnimationLottie animationData={animationData} />
  )
}
