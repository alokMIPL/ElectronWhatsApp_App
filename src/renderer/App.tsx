import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import WrapperComponents from './components/WrapperComponents';
import ChatComponent from './components/routes-comps/ChatsComponents';
import DefaultChatPage from './components/chat-page-comps/DefaultChatPage';
import ChatOutput from './components/chat-page-comps/ChatPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WrapperComponents/>}
          children={[
            <Route path="/chat" element={<ChatComponent/>} 
            children={[
              <Route path="/chat/" element={<DefaultChatPage/>} />,
              <Route path="/chat/:conversationId" element={<ChatOutput/>} />
            ]}
            />
          ]}
        />
      </Routes>
    </Router>
  );
}
