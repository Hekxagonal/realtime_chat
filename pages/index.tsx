import { getSession } from 'next-auth/react';
import Chat from '../src/components/Chat';
import FloatingButton from '../src/components/FloatingButton';
import { signOut } from 'next-auth/react';
import { GetServerSideProps } from 'next';

export default function Home() {
  return (
    <>
      <FloatingButton onClick={signOut} />
      <Chat />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
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
