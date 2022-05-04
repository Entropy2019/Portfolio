/* eslint-disable react/no-unescaped-entities */
import {
  css,
  styled,
  Anchor,
  Box,
  Button,
  Flex,
  Icon,
  Text,
  VisuallyHidden,
  H1,
  H2,
  H3,
} from '@maximeheckel/design-system';
import { format } from 'date-fns';
import { motion, MotionProps } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Grid from '@theme/components/Grid';
import Card from '@theme/components/Card';
import Layout from '@theme/layout';
import ProjectCard from '@theme/components/ProjectCard';
import { getAllFilesFrontMatter } from 'lib/mdx';
import { Post, PostType } from 'types/post';

const NewsletterForm = dynamic(
  () => import('@theme/components/NewsletterForm')
);

interface Props {
  posts: Post[];
}

const WavingHand = () => (
  <motion.div
    style={{
      marginBottom: '-20px',
      marginRight: '-45px',
      paddingBottom: '20px',
      paddingRight: '45px',
      display: 'inline-block',
    }}
    animate={{ rotate: 20 }}
    transition={{
      repeat: 7,
      repeatType: 'mirror',
      duration: 0.2,
      delay: 0.5,
      ease: 'easeInOut',
      type: 'tween',
    }}
  >
    👋🏻
  </motion.div>
);

let year = 0;

const cardVariants = {
  hover: {
    scale: 1.05,
  },
  initial: {
    scale: 1,
  },
};

const glowVariants = {
  hover: {
    opacity: 0.8,
  },
  initial: {
    scale: 1.05,
    opacity: 0,
  },
};

const wrapperGrid = css({
  '> *': {
    gridColumn: 2,
  },
});

const projects = [
  {
    imgSrc: 'project1.png',
    projectName: 'project1',
    projectSlug: 'project1',
    backgroundImage:
      'linear-gradient(235deg,hsl(240deg 100% 85%) 0%,hsl(274deg 85% 83%) 11%,hsl(310deg 85% 83%) 22%,hsl(327deg 100% 84%) 33%,hsl(344deg 100% 85%) 44%,hsl(6deg 100% 86%) 56%,hsl(24deg 100% 83%) 67%,hsl(36deg 100% 81%) 78%,hsl(46deg 100% 81%) 89%,hsl(55deg 100% 82%) 100%)',
  },
  {
    imgSrc: 'project2.jpg',
    projectName: 'project2',
    projectSlug: 'project2',
    backgroundImage:
      'linear-gradient(240deg,hsl(185deg 46% 90%) 0%,hsl(191deg 61% 89%) 11%,hsl(197deg 76% 88%) 22%,hsl(202deg 91% 88%) 33%,hsl(206deg 100% 89%) 44%,hsl(211deg 100% 89%) 56%,hsl(220deg 100% 90%) 67%,hsl(234deg 100% 91%) 78%,hsl(255deg 100% 91%) 89%,hsl(273deg 100% 90%) 100%)',
  },
];

const IndexPage = (props: Props) => {
  const { posts } = props;
  return (
    <Layout footer header headerProps={{ offsetHeight: 256 }}>
      <Grid columns="medium" gapX={4} gapY={12} className={wrapperGrid()}>
        <Box>
          <H1>
            Hi <WavingHand /> I'm Wang Yicheng, and this is my Portfolio.{' '}
            <Text variant="secondary" size="7" weight="4">
              Here is my projects during eduction in ZJUT.
            </Text>
          </H1>
          <Flex
            gap={4}
            css={{
              marginLeft: '-var(--space-3)',
              marginRight: '-var(--space-3)',
            }}
          >
            <a
              href="https://github.com/Entropy2019"
              style={{ textDecoration: 'none' }}
              tabIndex={-1}
            >
              <Button variant="secondary" endIcon={<Icon.Github />}>
                @Entropy2019
              </Button>
              <VisuallyHidden as="p">
                Link redirects to my Github profile page
                https://github.com/Entropy2019.
              </VisuallyHidden>
            </a>
          </Flex>
        </Box>

        <section>
          <H2>About Me</H2>
          <NewsletterForm large />
        </section>
        <section>
          <H2>Projects</H2>
          <Grid
            as="ul"
            css={{
              margin: 0,
              padding: 0,
            }}
            data-testid="article-list"
            gapY={6}
          >
            {projects.map((project) => {
              const {
                imgSrc,
                projectName,
                projectSlug,
                backgroundImage,
              } = project;
              return (
                <motion.li
                  style={{
                    position: 'relative',
                    marginLeft: '-var(--space-1)',
                    marginRight: '-var(--space-1)',
                    listStyle: 'none',
                    cursor: 'pointer',
                    marginBottom: 'calc(1.45rem / 2)',
                    lineHeight: '1.9',
                    letterSpacing: '0.3px',
                  }}
                  key={projectSlug}
                  data-testid="featured-article-item"
                  initial="initial"
                  whileHover="hover"
                >
                  <Link href={`/projects/${projectSlug}/`}>
                    <a
                      style={{
                        textDecoration: 'none',
                        color: 'var(--maximeheckel-colors-typeface-secondary)',
                      }}
                    >
                      <Glow
                        css={{
                          background: backgroundImage,
                        }}
                        variants={glowVariants}
                        transition={{
                          type: 'tween',
                          ease: 'easeOut',
                          duration: 0.4,
                        }}
                      />
                      <Box
                        css={{
                          height: '95%',
                          width: '105%',
                          position: 'absolute',
                          borderRadius: 'var(--border-radius-2)',
                          top: '50%',
                          left: '50%',
                          background: 'var(--maximeheckel-colors-body)',
                          transform: 'translateY(-50%) translateX(-50%)',
                          filter: 'blur(20px)',
                          transition: '0.5s',

                          '@media(max-width: 700px)': {
                            display: 'none',
                          },
                        }}
                      />
                      <Card<MotionProps>
                        as={motion.div}
                        variants={cardVariants}
                        transition={{
                          type: 'tween',
                          ease: 'easeOut',
                          duration: 0.4,
                        }}
                        depth={1}
                      >
                        <ProjectCard
                          imgSrc={imgSrc}
                          projectName={projectName}
                        />
                      </Card>
                    </a>
                  </Link>
                </motion.li>
              );
            })}
          </Grid>
        </section>
        <section>
          <H2>All articles</H2>
          <Grid
            as="ul"
            css={{
              margin: 0,
              padding: 0,
            }}
            data-testid="article-list"
            gapY={1}
          >
            {posts.map((post) => {
              const currentYear = new Date(post.date).getFullYear();
              let printYear;
              if (currentYear !== year) {
                printYear = true;
                year = currentYear;
              } else {
                printYear = false;
              }

              return (
                <Box key={post.slug}>
                  {printYear ? (
                    <Text
                      as="p"
                      weight="4"
                      css={{
                        paddingTop: '30px',
                      }}
                      key={currentYear}
                    >
                      {currentYear}
                    </Text>
                  ) : null}
                  <motion.li
                    style={{
                      position: 'relative',
                      marginLeft: '-var(--space-1)',
                      marginRight: '-var(--space-1)',
                      listStyle: 'none',
                      cursor: 'pointer',
                      marginBottom: 'calc(1.45rem / 2)',
                      lineHeight: '1.9',
                      letterSpacing: '0.3px',
                    }}
                    data-testid="featured-article-item"
                    initial="initial"
                    whileHover="hover"
                  >
                    <Link href={`/posts/${post.slug}/`}>
                      <a
                        style={{
                          textDecoration: 'none',
                          color:
                            'var(--maximeheckel-colors-typeface-secondary)',
                        }}
                      >
                        <Glow
                          css={{
                            background:
                              post.colorFeatured ||
                              'linear-gradient(90deg,#2E83FF -10%,#EB7D9F 50%, #FFCBBE 100%)',
                          }}
                          variants={glowVariants}
                          transition={{
                            type: 'tween',
                            ease: 'easeOut',
                            duration: 0.4,
                          }}
                        />
                        <Box
                          css={{
                            height: '95%',
                            width: '105%',
                            position: 'absolute',
                            borderRadius: 'var(--border-radius-2)',
                            top: '50%',
                            left: '50%',
                            background: 'var(--maximeheckel-colors-body)',
                            transform: 'translateY(-50%) translateX(-50%)',
                            filter: 'blur(20px)',
                            transition: '0.5s',

                            '@media(max-width: 700px)': {
                              display: 'none',
                            },
                          }}
                        />
                        <Card<MotionProps>
                          as={motion.div}
                          variants={cardVariants}
                          transition={{
                            type: 'tween',
                            ease: 'easeOut',
                            duration: 0.4,
                          }}
                          depth={1}
                        >
                          <Card.Body>
                            <H3
                              gradient
                              css={{
                                marginBottom: '8px',
                                backgroundImage:
                                  post.colorFeatured! ||
                                  'linear-gradient(90deg,#2E83FF -10%,#EB7D9F 50%, #FFCBBE 100%)',
                              }}
                            >
                              {post.title}
                            </H3>
                            <Text as="p" css={{ marginBottom: '10px' }}>
                              {post.subtitle}
                            </Text>
                            <Text
                              as="p"
                              size="2"
                              weight="3"
                              css={{
                                marginBottom: '0px',
                                textAlign: 'right',
                                color: 'black',
                              }}
                            >
                              {format(
                                new Date(Date.parse(post.date)),
                                'MMM dd'
                              )}
                            </Text>
                          </Card.Body>
                        </Card>
                      </a>
                    </Link>
                  </motion.li>
                </Box>
              );
            })}
          </Grid>
        </section>
      </Grid>
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter(PostType.BLOGPOST);

  return { props: { posts } };
}

const Glow = styled(motion.div, {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  webkitFilter: 'blur(15px)',
  filter: 'blur(15px)',
  borderRadius: 'var(--border-radius-2)',
});

const Block = styled(Box, {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingLeft: '10px',
  borderRadius: 'var(--border-radius-2)',
  marginLeft: '-10px',
  height: '60px',
  boxShadow: 'none',
  backgroundColor: 'var(--article-block-background-color, "transparent")',
  color:
    'var(--article-block-color, var(--maximeheckel-colors-typeface-primary))',
  transition: 'background-color 0.25s, box-shadow 0.25s, color 0.25s',

  '&:focus': {
    '--article-block-background-color': 'var(--maximeheckel-colors-emphasis)',
    '--article-block-color': 'var(--maximeheckel-colors-brand)',
  },

  '@media (hover: hover) and (pointer: fine)': {
    '&:hover': {
      '--article-block-background-color': 'var(--maximeheckel-colors-emphasis)',
      '--article-block-color': 'var(--maximeheckel-colors-brand)',
    },
  },

  '@media (max-width: 700px)': {
    height: '100px',
  },
});

export default IndexPage;
