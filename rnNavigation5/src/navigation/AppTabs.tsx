import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppParamList } from '../utils/AppParamList';
import { Ionicons } from '@expo/vector-icons';
import { HomeStack } from '../screens/HomeStack';
import { SearchStack } from '../screens/SearchStack';

interface AppTabsProps {

}

const Tab = createBottomTabNavigator<AppParamList>();


export const AppTabs: React.FC<AppTabsProps> = ({ }) => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    } else if (route.name === 'Search') {
                        iconName = focused ? 'ios-list-box' : 'ios-list';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}>
            <Tab.Screen name='Home' component={HomeStack} />
            <Tab.Screen name='Search' component={SearchStack} />
        </Tab.Navigator>

    );
}