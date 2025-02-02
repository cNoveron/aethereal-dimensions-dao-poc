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
  Spacer
} from '@chakra-ui/react';
// import storeNFT from '../store.mjs's


async function storeNFT(image: any, name: any, description: any) {
  const nft = {
    image, // use image Blob as `image` field
    name,
    description,
    properties: {
      type: "3d-concept",
      // origins: {
      //   http: "https://blog.nft.storage/posts/2021-11-30-hello-world-nft-storage/",
      //   ipfs: "ipfs://bafybeieh4gpvatp32iqaacs6xqxqitla4drrkyyzq6dshqqsilkk3fqmti/blog/post/2021-11-30-hello-world-nft-storage/"
      // },
      authors: [{ name: "David Choi" }],
      // content: {
      //   "text/markdown": "The last year has witnessed the explosion of NFTs onto the world’s mainstage. From fine art to collectibles to music and media, NFTs are quickly demonstrating just how quickly grassroots Web3 communities can grow, and perhaps how much closer we are to mass adoption than we may have previously thought. <... remaining content omitted ...>"
      // }
    }
  }
}


const StyledInput = ({ label, placeholder, children }: { [key: string]: any }) => (
  <Box>
    <Text>
      {label}
    </Text>
    <Flex>
      <Box width='100%'>
        <InputGroup
          size='md'
        >
          {children}
          <Input
            htmlSize={4}
            variant='filled'
            placeholder={placeholder}
          />
        </InputGroup>
      </Box>
    </Flex>
  </Box>
);

const StyledNumberInput = ({ label, placeholder, children }: { [key: string]: any }) => (
  <Box>
    <Text>
      {label}
    </Text>
    <Flex>
      <Box width='100%'>
        <InputGroup
          size='md'
        >
          <NumberInput
            placeholder={placeholder}
          >
            <NumberInputField>
            </NumberInputField>
          </NumberInput>
          {children}
        </InputGroup>
      </Box>
    </Flex>
  </Box>
);

const StyledTextarea = ({ label, placeholder }: { [key: string]: any }) => (
  <Box marginTop='15px'>
    <Text>
      {label}
    </Text>
    <Flex>
      <Box width='100%'>
        <InputGroup
          size='md'
        >
          <Textarea
            variant='filled'
            placeholder={placeholder}
          />
        </InputGroup>
      </Box>
    </Flex>
  </Box>
);

const StyledRadiogroup = ({ label, options }: { [key: string]: any }) => (
  <Box>
    <Text>
      {label}
    </Text>
    <Flex>
      <Box width='100%'>
        <RadioGroup
          onChange={() => { }}
          mb={6}>
          <Stack
            alignItems='center'
            direction='row'
            spacing={10}
          >
            {options.map((o: any, i: number) => (
              <Radio value={`option-${i}`}>{o}</Radio>
            ))}
          </Stack>
        </RadioGroup>
      </Box>
    </Flex>
  </Box>
);


const StyledSelect = ({ label, options, placeholder }: { [key: string]: any }) => (
  <Box
    fontSize='15px'>
    <Text>
      {label}
    </Text>
    <Flex>
      <Box width='100%'>
        <Select placeholder='Select an option'>
          {options.map((o: any, i: number) => (
            <option value={`option-${i}`}>{o}</option>
          ))}
        </Select>
      </Box>
    </Flex>
  </Box>
);

const UploadAndDisplayImage = () => {

  const [selectedImage, setSelectedImage] = useState([]);
  const [nftDataArray, setNftDataArray] = useState([]);

  const hoverTrColor = useColorModeValue('gray.100', 'gray.700');
  
  return (
      <Box border="2px" borderColor={hoverTrColor} borderRadius="xl" padding="24px 18px">
        <TableContainer w={'full'}>
          <Stack spacing={5}>
            <Heading size='md'>Launch the Genesis Collection of your game universe.
            </Heading>
            <Text
              style={{
                wordWrap: 'break-word',
                whiteSpace: 'pre-wrap'
              }}
              >
              Choose the images to mint NFTs of the first collection of your game world and provide a detailed description of the benefits that . Then select Launch Genesis Collection. This will mint the NFT collection and setup their prices on our marketplace so web3 gamers can acquire them and enjoy the perks of being the first to owners of an Aethereal Genesis Collection:
            </Text>
            <Text>
              1) Be the first to get them and use them inside your game world.
            </Text>
            <Text>
              2) Get a say in your Council of Curators of your Aethereal Genesis Collection, the DAO that governs the artistic concept of your game.
            </Text>
            <Text>
              3) Enjoy a share of the royalties for each NFT transfer.
            </Text>
            <Text>
              4) Earn rewards when developers effectively integrate the assets into your game world.
            </Text>
            <Stack
              spacing={5}
              width='100%'
              flex='1'
            >
              <Heading size='md'>Choose your files:
              </Heading>
              <input
                type="file"
                multiple
                name="myImage"
                onChange={(event: any) => {
                  console.log(event.target.files);
                  setSelectedImage(event.target.files);
                }}
              />
            </Stack>
            <Spacer/>
            <Divider/>
          </Stack>
          <Table size='sm'>
            <Thead>
              <Tr>
                <Th>Design</Th>
                <Th>Metadata</Th>
              </Tr>
            </Thead>
            <Tbody>

            {!!selectedImage && (Object.values(selectedImage).map((image, i: number) =>
              <Tr key={i} _hover={{ bgColor: hoverTrColor }} cursor="pointer">
                <Td width='300px'>
                  <img
                    alt="not found"
                    width={"250px"}
                    src={URL.createObjectURL(image)}
                  />
                  <br />
                  <Button
                    colorScheme='teal'
                    onClick={() => setSelectedImage([])}>
                    Remove
                  </Button>
                </Td>
                <Td>
                  <Stack
                    spacing={20}
                    width='100%'
                    flex='1'
                  >
                    <Stack
                      direction='row'
                      spacing={8}
                      width='100%'
                    >
                      <Box
                        width='100%'>
                        <Stack spacing={4}
                          width='100%'>
                          <StyledInput
                            label='Name'
                            placeholder='The name of this work of art' />
                          <StyledInput
                            label='GitHub'
                            placeholder='your GitHub Username' >
                            <InputLeftAddon
                              color='gray.300'
                              fontSize='15px'
                              children='https://github.com/' />
                          </StyledInput>
                          <StyledInput
                            label='Twitter'
                            placeholder='your Twitter Username' >
                            <InputLeftAddon
                              color='gray.300'
                              fontSize='15px'
                              children='https://twitter.com/' />
                          </StyledInput>
                          <StyledInput
                            label='Behance'
                            placeholder='your Behance portfolio' >
                            <InputLeftAddon
                              color='gray.300'
                              fontSize='15px'
                              children='https://behance.com/' />
                          </StyledInput>
                        </Stack>
                      </Box>
                      <Box
                        width='100%'>
                        <Stack
                          spacing={4}
                          width='100%'>
                          <StyledNumberInput
                            label='Price'
                            placeholder='0.5' >
                            <InputRightAddon
                              color='gray.300'
                              children='ETH' />
                          </StyledNumberInput>
                          <StyledSelect
                            label='Use'
                            options={['Illustration', '3D Concept']}
                          />
                          <StyledRadiogroup
                            label='Allow design updates'
                            options={['Yes','No']}
                          />
                          <StyledRadiogroup
                            label='Allow integration into other worlds'
                            options={['Yes', 'No']}
                          />
                        </Stack>
                      </Box>
                    </Stack>
                  </Stack>

                  <Box>
                    <StyledTextarea
                      label='Description'
                      placeholder='A detailed description of the use of this '
                    />
                  </Box>
               </Td>
              </Tr>
            ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Box>
          <Flex width='maxWidth'>
            {selectedImage.length !== 0
              ?
              <ButtonGroup gap='2' width='100%'>
                <Button
                  colorScheme='teal'
                  onClick={() => {
                    // storeNFT()
                  }}
                  width='100%'
                >
                  Launch Collection
                </Button>
              </ButtonGroup>
              :
              <></>
            }
          </Flex>
        </Box>
      </Box>

  );
};

export default UploadAndDisplayImage;