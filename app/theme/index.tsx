import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("gray.100", "#141214")(props),
    },
  }),
};

const theme = extendTheme({ config, styles });

export default theme;
