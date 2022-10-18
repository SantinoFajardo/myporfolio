import { ReactNode, useState } from "react";
import {
  Box,
  Flex,
  Avatar,
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
import {
  MdOutlineMusicOff,
  MdConnectWithoutContact,
  MdOutlineMusicNote,
} from "react-icons/md";
import { RiMusicFill } from "react-icons/ri";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import traductionOfNav from "../../lenguajes/navBar";
import Image from "next/image";
import { Link } from "react-scroll";
import s from "../../styles/Home.module.css";
import { Howl, Howler } from "howler";

const flags = {
  britain:
    "https://files.softicons.com/download/internet-cons/world-flags-orbs-icons-by-vathanx/png/256/Flag%20of%20United%20Kingdom.png",
  spain: "https://aux.iconspalace.com/uploads/1489554547.png",
};

export default function Nav() {
  const router = useRouter();
  const Cookie = new Cookies();
  const { isOpen, onOpen, onClose } = useDisclosure();
  let [lenguaje, setLenguaje] = useState("ES");
  let [music, setMusic] = useState(false);
  var sound = new Howl({
    src: ["https://s17.aconvert.com/convert/p3r68-cdx67/4ikdf-vtd8n.mp3"],
    html5: true,
    volume: 0.01,
    loop: false,
    autoplay: false,
  });
  const musicSound = () => {
    setMusic(music == false ? true : false);
    console.log(sound);
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
          boxShadow={"1px 1px 1px 1px white"}
          zIndex={100}
          marginLeft={"-30px"}
          width={"100vw"}
          bg="transparent"
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
                <Link
                  to="aboutMe"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <MenuItem _hover={{ bg: "#3E3D3D" }}>
                    {lenguajeofPage == "ES" ? "Sobre mi" : "About me"}
                  </MenuItem>
                </Link>
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <MenuItem _hover={{ bg: "#3E3D3D" }}>
                    {lenguajeofPage == "ES" ? "Habilidades" : "Skills"}
                  </MenuItem>
                </Link>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <MenuItem _hover={{ bg: "#3E3D3D" }}>
                    {lenguajeofPage == "ES" ? "Proyectos" : "Projects"}
                  </MenuItem>
                </Link>
                <Link
                  to="contactMe"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <MenuItem _hover={{ bg: "#3E3D3D" }}>
                    {lenguajeofPage == "ES" ? "Contactame" : "Contact me"}
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
            <Box
              paddingLeft={{ md: "65px" }}
              w={{ md: 300 }}
              textAlign="center"
              fontSize={{ base: "sm", sm: "xl" }}
              letterSpacing={{ base: 1, md: 7 }}
              className={music == true ? s.musicOn : s.musicOff}
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
                {music == false ? (
                  <Button
                    fontSize={"2xl"}
                    color={"#C83333"}
                    _hover={{
                      bg: "transparent",
                    }}
                    bg="transparent"
                    onClick={musicSound}
                  >
                    <MdOutlineMusicOff onClick={() => sound.play()} />
                  </Button>
                ) : (
                  <Button
                    fontSize={"2xl"}
                    color={"#C83333"}
                    _hover={{
                      bg: "transparent",
                    }}
                    bg="transparent"
                    onClick={musicSound}
                  >
                    <MdOutlineMusicNote onClick={() => sound.pause()} />
                  </Button>
                )}
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
