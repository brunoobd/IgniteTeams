import { ThemeProvider } from "styled-components/native";
import theme from "src/theme";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { ActivityIndicator, StatusBar } from "react-native";
import { Routes } from "src/routes";
import { SafeAreaView } from "react-native-safe-area-context";
import { Loading } from "@components/loading";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
