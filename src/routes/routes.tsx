import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import { Intro } from '../screens/Intro';

const Stack = createNativeStackNavigator();

export default function Router() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Intro" component={Intro} />
        </Stack.Navigator>
    );
}