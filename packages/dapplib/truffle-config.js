require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz kiwi october slab chapter deny radar purchase install knee bubble traffic'; 
let testAccounts = [
"0x0d18dad2983c07b0b904b60f587009f53b84f0fe10e5e8b1890070cc904d19f6",
"0xbf71227c4b689ee6329a3077d59eabc18db115364b0f5399a659c9ab3a3b6dfb",
"0x1903726ad9ee87fa45ccb148c4c3bb95faefff760c9780fa598c7e824850f000",
"0x51f004e8380146fcca0cbbfafec09a0e2cf40f89cbe46c5b4cc2818e9edc18a3",
"0x7352181f4d551b77cd786228216c8d587b117a6a10249890e9a0cdd17cb6709c",
"0x47bedca802129be0a068353ffa09047b20c9761de3f5bc2930b82e38ac2ffaeb",
"0x95a6fb05f465f4ec82ef0fe0742fce238dfa8333b4ab25ebe8edf1d99a0a886e",
"0xaff5c8dc2e726dd88b605c6d6a9354567e2de230ec5ba977d486e1081d308429",
"0x4d4b4e070e3d7ce4ef5fd22576b44d3b228c6ff94c39780a3cb6b03ff3a74cfc",
"0x5a5f5c954a2e06838a0a6bd32cc716d7cbfe488784a48895b02b0fa1ec3acce3"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


