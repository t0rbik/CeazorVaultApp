import { fantomPools } from '../src/features/configure/vault/fantom_pools.js';
import { polygonPools } from '../src/features/configure/vault/polygon_pools.js';
import { arbitrumPools } from '../src/features/configure/vault/arbitrum_pools.js';
import { optimismPools } from '../src/features/configure/vault/optimism_pools.js';

export const chainPools = {
  fantom: fantomPools,
  polygon: polygonPools,
  arbitrum: arbitrumPools,
  optimism: optimismPools,
};

export const chainRpcs = {
  fantom: process.env.REACT_APP_FANTOM_RPC || 'https://rpc.ftm.tools/',
  polygon: process.env.REACT_APP_POLYGON_RPC || 'https://polygon-rpc.com',
  arbitrum: process.env.REACT_APP_ARBITRUM_RPC || 'https://arb1.arbitrum.io/rpc',
  optimism: process.env.REACT_APP_OPTIMISM_RPC || 'https://mainnet.optimism.io',
};
