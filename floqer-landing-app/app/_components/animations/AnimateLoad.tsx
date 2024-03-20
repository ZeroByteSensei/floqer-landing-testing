import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay: number;
}

const AnimateLoad = ({ children, delay }: Props) => {
  return (
    <motion.span
      initial={{ opacity: 0, translateY: "-3px" }}
      animate={{
        opacity: 1,
        translateY: "0px",
      }}
      transition={{
        duration: 0.3,
        delay,
      }}
    >
      {children}
    </motion.span>
  );
};

export default AnimateLoad;