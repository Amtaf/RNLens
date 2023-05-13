import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {LensProvider } from '@lens-protocol/react-native-lens-ui-kit'
import Profiles from './Profiles'
import ViewProfile from './ViewProfile'
import ViewFollowing from './ViewFollowing'
import ViewComments from './ViewComments' 
const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <LensProvider theme="dark">

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Profiles" component={Profiles} />
        <Stack.Screen name="ViewProfile" component={ViewProfile} />
        <Stack.Screen name="ViewFollowing" component={ViewFollowing} />
        <Stack.Screen name="ViewComments" component={ViewComments} />

      </Stack.Navigator>
    </NavigationContainer>

    </LensProvider>

  );
}


