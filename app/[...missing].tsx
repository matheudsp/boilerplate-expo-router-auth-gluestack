import { Box } from '@/gluestack/ui/box';
import { Button, ButtonText } from '@/gluestack/ui/button';
import { Text } from '@/gluestack/ui/text';
import { Link, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function NotFoundScreen() {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Box>
        <Text>This screen does not exist.</Text>
        <Link href={'..'} asChild>
          <Button>
            <ButtonText>Go to home!</ButtonText>
          </Button>
        </Link>
      </Box>

    </SafeAreaView>
  );
}


