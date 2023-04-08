import { useColorMode, Switch, SwitchProps } from "@chakra-ui/react";

// by default, Chakra disables transitions while color mode changes so that's why the switch was 'snapping' instead of 'sliding'
// https://github.com/chakra-ui/chakra-ui/pull/5946
// https://stackoverflow.com/questions/74511193/smooth-transition-dark-light-mode-chakraui
// https://codesandbox.io/s/stack-overflow-chakra-ui-theme-transition-yl0ey3?file=/src/App.js

export const ColorModeToggle: React.FC<SwitchProps> = (props): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();
  const darkModeOn = colorMode === "dark";

  const handleToggle: React.ChangeEventHandler<HTMLInputElement> = (_e) => {
    toggleColorMode();

    // temp override chakra's styles during color change to enable transform transitions for the thumb element
    // this enables the switch to slide smoothly
    const styleEl = document.createElement("style");
    const css = document.createTextNode(
      ".chakra-switch__thumb { transition: transform var(--chakra-transition-duration-normal) !important; }",
    );
    styleEl.appendChild(css);
    document.head.appendChild(styleEl);

    // remove the style element after the transition completes
    setTimeout(() => {
      document.head.removeChild(styleEl);
    }, 200);
  };

  return <Switch {...props} variant="colorMode" onChange={handleToggle} isChecked={darkModeOn} />;
};
