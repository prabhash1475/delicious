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
} from "@chakra-ui/react";
import Carousel from "better-react-carousel";
import useFetch from "../CustomHooks/useFetch";

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
      <Carousel rows={1} loop={true} showDots={true} autoplay={3000}>
        {bannerSlider.map((img) => (
          <Carousel.Item>
            <Link>
              <Img w="100%" src={img.image} />
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>

      <Box position="fixed" left={"15px"} bottom={"60px"}>
        <Img
          src="https://www.licious.in/img/rebranding/banner/side.png"
          width={"100px"}
        />
      </Box>

      {/* <div>
        <div>
          {loading && <Box><Img src='https://d2407na1z3fc0t.cloudfront.net/Banner/rebranding_v2_meatopia_fresh_unlimited_free_delivery_with_smiley.gif'/></Box>}
          </div>
      <h2>{shopcategory && shopcategory.map((item)=>{
        return <div key={item.id}>
          
          <Img src={item.img} w='20%'/>
          <h2>{item.title}</h2>
          </div>
      })}</h2>
      </div> */}

      <Container
        maxW={{ base: "full", md: "container.xl" }}
        p={{ base: 2, lg: 0 }}
      >
        {/* <div>
          {loading && (
            <Box>
              <Img src="https://d2407na1z3fc0t.cloudfront.net/Banner/rebranding_v2_meatopia_fresh_unlimited_free_delivery_with_smiley.gif" />
            </Box>
          )}
        </div> */}

        <Grid
          templateColumns={{
            base: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(4,1fr)",
          }}
          gap={4}
          w={{base:'full', lg:'90%'}}
          m='auto'
        >
          {shopcategory &&
            shopcategory.map((item) => (
              <GridItem key={item.id} w='fit-content' textAlign='center'>

                <Box overflow='hidden' w='264px' h='205' bg="#fff"  borderRadius={'8px'} boxShadow="md" _hover={{ cursor:'pointer'}}>
                  
                <Image
                      cursor="pointer"
                      src={item.img}
                      alt={item.id}
                      w='264px' h='205'
                     
                      _hover={{ transition:'350ms ease-out',transform:'scale(1.1)', objectFit:'fill', background:'transparent'}}
                    />

                </Box>
                    
                  
                

                <Box
                  color="#003380"
                  mt="1"
                  fontWeight="400"
                  as="p"
                  fontSize="15px"
                  cursor="pointer"
                  mb="15px"
                >
                  {item.title}
                </Box>
              </GridItem>
            ))}
        </Grid>
      </Container>

      <Box align="center" m="auto" mt="20px" cursor="pointer" w="90%" shadow='md' >
        <Img
          src=" https://dao54xqhg9jfa.cloudfront.net/OMS-StaticBanner/4c895baf-28fb-2833-8d19-37d05c51d39c/original/static-bank-units-Sep-web_(11).jpg?format=webp"
          borderRadius={8}
        />
      </Box>
    </Box>
  );
};

export default Home;
