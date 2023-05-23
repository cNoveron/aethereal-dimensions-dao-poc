import React, { useState } from "react";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Heading,
  Box,
  useColorModeValue,
  Input,
  Text,
  InputGroup,
  Stack,
  InputLeftAddon,
  InputRightAddon,
  Flex,
  Button,
  Textarea,
  RadioGroup,
  Radio,
  Select,
  ButtonGroup,
  NumberInput,
  NumberInputField,
  Divider,
  Spacer,
  Card,
  CardBody,
  Wrap,
  WrapItem,
  Avatar,
} from '@chakra-ui/react';

import { useEvmWalletTokenTransfers } from '@moralisweb3/next';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { getEllipsisTxt } from 'utils/format';
import { useNetwork } from 'wagmi';
import UploadAndDisplayImage from '../upload-image/UploadImage';

const StyledText = ({ label, text }: { [key: string]: any }) => (
  <Box>
    {/* <Text size='xs'>
      {label}
    </Text> */}
    <Flex>
      <Box width='100%'>
        <Text
          fontSize='xs'
          height='75px'
          width='240px'
          style={{
            wordWrap: 'break-word',
            whiteSpace: 'pre-wrap'
          }}>
        {text}
        </Text>
      </Box>
    </Flex>
  </Box>
);

const CollectionVIew = () => {
  const images: any[] = [
    ['Naaia Oru', '/gods/god1.png',
      'The creator of the Vyrma, and the father of all gods.'],
    ['Zhevma Ilur', '/gods/god2.png',
      'The giver of wisdom. He has descended into the land of mortals to guide kings and priests into the path of the righteous.'],
    ['Ivennesh', '/gods/god3.jpg',
      'The mother of wrath. She is able to bend the destiny of mortals who look for her.'],
    ['Ye\'n Ima', '/gods/god4.png',
      'The godess of the warriors. She carries the souls of fallen warriors into the heavenly realms.'],
    ['Saahani', '/gods/god5.png',
      'The lady of love and compassion. She is the light of peace that prevents the doom of the Vyrma.'],
    ['Durima', '/gods/god6.png',
      'The god of happiness and wellbeing. His adepts worship his altars to bring good oamens to their parties.'],
  ]
  const hoverTrColor = useColorModeValue('gray.100', 'gray.700');
  const { data } = useSession();
  const { chain } = useNetwork();
  const { data: transfers } = useEvmWalletTokenTransfers({
    address: data?.user?.address,
    chain: chain?.id,
  });

  useEffect(() => console.log('transfers: ', transfers), [transfers]);

  return (
    <>
      <Heading size="xl" marginBottom={6}>
        Explore Collection
      </Heading>
      <Box border="2px" borderColor={hoverTrColor} borderRadius="xl" padding="40px 60px" background='#000' >
        <Stack spacing={5} direction='row' >
          <Avatar
            size='2xl'
            src={'/gods/god1.png'}
          />
          <Stack spacing={5} direction='column' padding="40px 0">
            <Heading size='2xl'>
              Gods of Aethereal Kingdoms
            </Heading>
          </Stack>
        </Stack>
        <Box padding='20px 0'>
          <Text>
            These are the gods of Aethereal Kingdoms. Owning a god NFT grants special rights to decide all content and game mechanics in the Aethereal Kingdoms game world.
          </Text>
        </Box>
        <Spacer />
        <Divider />
        <Spacer />
        <Flex paddingTop='20px'>
          <Wrap>
            {images.length !== 0 && (images.map((image, i: number) =>
              <WrapItem>
                <Card maxW='lg'>
                  <CardBody>
                    <Box
                      height="230px"
                    >
                      <img
                        alt="not found"
                        width="245px"
                        src={image[1]}
                      />
                    </Box>
                    <br />
                    <Stack
                      spacing={1}
                      width='100%'
                      flex='1'
                    >
                      <Heading size="xl">
                        {image[0]}
                      </Heading>
                      <Box
                        width='100%'>
                        <Stack spacing={1}
                          width='100%'>
                          <StyledText
                            label='Description'
                            text={image[2]}
                          />
                        </Stack>
                      </Box>

                      <Button
                        colorScheme='teal'
                        onClick={() => {

                        }}
                        width='100%'
                      >
                        Buy
                      </Button>
                    </Stack>
                  </CardBody>
                </Card>
              </WrapItem>
            ))}
          </Wrap>
        </Flex>

        <Box>
          <Flex width='maxWidth'>
            {images.length !== 0
              ?
              <ButtonGroup gap='2' width='100%'>
                <Button
                  colorScheme='teal'
                  onClick={() => {

                  }}
                  width='100%'
                >
                  Launch Game Universe
                </Button>
              </ButtonGroup>
              :
              <></>
            }
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default CollectionVIew;
