import { Box, useColorModeValue } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const ExampleDarkMode = () => {
  return (
    <Box
      padding="20px"
      bg={useColorModeValue("grayDark.200", "grayLight.200")}
	  border="1px solid"
	  borderColor={useColorModeValue("border.light", "border.dark")}
    ></Box>
  );
};
