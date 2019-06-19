import React from 'react'
import Flex from "../lib";
const Main = () => {
  return (<Flex flexIf={true} direction={{xs:"column"}} justify={{xs:"center"}} align={{xs:"center"}}>
    <Flex show={{xs:true}}> I'm vertically and horizontally centered!1</Flex>
      <Flex  width={{xs:"50%"}}>I'm vertically and horizontally centered!2</Flex>
  </Flex>
  )
};
export default Main;