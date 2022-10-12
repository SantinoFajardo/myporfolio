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
import { MdOutlineMusicOff,MdConnectWithoutContact } from 'react-icons/md';
import {RiMusicFill} from 'react-icons/ri'
import Cookies from 'universal-cookie'
import { useRouter } from 'next/router';
import traductionOfNav from '../../lenguajes/navBar';

const flags = {
    britain : "https://bioxtend.com/wp-content/uploads/2020/07/flag6.png",
    spain: "https://es.seaicons.com/wp-content/uploads/2015/10/Spain-Flag-icon.png"
}

export default function Nav() {
  const router = useRouter()
  const Cookie = new Cookies()
  const { isOpen, onOpen, onClose } = useDisclosure();
  let [lenguaje, setLenguaje] = useState("ES")
  let [music, setMusic] = useState(false)
  const musicSound = () => {
    setMusic(music == false ? true : false)
  }
  const changeLenguaje = () => {
    setLenguaje(lenguaje == "ES" ? "EN" : "ES")
    router.push('/')
    
  }
  Cookie.set('Lenguaje',lenguaje,{path:'/'})
  let lenguajeofPage = Cookie.get('Lenguaje')
  return (
    <>
      <Box 
      zIndex={100}
      marginLeft={"-32px"} 
      width={"98.7vw"} 
      bg="black" 
      px={{base:2,md:7}}>
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
                <MenuList alignItems={'center'} bg="#101010">
                  <MenuItem>About me</MenuItem>
                  <MenuItem>Skills</MenuItem>
                  <MenuItem>Projects</MenuItem>
                  <MenuItem>Experience</MenuItem>
                  <MenuItem>Contact me</MenuItem>
                </MenuList>
              </Menu>
          <Box ml={"15px"} fontSize={{base:"sm",md:"xl"}} letterSpacing={{base:1,md:7}}>{lenguajeofPage == "ES" ? traductionOfNav.title.ES : traductionOfNav.title.EN}</Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={"-1"}>
              <Button onClick={changeLenguaje} bg="transparent" _hover={{bg:"transparent"}}>
                <img height={"30px"} width={"30px"} src={lenguajeofPage == "ES" ? flags.spain : flags.britain}></img>
              </Button>
              <Button fontSize={"2xl"} bg='transparent' _hover={{bg:"transparent"}}>
                  <MdConnectWithoutContact color='#C83333'/>
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