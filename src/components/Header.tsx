import React from "react";
import { Box, Flex, useColorMode } from "theme-ui";
import { Logo } from "src/components/Logo";
import { ConnectWallet } from "src/components/ConnectWallet";
import { useLocation } from "react-router-dom";
import { Moon, Sun } from "phosphor-react";

export const Header: React.FC = () => {
  const location = useLocation();
  return (
    <Flex sx={{ justifyContent: "space-between", alignItems: "center" }} mb={4}>
      {location.pathname === "/search" ? <Box /> : <Logo />}
      <Flex>
        <ConnectWallet />
      </Flex>
    </Flex>
  );
};
