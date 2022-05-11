import { getSession } from 'next-auth/react';
import Chat from '../src/components/Chat';

export default function Home() {
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
