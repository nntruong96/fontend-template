/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
import { Flex, Image, Text, Button, Icon } from '@chakra-ui/react';
import { ColorModeSwitcher } from 'components/ColorModeSwitcher';
import logo from 'images/site-logo.png';
import { BsFillPersonPlusFill, BsArrowBarRight } from 'react-icons/bs';
export default function Index(props) {
  return (
    <Flex justifyContent="space-between" p="12px">
      {/* <Image src={logo} alt="logo" /> */}
      <Text>Logo</Text>
      <Flex>
        <Button w="120px" mr="12px">
          <Icon as={BsFillPersonPlusFill} mr="12px" />
          SIGN UP
        </Button>
        <Button mr="12px" colorScheme="blue">
          <Icon as={BsArrowBarRight} mr="12px" />
          Login
        </Button>
        <ColorModeSwitcher />
      </Flex>
    </Flex>
  );
}
