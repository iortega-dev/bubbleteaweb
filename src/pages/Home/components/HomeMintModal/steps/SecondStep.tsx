import { Share } from 'react-twitter-widgets';
import { HomeMintStepDescription, HomeMintStepTitle } from '../HomeMintModal.styled';

const SecondStep = () => {
  return (
    <>
      <HomeMintStepTitle>Spread the Word!</HomeMintStepTitle>
      <HomeMintStepDescription>
        Tweet about #EtherTea and #BeardedBaldies. Help our project shine brighter!
      </HomeMintStepDescription>
      <Share
        url="https://beardedbaldies.com/ethertea"
        options={{
          text: "Just minted a FREE #EtherTea 🍵 NFT! Can't wait to see what's brewing in the #BeardedBaldies universe.\n\n👇 Don't miss out! 👇\n",
          size: 'large',
        }}
      />
    </>
  );
};

export default SecondStep;
