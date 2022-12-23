import { Box, Link, Divider, } from "@chakra-ui/react";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <Divider />
      <Box align="center" paddingTop={3.5} opacity={0.4} fontSize='sm' h={8}>
        &copy; {year}
        {" "}<Link href="http://hwnamr.my.id">HWNAMR</Link>. All Rights Reserved.
      </Box>
    </>
  );
};

export default Footer;
