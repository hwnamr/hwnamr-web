import Head from "next/head";
import { Code, Heading, Container, Image, Box, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW="500px">
      <Head>
        <title>HWNAMR</title>
        <link rel="icon" href="/hwnamr.ico" />
      </Head>
      <Flex
        height="lg"
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Heading as="h1" mb={3}>
          Hello There!
        </Heading>
        <Box boxSize="200px" m={3}>
          <Image
            borderRadius="full"
            src="/profile-pic.jpg"
            alt="Hawwin Amri"
          ></Image>
        </Box>
        <Heading as="h2" size="lg" mb={1}>
          I&aposm Muhammad Hawwin Amri
        </Heading>
        <Code>Currently learning Web Development and Cybersecurity</Code>
      </Flex>
    </Container>
  );
}
