import React from 'react'
import {
    Box,
    Flex,
    Image,
    Link,
    Spacer,
    Text
  } from '@chakra-ui/react';
  import { AiFillGift } from "react-icons/ai";
export const OfferBar = () => {
  return (
    <Box  width='100%' bg='rgb(254,232,232)' height='50px' display='flex' justifyContent='center' alignItems='center' pl='-3px' >       
        <Flex width='70%' margin='auto' justifyContent={'space-around'} gap={'10px'} >
            <Box>
                <AiFillGift cursor='pointer' style={{color: 'rgb(255,168,168)', border:'1px', fontSize: '24px'}} />
            </Box>

            <Box className='flat' fontFamily='Roboto' cursor='pointer'  pl='13px' >  
                 <Text fontSize={{ base: '10px', md: '14px', lg: '20px' }}> Flat 199 Store</Text>
            </Box>

            <Box className='flat' fontFamily='Roboto' cursor='pointer' color= 'rgb(255,168,168)'   pl='13px' >
                                 <Text fontSize={{ base: '9px', md: '14px', lg: '20px' }}>Shop Now </Text>

            </Box>
            <Spacer/>

            <Link href='https://www.myglamm.com/store-locator' >
            <Box fontFamily='Roboto' cursor='pointer' fontWeight='500' fontSize='13px'  >
                <Flex fontSize={"13px"} width={"150px"} justifyContent="space-between"><Image width={"20px"} src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/shop-512.png"></Image>
                <Text >MY GLAMM STORE</Text></Flex>
            </Box></Link>
        </Flex>       
    </Box>
  )
}
