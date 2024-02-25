import { Button } from "@chakra-ui/react";
import Link from "../Link";

const NaviItem = (props)=>{

    return(     
        <Button borderRadius="0px">
            <Link 
                className={`naviLink ${props.active ? "active": ""}`}
                href={props.href}>{props.children}
            </Link>
        </Button>
 
    );
}

export default NaviItem;