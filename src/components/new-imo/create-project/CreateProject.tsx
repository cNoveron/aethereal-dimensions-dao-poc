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
} from '@chakra-ui/react';
import { useEvmWalletTokenTransfers } from '@moralisweb3/next';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { getEllipsisTxt } from 'utils/format';
import { useNetwork } from 'wagmi';
import UploadAndDisplayImage from '../upload-image/UploadImage';

const CreateProject = () => {
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
      <Heading size="lg" marginBottom={6}>
        Create Project
      </Heading>
      <UploadAndDisplayImage />
    </>
  );
};

export default CreateProject;
