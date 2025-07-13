import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./pages/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                orbitron: ["var(--font-orbitron)"],
                sans: ["var(--font-open-sans)"],
            },
            colors: {
                greyscale: {
                    text: {
                        title: "hsl(var(--greyscale-text-title) / <alpha-value>)",
                    },
                },
            },
            letterSpacing: {
                "neg-tight": "-0.125rem", // -2px
            },
            textIndent: {
                sm: "0.5rem",
                md: "1rem",
                lg: "2rem",
                xl: "3rem",
            },
        },
    },
    plugins: [],
};
export default config;
