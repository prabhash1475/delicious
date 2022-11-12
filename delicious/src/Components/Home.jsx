import React from "react";
import {
  background,
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  GridItem,
  Image,
  Img,
  Link,
  Spinner,
  Stack,
  Heading,
  Text,
  Flex,
  Spacer,
  Divider,
  Avatar,
} from "@chakra-ui/react";
import Carousel from "better-react-carousel";
import useFetch from "../CustomHooks/useFetch";
import { ChevronRightIcon } from "@chakra-ui/icons";

const bannerSlider = [
  {
    id: "1",
    image: "https://d2407na1z3fc0t.cloudfront.net/Slider/banner_63630e9d6ba0e",
  },
  {
    id: "2",
    image: "https://d2407na1z3fc0t.cloudfront.net/Slider/banner_62a882919ddbf",
  },

  {
    id: "3",
    image: "https://d2407na1z3fc0t.cloudfront.net/Slider/banner_620b7b6d14949",
  },
  {
    id: "4",
    image: "https://d2407na1z3fc0t.cloudfront.net/Slider/banner_620b797c88952",
  },
  {
    id: "5",
    image: "https://d2407na1z3fc0t.cloudfront.net/Slider/banner_620b79d5c017f",
  },
  {
    id: "6",
    image: "https://d2407na1z3fc0t.cloudfront.net/Slider/banner_620b7a04f421e",
  },
  {
    id: "7",
    image: "https://d2407na1z3fc0t.cloudfront.net/Slider/banner_620b7a8d9a432",
  },
  {
    id: "8",
    image: "https://d2407na1z3fc0t.cloudfront.net/Slider/banner_620b7acabe3b2",
  },
];

const shopBYCategory = [
  {
    id: "1",
    title: "Today's Deals",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cb6e4eb8-6aec-7872-1638-0c2cf7970b71/original/Todays_Deals.png",
  },

  {
    id: "2",
    title: "Chicken",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/34466dbd-a515-edd1-3e99-05000f217cb6/original/Chicken_(2).png",
  },

  {
    id: "3",
    title: "Fish & Seafood",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/caac432f-545f-f03f-ce10-3b911916da70/original/FIsh_(1).png",
  },

  {
    id: "4",
    title: "Mutton",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3a3d173d-5537-dafc-0be4-dec0791dcd24/original/MUT.png",
  },
  {
    id: "5",
    title: "Ready to Cook",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/21653c3a-4d6d-da71-2432-6833b88e9629/original/RC.png",
  },
  {
    id: "6",
    title: "Prawns",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f4053965-f199-80a0-2551-d85d712574e2/original/Prawn_(2).png",
  },
  {
    id: "7",
    title: "Cold Cuts",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/49a8dd0c-7254-0b89-b348-b57281c76f5a/original/Coldcuts_(2).png",
  },
  {
    id: "8",
    title: "Spreads",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d9a97969-ebd7-977c-e676-b343a18d7318/original/SPD.png",
  },
  {
    id: "9",
    title: "Eggs",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/1bd08fae-c971-390a-ce8a-6f6502f5bd0d/original/Eggs_(1).png",
  },
  {
    id: "10",
    title: "Biryani & Kebab",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/0b7ccd0f-0811-c38b-5420-0317c8006bda/original/Biryani_(2).png",
  },
  {
    id: "11",
    title: "Combos",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/69b72338-4180-2631-b175-04265b1e5c7a/original/Combo_(2).png",
  },
  {
    id: "12",
    title: "Plant-Based-Meat",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/66e49926-d949-dfb3-2e79-8052d07f0a3b/original/PBM_6_(8).png",
  },
];

const Home = () => {
  const [shopcategory, loading, error] = useFetch(
    "https://tan-real-buffalo.cyclic.app/shopBYCategory"
  );
  return (

    <Box bg="#fcfcfc">

       {/* Banner */}

      <Box border="3px">
        <Carousel loop={true} showDots={true} autoplay={3000}>
          {bannerSlider.map((img) => (
            <Carousel.Item>
              <Link>
                <Img w="full" src={img.image} />
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      </Box>

      {/* Subscribe */}

      <Box position="fixed" left={"15px"} bottom={"60px"}>
        <Img
          src="https://www.licious.in/img/rebranding/banner/side.png"
          width={"100px"}
        />
      </Box>

       {/* Shop by Category */}

      <Container
        maxW={{ base: "full", md: "container.xl", lg: "85%" }}
        p={{ base: 2, lg: 0 }}
        my="32px"
      >
        

        <Box>
          <Heading
            as="h2"
            fontWeight="600"
            m="15px 0 5px 6px"
            fontSize="22px"
            color="#4a4a4a"
          >
            Shop by Categories
          </Heading>
          <Text fontWeight="400" ml="6px" fontSize="14px" color="#959799">
            Freshest meats just for you
          </Text>
        </Box>

        <Grid
          templateColumns={{
            base: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(4,1fr)",
          }}
          gap={4}
          my="16px"
        >
          {shopcategory &&
            shopcategory.map((item) => (
              <GridItem key={item.id} w="fit-content" textAlign="center">

                {/* <Box>
          {loading && (
            <Box>
              <Img src="https://d2407na1z3fc0t.cloudfront.net/Banner/rebranding_v2_meatopia_fresh_unlimited_free_delivery_with_smiley.gif" w='500px' h='' />
            </Box>
          )}
        </Box>  */}
                <Box
                  overflow="hidden"
                  w={{ lg: "264px", md: "264px", sm: "80%" }}
                  h="204px"
                  bg="#fff"
                  borderRadius={"8px"}
                  boxShadow="sm"
                  _hover={{ cursor: "pointer" }}
                >

                  {loading? <Img src="https://d2407na1z3fc0t.cloudfront.net/Banner/rebranding_v2_meatopia_fresh_unlimited_free_delivery_with_smiley.gif" w='200px' h='200px' /> : <Image
                    cursor="pointer"
                    src={item.img}
                    alt={item.id}
                    h="204px"
                    w={{ lg: "264px", md: "264px", sm: "80%" }}
                    _hover={{
                      transition: "350ms ease-out",
                      transform: "scale(1.1)",
                      objectFit: "fill",
                      background: "transparent",
                    }}
                  /> }
                  
                </Box>

                <Text
                  color="#3e4d60"
                  mt="12px"
                  fontWeight="600"
                  as="p"
                  fontSize="16px"
                  cursor="pointer"
                >
                  {item.title}
                </Text>
              </GridItem>
            ))}
        </Grid>
      </Container>

       {/* Meatopia */}

      <Box m="auto" mt="20px" cursor="pointer" w="68.5%" borderRadius="10px">
        <Box
          bg="#ffdc93"
          bgImage="https://www.licious.in/img/default/loyalty_banner_background.png"
          shadow="md"
          borderRadius="10px"
        >
          <Flex p="16px" fontWeight="500" fontSize="12px" color="#313131">
            <Box>
              <Image
                src="https://www.licious.in/img/rebranding/loyalty_licious_logo.svg"
                w="117px"
                h="32px"
              />
            </Box>

            <Spacer />
            <Button
              bg="#e41d36"
              variant="solid"
              colorScheme="none"
              color="white"
              fontSize="12px"
              h="35px"
            >
              JOIN NOW
            </Button>
          </Flex>

          <Divider border="0.5px" borderColor="gray" />
          <Text p="4px 16px" fontWeight="500" fontSize="12px" color="#313131">
            Join MEATOPIA to get free delivery on all orders with cart value
            more than Rs.99.
          </Text>
        </Box>
      </Box>

      

      <Box
        align="center"
        m="auto"
        mt="20px"
        cursor="pointer"
        w="fit-content"
        shadow="md"
        borderRadius={8}
      >
        <Img
          src=" https://dao54xqhg9jfa.cloudfront.net/OMS-StaticBanner/4c895baf-28fb-2833-8d19-37d05c51d39c/original/static-bank-units-Sep-web_(11).jpg?format=webp"
          borderRadius={8}
        />
      </Box>

       {/* My Reawards  */}

       <Box
        m="auto"
        mt="20px"
        w="68.5%"
        borderRadius="10px"
        bgGradient="linear(to-b, rgba(255,230,234,.6), #ffe6ea)"
      >
        <Box
          bgImage="https://www.licious.in//img/default/rewards/rewards_banner_background.svg"
          shadow="md"
          borderRadius="10px"
        >
          <Flex p="16px" fontWeight="500" fontSize="12px" color="#313131">
            <Box
              borderRadius="50%"
              p="13px 9px 10px 13px"
              m="auto"
              w="50px"
              h="50px"
              bgGradient="linear-gradient(134deg,rgba(255,255,255,.4),rgba(255,255,255,.2) 98%)"
              textAlign="center"
            >
              <Image
                src="https://www.licious.in/img/rebranding/rewards/rewards_icon.svg"
                w="24px"
              />
            </Box>
            <Box>
              <Text fontWeight="600" fontSize="15px" color="#000">
                My Rewards
              </Text>
              <Text fontWeight="400" mt="8px" fontSize="13px" color="#313131">
                Place an order and win your next reward!
              </Text>
            </Box>

            <Spacer />
            <Text
              as="span"
              bg="none"
              color="#e41d36"
              fontSize="12px"
              h="35px"
              variant="none"
            >
              CLICK TO VIEW
            </Text>
            <Image
              src="https://www.licious.in/img/default/arrow.png"
              w="5px"
              h="9px"
              ml="10px"
              mt="5px"
            />
          </Flex>
        </Box>
      </Box>

       {/* Explore by Category  */}


      <Container
        maxW={{ base: "full", md: "container.xl", lg: "85%" }}
        p={{ base: 2, lg: 0 }}
        my="32px"
      >
        

        <Box>
          <Heading
            as="h2"
            fontWeight="600"
            m="15px 0 5px 6px"
            fontSize="22px"
            color="#4a4a4a"
          >
            Explore by Categories
          </Heading>
          <Text fontWeight="400" ml="6px" fontSize="14px" color="#959799">
            Freshest meats just for you
          </Text>
        </Box>

        <Grid
          templateColumns={{
            base: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(4,1fr)",
          }}
          gap={4}
          my="16px"
        >
          {shopcategory &&
            shopcategory.map((item) => (
              <GridItem key={item.id} w="fit-content" textAlign="center">

                {/* <Box>
          {loading && (
            <Box>
              <Img src="https://d2407na1z3fc0t.cloudfront.net/Banner/rebranding_v2_meatopia_fresh_unlimited_free_delivery_with_smiley.gif" w='500px' h='' />
            </Box>
          )}
        </Box>  */}
                <Box
                  overflow="hidden"
                  w={{ lg: "264px", md: "264px", sm: "80%" }}
                  h={{lg:"204px",md:'204px',sm:'70%'}}
                  bg="#fff"
                  borderRadius={"8px"}
                  boxShadow="sm"
                  _hover={{ cursor: "pointer" }}
                >

                  {loading? <Img src="https://d2407na1z3fc0t.cloudfront.net/Banner/rebranding_v2_meatopia_fresh_unlimited_free_delivery_with_smiley.gif" w='200px' h='200px' /> : <Image
                    cursor="pointer"
                    src={item.img}
                    alt={item.id}
                    h="204px"
                    w={{ lg: "264px", md: "264px", sm: "80%" }}
                    _hover={{
                      transition: "350ms ease-out",
                      transform: "scale(1.1)",
                      objectFit: "fill",
                      background: "transparent",
                    }}
                  /> }
                  
                </Box>

                <Text
                  color="#3e4d60"
                  mt="12px"
                  fontWeight="600"
                  as="p"
                  fontSize="16px"
                  cursor="pointer"
                >
                  {item.title}
                </Text>
              </GridItem>
            ))}
        </Grid>
      </Container>

      

      

      <Container
        maxW={{ base: "full", md: "container.xl", lg: "85%" }}
        p={{ base: 2, lg: 0 }}
        my="32px"
        mt='64px'
      >
        <Box>
          <Heading
            as="h2"
            fontWeight="600"
            m="15px 0 5px 6px"
            fontSize="22px"
            color="#4a4a4a"
          >
            Check out our blog
          </Heading>
        </Box>

        <Grid
          templateColumns={{
            base: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(3,1fr)",
          }}
          gap={4}
          my="16px"
        >
          <GridItem w="fit-content" textAlign="center">
            <Box _hover={{ cursor: "pointer" }}>
              <Image
                cursor="pointer"
                src="https://www.licious.in/blog/wp-content/uploads/2022/10/shutterstock_521679751.jpg"
                alt="blog"
                borderRadius={8}
                h='378px'
              />
            </Box>

            <Text
              color="#4a4a4a"
              mt="12px"
              fontWeight="600"
              as="p"
              fontSize="18px"
              cursor="pointer"
              lineHeight={2}
              textAlign="left"
            >
              Do you love sandwiches? If yes, how about you learn how to make a
              healthy and yummy Chicken Club Sandwich at home?
            </Text>
          </GridItem>

          <GridItem w="fit-content" textAlign="center">
            <Box _hover={{ cursor: "pointer" }}>
              <Image
                cursor="pointer"
                src="https://www.licious.in/blog/wp-content/uploads/2022/10/shutterstock_1437076970.jpg"
                alt="blog"
                borderRadius={8}
                h='378px'
              />
            </Box>

            <Text
              color="#4a4a4a"
              mt="12px"
              fontWeight="600"
              as="p"
              fontSize="18px"
              cursor="pointer"
              lineHeight={2}
              textAlign="left"
            >
              This Balsamic Chicken Breast Recipe Is Succulent, Juicy and Loaded with Flavour – A Must Try!
            </Text>
          </GridItem>

          <GridItem w="fit-content" textAlign="center">
            <Box _hover={{ cursor: "pointer" }}>
              <Image
                cursor="pointer"
                src="https://www.licious.in/blog/wp-content/uploads/2022/10/shutterstock_336645890-5.jpg"
                alt="blog"
                borderRadius={8}
                h='378px'
              />
            </Box>

            <Text
              color="#4a4a4a"
              mt="12px"
              fontWeight="600"
              as="p"
              fontSize="18px"
              cursor="pointer"
              lineHeight={2}
              textAlign="left"
            >
              Check Out This Saucy, Creamy Pasta Recipe With Salmon and Peas – An Easy Throw Together Recipe
            </Text>
          </GridItem>
        </Grid>
      </Container>

      <Box
        align="center"
        m="auto"
        mt="20px"
        cursor="pointer"
        w={{ lg: "85%", md: "full", sm: "full" }}
      >
        <Image src="https://d2407na1z3fc0t.cloudfront.net/homepageStaticBanner/homepageStaticBanner_62a34b8cba7db" />
      </Box>
    </Box>
  );
};

export default Home;
