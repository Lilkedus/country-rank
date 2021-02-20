import { AnimatePresence, motion } from "framer-motion";
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence>
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" transition={{ duration: .2 }} exit="pageExit" variants={{
        pageInitial: {
          scale: 0.9
        },
        pageAnimate: {
          scale: 1
        }
      }}>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
