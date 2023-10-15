import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import { Container, Section, Subtitle, Title, Text } from './FAQs.styled';

interface FAQ {
  question: string;
  answer: string;
}

const FAQs: React.FC = () => {
  const faqs: FAQ[] = [
    {
      question: '- What is EtherTea?',
      answer:
        'EtherTea is a collection of 10,000 FREE unique NFT collectibles, inspired by the vibrant and diverse world of bubble tea, hosted on the Ethereum blockchain. This is a side project created by "BeardedBaldies". You can find more information about the main project at BeardedBaldies Website (https://beardedbaldies.com/).',
    },
    {
      question: '- How can I acquire an EtherTea NFT?',
      answer:
        'EtherTea NFTs will be gifted. However, you will have to cover the minting cost associated with the Ethereum network at the time of minting.',
    },
    {
      question: '- Are there any additional costs associated with EtherTea NFTs?',
      answer:
        'No, there is no additional costs associated with EtherTea NFTs. However, when minting, users are responsible for the associated Ethereum network gas fees.',
    },
    {
      question: '- What is the future roadmap or utility for EtherTea?',
      answer:
        'Currently, EtherTea is primarily for collectible purposes. However, if there is significant community interest and support, we may explore expanding the project further. As of now, there are no definite plans for the same.',
    },
    {
      question: '- Will there be any community platforms like Discord for EtherTea?',
      answer:
        "As of now, we don't have a dedicated Discord group. If you come across any group claiming to be official EtherTea, please be cautious as it might be a scam.",
    },
  ];

  return (
    <Section id="faqs">
      <Container>
        <Title>FAQs</Title>
        <Accordion allowZeroExpanded={true}>
          {faqs.map(faq => (
            <AccordionItem key={faq.question}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <Subtitle>{faq.question}</Subtitle>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="accordion__content">
                <Text>{faq.answer}</Text>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
};

export default FAQs;
