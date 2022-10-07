import { ReactNode, useState } from 'react';
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
} from '@chakra-ui/react';
import { MoonIcon, SunIcon,HamburgerIcon} from '@chakra-ui/icons';
import { MdOutlineMusicOff } from 'react-icons/md';
import {RiMusicFill} from 'react-icons/ri'

const flags = {
    britain : "https://bioxtend.com/wp-content/uploads/2020/07/flag6.png",
    spain: "https://es.seaicons.com/wp-content/uploads/2015/10/Spain-Flag-icon.png"
}

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let [lenguaje, setLenguaje] = useState("ES")
  let [music, setMusic] = useState(false)
  const musicSound = () => {
    setMusic(music == false ? true : false)
  }
  const changeLenguaje = () => {
    setLenguaje(lenguaje == "ES" ? "EN" : "ES")
  }
  return (
    <>
      <Box marginLeft={"-32px"} width={"100vw"} bg={useColorModeValue('gray.100', 'gray.900')} px={{base:2,md:7}}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                  marginRight={"15px"}
                  >
                <HamburgerIcon fontSize={"25px"}/>
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <MenuItem>About me</MenuItem>
                  <MenuItem>Skills</MenuItem>
                  <MenuItem>Projects</MenuItem>
                  <MenuItem>Experience</MenuItem>
                  <MenuItem>Contact me</MenuItem>
                </MenuList>
              </Menu>
          <Box>MY PORTFOLIO</Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={"-1"}>
              <Button onClick={changeLenguaje} bg="transparent" _hover={{bg:"transparent"}}>
                <img height={"30px"} width={"30px"} src={lenguaje == "ES" ? flags.spain : flags.britain}></img>
              </Button>
              <Button
              fontSize={"2xl"}
              color={"#C83333"}
              _hover={{
                bg:"transparent"
              }}
              bg="transparent"
              onClick={musicSound}
              >
                {music == false ? <MdOutlineMusicOff/> : <RiMusicFill/>}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}