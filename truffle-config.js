require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remain property half private surge toss'; 
let testAccounts = [
"0xfb45497db6dc7174ba08195138621b1ff304eeae4273ecbc80ca30d483303910",
"0xfee3bdfd0ab6b83b29509e1caafd7b66f7e674f930c1f899039b8d4ee859fec2",
"0x5c25c62bdec9526ef904692ae165daefaec5fe2a7c4baa1287ee1c9322f510ff",
"0x0686ee946bb899dfd2d665e9ab64e95813c9ab54ffb75c7ef417e8236a9f0d4e",
"0x112772eeba31215807e46b65262a8be64107498e31d3b81b3be94e57f28007e8",
"0x011b72a7d76737fdf7ea2623eb1504e3994920033585e1c15f1ff536cc243aa9",
"0xad46b555010eee69b4ebd0191edba83bb649fc0ca3f7d61e2e2e052c68508bc1",
"0xefca608f02e5e9283c8b45d2074899ea91797f50866a22c9954de07832efbf8a",
"0x812d3ec06aafd87f3704eddd32456501173227e21acb3c791400f05450a528c2",
"0x1b90bd67cb459d04f61c9d81cb4d3d16b399ad5fcf2ff692333a25f6c7191b02"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
