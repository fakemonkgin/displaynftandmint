import { ConnectWallet, useAddress, useNFTDrop, useClaimNFT} from '@thirdweb-dev/react';

export default function Home() {
  const address = useAddress();
  const nftDrop = useNFTDrop("0x5090c514a72674Fe723B34E6109c7c6Bb7f0A161");
  const { mutate: claimNft} = useClaimNFT(nftDrop);
 
  return (
    <>
      <ConnectWallet accentColor="#b52097"/>
      <button onClick={() => claimNft({
         quantity: 1,
         to: address, 
      })}>Mint NFT</button>
    </>
  );
}
