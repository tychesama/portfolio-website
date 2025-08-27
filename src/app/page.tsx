import React from 'react';
import './globals.css';
import '../components/themes.css';
// import SplashScreen from './components/SplashScreen';
import MainPage from '../MainPage';
import ThemeSwitcher from '../components/ThemeSwitcher';
// const [isSplashVisible, setIsSplashVisible] = useState(true);

export default function Home() {
  return (
    <React.StrictMode>
      {/* {isSplashVisible && <SplashScreen onFinish={() => setIsSplashVisible(false)} />}
      {!isSplashVisible && <div></div>} */}
      <ThemeSwitcher />
      <MainPage />
    </React.StrictMode>
  );
}
