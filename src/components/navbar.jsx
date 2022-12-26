import { Box, Heading, Link, Divider, Flex, Stack, useColorModeValue, Button, useColorMode } from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Box>
        <Flex h={16} justify={'space-between'} align={'center'}>
          <Heading size='md'><Link href="https://hwnamr.my.id" color="green.500">hwnamr</Link>.my.id</Heading>
          <Flex align={'center'}>
            <Stack >
              <Button onClick={toggleColorMode} border='1px'>
                {colorMode === 'dark' ? <FaMoon /> : <FaSun />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <Divider />
    </>
  )
}

export default Navbar
