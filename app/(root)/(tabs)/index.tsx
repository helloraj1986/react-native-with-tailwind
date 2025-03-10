import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}>
			<Text className="font-bold my-10 font-rubik text-3xl">
				welcome to restate
			</Text>
			<Link href="/signIn"> Sign In</Link>
			<Link href="/explore"> explore</Link>
			<Link href="/profile"> profile</Link>
			<Link href="/properties/1"> properties</Link>
		</View>
	);
}
