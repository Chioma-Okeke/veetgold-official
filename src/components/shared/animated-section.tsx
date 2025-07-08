
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

export const AnimatedSection = ({ children, className, ...props }: { children: React.ReactNode, className?: string }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.08,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}