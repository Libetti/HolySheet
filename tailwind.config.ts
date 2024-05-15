import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#809bce",
                secondary: "#95b8d1",
                tertiary:"#b8e0d2",
                other:"#d6eadf",
                alt:"#eac4d5"
            },
        },
    },
    plugins: [require("daisyui")],
};
export default config;
