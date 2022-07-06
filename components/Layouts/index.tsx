import Container from '@mui/material/Container'

type PropTypes = {
  children: React.ReactNode
}

const Layout: React.FC<PropTypes> = ({ children }) => {
  return (
    <main>
      <Container sx={{ mt: 2 }}>{children}</Container>
    </main>
  )
}

export default Layout
