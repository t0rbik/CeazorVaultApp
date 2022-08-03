export const fantomPools = [
  {
    id: 'fantom-fBEETS',
    logo: 'single-assets/fBEETS.png',
    name: 'FBEETS Compounder',
    token: 'FBEETS',
    tokenDescription: 'fBEETS voting power to vote on CRE8R:FTM Beethoven-X gauge.',
    tokenAddress: '0xfcef8a994209d6916eb2c86cdd2afd60aa6f54b1', //want token
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'ceazFBEETS',
    earnedTokenAddress: '0x58e0ac1973f9d182058e6b63e7f4979bc333f493', // vault token
    earnContractAddress: '0x58e0ac1973f9d182058e6b63e7f4979bc333f493', // vault token
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'fBEETS',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Beethoven-X',
    assets: ['FBEETS'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'Compounder',
    withdrawalFee: '0.01%',
    buyTokenUrl: 'https://beets.fi/#/stake',
    createdAt: 1622574935,
  },
  {
    id: 'fantom-CRE8RBPT',
    logo: 'fantom/Cre8rBPT.png',
    name: 'CRE8R in F-Major Compounder',
    token: 'CRE8RBPT',
    tokenDescription: 'Beethoven to earn Beets, converts to ceazFBeets for xCheese',
    tokenAddress: '0xbb4607beDE4610e80d35C15692eFcB7807A2d0A6', //want
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'ceazCRE8RBPT',
    earnedTokenAddress: '0xC93dd4F61C4598192f6c150Af38a58514eB3abbe', //vault
    earnContractAddress: '0xC93dd4F61C4598192f6c150Af38a58514eB3abbe', //vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'CRE8R',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Beethoven-X',
    assets: ['CRE8R'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'Compounder',
    withdrawalFee: '0.01%',
    buyTokenUrl:
      'https://beets.fi/#/pool/0xbb4607bede4610e80d35c15692efcb7807a2d0a6000200000000000000000140',
    createdAt: 1622574935,
  },
  {
    id: 'fantom-linSpiritBPT',
    logo: 'fantom/linSpiritBPT.png',
    name: 'Water Music By LiquidDriver',
    token: 'linSpiritBPT',
    tokenDescription: 'BeethovenX to earn Beets converts some to ceazFBeets for xCheese',
    tokenAddress: '0x30A92a4EEca857445F41E4Bb836e64D66920F1C0', //want
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'ceazlinSpiritBPT',
    earnedTokenAddress: '0x47198f4151f7aF48200999439B100d85a5697c00', //vault
    earnContractAddress: '0x47198f4151f7aF48200999439B100d85a5697c00', //vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: '??',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Beethoven-X',
    assets: ['SPIRIT'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'Compounder',
    withdrawalFee: '0.01%',
    buyTokenUrl:
      'https://beets.fi/#/pool/https://beets.fi/#/pool/0x30a92a4eeca857445f41e4bb836e64d66920f1c0000200000000000000000071',
    createdAt: 43561861,
  },
  {
    id: 'fantom-liHNDBPT',
    logo: 'fantom/liHNDBPT.png',
    name: 'Valhalla Calling By LiquidDriver',
    token: 'liHNDBPT',
    tokenDescription: 'Liquid Driver to earn LQDR sends some to xCheese',
    tokenAddress: '0x8F6a658056378558fF88265f7c9444A0FB4DB4be', //want
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'ceazliHND',
    earnedTokenAddress: '0xd5Ab59A02E8610FCb9E7c7d863A9A2951dB33148', //vault
    earnContractAddress: '0xd5Ab59A02E8610FCb9E7c7d863A9A2951dB33148', //vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: '??',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Beethoven-X',
    assets: ['HND'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'Compounder',
    withdrawalFee: '0.01%',
    buyTokenUrl:
      'https://beets.fi/#/pool/0x8f6a658056378558ff88265f7c9444a0fb4db4be0002000000000000000002b8',
    createdAt: 1622574935,
  },
  {
    id: 'fantom-MIM-hMIM',
    logo: 'single-assets/MIM.png',
    name: 'Hundred MIM in Liquid Driver',
    token: 'MIM',
    tokenDescription: 'MIM to add to Hundred, then deposits in Liquid driver to earn boosted HND',
    tokenAddress: '0x82f0B8B456c1A451378467398982d4834b6829c1', //want
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'ceazMIM',
    earnedTokenAddress: '0xC9556DBB62535CD28DfB4f1feF75313a315A3c01', //vault
    earnContractAddress: '0xC9556DBB62535CD28DfB4f1feF75313a315A3c01', //vault
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: '??',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Hundred/LiquidDriver',
    assets: ['MIM'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'Compounder',
    withdrawalFee: '0.01%',
    buyTokenUrl:
      'https://beets.fi/#/pool/https://beets.fi/#/pool/https://beets.fi/#/pool/0xd163415bd34ef06f57c58d2aed5a5478afb464cc00000000000000000000000e',
    createdAt: 43760821,
  },
];
