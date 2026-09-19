import { motion } from 'framer-motion';

export default function ScrollReveal({
  children,
  as = 'div',
  className,
  delay = 0,
  y = 28,
  duration = 0.6,
  amount = 0.2,
  once = true,
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
