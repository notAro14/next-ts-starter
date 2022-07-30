import NextLink from "next/link"

import { styled } from "src/ui-kit/stitches.config"

export const StyledLink = styled("a", {
  "$$component-link-color": "$colors$semantic-text-lo",
  "$$component-link-color-hovered": "$colors$semantic-text-hi",
  "$$component-link-font": "$fonts$semantic-primary",
  "$$component-link-font-size": "$fontSizes$md",

  color: "$$component-link-color",
  fontFamily: "$$component-link-font",
  fontSize: "$$component-link-font-size",
  textDecoration: "underline",
  "&:hover": {
    cursor: "pointer",
    color: "$$component-link-color-hovered",
  },
  variants: {
    noUnderline: {
      true: {
        textDecoration: "none",
      },
    },
  },
  defaultVariants: {
    noUnderline: false,
  },
})

interface Props {
  href: string
  children: string
  // Styled Props
  noUnderline?: boolean
}

export default function Link({ children, href, ...props }: Props) {
  return (
    <NextLink passHref href={href}>
      <StyledLink {...props}>{children}</StyledLink>
    </NextLink>
  )
}
