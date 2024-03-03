import React, { useEffect, useState } from "react";
import { Button, Icon, Fade } from "@chakra-ui/react";
import Link from "../Link";
import styles from './NaviItem.module.css'

const NaviItem = ({ active, href, children, icon, menuActive }) => {

    const [isDisplayed, setIsDisplayed] = useState(false)

    useEffect(() => {
        if (menuActive) {
            setTimeout(() => { setIsDisplayed(true) }, 200);
        } else {
            setIsDisplayed(false);
        }
    }, [menuActive]);

    return (
        <>
            <Link
                className={`naviLink ${active ? "active" : ""}`}
                href={href}
            >
                <Button
                    borderRadius="0px"
                    w="100%"
                    style={{ justifyContent: "flex-start", alignItems: "center" }}
                    leftIcon={<Icon
                        style={{ transition: "width 0.5s , height 0.5s", marginRight: "10px" }}
                        boxSize={menuActive ? "5" : "7"} color="orange.500"
                        as={icon} />
                    }>
                    {
                        isDisplayed &&
                        <Fade
                            in={menuActive}
                            style={{ position: 'relative', width: '100%' }}
                        >{children}
                        </Fade>
                    }
                </Button>
            </Link>
        </>
    );
}

export default NaviItem;