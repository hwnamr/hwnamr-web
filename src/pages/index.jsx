import Head from "next/head";
import {
  Code,
  Text,
  Spacer,
  Heading,
  Container,
  Image,
  Box,
  Flex,
  HStack,
  Link,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxWidth="constainer.sm" padding={0} bg="green.500">
      <Head>
        <title>HWNAMR</title>
        <link rel="icon" href="/hwnamr.ico" />
      </Head>
      <Flex
        p={10}
        alignItems="center"
        justifyContent="center"
        direction="column"
        spacing={10}
      >
        <Heading as="h1" mb={6}>
          Hey There!
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
        <Code mb={6}>Currently learning Web Development and Cybersecurity</Code>
        <Text>--- FOLLOW ME ---</Text>
        <Flex>
          <HStack>
            <Box>
              <Link href="https://twitter.com/hwnamr_" isExternal>
                Twiter
              </Link>
            </Box>
            <Spacer />
            <Box>
              <Link
                href="https://www.linkedin.com/in/muhammad-hawwin-amri-07029425a/"
                isExternal
              >
                LinkedIn
              </Link>
            </Box>
            <Spacer />
            <Box>
              <Link href="https://github.com/daredeviltf" isExternal>
                Github
              </Link>
            </Box>
          </HStack>
        </Flex>
      </Flex>
    </Container>
  );
}
