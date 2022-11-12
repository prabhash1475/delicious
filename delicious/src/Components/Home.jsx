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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Portal,
  Input,
  useToast,
} from "@chakra-ui/react";
import Carousel from "better-react-carousel";
import useFetch from "../CustomHooks/useFetch";
import { ChevronRightIcon } from "@chakra-ui/icons";
import ProductCard from "./ProductCard";

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

const bestSellers = [
  {
    id: 1,
    title: "Chicken Curry Cut - Small Pieces",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ac53a507-4bdd-92cd-ee0b-c96281e04999/original/chicken-curry-cut.jpg?format=webp",
    desc: "Fresh Nakhre & fresh bone-in & boneless chicken cuts",
    weight: "500gms",
    mrp: "₹179",
  },
  {
    id: 2,
    title: "Chicken Curry Cut - Small Pieces (Large Pack)",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/4cad2ee9-9257-9109-62a1-da4082b2cf36/original/sho.jpg?format=webp",
    desc: "Bone-in chunky pieces of skinless meat including Two leg, wing without tip, & breast quarter.",
    weight: "1000gms",
    mrp: "₹345",
  },
  {
    id: 3,
    title: "Chicken Breast - Boneless",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/fcea4075-0ed2-23c1-2b3f-1cddcbd1d11f/original/Chicken-Breast-Boneless-(3-4-Pieces)-Hero-Shot_(1).jpg?format=webp",
    desc: "Fresh Nakhre & fresh bone-in & boneless chicken cuts",
    weight: "450gms",
    mrp: "₹269",
  },
  {
    id: 4,
    title: "Classic Eggs - Pack Of 12",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/a917c576-c350-375a-afad-4882c7fd85a8/original/Classic-Eggs---Pack-of-12-Hero-Shot.jpg?format=webp",
    desc: "Farm to fork nakhre for antibiotic residue-free eggs",
    weight: "Pieces: 12",
    mrp: "₹137",
  },

  {
    id: 5,
    title: "Chicken Curry Cut - Large Pieces",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ca5adea0-fcd4-9787-416a-7b95b3a670b4/original/ChickenLC.jpg?format=webp",
    desc: "Fresh Nakhre for tender bone-in & boneless chicken cuts",
    weight: "500gms",
    mrp: "₹179",
  },

  {
    id: 6,
    title: "Chicken Curry Cut - Large Pieces (Large Pack)",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/7c01addb-3cff-9c0a-fa68-d4d6d41de5f5/original/large.jpg?format=webp",
    desc: "Half a chicken cut to chunky pieces including Two leg, a wing without the tip, Two breast quarter with backbone. ",
    weight: "1000gms",
    mrp: "₹345",
  },

  {
    id: 7,
    title: "Freshwater/ White Prawns/ Seegadi (Medium) - Cleaned & Deveined",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/66e96bfe-5abc-2cd8-18a7-01a9eceb2bfa/original/WhatsApp_Image_2022-04-13_at_2.16.31_PM.jpeg?format=webp",
    desc: "Freshwater prawns. De-shelled, cleaned, deveined, butterflied prawns, with head and tail removed.",
    weight: "250gms",
    mrp: "₹375",
  },

  {
    id: 8,
    title: "Chunky Butter Chicken Spread (Single Serve)",
    img: "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_4cyjya5vxs7/1/prod_display_image/1634635899.1919--2021-10-1915:01:39--1818?format=webp",
    desc: "Mildly spiced chunks of freshly roasted chicken blended with the ever popular, Butter Chicken base.",
    weight: "Pieces: 1",
    mrp: "₹39",
  },

  {
    id: 9,
    title: "Peppery Chicken Salami (Mini) | Ready To Eat",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ad60f59b-612e-11b8-80f4-3308430cc609/original/Peppery-Chicken-Salami_(1).jpg?format=webp",
    desc: "Our Nakhrebaaz chefs present this meaty gourmet treat.",
    weight: " Pieces: 8    Net wt: 125gms",
    mrp: "₹199",
  },
];

const bonelesscuts = [
  {
    id: 101,
    title: "Chicken Thigh Boneless",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ffd4144f-25a7-6f26-2d90-9a9db0332dda/original/Chicken_Thigh_Boneless_Hero_Shot.jpg?format=webp",
    desc: "Fresh nakhre for fresh, juicy & tender chicken thigh cuts",
    weight: "450gms",
    mrp: "₹339",
  },

  {
    id: 102,
    title: "Chicken Mince (Keema)",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/3e9023d4-e2f7-2fe6-c68f-75014733ff7e/original/Chicken_Mince_Large_Pack_Hero_Shot.jpg?format=webp",
    desc: "Tender, perfectly ground meat from our Nakhrebaaz team!",
    weight: "450gms",
    mrp: "₹299",
  },

  {
    id: 103,
    title: "Lamb Leg Boneless",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/2831d674-fd93-eec9-f638-5cf11c850d24/original/Lamb-Leg-(Boneless)-Hero-Shot_(1).jpg?format=webp",
    desc: "Tender, boneless, evenly-cut chunks of velvety, lean lamb meat taken from the hind legs",
    weight: "500gms",
    mrp: "₹790",
  },

  {
    id: 104,
    title: "Basa ( Pangas)- Fillet, Platinum Grade",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/1d3e67ab-07dd-3f3b-9c38-ce72952f939e/original/p0_tile_images-10.jpg?format=webp",
    desc: "From unpolluted Indian waters, freshly cleaned, creamy textured fillets of premium basa",
    weight: "450gms",
    mrp: "₹515",
  },

  {
    id: 105,
    title: "Chicken Breast Boneless (Large Pack)",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/7cb0a040-aaea-f6ed-55a3-7960e4243f54/original/breat.jpg?format=webp",
    desc: "Tender, boneless fillets of chicken meat cut from the breast.",
    weight: "900gms",
    mrp: "₹529",
  },

  {
    id: 106,
    title: "Chicken Mince/ Keema (Large Pack)",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b8da82a5-5164-fb4a-fde6-19b21104ef8c/original/Chicken-Mince.jpeg?format=webp",
    desc: "Boneless, minced chicken for a variety of dishes",
    weight: "900gms",
    mrp: "₹549",
  },
];

const breakfast = [
  {
    id: 201,
    title: "Chunky Sriracha Chicken Spread",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/fee95638-21fd-1706-4569-ed42430fd716/original/Sriracha-chicken-spreadsTIle-image.jpg?format=webp",
    desc: " Freshly cooked chicken in a creamy, spicy sriracha base.",
    weight: "Pieces: 1",
    mrp: "₹229",
  },

  {
    id: 202,
    title: " Chunky Shawarma Chicken Spread",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/faa6ff18-1108-6acf-4885-aa0fdb5e13ec/original/Chunky-Shawarma-Chicken-Spread_(7).jpg?format=webp",
    desc: " A creamy base with freshly roasted chicken chunks along with the sweet chilly dispersion of cracked black pepper pieces and garlic.",
    weight: "Pieces: 1",
    mrp: "₹219",
  },

  {
    id: 203,
    title: "Chunky Herby Tomato Chicken Spread",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b7cbafbe-bdf9-39cc-30c0-5a7c432309d8/original/Chunky-Herby-Tomato-Chicken-Spread_(1).jpg?format=webp",
    desc: "A pleasant contrast of Meaty chicken chunks flavored with Chilli and Garlic in a tomato creamy base inspired by the European Flavours.",
    weight: "Pieces: 1",
    mrp: "₹199",
  },

  {
    id: 204,
    title: "Chunky Continental Chicken Spread",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/0d28ad62-9409-c682-3c22-8e0ebc1697d5/original/Chunky-Continental-Chicken-Spread.jpg?format=webp",
    desc: "A Nakhrebaaz chef's creation: Real chicken & mega flavour",
    weight: "Pieces: 1",
    mrp: "₹219",
  },

  {
    id: 205,
    title: "Chunky Sriracha Prawn Spread",
    img: "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_drokbgb2jhb/1/prod_display_image/1634375004.4382--2021-10-1614:33:24--905?format=webp",
    desc: "A blend of freshly cooked juicy prawn chunks in a spicy Sriracha base.",
    weight: "Pieces: 1",
    mrp: "₹249",
  },

  {
    id: 206,
    title: "Peppery Chicken Salami (Mini) | Ready To Eat",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ad60f59b-612e-11b8-80f4-3308430cc609/original/Peppery-Chicken-Salami_(1).jpg?format=webp",
    desc: "Our Nakhrebaaz chefs present this meaty gourmet treat",
    weight: "Pieces: 8 Net wt: 125gms",
    mrp: "₹199",
  },

  {
    id: 207,
    title: "Chicken Chorizo Frankfurter",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/36c60289-829d-830f-d4c7-c62675adb323/original/Frank---Chorizo-unCooked+new.jpg?format=webp",
    desc: "Chicken Sausage smoked with chorizo spice mix",
    weight: "Pieces: 4",
    mrp: "₹299",
  },
  {
    id: 208,
    title: "Classic Smoked Chicken Frankfurter",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/1ce4618e-f9ac-ad01-3ab2-5f9b26ba6a2b/original/Frank---Classic-UNCooked+tag.jpg?format=webp",
    desc: "Chicken Sausage smoked with fine oakwood.",
    weight: "Pieces: 4",
    mrp: "₹275",
  },

  {
    id: 209,
    title: "Breakfast Combo - Salami & Chicken Spread",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/dcc2fd54-2e8e-2a56-ae3a-1491ad1db9bf/original/Salami-&-Chicken-Spread.jpg?format=webp",
    desc: "8 pieces of salami & a Chunky Shawarma Chicken Spread",
    weight: "Pieces: 4",
    mrp: "₹397",
  },
];

const innews = [
  {
    id: 301,
    title:
      "Licious Is India's First Animal Protein Brand to be Certified With SA8000",
    image:
      "https://d2407na1z3fc0t.cloudfront.net/inTheNews/35/inthenews_62aadde78bdae",
  },

  {
    id: 302,
    title: "Licious announces continuous liquidity of ESOPs from 2022",
    image:
      "https://d2407na1z3fc0t.cloudfront.net/inTheNews/36/inthenews_62aadf6e2cbb7",
  },
  {
    id: 303,
    title: "Why Licious wants to become the everything store for meat",
    image:
      "https://d2407na1z3fc0t.cloudfront.net/inTheNews/37/inthenews_62aae0b741820",
  },
  {
    id: 304,
    title: "India’s Licious becomes unicorn with $52 million fresh fundraise",
    image:
      "https://d2407na1z3fc0t.cloudfront.net/inTheNews/38/inthenews_62aae10540001",
  },
  {
    id: 305,
    title:
      "They slayed COVID, went on to build a unicorn: Meet the founders of Licious",
    image:
      "https://d2407na1z3fc0t.cloudfront.net/inTheNews/39/inthenews_62aae1c5de08e",
  },

  {
    id: 306,
    title:
      "Licious founders on building a unicorn startup based on what the consumer wants",
    image:
      "https://d2407na1z3fc0t.cloudfront.net/inTheNews/40/inthenews_62aae21e9a38e",
  },

  {
    id: 307,
    title: "Licious wants you to eat more meat",
    image:
      "https://d2407na1z3fc0t.cloudfront.net/inTheNews/42/inthenews_62aae2a6d9bc4",
  },
  {
    id: 308,
    title: "Licious pledges to be ESG compliant in the next 12 months",
    image:
      "https://d2407na1z3fc0t.cloudfront.net/inTheNews/43/inthenews_62aae2dadd8aa",
  },
  {
    id: 309,
    title:
      "Licious founders on building a unicorn startup based on what the consumer wants",
    image:
      "https://d2407na1z3fc0t.cloudfront.net/inTheNews/40/inthenews_62aae21e9a38e",
  },
  {
    id: 310,
    title:
      "Online meat startup Licious unveils ads featuring Anil Kapoor, Arjun Kapoor",
    image:
      "https://d2407na1z3fc0t.cloudfront.net/inTheNews/44/inthenews_62aae32108c39",
  },
  {
    id: 311,
    title: "Faster Chef Treats  Uninvited Friends With Licious",
    image:
      "https://d2407na1z3fc0t.cloudfront.net/inTheNews/45/inthenews_62aae4c4d8331",
  },
];

const liciousway = [
  {
    id: 401,
    title: "Premium produce, sourced directly from the origin",
    image: "https://www.licious.in/img/rebranding/landing/USP1.png",
  },
  {
    id: 402,
    title: "Scientifically designed central production Unit",
    image: "https://www.licious.in/img/rebranding/landing/USP2.png",
  },
  {
    id: 403,
    title: "Compliance to stringent quality checks",
    image: "https://www.licious.in/img/rebranding/landing/USP3.png",
  },
  {
    id: 404,
    title: "Delivered fresh everyday",
    image: "https://www.licious.in/img/rebranding/landing/USP4.png",
  },
  {
    id: 405,
    title: "Experience extraordinary cooking",
    image: "https://www.licious.in/img/rebranding/landing/USP5.png",
  },
];

const Home = () => {
  const toast = useToast();
  const [shopcategory, loading, error] = useFetch(
    "https://tan-real-buffalo.cyclic.app/shopBYCategory"
  );
  return (
    <Box bg="#F7F6F6" pb="32px">
      {/* Banner */}

      <Box>
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
      <Box position="fixed" left={"15px"} bottom={"60px"} zIndex={104}>
        <Popover>
          <PopoverTrigger>
            <Button colorScheme="none" variant="solid">
              <Img
                src="https://www.licious.in/img/rebranding/banner/side.png"
                width={"100px"}
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            border="0"
            bg="rgba(68,66,66,.93)"
            h="135px"
            position="fixed"
            left="25px"
            right="25px"
            bottom="30px"
            zIndex={104}
          >
            <PopoverCloseButton color="white" />
            {/* <PopoverHeader>Confirmation!</PopoverHeader> */}
            <PopoverBody>
              <Box>
                <Image src="https://www.licious.in/img/rebranding/banner/bottom6.png" />
                <Flex gap={3}>
                  <Input
                    isRequire="true"
                    type="email"
                    placeholder="Enter your Email"
                  />
                  <Button
                    onClick={() =>
                      toast({
                        title: "Subscribed successfully",
                        description: "We've added your email for news letter",
                        status: "success",
                        duration: 2000,
                        isClosable: true,
                      })
                    }
                    bg="#D11243"
                    variant="solid"
                    colorScheme="none"
                    color="#fff"
                    fontSize="11px"
                    p="10px 18px"
                    fontWeight="600"
                  >
                    SUBMIT
                  </Button>
                </Flex>
              </Box>
            </PopoverBody>
          </PopoverContent>
        </Popover>
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
                  {loading ? (
                    <Img
                      src="https://d2407na1z3fc0t.cloudfront.net/Banner/rebranding_v2_meatopia_fresh_unlimited_free_delivery_with_smiley.gif"
                      w="200px"
                      h="200px"
                    />
                  ) : (
                    <Image
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
                    />
                  )}
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

      {/* The licious way */}

      <Box
        h="300px"
        shadow="0 0 18px 0 rgb(0 0 0 / 14%)"
        my="64px"
        bg="#fff"
        pt="3px"
      >
        <Box w="85%" m="auto" mt="32px" textAlign="center">
          <Box w='50%' m='35px auto' textAlign='center' fontSize='24px' position='relative' zIndex={0}  >
          <Heading
            as="span"
            fontWeight="400"
            color="#6d6e71"
            p="10px"
            fontSize="24px"
            bg='#fff'
          >
            The{" "}
            <Heading as="span" fontWeight="700" color="#D11243" fontSize="24px">
              {" "}
              Licious
            </Heading>{" "}
            way
          </Heading>
          <Box m='0 auto' position='absolute' borderBottom='solid 1px #7a7b7d' w='100%' top='20px' zIndex={-2} >

          </Box>

          </Box>
          

          <Grid
            templateColumns={{
              base: "repeat(3,1fr)",
              md: "repeat(3,1fr)",
              lg: "repeat(5,1fr)",
            }}
            gap={4}
            my="16px"
          >
            {liciousway.map((item) => (
              <GridItem key={item.id} w="fit-content" textAlign="center">
                <Box w='225px' verticalAlign='top'>
                  <Box w='75%' textAlign='center' verticalAlign='center' m='0 auto'>
                  <Image src={item.image} alt={item.id} w='80%' h='96px'  />

                  </Box>
                  <Box w='70%' textAlign='center' m='15px auto'>
                  <Text
                  color="#555"
                  m="15px auto"
                  fontWeight="700"
                  as="p"
                  fontSize="12px"
                  cursor="pointer"
                >
                  {item.title}
                </Text>

                  </Box>
                
                

                </Box>
                

               
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Offer Banner */}

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

      {/* Best Sellers  */}

      <Container
        maxW={{ base: "full", md: "container.xl", lg: "90%" }}
        p={{ base: 2, lg: 0 }}
      >
        <Heading
          as="h2"
          fontWeight="600"
          m="15px 0 10px 2%"
          fontSize="22px"
          color="#4a4a4a"
        >
          Best Sellers
        </Heading>

        <Carousel cols={3} rows={1} gap={10}>
          {bestSellers.map((product) => (
            <Carousel.Item>
              <ProductCard data={product} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      {/* Bonless cuts  */}
      <Container
        maxW={{ base: "full", md: "container.xl", lg: "90%" }}
        p={{ base: 2, lg: 0 }}
      >
        <Heading
          as="h2"
          fontWeight="600"
          m="15px 0 10px 2%"
          fontSize="22px"
          color="#4a4a4a"
        >
          Boneless Cuts
        </Heading>

        <Carousel cols={3} rows={1} gap={10}>
          {bonelesscuts.map((product) => (
            <Carousel.Item>
              <ProductCard data={product} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      {/* My Reawards  */}

      <Box
        m="auto"
        mt="20px"
        w="68.5%"
        borderRadius="10px"
        bgGradient="linear(to-b, rgba(255,230,234,.6), #ffe6ea)"
        cursor="pointer"
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
        mb="50px"
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
                  h={{ lg: "204px", md: "204px", sm: "70%" }}
                  bg="#fff"
                  borderRadius={"8px"}
                  boxShadow="sm"
                  _hover={{ cursor: "pointer" }}
                >
                  {loading ? (
                    <Img
                      src="https://d2407na1z3fc0t.cloudfront.net/Banner/rebranding_v2_meatopia_fresh_unlimited_free_delivery_with_smiley.gif"
                      w="200px"
                      h="200px"
                    />
                  ) : (
                    <Image
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
                    />
                  )}
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

      {/* Breakfast & Snacking Specials  */}
      <Box
        maxW={{ base: "full", md: "container.xl", lg: "90%" }}
        p={{ base: 2, lg: 0 }}
        m="auto"
      >
        <Heading
          as="h2"
          fontWeight="600"
          m="15px 0 10px 2%"
          fontSize="22px"
          color="#4a4a4a"
        >
          Breakfast & Snacking Specials
        </Heading>

        <Carousel cols={3} rows={1} gap={10}>
          {breakfast.map((product) => (
            <Carousel.Item>
              <ProductCard data={product} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Box>

      {/*Blogs */}

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
                h="378px"
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
                h="378px"
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
              This Balsamic Chicken Breast Recipe Is Succulent, Juicy and Loaded
              with Flavour – A Must Try!
            </Text>
          </GridItem>

          <GridItem w="fit-content" textAlign="center">
            <Box _hover={{ cursor: "pointer" }}>
              <Image
                cursor="pointer"
                src="https://www.licious.in/blog/wp-content/uploads/2022/10/shutterstock_336645890-5.jpg"
                alt="blog"
                borderRadius={8}
                h="378px"
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
              Check Out This Saucy, Creamy Pasta Recipe With Salmon and Peas –
              An Easy Throw Together Recipe
            </Text>
          </GridItem>
        </Grid>
      </Container>

      {/*In the News */}

      <Box
        align="center"
        m="auto"
        mt="20px"
        cursor="pointer"
        w={{ lg: "85%", md: "full", sm: "full" }}
      >
        <Image src="https://d2407na1z3fc0t.cloudfront.net/homepageStaticBanner/homepageStaticBanner_62a34b8cba7db" />
      </Box>

      <Box
        maxW={{ base: "full", md: "container.xl", lg: "90%" }}
        p={{ base: 2, lg: 0 }}
        m="auto"
        mt="32px"
      >
        <Heading
          as="h2"
          fontWeight="600"
          m="15px 0 10px 2%"
          fontSize="22px"
          color="#4a4a4a"
        >
          In the News
        </Heading>

        <Carousel cols={5} rows={1} gap={10}>
          {innews.map((product) => (
            <Carousel.Item>
              <Box>
                <Box
                  display="flex"
                  alignItems="center"
                  w="221px"
                  h="160px"
                  shadow="md"
                  borderRadius="6px"
                  bg="#fff"
                >
                  <Image w="100%" h="120px" src={product.image} />
                </Box>

                <Text
                  color="#4a4a4a"
                  lineHeight="19px"
                  mt="8px"
                  fontWeight="600"
                  fontSize="16px"
                  noOfLines={2}
                >
                  {product.title}
                </Text>
              </Box>
            </Carousel.Item>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Home;
