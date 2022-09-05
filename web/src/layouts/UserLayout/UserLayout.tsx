type UserLayoutProps = {
  children?: React.ReactNode
}

const UserLayout = ({ children }: UserLayoutProps) => {
  return <main>{children}</main>
}

export default UserLayout
