import { Box, Divider, Link, Icon } from "@chakra-ui/react";
import { FaCopyright } from "react-icons/fa";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <Divider />
      <Box align="center">
        <Icon as={FaCopyright} boxSize={3} />{" "}
        <Link href="http://hwnamr.my.id">HWNAMR</Link> {year}
      </Box>
    </>
  );
};

export default Footer;
