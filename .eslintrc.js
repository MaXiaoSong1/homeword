module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "@vue/standard"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/return-in-computed-property": "off",
    "space-before-function-paren": 0,
    quotes: "off",
    semi: "off",
    "comma-dangle": "off",
  },
};
