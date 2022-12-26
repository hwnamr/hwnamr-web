import { Box, Link, Divider, } from "@chakra-ui/react";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <Divider />
      <Box align="center" padding={3} opacity={0.4} fontSize='sm' h={12}>
        &copy; {year}
        {" "}<Link href="http://hwnamr.my.id">HWNAMR</Link>. All Rights Reserved.
      </Box>
    </>
  );
};

export default Footer;
