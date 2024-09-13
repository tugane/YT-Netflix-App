import {Tabs} from 'expo-router';
import Colors from "@/constants/Colors";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors.tabIconSelected,
                tabBarInactiveTintColor: Colors.tabIconDefault,
                headerShown: false,
                tabBarStyle: {
                    borderTopWidth: 0,
                    backgroundColor: Colors.background
                },
            }}>
            <Tabs.Screen
                name="(home)"
            />
            <Tabs.Screen
                name="newAndHot"
            />
            <Tabs.Screen
                name="downloads"
            />
        </Tabs>
    );
}
