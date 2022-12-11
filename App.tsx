import React, { useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView>
      <Text>Hello World</Text>
    </SafeAreaView>
  );
}

export default App;
