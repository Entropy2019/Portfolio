import {
  Anchor,
  Button,
  Flex,
  Text,
  EM,
  H3,
  Box,
} from '@maximeheckel/design-system';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import React from 'react';
import { useMutation } from 'react-query';
import TextInput from '@theme/components/TextInput';
import Glow from '@theme/components/Glow';
import Card from '@theme/components/Card';
import { NewsletterHeader } from './Icons';
import { NewsletterFormContent, ErrorMessage } from './Styles';
import { subscribeCall } from './utils';
import List from '../List';
import Image from 'next/image';

const textOutVariant = {
  checked: {
    display: 'none',
    opacity: 0,
  },
  unchecked: {},
};

const textInVariant = {
  checked: {
    display: 'block',
    opacity: 1,
  },
  unchecked: {
    display: 'none',
    opacity: 0,
  },
};

const checkVariant = {
  checked: {
    width: 20,
  },
  unchecked: {
    width: 0,
  },
};

interface Props {
  large?: boolean;
}

const NewsletterForm = (props: Props) => {
  const { large = false } = props;
  const [email, setEmail] = React.useState('');
  const [isChecked, setIsChecked] = React.useState(false);

  const opacity = useMotionValue(1);
  const pathLength = useTransform(opacity, [0.05, 0.5], [1, 0]);
  const opacityTextIn = useTransform(opacity, [0, 0.1], [1, 0]);

  const [subscribe, { isError, isLoading, isSuccess, error }] = useMutation(
    subscribeCall
  );

  React.useEffect(() => {
    setIsChecked(false);
  }, [isError]);

  return (
    <Card
      depth={1}
      style={{
        marginLeft: '-var(--space-1)',
        marginRight: '-var(--space-1)',
      }}
    >
      <NewsletterFormContent withOffset={large}>
        <Flex
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          wrap="wrap"
        >
          <Flex
            direction="column"
            alignItems="flex-start"
            css={{ width: '200px' }}
          >
            <H3
              css={{
                maxWidth: '600px',
              }}
            >
              Wang Yicheng
            </H3>
            <Text
              as="p"
              css={{
                marginBottom: '0px',
              }}
              variant="secondary"
            >
              Designer &amp; Programmer
            </Text>
            <br />
            <List variant="unordered">
              <List.Item>
                <Text
                  as="p"
                  css={{
                    marginBottom: '0px',
                  }}
                  variant="secondary"
                >
                  Description 1
                </Text>
              </List.Item>
              <List.Item>
                <Text
                  as="p"
                  css={{
                    marginBottom: '0px',
                  }}
                  variant="secondary"
                >
                  Description 2
                </Text>
              </List.Item>
              <List.Item>
                <Text
                  as="p"
                  css={{
                    marginBottom: '0px',
                  }}
                  variant="secondary"
                >
                  Description 3
                </Text>
              </List.Item>
            </List>
          </Flex>
          <Box css={{ width: '260px' }}>
            <Image
              src={'/static/images/profile.png'}
              alt="Profile Image"
              width={923}
              height={1154}
              layout="responsive"
              priority
            />
          </Box>
        </Flex>
      </NewsletterFormContent>
    </Card>
  );
};

export default NewsletterForm;
