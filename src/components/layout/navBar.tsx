import { ReactNode, useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import { MdOutlineMusicOff, MdConnectWithoutContact } from "react-icons/md";
import { RiMusicFill } from "react-icons/ri";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import traductionOfNav from "../../lenguajes/navBar";
import Image from "next/image";

const flags = {
  britain: "https://bioxtend.com/wp-content/uploads/2020/07/flag6.png",
  spain:
    "https://es.seaicons.com/wp-content/uploads/2015/10/Spain-Flag-icon.png",
};

export default function Nav() {
  const router = useRouter();
  const Cookie = new Cookies();
  const { isOpen, onOpen, onClose } = useDisclosure();
  let [lenguaje, setLenguaje] = useState("ES");
  let [music, setMusic] = useState(false);
  const musicSound = () => {
    setMusic(music == false ? true : false);
  };
  const changeLenguaje = () => {
    setLenguaje(lenguaje == "ES" ? "EN" : "ES");
    Cookie.set("Lenguaje", lenguaje, { path: "/" });
    router.push("/");
  };
  let lenguajeofPage: string = Cookie.get("Lenguaje");
  return (
    <>
      <Flex
        as="header"
        position={"sticky"}
        backgroundColor="transparent"
        backdropFilter="blur(10px)"
        w="96.4vw"
        h={["70px", "70px", "70px", "70px"]}
        top={0}
        zIndex={10}
      >
        <Box
          boxShadow={"1px 1px 1px 1px #1E1E1E"}
          zIndex={100}
          marginLeft={"-32px"}
          width={"98.7vw"}
          bg="black"
          px={{ base: 2, md: 7 }}
        >
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                marginRight={"15px"}
              >
                <HamburgerIcon fontSize={"25px"} />
              </MenuButton>
              <MenuList alignItems={"center"} bg="#101010">
                <MenuItem display={"none"} />
                <a href="#aboutMe">
                  <MenuItem _hover={{ bg: "#3E3D3D" }}>About me</MenuItem>
                </a>
                <a href="#skills">
                  <MenuItem _hover={{ bg: "#3E3D3D" }}>Skills</MenuItem>
                </a>
                <a href="#projects">
                  <MenuItem _hover={{ bg: "#3E3D3D" }}>Projects</MenuItem>
                </a>
                <a href="#contactMe">
                  <MenuItem _hover={{ bg: "#3E3D3D" }}>Contact me</MenuItem>
                </a>
              </MenuList>
            </Menu>
            <Box
              paddingLeft={{ md: "65px" }}
              w={{ md: 300 }}
              textAlign="center"
              fontSize={{ base: "sm", sm: "xl" }}
              letterSpacing={{ base: 1, md: 7 }}
            >
              {lenguajeofPage == "ES"
                ? traductionOfNav.title.ES
                : traductionOfNav.title.EN}
            </Box>
            <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={"-1"}>
                <Button
                  onClick={changeLenguaje}
                  bg="transparent"
                  _hover={{ bg: "transparent" }}
                >
                  <Image
                    height={"30px"}
                    width={"30px"}
                    src={lenguajeofPage == "ES" ? flags.spain : flags.britain}
                  />
                </Button>
                <Button
                  fontSize={"2xl"}
                  color={"#C83333"}
                  _hover={{
                    bg: "transparent",
                  }}
                  bg="transparent"
                  onClick={musicSound}
                >
                  {music == false ? <MdOutlineMusicOff /> : <RiMusicFill />}
                </Button>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
