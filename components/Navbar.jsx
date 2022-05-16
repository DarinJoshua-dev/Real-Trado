import Link from "next/link";
import Image from "next/image";
import Router /* , { useRouter } */ from "next/router";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import {
  MdSell,
  MdSpaceDashboard,
  MdOutlineLogin,
  MdOutlineLogout,
} from "react-icons/md";
import image from "../assets/images/Logo.png";

const Navbar = () => (
  <Flex p="2" borderBottom="1px" borderColor="gray.100">
    <Image src={image} height={55} width={65} alt="Logo here" />
    <Box fontSize="3xl" color="blue.300" fontWeight="bold">
      <Link href="/" paddingLeft="2">
        Real Trado
      </Link>
    </Box>
    <Spacer />
    <Box>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FcMenu />}
          variant="outlined"
          color="red.400"
        />
        <MenuList>
          <Link href="/api/auth/login">
            <MenuItem icon={<MdOutlineLogin />}>Login/Signup</MenuItem>
          </Link>
          <Link href="/" passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href="/search" passHref>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>
          <Link href="/search?purpose=for-sale" passHref>
            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
          </Link>
          <Link href="/search?purpose=for-rent" passHref>
            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
          </Link>
          <Link href="https://tally.so/r/wgDb8O" passHref>
            <MenuItem icon={<MdSell />}>Sell Property</MenuItem>
          </Link>
          <Link href="https://real-trado-recommend.herokuapp.com/" passHref>
            <MenuItem icon={<MdSpaceDashboard />}>
              Investment Dashboard - Real Trado Recommend
            </MenuItem>
          </Link>
          <Link href="/api/auth/logout">
            <MenuItem icon={<MdOutlineLogout />}>Logout</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;
