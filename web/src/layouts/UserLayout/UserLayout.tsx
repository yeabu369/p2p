import { Box } from '@chakra-ui/react'

type UserLayoutProps = {
  children?: React.ReactNode
}

const UserLayout = ({ children }: UserLayoutProps) => {
  return (
    <>
      <Box as="main" borderWidth="1px" p={4}>
        {children}
      </Box>
    </>
  )
}

export default UserLayout
