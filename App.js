import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./App/Screens/Login";
import SignUp from "./App/Screens/SignUp";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./App/Screens/Welcome";
import { SafeAreaView } from "react-native-safe-area-context";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createDrawerNavigator } from "@react-navigation/drawer";
// const Stack = createNativeStackNavigator();
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Main from "./App/Screens/Main";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});
export default function App() {
  const [fontsLoaded] = useFonts({
    "Arimo-Regular": require("./App/fonts/Arimo-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      {/* <NavigationContainer> */}
        <Tab.Navigator
        //  initialRouteName="Welcome"
        >
          <Tab.Screen
            name="Welcome"
            component={Welcome}
            // options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Login"
            component={Login}
            // options={{ headerShown: false }}
          />
          <Tab.Screen
            name="SignUp"
            component={SignUp}
            // options={{ headerShown: false }}
          />
          {/* <Tab.Screen
            name="Main"
            component={Main}
            // options={{ headerShown: false }}
          /> */}
        </Tab.Navigator>
      {/* </NavigationContainer> */}

      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arimo-Regular",
  },
});
