import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Text className="text-3xl font-bold">
        Edit app/index.tsx to edit this screen.
      </Text>
      <Link href={"/sign-in"}>signIN</Link>
    </View>
  );
}
