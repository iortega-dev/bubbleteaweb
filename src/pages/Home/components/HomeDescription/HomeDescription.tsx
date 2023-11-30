import { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';
import EtherTeaText from '../../../../assets/img/EtherTea.png';

import {
  AlreadyMintedText,
  ButtonWrapper,
  FirstTitleWrapper,
  MintButton,
  SecondTitleWrapper,
  StyledLink,
  StyledLogo,
  StyledLogoWrapper,
  Subtitle,
  ThirdTitleWrapper,
  Title,
  TypewritterWrapper,
} from './HomeDescription.styled';
import HomeCarousel from '../HomeCarousel';
import Modal from '../../../../components/Modal/Modal';
import HomeMintModal from '../HomeMintModal';
import { useModal } from '../../../../context/ModalContext';
import EtherContract from '../../../../contracts/EtherTea.json';

const contractsNetworks = {
  development: '1701372315147',
  mainnet: '1',
};

const HomeDescription = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const { isVisible, toggleModalVisibility } = useModal();
  const [chainId, setChainId] = useState<string>('');
  const [wallet, setWallet] = useState<string>('');
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [theContractInstance, setTheContractInstance] = useState<object | null>(null);
  const [currentSupply, setCurrentSupply] = useState<number>(0);

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
    const deployedNetwork = EtherContract.networks[contractsNetworks.development];
    // @ts-nocheck
    // @ts-ignore
    const instance = new w3.eth.Contract(
      EtherContract.abi,
      deployedNetwork && deployedNetwork.address,
    );
    // @ts-nocheck
    // @ts-ignore

    instance.options.address = EtherContract.networks[contractsNetworks.development].address;
    setTheContractInstance(instance);
  };

  useEffect(() => {
    if (isConnected && wallet) {
      connectMetaMask();
    }
  }, []);

  useEffect(() => {
    if (theContractInstance) {
      getCurrentSupply();
    }
  }, [theContractInstance]);

  const getCurrentSupply = async () => {
    if (theContractInstance && Object.keys(theContractInstance).length !== 0) {
      const w3 = new Web3(window.ethereum);
      // @ts-nocheck
      // @ts-ignore
      const alreadyMinted = await theContractInstance.methods
        .totalSupply()
        .call()
        .catch(error => console.error(error));
      setCurrentSupply(Number(alreadyMinted));
    }
  };

  return (
    <>
      <StyledLogoWrapper>
        <StyledLogo src={EtherTeaText} />
        <StyledLink href="https://beardedbaldies.com/" target="_blank">
          By BeardedBaldies
        </StyledLink>
      </StyledLogoWrapper>
      <HomeCarousel imageIndex={currentImage} />
      <FirstTitleWrapper>
        <Title>
          Do you want a <span>FREE</span>{' '}
        </Title>
        <Title>
          <TypewritterWrapper>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={typewritter => {
                typewritter
                  .typeString('<span class="text-1">Caramel</span>')
                  .callFunction(() => setCurrentImage(0))
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString('<span class="text-2">Mango</span>')
                  .callFunction(() => setCurrentImage(1))
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString('<span class="text-3">Red Velvet</span>')
                  .callFunction(() => setCurrentImage(2))
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString('<span class="text-4">Black Sugar</span>')
                  .callFunction(() => setCurrentImage(3))
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString('<span class="text-5">Matcha</span>')
                  .callFunction(() => setCurrentImage(4))
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString('<span class="text-6">Chocolate</span>')
                  .callFunction(() => setCurrentImage(5))
                  .pauseFor(3000)
                  .deleteAll()
                  .start();
              }}
            />
          </TypewritterWrapper>
        </Title>
      </FirstTitleWrapper>
      <SecondTitleWrapper>
        <Title>Bubble Tea?*</Title>
        <Subtitle>* It's an NFT, not a real one ;)</Subtitle>
      </SecondTitleWrapper>

      <ButtonWrapper onClick={toggleModalVisibility}>
        <MintButton>MINT</MintButton>
      </ButtonWrapper>

      <ThirdTitleWrapper>
        <AlreadyMintedText>{currentSupply} / 10000 Minted</AlreadyMintedText>
      </ThirdTitleWrapper>

      <Modal isOpen={isVisible} onClose={toggleModalVisibility} closeOnBackdropClick={false}>
        <HomeMintModal setCurrentSupply={setCurrentSupply} />
      </Modal>
    </>
  );
};

export default HomeDescription;
