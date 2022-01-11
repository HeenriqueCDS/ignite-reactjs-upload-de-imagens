import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
  Box,
  Flex,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (

    <Modal
      isOpen={isOpen}
      onClose={onClose}

    >
      <ModalOverlay />

      <ModalContent
        maxW='fit-content'
        maxH='600px'
      >
        <ModalBody
          p='0'
          justifyContent='center'
          alignItems='center'
          background='pGray.800'
          maxW='900px'
          maxH='600px'
        >
          <Image
            src={imgUrl}
            maxW='900px'
            maxH='600px'

          />
        </ModalBody>
        <ModalFooter  h='32px' w='100%' alignSelf='flex-start' background='pGray.800' justifyContent='flex-start' borderBottomRadius='6px'>
          <Link>
            <a href={imgUrl}>
              Abrir original
            </a>
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal >
  )

}
