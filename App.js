import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { Navigator } from "./components/navigation/Navigator";
import { Provider } from "react-redux";
import store from "./components/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <StatusBar style="dark" />
        <Navigator />
      </NativeBaseProvider>
    </Provider>
  );
}
