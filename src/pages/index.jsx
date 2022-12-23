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
  VStack,
} from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <Container maxW={'container.md'} justify={'center'}>
      <Navbar />
      <Head>
        <title>HWNAMR</title>
        <link rel="icon" href="/hwnamr.ico" />
      </Head>
      <Flex
        justify={'center'}
        p={10}
      >
        <VStack spacing={6}>
        <Heading as="h1">
          Hey There!
        </Heading>
        <Box boxSize="200px">
          <Image
            borderRadius="full"
            src="/profile-pic.jpg"
            alt="Hawwin Amri"
          ></Image>
        </Box>
        <Heading as="h2" size="lg" align={'center'}>
          I&apos;m Muhammad Hawwin Amri
        </Heading>
        <Text align="center">
          Researcher, CTF Player, Infosec Practioner, Perpetual Learner.
        </Text>
        <Text>--- FOLLOW ME ---</Text>
        <Flex>
          <HStack>
            <Box justifyContent={'space-between'}>
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
        </VStack>
      </Flex>
      <Footer />
    </Container>
  );
}
