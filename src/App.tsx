import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import TitleComponent from '@components/Title';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView>
      <TitleComponent>Hello World</TitleComponent>
    </SafeAreaView>
  );
}

export default App;
