import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Flex, Text } from "theme-ui";
import { LogoIcon } from "src/icons/LogoIcon";
import { Breakpoint, useBreakpoint } from "src/hooks/useBreakpoint";

export const Logo: React.FC = () => {
  const history = useHistory();
  const breakpoint = useBreakpoint();
  return (
    <Flex
      sx={{ cursor: "pointer" }}
      onClick={() => {
        history.push("/");
      }}
    >
      <Box sx={{ fill: "text" }} mr={3}>
        <LogoIcon />
      </Box>
      {breakpoint === Breakpoint.DESKTOP && (
        <span style={{textAlign:'center',fontSize:50}}>SKILLEX</span>
      )}
    </Flex>
  );
};
