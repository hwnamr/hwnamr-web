import Head from "next/head";
import { Code, Heading, Container, Image, Box, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container>
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
        <Heading as="h1" mb={6}>
          Hello There!
        </Heading>
        <Box boxSize="200px" mb={6}>
          <Image
            borderRadius="full"
            src="/profile-pic.jpg"
            alt="Hawwin Amri"
          ></Image>
        </Box>
        <Heading as="h2" size="lg" mb={6}>
          I&apos;m Muhammad Hawwin Amri
        </Heading>
        <Code>Currently learning Web Development and Cybersecurity</Code>
      </Flex>
    </Container>
  );
}
