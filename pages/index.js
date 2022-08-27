import { ConnectWallet, ThirdwebNftMedia, useNFTs, useNFTCollection, useAddress, useMintNFT } from '@thirdweb-dev/react';

export default function NFTCollectionView() {
  const address = useAddress();
  const nftCollection = useNFTCollection("0x88a6294e638431e574f2811772Fc969Be8Ae509D");
  const {data: nfts, isLoading} = useNFTs(nftCollection);
  const {mutate: MintNft} = useMintNFT(nftCollection);
 
  return (
    <>
    <div>
      {!isLoading ? (
        <div>
          {nfts.map((nft) => (
            <div key={nft.metadata.id.toString()}>
              <ThirdwebNftMedia metadata={nft.metadata} />
              <h3>{nft.metadata.name}</h3>
            </div>
          ))} 
        </div>
        ) : (
        <p>Loading...</p>
      )}
    </div>

    <div>
      {address ? (<button onClick={() => MintNft(
        {
          metadata: {
            name:"My awesome NFT",
          },
          to: address,
        }
      )}>
        MintYourNFT
      </button>) : (<ConnectWallet accentColor="#b52097"/>)
      }
    </div>
    </>
  );
}


