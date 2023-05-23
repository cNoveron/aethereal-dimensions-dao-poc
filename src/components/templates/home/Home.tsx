import { CheckCircleIcon, SettingsIcon } from '@chakra-ui/icons';
import { Heading, VStack, List, ListIcon, ListItem, Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <VStack w={'full'}>
      <Heading size="md" marginBottom={6}>
        Aethereal Dimensions
      </Heading>
      <div>
        <Text>
          Whether you are a curator, an artist, a collector, a writer or a cinematic franchise owner you care about your artistic concept. Creative DAOs allow you to govern a treasury and decision making to protect and grow your artistic concept or web3 game world.
        </Text>
      </div>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Moralis authentication
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Display Transactions
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Display ERC20 transfers
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Display ERC20 balances
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Display NFT balances
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Display NFT transfers
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Multichain Support
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Using Moralis from client-side
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color="green.500" />
          Adding explorer links to balances, transactions ...
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color="green.500" />
          Better responsive design
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color="green.500" />
          Rainbowkit integration
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color="green.500" />
          ... and more
        </ListItem>
      </List>
    </VStack>
  );
};

export default Home;
