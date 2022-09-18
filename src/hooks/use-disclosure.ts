import { useCallback, useState } from "react"

export const useDisclosure = () => {
  const [isOpen, setOpen] = useState(false)
  const onOpen = useCallback(() => setOpen(true), [])
  const onClose = useCallback(() => setOpen(false), [])
  const toggle = useCallback(() => setOpen((b) => !b), [])
  return { isOpen, onOpen, onClose, toggle }
}

export default useDisclosure
