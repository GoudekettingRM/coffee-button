import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Box, Container, Typography, Stack, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { css } from '@emotion/react';

import Github from '../public/icons/github.svg';
import LinkedIn from '../public/icons/linkedin.svg';
import Twitter from '../public/icons/twitter.svg';
import DevTo from '../public/icons/dev-badge.svg';

const Home: NextPage = () => {
  return (
    <WrapperBox>
      <Head>
        <title>Coffee for Robin</title>
        <meta name='description' content='Support your local developer!' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
      </Head>

      <Main>
        <Typography variant='h3' component='h1' mx='auto' textAlign='center'>
          Coffee, who doesn&apos;t like it?
        </Typography>

        <Form className='buttonForm' action='https://www.paypal.com/donate' method='post' target='_top'>
          <input type='hidden' name='hosted_button_id' value='FEP8J5P4SJ4K6' />
          <input
            type='image'
            src='https://pics.paypal.com/00/s/N2JhMjI1MDQtZTc2ZS00NzE3LWFmNjItYjZmYjQ0YWU4ZmU3/file.PNG'
            name='submit'
            title='PayPal - The safer, easier way to pay online!'
            alt='Donate with PayPal button'
          />
          <Image alt='' src='https://www.paypal.com/en_NL/i/scr/pixel.gif' width='1' height='1' />
        </Form>

        <Typography variant='h5' component='h2' mx='auto' textAlign='center'>
          I got bored, so I made a button so you can donate some coffee!
        </Typography>
      </Main>

      <Footer>
        <Stack direction='row' spacing={2}>
          <Link
            aria-label="Link to Robin's Github"
            href='https://github.com/GoudekettingRM'
            target='_blank'
            rel='noopener noreferrer'>
            <Image src={Github} width='32px' height='32px' alt='Github Logo' />
          </Link>
          <Link
            aria-label="Link to Robin's LinkedIn"
            href='https://www.linkedin.com/in/robinmgoudeketting/'
            target='_blank'
            rel='noopener noreferrer'>
            <Image src={LinkedIn} width='32px' height='32px' alt='LinkedIn Logo' />
          </Link>
          <Link
            aria-label="Link to Robin's Twitter"
            href='https://twitter.com/RMGoudeketting'
            target='_blank'
            rel='noopener noreferrer'>
            <Image src={Twitter} width='32px' height='32px' alt='Twitter Logo' />
          </Link>
          <Link
            aria-label="Link to Robin's Dev Profile"
            href='https://dev.to/goudekettingrm'
            target='_blank'
            rel='noopener noreferrer'>
            <Image src={DevTo} width='32px' height='32px' alt='DevTo Logo' />
          </Link>
        </Stack>
      </Footer>
    </WrapperBox>
  );
};

export default Home;

const WrapperBox = styled(Box)(() => ({
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
}));

const Main = styled('main')(() => ({
  flex: '1 0 auto',
}));

const Form = styled('form')(() => ({
  width: 'fit-content',
  margin: 'auto',
  display: 'grid',
  placeItems: 'center',
}));

const Footer = styled(Container)(() => ({
  marginInline: 'auto',
  display: 'flex',
  justifyContent: 'center',
}));
