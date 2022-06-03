type MotionType = {
   animate: {
      opacity: number
   },
   initial: {
      opacity: number
   },
   exit: {
      opacity: number
   },
   transition: {
      duration: number;
   }
}

export const motion: MotionType = {
   animate: { opacity: 1 },
   initial: { opacity: 0 },
   exit: { opacity: 0 },
   transition: { duration: 0.5 }
}
