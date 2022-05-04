import {
  clusterApiUrl,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
} from '@solana/web3.js';

const connection = new Connection(clusterApiUrl('devnet'));
const key = Uint8Array.from([]);

async function main() {
  const signer = Keypair.fromSecretKey(key);
  const balance = await connection.getBalance(signer.publicKey);
  console.info(`SOL: ${balance / LAMPORTS_PER_SOL}`);
}

main().catch(console.error);
