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
      question: '- What are Bearded Baldies?',
      answer:
        'Bearded Baldies is a collection of 10,000 stylish NFT collectibles featuring unique bearded characters.',
    },
    {
      question: '- How can I purchase Bearded Baldies NFTs?',
      answer: 'You can purchase Bearded Baldies NFTs on our official website. ',
    },
    {
      question: '- Can I resell my Bearded Baldies NFTs?',
      answer:
        'Yes, you can resell your Bearded Baldies NFTs on secondary marketplaces. But be aware, if you sell your Bearded Baldies, you lose access to future events and updates',
    },
    {
      question: '- Are there any benefits for owning Bearded Baldies NFTs?',
      answer:
        'The main utility is to provide a profile picture (PFP) where the owner feels identified but in the future owning Bearded Baldies NFTs grants you exclusive access to our community events and updates (To be announced).',
    },
    {
      question: '- How can I contact the Bearded Baldies team?',
      answer:
        'You can reach out to our team by sending an message to our twitter account @BeardedBaldies',
    },
    {
      question: '- Do you have a Discord group?',
      answer: "No, we don't have one. So, if you see a Bearded Baldies group, it's a scam",
    },
  ];

  return (
    <Section id="faqs">
      <Container>
        <Title>FAQs</Title>
        <Accordion allowZeroExpanded={true}>
          {faqs.map(faq => (
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <Subtitle>{faq.question}</Subtitle>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
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
