import { ChakraProvider } from "@chakra-ui/react";
import { ExampleDarkMode } from "components/common/Example/example";
import { ColorModeSwitcher } from "components/global/ColorModeSwitcher/ColorModeSwitcher";
import { extendedTheme } from "theme/chakra/extendedTheme";

export const App = () => (
  <ChakraProvider theme={extendedTheme}>
    <ColorModeSwitcher/>
    <ExampleDarkMode/>
  </ChakraProvider>
);
