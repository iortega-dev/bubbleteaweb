import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/bb-logo.png';
import TwitterIcon from '../../assets/img/Twitter.svg';

import {
  HamburguerMenu,
  Logo,
  LogoWrapper,
  Menu,
  MenuItem,
  Navbar,
  Section,
  // WalletButton,
  WalletButtonMobileWrapper,
  WalletButtonDesktopWrapper,
  ImageStyled,
} from './Header.styled';

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);

    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });

    setIsOpenMenu(!isOpenMenu);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Section id="header">
      <Navbar>
        <LogoWrapper to="#">
          <Logo src={logo} alt="Bearded Baldies" />
        </LogoWrapper>
        <HamburguerMenu isOpen={isOpenMenu} onClick={() => setIsOpenMenu(!isOpenMenu)}>
          &nbsp;
        </HamburguerMenu>
        <Menu isOpen={isOpenMenu}>
          <MenuItem onClick={() => scrollToTop()}>Home</MenuItem>
          <MenuItem onClick={() => scrollTo('story')}>Story</MenuItem>
          <MenuItem onClick={() => scrollTo('baldies')}>Baldies</MenuItem>
          <MenuItem onClick={() => scrollTo('team')}>Team</MenuItem>
          <MenuItem onClick={() => scrollTo('faqs')}>FAQs</MenuItem>
          <MenuItem>
            <WalletButtonMobileWrapper>
              <Link to="https://twitter.com/BeardedBaldies" target="_blank">
                <ImageStyled src={TwitterIcon} alt="Twitter" />
              </Link>
              {/* <WalletButton>Connect Wallet</WalletButton> */}
            </WalletButtonMobileWrapper>
          </MenuItem>
        </Menu>
        <WalletButtonDesktopWrapper>
          <Link to="https://twitter.com/BeardedBaldies" target="_blank">
            <ImageStyled src={TwitterIcon} alt="Twitter" />
          </Link>
          {/* <WalletButton>Connect Wallet</WalletButton> */}
        </WalletButtonDesktopWrapper>
      </Navbar>
    </Section>
  );
};

export default Header;
