import type { FC } from "react"

import Link from "src/components/common/ui/link"
import Text from "src/components/common/ui/text"

import { Container } from "./footer.styles"

const Footer: FC = () => {
  return (
    <Container>
      <Text fontSize="sm">
        Made by <Link href="htpps://github.com/notAro14">Aro Andriamaro</Link>
      </Text>
    </Container>
  )
}

export default Footer
