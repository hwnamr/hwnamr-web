import { Box, Link, } from "@chakra-ui/react";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <Box align="center" opacity={0.4} fontSize='sm'>
        &copy; {year}
        {" "}<Link href="http://hwnamr.my.id">HWNAMR</Link>. All Rights Reserved.
      </Box>
    </>
  );
};

export default Footer;
