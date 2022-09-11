import ThemeSelect from "src/common/theme-select"

import Text from "src/ui/text"
import { Container, Nav } from "./header.styles"

const Header = () => (
  <Container>
    <Nav>
      <Text vibrant fontSize="lg">
        Next TS starter
      </Text>
      <ThemeSelect />
    </Nav>
  </Container>
)

export default Header
