import React from "react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"

import { useKeyPress } from "../hooks/useKeyPress"

export interface IProps {
  children?: React.ReactNode
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  title: string
}

const CodeModal: React.FC<IProps> = ({
  children,
  isOpen,
  setIsOpen,
  title,
}) => {
  useKeyPress(`Escape`, () => setIsOpen(false))

  return (
    <Modal
      isOpen={isOpen}
      scrollBehavior="inside"
      variant="code"
      onClose={() => setIsOpen(false)}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />

        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default CodeModal
