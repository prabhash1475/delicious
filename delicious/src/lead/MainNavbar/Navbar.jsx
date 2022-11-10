import { Box, Flex, flexbox, Image, Input, Stack } from "@chakra-ui/react";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <Box p={"5px"}>
        <Flex>
        <Image
          src="https://www.licious.in/img/rebranding/licious-logo.svg"
          alt="logo"
        />
        <Stack>
          <IoLocationOutline />
        </Stack>

        <Stack spacing={3}>
          <Input w={"100%"} placeholder="medium size" size="lg" />
        </Stack>
        </Flex>
      </Box>
    </div>
  );
};

export default Navbar;
