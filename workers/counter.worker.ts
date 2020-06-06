import * as Comlink from 'comlink';
import { getWalletSDK } from 'src/libs/walletSDK';

const obj = {
  counter: 0,
  inc() {
    this.counter++;
  },
};

async function fetchMasterWalletById(cb) {
  try {
    await getWalletSDK().wallets.getMasterWallet(id);
  } finally {
    await cb('A string from a worker');
  }
}

Comlink.expose(obj);
export {};