import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        black: "#303030",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
