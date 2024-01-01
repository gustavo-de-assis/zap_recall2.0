import { StatusBar } from "expo-status-bar";
import ScoreProvider from "./contexts/ScoreContext";
import ButtonProvider from "./contexts/ButtonContext";
import Game from "./pages/Game";
import Home from "./pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ButtonProvider>
      <ScoreProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
              name="Game"
              component={Game}
              options={{ title: "Overview" }}
            />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </ScoreProvider>
    </ButtonProvider>
  );
}
