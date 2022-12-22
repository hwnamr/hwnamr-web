import Head from "next/head";
import {
  Icon,
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
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <Container bg="grey.500">
      <Head>
        <title>HWNAMR</title>
        <link rel="icon" href="/hwnamr.ico" />
      </Head>
      <Flex
        height="100vh"
        p={10}
        alignItems="center"
        justifyContent="center"
        direction="column"
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
        <Heading as="h2" size="lg">
          I&apos;m Muhammad Hawwin Amri
        </Heading>
        <Text mb={6} align="center">
          Researcher, CTF Player, Infosec Practioner, Perpetual Learner.
        </Text>
        <Text>--- FOLLOW ME ---</Text>
        <Flex mb={6}>
          <HStack>
            <Box>
              <Link href="https://twitter.com/hwnamr_" isExternal>
                <Icon as={FaTwitter} boxSize={3} /> Twitter
              </Link>
            </Box>
            <Spacer />
            <Box>
              <Link
                href="https://www.linkedin.com/in/muhammad-hawwin-amri-07029425a/"
                isExternal
              >
                <Icon as={FaLinkedin} boxSize={3} /> LinkedIn
              </Link>
            </Box>
            <Spacer />
            <Box>
              <Link href="https://github.com/daredeviltf" isExternal>
                <Icon as={FaGithub} boxSize={3} /> Github
              </Link>
            </Box>
          </HStack>
        </Flex>
        <Box>
          <Text>Copyright 2022</Text>
        </Box>
      </Flex>
    </Container>
  );
}
