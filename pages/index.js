import { ConnectWallet, useAddress, useToken, useTokenBalance, useMintToken } from '@thirdweb-dev/react';

export default function Home() {
  const address = useAddress();
  const token = useToken("0x68DF6C1465458c6d36260F7F495Dd33eE61B097f");
  const { data: tokenBalance } = useTokenBalance(token, address);
  const { mutate: mintToken} = useMintToken(token);
 
  return (
    <>
      <ConnectWallet accentColor="#b52097"/>
      <p>Your Address: { address } </p>
      <p>Your Balance: { tokenBalance?.displayValue } { tokenBalance?.symbol} </p>

      <button onClick={() => mintToken({
         amount: 1,
         to: address, 
      })}>Mint Token</button>
    </>
  );
}
