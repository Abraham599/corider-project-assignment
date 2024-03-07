import { atom} from 'recoil';

interface ChatInterface {
  id: string;
  message: string;
  sender: {
    image: string;
    self:boolean;
  };
}

// Define the atom for chat messages
export const ChatAtom = atom<ChatInterface[]>({
  key: 'ChatAtom',
  default: [],
});

