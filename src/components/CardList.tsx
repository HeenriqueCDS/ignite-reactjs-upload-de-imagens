import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure()

  const [selectedImageUrl, setSelectedImageUrl] = useState('')

  function handleSelectedImage(url: string) {
    setSelectedImageUrl(url)
    onOpen()
  }

  return (
    <>
      <SimpleGrid
        columns={3}
        spacing='40px'
      >
        {cards.map(card => {
          return (
            <Card
              key={card.id}
              data={card}
              viewImage={handleSelectedImage}
            />
          )
        })}
      </SimpleGrid>
      <ModalViewImage
        imgUrl={selectedImageUrl}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}
