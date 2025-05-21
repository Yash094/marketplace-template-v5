import type { Chain } from "thirdweb";
import { avalancheFuji, polygonAmoy, sepolia, avalanche } from "./chains";

type MarketplaceContract = {
  address: string;
  chain: Chain;
};

/**
 * You need a marketplace contract on each of the chain you want to support
 * Only list one marketplace contract address for each chain
 */
export const MARKETPLACE_CONTRACTS: MarketplaceContract[] = [
  {
    address: "0x586d90eceDAf6627832f1B6081CAfc4Ea27fAf6A",
    chain: avalanche,
  },
];
