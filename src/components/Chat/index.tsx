import { useEffect, useState } from 'react';

import Message from '../Message';
import * as S from './styles';
import test_data from '../../../test/data';
import MessageInput from '../MessageInput';
import { io } from 'socket.io-client';
import { useSession } from 'next-auth/react';

export interface ChatProps {
  initialMessages?: typeof test_data;
  user?: string;
}

const socket = io('http://localhost:8080');

socket.on('connection', () => {
  console.log('[IO] Connect => New Connection');
});

const Chat = ({ initialMessages = [] }: ChatProps) => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState(initialMessages);
  const { data: session } = useSession();
  const [userId] = useState(session?.user?.name);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim()) {
      socket.emit('chat.message', {
        id: 1,
        message: inputValue.trim(),
        user: userId,
        createdAt: new Date(),
      });
      setInputValue('');
    }
  };

  useEffect(() => {
    window.scroll(0, document.body.scrollHeight);
  }, [messages]);

  useEffect(() => {
    const handleNewMessage = (data: {
      id: number;
      message: string;
      user: string;
      createdAt: Date;
    }) => {
      const isSender = userId === data.user;
      setMessages((old) => [
        ...old,
        {
          id: data.id,
          text: data.message,
          isSender,
          user: data.user,
          createdAt: data.createdAt,
        },
      ]);
    };

    socket.on('chat.message', handleNewMessage);

    return () => {
      socket.off('chat.message', handleNewMessage);
    };
  }, [userId]);

  return (
    <S.Container>
      {messages.map((el, i) => (
        <Message
          createdAt={el.createdAt}
          user={el.user}
          key={i}
          isSender={el.isSender}
        >
          {el.text}
        </Message>
      ))}
      <MessageInput
        inputValue={inputValue}
        onInputChange={(event) => setInputValue(event.target.value)}
        onFormSubmit={handleFormSubmit}
      />
    </S.Container>
  );
};

export default Chat;
