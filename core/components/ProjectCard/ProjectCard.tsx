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
import { ProjectCardContent, ErrorMessage } from './Styles';
import { subscribeCall } from './utils';
import List from '../List';
import Image from 'next/image';
import { dir } from 'console';

interface Props {
  imgSrc: string;
  projectName: string;
}

const ProjectCard = (props: Props) => {
  const { imgSrc, projectName } = props;
  const [isChecked, setIsChecked] = React.useState(false);
  const [subscribe, { isError, isLoading, isSuccess, error }] = useMutation(
    subscribeCall
  );
  const dirname = '/static/images/project';

  React.useEffect(() => {
    setIsChecked(false);
  }, [isError]);
  return (
    <ProjectCardContent withOffset={false}>
      <Flex direction="column" alignItems="center" justifyContent="center">
        <H3
          css={{
            maxWidth: '600px',
            marginBottom: '1rem',
          }}
        >
          {projectName}
        </H3>
        <Box css={{ width: '100%' }}>
          <Image
            src={dirname + '/' + imgSrc}
            alt="Profile Image"
            width={1920}
            height={1080}
            layout="responsive"
            priority
          />
        </Box>
      </Flex>
    </ProjectCardContent>
  );
};

export default ProjectCard;
