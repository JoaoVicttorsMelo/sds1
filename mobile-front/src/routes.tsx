import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import Home from './Pages/Home';

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#081f34'
                    }
                }}>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer >


    );
}
export default Routes;