import Container from '@mui/material/Container'

import FlipButton from '@components/FlipButton'

type PropTypes = {
  children: React.ReactNode
}

const Layout: React.FC<PropTypes> = ({ children }) => {
  return (
    <>
      <main>
        <Container sx={{ mt: 2 }}>{children}</Container>
      </main>

      <FlipButton onClick={() => {}} frontContent='Є аккаунт?' backContent='Увійти' />
    </>
  )
}

export default Layout
