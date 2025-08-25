import {  } from 'react';
// import SplashScreen from './components/SplashScreen';
import MainPage from './pages/MainPage';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  // const [isSplashVisible, setIsSplashVisible] = useState(true);

  return (
    <>
      {/* {isSplashVisible && <SplashScreen onFinish={() => setIsSplashVisible(false)} />}

      {!isSplashVisible && (
        <div></div>
      )} */}
      <ThemeSwitcher />
      <MainPage />
    </>
  );
}

export default App
