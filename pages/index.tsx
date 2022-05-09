import Chat from '../src/components/Chat';
import test_data from '../api/test_data';

export default function Home() {
  return (
    <>
      <Chat initialMessages={test_data} />
    </>
  );
}
