import type { NextPage } from "next"
import { useReducer, useEffect, useRef } from "react"
import Head from "next/head"
import autoAnimate from "@formkit/auto-animate"

import UserList from "src/features/user-list"
import Box from "src/ui-kit/box"
import Button from "src/ui-kit/button"
import Flex from "src/ui-kit/flex"
import Heading from "src/ui-kit/heading"

const UserListPage: NextPage = () => {
  const [show, enable] = useReducer(() => true, false)
  const parent = useRef<HTMLUListElement | null>(null)
  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  return (
    <>
      <Head>
        <title>User List</title>
      </Head>
      <Heading as="h1" css={{ fontSize: "$4xl" }}>
        User list
      </Heading>
      <Box as="main">
        <Flex
          ref={parent}
          direction="column"
          as="ul"
          css={{ listStyleType: "none", marginBottom: "$lg" }}
        >
          {show && <UserList />}
        </Flex>
        <Button
          variant="outline"
          onClick={() => {
            enable()
          }}
        >
          Fetch users
        </Button>
      </Box>
    </>
  )
}

export default UserListPage
