import React from "react";
import NextHead from 'next/head';

const Head = (props) => {
    return(
        <div>
            <NextHead>
                <title>{props.title}</title>
            </NextHead>
        </div>
    );
}

export default Head;