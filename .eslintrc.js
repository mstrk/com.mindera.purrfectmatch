module.exports = {
  root: true,
  plugins: ["prettier"],
  extends: ["@react-native", "prettier"],
  rules: {
    "prettier/prettier": "warn",
    "react/react-in-jsx-scope": "off",
    "react-hooks/exhaustive-deps": "warn",
  },
};
