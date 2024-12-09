
import Providers from '@/src/provider';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { preventAutoHideAsync, hideAsync } from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import '@/global.css'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'


// Prevent the splash screen from auto-hiding before asset loading is complete.
preventAutoHideAsync();

export default function RootLayout() {

  const [loaded, error] = useFonts({
    Manrope: require('../assets/fonts/Manrope-VariableFont.ttf'),
  });

  useEffect(() => {
    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    if (error) throw error;

    if (loaded) hideAsync();

  }, [error, loaded]);


  if (!loaded && !error) return null;

  return (
    <Providers>
      <Slot />
    </Providers>
  );
}
