import {
  clusterApiUrl,
  Connection,
  Keypair,
  PublicKey,
  sendAndConfirmTransaction,
  Transaction,
  TransactionInstruction,
} from '@solana/web3.js';
import { BN } from 'bn.js';

const connection = new Connection(clusterApiUrl('devnet'));
const key = Uint8Array.from([]);
const programId = new PublicKey('');

async function main() {
  const signer = Keypair.fromSecretKey(key);

  const data = Buffer.from(Uint8Array.of(0, ...new BN(44).toArray('le', 8)));

  const transaction = new Transaction();
  transaction.add(
    new TransactionInstruction({
      keys: [],
      programId,
      data,
    }),
  );

  const sig = await sendAndConfirmTransaction(connection, transaction, [
    signer,
  ]);
  console.info(`Sig: ${sig}`);
}

main().catch(console.error);
