import { RecoilRoot } from 'recoil';
import './App.css'
import Chat from './components/Chat';
import Input from './components/Input';
import TopBar from './components/TopBar';
import { useEffect } from 'react';
 

const getCurrentDay = (): string => {
  const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
  const currentDay: string = new Date().toLocaleDateString('en-US', options);
  return currentDay;
};


function App() {
  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      e.prompt();
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const currentDay: string = getCurrentDay();

  return (
    <div className='w-full h-screen bg-[#FAF9F4]'>
    <TopBar/>
    <div className="mt-[100px] p-2 flex flex-row items-center space-x-2">
    <div className="flex-grow h-0.5 bg-gray-300"></div>
    <p className="text-gray-400 text-sm font-mulish">{currentDay}</p>
    <div className="flex-grow h-0.5 bg-gray-300"></div>
</div>
<RecoilRoot>
    <Chat/>
    <Input/>
  </RecoilRoot>

    </div>
  )
}

export default App;
