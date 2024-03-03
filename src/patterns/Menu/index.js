import React, {useState} from "react";
import NaviItem from "../../components/NaviItem";
import menus from "../../../public/assets/menus";
import { HamburgerIcon } from '@chakra-ui/icons';
import { Flex, Button, Box } from "@chakra-ui/react";

const Menu = (props) =>{

    const [menuActive, setMenuActive] = useState(true);

    const handleClick = ()=> {
        setMenuActive(!menuActive);
    }

    return(
        <Box 
            bg="green.500" 
            h='100vh' 
            w={menuActive ? "12vw" : "3.2vw"}
            style={{transition:"width 0.5s"}}
            >
            
            <Flex gap="10px" direction="column" justify="center" wrap="nowrap" >
                <Box style={{display:"inline", top:0,left:0, paddingLeft:"0.29vw", paddingTop:"1vh"}}>
                    <Flex direction="row" wrap="wrap" align="center">
                        <Button onClick={handleClick} ><HamburgerIcon color="orange.500" /></Button>        
                    </Flex>
                </Box>
                {menus.map((menu, index)=>(
                    <Box style={{ width: '100%'}} key={index}>
                        <NaviItem menuActive={menuActive} href={menu.href} icon={menu.icon}>{menu.name}</NaviItem>
                    </Box>
                ))}

            </Flex>
        </Box>
        
    );
}

export default Menu;