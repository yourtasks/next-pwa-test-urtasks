// components/ThemedComponent.js
import { useEffect } from "react";

const setThemeColor = (color) => {
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute("content", color);
};

const ThemedComponent = () => {
  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const newThemeColor = prefersDarkMode ? "#ff1003" : "#03ff35";
    setThemeColor(newThemeColor);

    const updateThemeColor = () => {
      const updatedThemeColor = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches
        ? "#ff1003"
        : "#03ff35";
      setThemeColor(updatedThemeColor);
    };

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", updateThemeColor);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", updateThemeColor);
    };
  }, []);

  return <div>Your content here</div>;
};

export default ThemedComponent;
