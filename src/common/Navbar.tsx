import { Box, Divider, Flex, Heading, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { useAuth } from '../lib/auth';
// import { Link } from 'next/link';
// import { image } from 'next/image';

const Navbar: React.FC<{}> = () => {
  const { auth, signOut } = useAuth();
  const router = useRouter();

  return (
    <>
      <Flex justify="space-between" m={4}>
        <Heading onClick={() => router.push('/')} as="button">
          iMockApp
        </Heading>
	<nav>


      <Link href="https://tonwallet.me/"><a>Create a TON Wallet</a></Link>

  	<Box p={2}>
              <Link
                p={2}
                onClick={() => router.push('https://t.me/iMockBot/')}
              >
                Buy/Request TON
              </Link>
            </Box>

      </nav>
        <Box>
          {auth ? (
            <Box p={2}>
              <Link
                p={2}
                fontWeight={
                  router.pathname === '/quiz/new' ? 'extrabold' : 'normal'
                }
                onClick={() => router.push('/quiz/new')}
              >
                Add new quiz
              </Link>
              <Link p={2} onClick={() => signOut()}>
                Logout
              </Link>
            </Box>
          ) : (
            <Box p={2}>
              <Link
                p={2}
                onClick={() => router.push('/signin')}
                fontWeight={
                  router.pathname === '/signin' ? 'extrabold' : 'normal'
                }
              >
                Sign In
              </Link>
            </Box>
          )}
        </Box>
      </Flex>
      <Divider
        css={{
          boxShadow: '1px 1px #888888',
        }}
      />
    </>
  );
};

export default Navbar;
