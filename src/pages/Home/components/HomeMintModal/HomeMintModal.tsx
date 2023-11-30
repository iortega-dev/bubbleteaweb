import { ReactNode, useState, useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';
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
import EtherContract from '../../../../contracts/EtherTea.json';

const contractsNetworks = {
  development: '1700473783318',
  mainnet: '1',
};

export const HomeMintModal = () => {
  const [page, setPage] = useState(0);
  const [progress, setProgress] = useState(0);
  const { toggleModalVisibility } = useModal();
  const [chainId, setChainId] = useState<string>('');
  const [wallet, setWallet] = useState<string>('');
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [theContractInstance, setTheContractInstance] = useState<object | null>(null);

  const steps: Record<number, ReactNode> = {
    0: <FirstStep />,
    1: <SecondStep />,
    2: <ThirdStep />,
  };

  const nextStep = () => {
    if (page < 2) {
      setPage(page + 1);
      setProgress(progress + 50);
    } else if (page === 2) {
      connectMetaMask();
    } else {
      setPage(0);
      toggleModalVisibility();
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

    window.ethereum.on('chainChanged', async _chainId => {
      setIsConnected(false);
      setChainId(_chainId);
    });
  }, []);

  const connectMetaMask = async () => {
    if (window.ethereum) {
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
    const deployedNetwork = EtherContract.networks[contractsNetworks.development];
    const instance = new w3.eth.Contract(
      EtherContract.abi,
      deployedNetwork && deployedNetwork.address,
    );
    instance.options.address = EtherContract.networks[contractsNetworks.development].address;
    console.log(instance);
    setTheContractInstance(instance);
  };

  useEffect(() => {
    if (isConnected && wallet) {
      connectMetaMask();
    }
  }, []);

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
          {page !== 2 ? 'NEXT' : isConnected ? 'MINT' : 'CONNECT'}
        </Button>
      </HomeMintButtonsWrapperStyled>
    </HomeMintWrapperStyled>
  );
};
