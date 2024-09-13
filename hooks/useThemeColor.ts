import {DefaultTheme} from '@react-navigation/native';
import Colors from "@/constants/Colors";

const defaultTheme: typeof DefaultTheme = {
    ...DefaultTheme,
    colors: {...DefaultTheme.colors, ...Colors},
};


export const getTheme = () => defaultTheme
