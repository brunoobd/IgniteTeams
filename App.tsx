import { ThemeProvider } from "styled-components/native";
import { NewGroup } from "./src/screens/new-group";
import theme from "src/theme";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { ActivityIndicator, StatusBar } from "react-native";
import { Players } from "@screens/players";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        translucent
      />
      {fontsLoaded ? <Players /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}
