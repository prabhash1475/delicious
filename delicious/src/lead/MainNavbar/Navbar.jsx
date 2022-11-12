import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  IconButton,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
} from "@chakra-ui/react"; 
import { Link } from "react-router-dom";
import { Cart } from "../../CartComponent/Cart";

import React from "react";
import { Login } from "../../CartComponent/Login";

const Navbar = () => {
  return (
    <div>
      <Box
        display={{ base: "none", sm: "none", md: "none", lg: "block" }}
        p={{ base: "0px", sm: "1px", md: "3px", lg: "10px" }}
        // border="1px solid red"
        ml={{ base: "0px" }}
      >
        <Box
          display="flex"
          alignItems="center"
          gap="20px"
          justifyContent="space-around"
          marginLeft={"3%"}
          marginRight="7%"
        >   
        <Link to="/">
        
          <Image
            w={{ base: "3%", sm: "7%", md: "10%", lg: "38%" }}
            // w="15%"
            src="https://i.postimg.cc/xC4gqtdf/delicious-logo.png"
            alt="logo"
          />
          </Link>

          <Box display={{ lg: "flex" }} alignItems="center">
            <img src="	https://www.licious.in/img/rebranding/location_icon.svg" />
            <Select border="none">
              <option value="option1">Banglore</option>
              <option value="option2">Mumbai</option>
              <option value="option3">Delhi</option>
            </Select>
          </Box>

          {/* <form
          style={{
            border: "2px solid gray",
            display: "flex",
            padding: "3px",
            width: "28%",
            borderRadius: "5px",
          }}
        >
          <input
            style={{ width: "90%", height: "40px" }}
            autoFocus={false}
            type="search"
            border="0px solod"
            backgroundColor=" red "
            placeholder=" Search for any Delicious Product"
          />

          <button style={{ marginLeft: "-30px" }} type="submit">
            <Image src="	https://www.licious.in/img/rebranding/search_icon.svg" />
          </button>
        </form> */}

          <Input
            width={{ sm: "12%", md: "23%", lg: "30%" }}
            h="40px"
            placeholder="Search for any Delicious Producr"
          />
          {/* <Input width="30%" placeholder="Search for any Delicious Producr" /> */}

          <Image
            marginLeft="-8%"
            src="	https://www.licious.in/img/rebranding/search_icon.svg"
          />

          <Box display="flex" alignItems="center" gap={"10px"}>
            <Image src="	https://www.licious.in/img/rebranding/category-dropdown-icon.svg" />

            {/* catogery */}
            <Menu>
              <MenuButton _hover={{ bg: "none" }} bg={"none"} as={Button}>
                <Box> Categogery</Box>
              </MenuButton>
              <MenuList>
                <MenuItem minH="48px">
                  <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/ad04872e-60af-387c-533c-efa7dc6eb565/original/Chicken_(1).png"
                    alt="Fluffybuns the destroyer"
                    mr="12px"
                  />
                  <span>Chicken</span>
                </MenuItem>
                  
               <Link to="/product"> 
               <MenuItem minH="40px" >
                  <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/eb162d28-5f88-a381-1d45-7f2f66d2c776/original/FIsh.png"
                    alt="Briyani And Kebabs"
                    mr="12px"
                  />
                  <span>Fish & Seafood</span>
                </MenuItem> 
                </Link>

                <MenuItem minH="40px">
                  <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/7113e792-7025-9e6f-6057-7174edf30856/original/Mu.png"
                    alt="Mutton"
                    mr="12px"
                  />
                  <span>Mutton</span>
                </MenuItem>
                <MenuItem minH="40px">
                  <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/43faaebc-f2ae-102a-ea01-af3e6c37a890/original/RTC.png"
                    alt="Ready to Cook"
                    mr="12px"
                  />
                  <span>Ready to Cook</span>
                </MenuItem>
                <MenuItem minH="40px">
                  <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/404e48e5-c887-1e12-7a3a-232e01fc9771/original/Prawn.png"
                    alt="Prawns"
                    mr="12px"
                  />
                  <span>Prawns</span>
                </MenuItem>
                <MenuItem minH="40px">
                  <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/5c7f1b3a-47b4-3ade-f170-f003cace2482/original/Coldcuts.png"
                    alt="Cold Cuts"
                    mr="12px"
                  />
                  <span>Cold Cuts</span>
                </MenuItem>
                <MenuItem minH="40px">
                  <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/88d8c760-ee1f-7696-7827-fcc9661925cc/original/Spread_Bottle1.png"
                    alt="Fish & Seafood"
                    mr="12px"
                  />
                  <span>Spreads</span>
                </MenuItem>
                <MenuItem minH="40px">
                  <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/04d58840-f014-e613-24d4-1908db9a7e63/original/Eggs.png"
                    alt="eggs"
                    mr="12px"
                  />
                  <span>Eggs</span>
                </MenuItem>
                <MenuItem minH="40px">
                  <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/189690c6-c9d5-2441-938b-6c7e124972c7/original/Biryani.png"
                    alt="Briyani And Kebabas"
                    mr="12px"
                  />
                  <span>Briyani And Kebabs</span>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box display="flex" alignItems="center" gap={"10px"}>
            <Image src="https://www.licious.in/img/rebranding/profile_icon.svg" />
            {/* Login */}
            <Login></Login>
          </Box>
          <Box display="flex" alignItems="center" gap={"10px"}>
            {/* <Image src="https://www.licious.in/img/rebranding/cart_icon.svg" />
            Cart */}
            <Cart />
            
          </Box>
          {/*  NITIN CART PAGE ---------------------------------- */}

          

        </Box>
      </Box>


      {/* navbar for small screen */}



      <Box display={{ base: "block", sm: "block", md: "block", lg: "none" }}>
        <Box display={"flex"} justifyContent="space-around" mx="10px">
          <Image
            // w={{ base: "3%", sm: "7%", md: "10%", lg: "15%" }}
            w="25%"
            display="flex"
            // mr="100px"
            src="https://i.postimg.cc/xC4gqtdf/delicious-logo.png"
            alt="logo"
          />
          <Menu mr="20px">
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem minH="48px">
                <Image
                  boxSize="2rem"
                  // borderRadius="full"
                  src="https://www.licious.in/img/rebranding/category-dropdown-icon.svg"
                  alt="Fluffybuns the destroyer"
                  mr="12px"
                />
                {/* <span>Category</span> */}
                {/* menu list of category */}
                <Menu>
                  <MenuButton bg={"none"} as={Button}>
                    Categogery
                  </MenuButton>
                  <MenuList>
                    <MenuItem minH="48px">
                      <Image
                        boxSize="2rem"
                        borderRadius="full"
                        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/ad04872e-60af-387c-533c-efa7dc6eb565/original/Chicken_(1).png"
                        alt="Fluffybuns the destroyer"
                        mr="12px"
                      />
                      <span>Chicken</span>
                    </MenuItem>
                    <MenuItem minH="40px">
                      <Image
                        boxSize="2rem"
                        borderRadius="full"
                        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/eb162d28-5f88-a381-1d45-7f2f66d2c776/original/FIsh.png"
                        alt="Briyani And Kebabs"
                        mr="12px"
                      />
                      <span>Fish & Seafood</span>
                    </MenuItem>
                    <MenuItem minH="40px">
                      <Image
                        boxSize="2rem"
                        borderRadius="full"
                        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/7113e792-7025-9e6f-6057-7174edf30856/original/Mu.png"
                        alt="Mutton"
                        mr="12px"
                      />
                      <span>Mutton</span>
                    </MenuItem>
                    <MenuItem minH="40px">
                      <Image
                        boxSize="2rem"
                        borderRadius="full"
                        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/43faaebc-f2ae-102a-ea01-af3e6c37a890/original/RTC.png"
                        alt="Ready to Cook"
                        mr="12px"
                      />
                      <span>Ready to Cook</span>
                    </MenuItem>
                    <MenuItem minH="40px">
                      <Image
                        boxSize="2rem"
                        borderRadius="full"
                        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/404e48e5-c887-1e12-7a3a-232e01fc9771/original/Prawn.png"
                        alt="Prawns"
                        mr="12px"
                      />
                      <span>Prawns</span>
                    </MenuItem>
                    <MenuItem minH="40px">
                      <Image
                        boxSize="2rem"
                        borderRadius="full"
                        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/5c7f1b3a-47b4-3ade-f170-f003cace2482/original/Coldcuts.png"
                        alt="Cold Cuts"
                        mr="12px"
                      />
                      <span>Cold Cuts</span>
                    </MenuItem>
                    <MenuItem minH="40px">
                      <Image
                        boxSize="2rem"
                        borderRadius="full"
                        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/88d8c760-ee1f-7696-7827-fcc9661925cc/original/Spread_Bottle1.png"
                        alt="Fish & Seafood"
                        mr="12px"
                      />
                      <span>Spreads</span>
                    </MenuItem>
                    <MenuItem minH="40px">
                      <Image
                        boxSize="2rem"
                        borderRadius="full"
                        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/04d58840-f014-e613-24d4-1908db9a7e63/original/Eggs.png"
                        alt="Fish & Seafood"
                        mr="12px"
                      />
                      <span>Fish & Seafood</span>
                    </MenuItem>
                    <MenuItem minH="40px">
                      <Image
                        boxSize="2rem"
                        borderRadius="full"
                        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/189690c6-c9d5-2441-938b-6c7e124972c7/original/Biryani.png"
                        alt="Briyani And Kebabas"
                        mr="12px"
                      />
                      <span>Briyani And Kebabs</span>
                    </MenuItem>
                  </MenuList>
                </Menu>
                {/* manulist end */}
              </MenuItem>
              <MenuItem minH="48px">
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://www.licious.in/img/rebranding/profile_icon.svg"
                  alt="Fluffybuns the destroyer"
                  mr="12px"
                />
                <span>Login</span>
              </MenuItem>

               <Link to="/cart">
              <MenuItem minH="48px">
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://www.licious.in/img/rebranding/cart_icon.svg"
                  alt="Fluffybuns the destroyer"
                  mr="12px"
                />
                <span>Cart</span>
              </MenuItem>
              </Link> 

            </MenuList>
          </Menu>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
