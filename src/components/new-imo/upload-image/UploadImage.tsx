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
  NumberIncrementStepper,
} from '@chakra-ui/react';

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

  const hoverTrColor = useColorModeValue('gray.100', 'gray.700');
  
  return (
      <Box border="2px" borderColor={hoverTrColor} borderRadius="xl" padding="24px 18px">
        <TableContainer w={'full'}>
          <h1>Upload and Display Image usign React Hook's</h1>
          <div>

            <input
              type="file"
              multiple
              name="myImage"
              onChange={(event: any) => {
                console.log(event.target.files);
                setSelectedImage(event.target.files);
              }}
            />
          </div>
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
                            placeholder='yourGitHubUsername' >
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
                      
                  }}
                  width='100%'
                >
                  Launch IMO
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