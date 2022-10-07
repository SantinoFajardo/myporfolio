import Nav from "./navBar";
import { Box, Stack } from "@chakra-ui/react";

export default function Layout({children}:{children: JSX.Element | JSX.Element[]}){
    return(
        <Stack marginLeft={0} minHeight={"100vh"}>
            <Nav/>
            {children}
        </Stack>
    )
}