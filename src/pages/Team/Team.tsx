import memberAImage from '../../assets/img/team/t1.png';
import memberBImage from '../../assets/img/team/t2.png';

import { Container, Section, TeamMemberCardsWrapper, Title } from './Team.styled';

import TeamMemberCard from './components/TeamMemberCard';

const Team = () => {
  return (
    <Section id="team">
      <Container>
        <Title>The Bearded Squad</Title>
        <TeamMemberCardsWrapper>
          <TeamMemberCard
            memberName="Jean"
            memberDescription="Our blockchain expert and tech wizard, Jean brings extensive experience in blockchain technology."
            memberImage={memberBImage}
            twitterLink="https://twitter.com/JJ0x0eth"
          />

          <TeamMemberCard
            memberName="Nacho"
            memberDescription="The creative mind behind Bearded Baldies, Nacho is the artist who designed the characters."
            memberImage={memberAImage}
            twitterLink="https://twitter.com/Mord0xHash"
          />
        </TeamMemberCardsWrapper>
      </Container>
    </Section>
  );
};

export default Team;
