import type { FC } from "react"

import Link from "src/components/common/link"
import Text from "src/components/common/text"
import { theme } from "src/styles/theme/stitches.config"

import { Container } from "./footer.styles"

const Footer: FC = () => {
  return (
    <Container>
      <Text
        fontSize="md"
        css={{
          display: "flex",
          gap: theme.space.xxs,
          alignItems: "baseline",
        }}
      >
        <Text as="span">Made by</Text>
        <Link href="https://github.com/notAro14" isExternal>
          Aro Andriamaro
        </Link>
      </Text>
    </Container>
  )
}

export default Footer
