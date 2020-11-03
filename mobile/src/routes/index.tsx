import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import ShowEvent from '../pages/ShowEvents';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <Auth.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#ff9000' },
        }}
    >
        <Auth.Screen name="Dashboard" component={Dashboard} />
        <Auth.Screen name="ShowEvent" component={ShowEvent} />
    </Auth.Navigator>
);

export default AuthRoutes;