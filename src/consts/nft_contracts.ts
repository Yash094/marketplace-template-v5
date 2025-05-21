import type { Chain } from "thirdweb";
import { avalancheFuji, polygonAmoy, avalanche } from "./chains";

export type NftContract = {
  address: string;
  chain: Chain;
  type: "ERC1155" | "ERC721";

  title?: string;
  description?: string;
  thumbnailUrl?: string;
  slug?: string;
};

/**
 * Below is a list of all NFT contracts supported by your marketplace(s)
 * This is of course hard-coded for demo purpose
 *
 * In reality, the list should be dynamically fetched from your own data source
 */
export const NFT_CONTRACTS: NftContract[] = [
  {
    address: "0x0924319a7524cf023356Ace4D5018fADDE0c60C8",
    chain: avalanche,
    title: "Bad Azz Bumba Beez",
    thumbnailUrl: "",
    type: "ERC721",
  },
  {
    address: "0xA3DaEd128c483e38984f8374916A441a22CD8aDd",
    chain: avalanche,
    title: "Core Bumba Beez",
    thumbnailUrl:
      "",
    slug: "core-bumba-beez",
    type: "ERC721",
  },

  {
    address: "0x9d29d7C8871C093448113be59505CdA5E88f13f4",
    chain: avalanche,
    title: "BRAP MUSIC NFBZ",
    description: "",
    thumbnailUrl:
      "",
    slug: "brap-music-nfbz",
    type: "ERC721",
  },
  
];
