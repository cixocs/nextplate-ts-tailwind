const serialNumToRem = (length = 100) => {
  const rems = {};
  [...Array(length).keys()].forEach((v) => {
    rems[v] = `${v / 16}rem`;
  });
  return rems;
};

module.exports = {
  mode: "jit",
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screen: {
      md: "769px",
      mdlg: "835px",
    },
    fontSize: {
      base: "4.267vw",
      basePc: "16px",
      ...serialNumToRem(),
    },
    spacing: {
      ...serialNumToRem(500),
    },
    extend: {
      transitionTimingFunction: {
        quadIn: "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
        cubicIn: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
        quartIn: "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
        quintIn: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
        sineIn: "cubic-bezier(0.47, 0, 0.745, 0.715)",
        expoIn: "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        circIn: "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
        backIn: "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
        quadOut: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        cubicOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        quartOut: "cubic-bezier(0.165, 0.84, 0.44, 1)",
        quintOut: "cubic-bezier(0.23, 1, 0.32, 1)",
        sineOut: "cubic-bezier(0.39, 0.575, 0.565, 1)",
        expoOut: "cubic-bezier(0.19, 1, 0.22, 1)",
        circOut: "cubic-bezier(0.075, 0.82, 0.165, 1)",
        backOut: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        quadInOut: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
        cubicInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
        quartInOut: "cubic-bezier(0.77, 0, 0.175, 1)",
        quintInOut: "cubic-bezier(0.86, 0, 0.07, 1)",
        sineInOut: "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
        expoInOut: "cubic-bezier(1, 0, 0, 1)",
        circInOut: "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
        backInOut: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
    },
  },
  plugins: [],
};
