# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

## Deplyoing the contract

```shell
npx hardhat run scripts/deploy.js --network <network name>
```

Where `<network name>` can can be `mumbai` or `swisstronik`

## Testing the contract
```shell
npx hardhat test
```

## Reading private varibale
```shell
node functions/Interact.js
```


Contract deployed to Mumbai: [0x71223138B0FD2848c2657b293892157D0B1EE627](https://mumbai.polygonscan.com/address/0x71223138B0FD2848c2657b293892157D0B1EE627)  
Contract deployed to Swisstronik : [0x59E431B64EC822b20DeD579788ec9c0464822729](https://explorer-evm.testnet.swisstronik.com/address/0x59E431B64EC822b20DeD579788ec9c0464822729)