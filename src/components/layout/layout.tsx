import Nav from "./navBar";
import { Box, Stack } from "@chakra-ui/react";

export default function Layout({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <Stack>
      <Nav />
      {children}
    </Stack>
  );
}
