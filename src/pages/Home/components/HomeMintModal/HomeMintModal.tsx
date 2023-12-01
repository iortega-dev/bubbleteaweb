/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ReactNode, useState, useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';
import {
  HomeMintButtonsWrapperStyled,
  HomeMintCounterWrapperStyled,
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
import EtherContract from '../../../../contracts/EtherTea.json';

const contractsNetworks = {
  development: '1701372315147',
  mainnet: '1',
  sepolia: '11155111',
};

interface iModal {
  setCurrentSupply: (value: number) => void;
}

export const HomeMintModal: React.FC<iModal> = ({ setCurrentSupply }) => {
  const [page, setPage] = useState(0);
  const [progress, setProgress] = useState(0);
  const { toggleModalVisibility } = useModal();
  const [chainId, setChainId] = useState<string>('');
  const [wallet, setWallet] = useState<string>('');
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [theContractInstance, setTheContractInstance] = useState<object | null>(null);
  // @ts-nocheck
  // @ts-ignore

  const [isMinting, setIsMinting] = useState<boolean>(false);
  const [toMint, setToMint] = useState<number>(1);

  const steps: Record<number, ReactNode> = {
    0: <FirstStep />,
    1: <SecondStep />,
    2: <ThirdStep />,
  };

  const closeModal = () => {
    setPage(0);
    toggleModalVisibility();
  };

  const nextStep = async () => {
    if (page < 2) {
      setPage(page + 1);
      setProgress(progress + 50);
    } else if (page === 2 && isConnected === false) {
      await connectMetaMask();
    } else if (page === 2 && isConnected === true) {
      handleMint();
    } else {
      closeModal();
    }
  };

  useEffect(() => {
    const getProvider = async () => {
      const provider = await detectEthereumProvider();
      console.log(provider);
      if (provider) {
        console.log('Ethereum successfully detected!');
        // @ts-nocheck
        // @ts-ignore
        const chainId = await provider.request({
          method: 'eth_chainId',
        });
        setChainId(chainId);
      } else {
        console.log('Please install/connect MetaMask!');
      }
    };
    getProvider();
  }, []);

  useEffect(() => {
    if (!window.ethereum && chainId === '') {
      return;
    }
    createContractInstance();
  }, [chainId]);

  useEffect(() => {
    if (!window.ethereum) {
      return;
    }
    window.ethereum.on('accountsChanged', (accounts: string[]) => {
      if (accounts[0]) {
        setIsConnected(false);
        setWallet(accounts[0]);
      } else {
        setIsConnected(false);
      }
      if (wallet !== accounts[0]) {
        setIsConnected(false);
      }
    });

    // @ts-nocheck
    // @ts-ignore

    window.ethereum.on('chainChanged', async _chainId => {
      setIsConnected(false);
      setChainId(_chainId);
    });
  }, []);

  const connectMetaMask = async () => {
    if (window.ethereum) {
      // @ts-nocheck
      // @ts-ignore

      const w3 = new Web3(window.ethereum);
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        if (accounts[0]) {
          setWallet(accounts[0]);
          setIsConnected(true);
        }
      } catch (error) {
        throw new Error(String(error));
      }
    } else {
      console.log('Please install MetaMask');
    }
  };

  const createContractInstance = () => {
    const w3 = new Web3(window.ethereum);
    console.log(EtherContract.networks, chainId);
    // @ts-nocheck
    // @ts-ignore

    const deployedNetwork = EtherContract.networks[contractsNetworks.sepolia];
    // @ts-nocheck
    // @ts-ignore
    const instance = new w3.eth.Contract(
      // @ts-nocheck
      // @ts-ignore

      EtherContract.abi,
      deployedNetwork && deployedNetwork.address
    );
    // @ts-nocheck
    // @ts-ignore

    instance.options.address = EtherContract.networks[contractsNetworks.sepolia].address;
    console.log(instance);
    setTheContractInstance(instance);
  };

  useEffect(() => {
    if (isConnected && wallet) {
      connectMetaMask();
    }
  }, []);

  const getCurrentSupply = async () => {
    if (theContractInstance && Object.keys(theContractInstance).length !== 0) {
      // @ts-nocheck
      // @ts-ignore

      const w3 = new Web3(window.ethereum);
      // @ts-nocheck
      // @ts-ignore
      const alreadyMinted = await theContractInstance.methods
        .totalSupply()
        .call()
        .catch((error: any) => console.error(error));
      setCurrentSupply(Number(alreadyMinted.toString()));
    }
  };

  const handleMint = async () => {
    setIsMinting(true);

    const inputValue = toMint;
    console.log({ inputValue });
    // @ts-nocheck
    // @ts-ignore
    await theContractInstance.methods
      .mint(inputValue)
      .send({ from: wallet, value: 0 })
      .catch(() => setIsMinting(false));
    closeModal();
    await getCurrentSupply().catch(error => console.error(error));
    setIsMinting(false);
  };

  const handleQuantity = (event: React.MouseEvent<HTMLButtonElement>) => {
    const action = event.currentTarget.getAttribute('data-action');

    if (action === 'increment' && toMint < 2) {
      setToMint(prev => prev + 1);
    } else if (action === 'decrement' && toMint > 1) {
      setToMint(prev => prev - 1);
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
        {isConnected && page === 2 && isMinting == false && (
          <HomeMintCounterWrapperStyled>
            <Button
              disabled={toMint === 1}
              size="icon"
              data-action="decrement"
              onClick={handleQuantity}
            >
              -
            </Button>
            <span>{toMint}</span>
            <Button
              disabled={toMint === 2}
              size="icon"
              data-action="increment"
              onClick={handleQuantity}
            >
              +
            </Button>
          </HomeMintCounterWrapperStyled>
        )}
        {isMinting && (
          <Button size="small">
            MINTING...
          </Button>

        )}
        {isMinting === false && (
          <Button size="small" onClick={nextStep}>
            {page !== 2 ? 'NEXT' : isConnected ? 'MINT' : 'CONNECT'}
          </Button>

        )}
      </HomeMintButtonsWrapperStyled>
    </HomeMintWrapperStyled>
  );
};
