import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import MainPage from './pages/MainPage';

function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  return (
    <>
      {isSplashVisible && <SplashScreen onFinish={() => setIsSplashVisible(false)} />}

      {!isSplashVisible && (
        <div></div>
      )}
      <MainPage />
    </>
  );
}

export default App
