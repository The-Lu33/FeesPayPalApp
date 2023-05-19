import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import Calculadora from "./views/Calculadora";
export default function App() {
  
  return (
    <SafeAreaView  style={{ flex: 1, backgroundColor: "#051b29" }}>
      <StatusBar style="auto" backgroundColor="#051b29" />
      <Calculadora />
    </SafeAreaView>
  );
}