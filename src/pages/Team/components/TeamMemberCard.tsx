import { Link } from 'react-router-dom';

import TwitterIcon from '../../../assets/img/Twitter.svg';

import {
  CardContainer,
  MemberImage,
  MemberContent,
  MemberName,
  MemberDescription,
  ImageStyled,
  SocialWrapper,
} from './TeamMemberCard.styled';

interface TeamMemberCardProps {
  memberName: string;
  memberDescription: string;
  memberImage: string;
  twitterLink: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  memberName,
  memberDescription,
  memberImage,
  twitterLink,
}) => {
  return (
    <CardContainer>
      <MemberImage src={memberImage} alt={memberName} />
      <MemberContent>
        <MemberName>{memberName}</MemberName>
        <MemberDescription>{memberDescription}</MemberDescription>
      </MemberContent>
      <SocialWrapper>
        <Link to={twitterLink} target="_blank">
          <ImageStyled src={TwitterIcon} alt="Twitter" />
        </Link>
      </SocialWrapper>
    </CardContainer>
  );
};

export default TeamMemberCard;
