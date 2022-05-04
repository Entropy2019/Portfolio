import { styled } from '@maximeheckel/design-system';
import Card from '@theme/components/Card';
import Text from '@theme/components/Typography';

export const ProjectCardContent = styled(Card.Body, {
  variants: {
    withOffset: {
      true: {
        padding: '48px',
        '@media (max-width: 700px)': {
          padding: '48px 20px 30px 20px',
        },
      },
      false: {
        padding: '12px',
      },
    },
  },
});

export const ErrorMessage: React.FC = (props) => (
  <Text
    as="p"
    css={{
      margin: '16px 0px 0px 0px',
      maxWidth: '800px !important',
    }}
    variant="danger"
  >
    {props.children}
  </Text>
);
