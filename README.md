## bounty0x-test-task


## Requirements

To run tests you need to install the following software:

- [Truffle v4.0.4](https://github.com/trufflesuite/truffle-core)
- [EthereumJS TestRPC v6.0.3](https://github.com/ethereumjs/testrpc)


## Deployment

To deploy smart contracts to local network do the following steps:
1. Go to the smart contract folder and run truffle console:
```sh
$ cd bounty0x-test-task
$ truffle develop
```
2. Inside truffle console, invoke "migrate" command to deploy contracts:
```sh
truffle> migrate
```


## How to test

Open the terminal and run the following commands:

```sh
$ cd bounty0x-test-task
$ truffle test
```
