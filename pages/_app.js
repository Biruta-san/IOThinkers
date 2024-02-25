import { ChakraProvider } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react"; 
import Menu from "../src/patterns/Menu";

function MyApp({ Component, pageProps }) {
   
  const userName = "Ryan"

  return (
      <ChakraProvider>
        <Flex direction="row">
          <Menu userName={userName}/>
          <Component userName={userName} {...pageProps} />
        </Flex>
      </ChakraProvider>
    );  
}

export default MyApp;