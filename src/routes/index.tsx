import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "styled-components/native";

export const Routes = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: useTheme().COLORS.GRAY_600,
      }}
    >
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </SafeAreaView>
  );
};
