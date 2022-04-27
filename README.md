# CIP5-JS

This is a reference implementation of Cardano's [CIP5](https://github.com/cardano-foundation/CIPs/tree/master/CIP-0005) which defines standard prefixes (or so-called human-readable part in the [bech32](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki)) encoding format) for various bech32-encoded binary data across the Cardano ecosystem.

## Install

```sh
npm i @dcspark/cip5-js --save
```

## Usage

```js
import Cip5 from "@dcspark/cip5-js";
import { bech32 } from "bech32";
const bech32Info = bech32.decode(address);

if (bech32Info.prefix === Cip5.hashes.addr_vkh) {
  // whatever parsing logic you want
}
```
