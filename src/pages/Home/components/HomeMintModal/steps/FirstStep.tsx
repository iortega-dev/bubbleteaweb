import { HomeMintStepDescription, HomeMintStepTitle } from '../HomeMintModal.styled';

import { Follow } from 'react-twitter-widgets';

const FirstStep = () => {
  return (
    <>
      <HomeMintStepTitle>Connect with the Bearded Baldies!</HomeMintStepTitle>
      <HomeMintStepDescription>
        Follow @BeardedBaldies for fresh updates. Your support means the world to us
      </HomeMintStepDescription>
      <Follow username="BeardedBaldies" options={{ size: 'large' }} />
    </>
  );
};

export default FirstStep;
