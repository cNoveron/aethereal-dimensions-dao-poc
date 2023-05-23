import { NFTStorage, File } from 'nft.storage';
import mime from 'mime';
import * as fs from 'fs';
import path from 'path';


const NFT_STORAGE_KEY = process.env.NFT_STORAGE_KEY



async function fileFromPath(filePath) {
  const content = await fs.promises.readFile(filePath)
  const type = mime.getType(filePath)
  return new File([content], path.basename(filePath), { type })
}


export async function storeNFT(imagePath, name, description) {
  fs;
  const image = await fileFromPath(imagePath)
  const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY })

  return nftstorage.store({
    image,
    name,
    description,
  })
}


export const getStaticProps = async () => { fs; return { imagePath: '', name: '', description: '' } }

