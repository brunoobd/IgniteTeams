import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Groups } from "@screens/groups";
import { NewGroup } from "@screens/new-group";
import { Players } from "@screens/players";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator>
      <Screen name={"groups"} component={Groups} />
      <Screen name={"new"} component={NewGroup} />
      <Screen name={"players"} component={Players} />
    </Navigator>
  );
};
