import { 
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton, 
    DrawerContent, 
    DrawerHeader, 
    DrawerOverlay, 
    useDisclosure } from "@chakra-ui/react"
import { useState } from "react"


export const Cart=()=>{
    // function SizeExample() {
        const [size, setSize] = useState('');
        const { isOpen, onOpen, onClose } = useDisclosure();
      
        const handleClick = (newSize) => {
          setSize(newSize)
          onOpen()
        }
      
        const sizes = ['sm'];
      
        return (
          <>
            {sizes.map((size) => (
              <Button
                onClick={() => handleClick(size)}
                key={size}
                m={4}
              >Cart</Button>
            ))}
      
            <Drawer onClose={onClose}  isOpen={isOpen} size={size}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader bg={'white'} color={'black'} fontSize={"2xl"}>
                Order Summary
                </DrawerHeader>
                <DrawerBody>
                 
                  
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        )
      }
// }