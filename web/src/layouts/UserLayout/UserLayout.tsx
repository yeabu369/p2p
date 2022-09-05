import { Box } from '@chakra-ui/react'

type UserLayoutProps = {
  children?: React.ReactNode
}

const UserLayout = ({ children }: UserLayoutProps) => {
  return (
    <>
      <Box as="main" borderWidth="2px" bg="blue.900" p={4} h="100vh">
        {children}
      </Box>
    </>
  )
}

export default UserLayout
