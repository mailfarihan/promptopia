'use client'
import { motion, AnimatePresence } from "framer-motion"

const AnimatePage = ({children}) => {
  return (
    <>
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 15}}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15}}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    </>
  )
}

export default AnimatePage