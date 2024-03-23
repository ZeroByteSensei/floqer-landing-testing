import { useState } from "react";
import { motion, Variants } from "framer-motion";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      duration: 0.7,
      // damping: 24
    },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const itemClass =
  "cursor-pointer border-2 border-gray-200 border-transparent hover:text-primary hover:border-primary p-2 rounded-md transition-all";
export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="md:hidden relative flex items-center justify-center p-2 border-2 border-gray-200 transition-all rounded-md"
    >
      <motion.button
        // whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className=""
      >
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
          whileHover={{
            borderColor: "black",
          }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      {/* <div> */}
        <motion.div
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                // delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
          className="absolute top-10 right-[-3.5rem] bg-gray-100 shadow-md rounded-md p-2 flex flex-col gap-2 w-40 bg-opacity-90 backdrop-blur-sm"
        >
          <motion.span variants={itemVariants} className={itemClass}>
            How it works
          </motion.span>
          <motion.span variants={itemVariants} className={itemClass}>
            Integrations
          </motion.span>
          <motion.span variants={itemVariants} className={itemClass}>
            FAQs
          </motion.span>
          <motion.span variants={itemVariants} className={itemClass}>
            Contact us
          </motion.span>
        </motion.div>
      {/* </div> */}
    </motion.nav>
  );
}
