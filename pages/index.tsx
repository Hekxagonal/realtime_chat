import { getSession } from 'next-auth/react';
import Chat from '../src/components/Chat';
import test_data from '../test/data';

interface HomeProps {
  user: string;
}

export default function Home({ user }: HomeProps) {
  return (
    <>
      <Chat initialMessages={test_data} />
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (await session) {
    return {
      props: {
        session,
      },
    };
  }

  return {
    redirect: {
      permanent: false,
      destination: '/api/auth/signin',
    },
  };
};
