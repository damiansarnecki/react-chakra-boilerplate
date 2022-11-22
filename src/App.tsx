import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeSwitcher } from "components/global/ColorModeSwitcher/ColorModeSwitcher";
import { extendedTheme } from "theme/chakra/extendedTheme";

export const App = () => (
  <ChakraProvider theme={extendedTheme}>
    <ColorModeSwitcher />
  </ChakraProvider>
);
