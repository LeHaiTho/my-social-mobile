import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StackScreen } from "react-native-screens";

export default function RootLayout() {
  // const isAuthenticated = false;
  return (
    <>
      <StatusBar style="dark" />
      <Stack>
        <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/register" options={{ headerShown: false }} />
        {/* <Stack.Protected guard={isAuthenticated}> */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* </Stack.Protected> */}
        <Stack.Screen name="not-found" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
