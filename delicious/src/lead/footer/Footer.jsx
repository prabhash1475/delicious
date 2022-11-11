import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box ml={{ sm: "10", md: "20", lg: "30" }} mt={[20]} mr={[37]}>
      <Box>
        <Image w="15%" src="https://i.postimg.cc/xC4gqtdf/delicious-logo.png" />
        <Box w="75%" marginLeft={"240px"} marginTop={"-30px"}>
          <hr color="red" />
        </Box>
        {/* Container footer */}
        <Box display={"flex"} gap="20px" m={[20, 20]} mt={"25px"}>
          <Box>
            <Heading pt="10px" pb="15px" as={"h3"} size="sm">
              USEFUL LINKS
            </Heading>

            <Text>Why Licious?</Text>
            <Text>Refer & Earn</Text>
            <Text>Licious Cash & Cash+</Text>
            <Text>Careers</Text>
            <Text>BLOG</Text>
            <Text>Campaign</Text>
            <Text>Bug Bounty Guidelines</Text>
            <Text>About Us</Text>
            <Text>FSSC 22000 Certification</Text>
            <Text>FSSAI Licenses</Text>
            <Text>Sitemap</Text>
          </Box>
          <Box p="10px">
            <Heading pt="10px" pb="15px" as="h3" size={"sm"}>
              EXPERIENCE LICIOUS APP ON MOBILE
            </Heading>
            <Box display={"contents"} gap="20px" mt="10px">
              <Image
                m="20px"
                src="https://www.licious.in/img/rebranding/app-store-new.svg"
              />
              <Image
                ml={"20px"}
                src="https://www.licious.in/img/rebranding/play-store-new.png"
              />
            </Box>
          </Box>
          <Box>
            <Heading pt="10px" pb="15px" as="h3" size="sm">
              CONTACT US
            </Heading>
            <Text>Call: 1800-4190-786</Text>
            <Text>Talktous@licious.com</Text>
            <Heading pt="10px" pb="15px" as="h5" size="sm">
              CONTACT US REGISTERED OFFICE ADDRESS:
            </Heading>
            <Text>House of Licious, Zed Pearl, No 12,</Text>
            <Text>Domlur Layout</Text>
            <Text>Bangalore, Karnataka - 560071</Text>
          </Box>
          <Box>
            <Text pt="15px">T&C</Text>
            <Text>FAQ</Text>
            <Heading pt="10px" pb="15px" as="h5" size="sm">
              HAVE SECURITY CONCERN?
            </Heading>
            <Text>Mail us to:</Text>
            <Text>security@licious.com</Text>
          </Box>
          <Box display={"flex"}>
            <Image
              w={{ lg: "70%", md: "40%", sm: "20%" }}
              h="10%"
              src="https://www.licious.in/img/rebranding/3-dsecure.png"
            />
          </Box>
        </Box>
        <Box display={"flex"} gap="20px" p="20px" flexDirection="row-reverse">
          <Heading as={"h5"} size="md">
            KEEP IN TOUCH
          </Heading>
          <Image src="https://www.licious.in/img/rebranding/insta_color.png" />
          <Image src="https://www.licious.in/img/rebranding/fb_color.png" />
          <Image src="https://www.licious.in/img/rebranding/twitter_color.png" />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
