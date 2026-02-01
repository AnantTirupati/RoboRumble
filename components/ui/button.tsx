"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {

        const variants = {
            primary: "bg-neon-cyan text-navy font-bold hover:shadow-[0_0_20px_rgba(100,255,218,0.5)] border border-neon-cyan",
            secondary: "bg-neon-purple text-white font-bold hover:shadow-[0_0_20px_rgba(189,52,254,0.5)] border border-neon-purple",
            outline: "bg-transparent text-neon-cyan border border-neon-cyan hover:bg-neon-cyan/10",
            ghost: "bg-transparent text-foreground hover:text-neon-cyan hover:bg-white/5",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg uppercase tracking-wide",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                    "relative rounded-md transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                <span className="relative z-10 flex items-center gap-2">{children}</span>
            </motion.button>
        );
    }
);

Button.displayName = "Button";

export { Button };
