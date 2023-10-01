import { ReactNode, useState } from 'react';

import {
  HomeMintButtonsWrapperStyled,
  HomeMintFormWrapperStyled,
  HomeMintStepIndicator,
  HomeMintStepsRowStyled,
  HomeMintStepsWrapperStyled,
  HomeMintWrapperStyled,
} from './HomeMintModal.styled';

import Button from '../../../../components/Button';
import FirstStep from './steps/FirstStep';
import SecondStep from './steps/SecondStep';
import ThirdStep from './steps/ThirdStep';
import ProgressBar from '../../../../components/ProgressBar/ProgressBar';
import { useModal } from '../../../../context/ModalContext';

export const HomeMintModal = () => {
  const [page, setPage] = useState(0);
  const [progress, setProgress] = useState(0);
  const { toggleModalVisibility } = useModal();

  const steps: Record<number, ReactNode> = {
    0: <FirstStep />,
    1: <SecondStep />,
    2: <ThirdStep />,
  };

  const nextStep = () => {
    if (page < 2) {
      setPage(page + 1);
      setProgress(progress + 50);
    } else {
      setPage(0);
      toggleModalVisibility();
    }
  };

  return (
    <HomeMintWrapperStyled>
      <HomeMintStepsWrapperStyled>
        <HomeMintStepsRowStyled>
          <HomeMintStepIndicator active={page >= 0}>1</HomeMintStepIndicator>
          <HomeMintStepIndicator active={page >= 1}>2</HomeMintStepIndicator>
          <HomeMintStepIndicator active={page >= 2}>3</HomeMintStepIndicator>
        </HomeMintStepsRowStyled>
        <ProgressBar progress={progress} />
      </HomeMintStepsWrapperStyled>
      <HomeMintFormWrapperStyled>{steps[page]}</HomeMintFormWrapperStyled>
      <HomeMintButtonsWrapperStyled>
        <Button size="small" onClick={nextStep}>
          NEXT
        </Button>
      </HomeMintButtonsWrapperStyled>
    </HomeMintWrapperStyled>
  );
};
