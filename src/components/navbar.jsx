import { Box, Flex, Stack, useColorModeValue, Button, useColorMode } from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Box px={4}>
        <Flex h={16} justify={'space-between'} align={'center'}>
          <Box>HWNAMR</Box>
          <Flex align={'center'}>
            <Stack >
              <Button onClick={toggleColorMode} border='1px'>
                {colorMode === 'dark' ? <FaMoon /> : <FaSun />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default Navbar
