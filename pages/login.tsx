import { NextPage } from 'next';
import { Box, Center, Heading, Flex, Text } from '@chakra-ui/react';
import { ServiceLayout } from '@/components/containers/service_layout';
import { useAuth } from '@/contexts/auth_user.context';
import TwitterLoginButton from '@/components/twitter_login_button';

const IndexPage: NextPage = function () {
  const { signInWithTwitter } = useAuth();
  return (
    <ServiceLayout height="100vh" backgroundColor="gray.50">
      <Box maxW="md" mx="auto">
        <Center marginTop="20" marginBottom="10" p="6">
          <Box>
            <img src="/blahx2.svg" alt="hero" />
            <Flex justify="center" alignItems="center" flexDir="column">
              <Heading>#BlahBlah</Heading>
              <Text fontSize="sm">익명으로 대화해보세요</Text>
            </Flex>
          </Box>
        </Center>
      </Box>
      <TwitterLoginButton isStart={false} onClickLogin={signInWithTwitter} />
    </ServiceLayout>
  );
};

export default IndexPage;
