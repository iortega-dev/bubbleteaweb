import { Container, Logo, LogoWrapper, Section, Subtitle } from './Footer.styled';

import logo from '../../assets/img/bb-logo.png';

const Footer = () => {
  return (
    <Section>
      <Container>
        <div>
          <LogoWrapper to="#">
            <Logo src={logo} alt="Bearded Baldies" />
          </LogoWrapper>
        </div>
        <Subtitle>Copyright © 2023 BeardedBaldies</Subtitle>
      </Container>
    </Section>
  );
};

export default Footer;
