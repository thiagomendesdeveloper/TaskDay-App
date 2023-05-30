import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import { Intro } from '../screens/Intro';
import TabNavigator from './tabBavigator';

const Stack = createNativeStackNavigator();

export default function Router() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Intro" component={Intro} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}