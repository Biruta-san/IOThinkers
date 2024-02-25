import React from "react";
import NaviItem from "../../components/NaviItem";
import menus from "../../../public/assets/menus";
import { HamburgerIcon } from '@chakra-ui/icons';
import { Flex, Button, Box, Text } from "@chakra-ui/react";

const Menu = (props) =>{
    return(
        <Box bg="green.500" h='100vh'>
            <Flex direction="column">
                <Box>
                    <Flex direction="row">
                        <Button><HamburgerIcon /></Button>
                        <Text>{`Bem vindo! ${props.userName}`}</Text>
                    </Flex>
                </Box>
                {
                    menus.map((menu, index)=>(
                        <NaviItem key={index} href={menu.href}>{menu.name}</NaviItem>
                    ))
                }
            </Flex>
        </Box>
        
    );
}

export default Menu;