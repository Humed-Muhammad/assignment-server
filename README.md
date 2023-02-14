# How to run the application

This project is instantiated with truffle.

## Instructions

- Make sure you have latest node version installed

### Install truffle

```bash
npm install -g truffle
```

- Confirm by

```bash
truffle version
```

## Install Ganache

1. Install it as a .deb file [here](https://trufflesuite.com/ganache/)
2. Or as a cli (npm i -g ganache-cli)

- Run

```bash
truffle migrate
```

- Make sure to copy the contract address and put it into the environment variables on your client side.

- Make sure to use the address that deployed the contract when you interact with the smart contract from client as the contract owner is the only one has privileges.

- Import the wallet private key to your metamask on the client side and have fun with it.

## Or Use a test network like goerli

This project uses Infura to deploy the smart contract, just create a project and give it the api key and your wallet mnemonics as environmental variables.

### To deploy on infura test network

- First uncomment the section with the configuration on truffle-config.js

```js
goerli: {
  networkCheckTimeout: 10000,
  provider: () => new HDWalletProvider(MNEMONIC, INFURA_API_KEY),
  network_id: 5,       // Goerli's id
  confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
  timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
  skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
},
```

- Run

```bash
truffle migrate --network goerli
```

- Make sure to copy the contract address and put it into the environment variables on your client side.
