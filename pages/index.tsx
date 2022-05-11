import { getSession } from 'next-auth/react';
import Chat from '../src/components/Chat';
// import test_data from '../api/test_data';

interface HomeProps {
  user: string;
}

export default function Home({ user }: HomeProps) {
  return (
    <>
      <Chat />
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
