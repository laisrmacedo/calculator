import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface Props {
  label: string;
  type?: "number" | "operator" | "action";
  onPress: () => void;
}

export default function Button({ label, type = "number", onPress }: Props) {
  return (
    <TouchableOpacity key={label} style={styles.button} onPress={() => onPress()}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}
