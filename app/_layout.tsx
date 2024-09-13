import {ThemeProvider} from '@react-navigation/native';
import {SplashScreen, Stack} from 'expo-router';
import 'react-native-reanimated';
import {getTheme} from "@/hooks/useThemeColor";
import fonts from "@/config/fonts";
import {useFonts} from "expo-font";
import {useEffect} from "react";
import {StatusBar} from "react-native";


export default function RootLayout() {
    const theme = getTheme()
    const [loaded, error] = useFonts({
        ...fonts,
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
        if (error) throw error;
    }, [loaded, error]);

    if (!loaded) return null;
    return (
        <ThemeProvider value={theme}>
            <StatusBar barStyle="light-content"/>
            <Stack>
                <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                <Stack.Screen name="+not-found"/>
            </Stack>
        </ThemeProvider>
    );
}
