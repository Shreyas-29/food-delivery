import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Cart from './src/screens/Cart';
import Orders from './src/screens/Orders';
import Account from './src/screens/Account';
import Restaurant from './src/screens/Restaurant';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Icon from "react-native-feather";
import Welcome from './src/screens/Welcome';
import Cart2 from './src/screens/Cart2';
import OrderPreparing from './src/screens/OrderPreparing';
import Delivery from './src/screens/Delivery';
import { themeColors } from './src/theme';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator backBehavior='initialRoute' screenOptions={{
            tabBarStyle: {
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: 4,
                height: 50,
                borderTopWidth: 0,
                backgroundColor: "#fff",
                shadowColor: "#000",
                shadowOpacity: 4,
                shadowRadius: 5,
                shadowOffset: {
                    width: 0,
                    height: -8,
                },
                elevation: 5,
                // borderTopLeftRadius: 20,
                // borderTopRightRadius: 20,
            }
        }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    headerShown: false,
                    tabBarLabelStyle: { color: themeColors.text, marginBottom: 4, fontFamily: "Regular" },
                    tabBarIcon: ({ focused }) => <Icon.Home color={focused ? themeColors.text : "#9ca3af"} width={20} height={20} strokeWidth={1.8} />
                }}
            />
            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    tabBarLabel: 'Account',
                    headerShown: false,
                    tabBarLabelStyle: { color: themeColors.text, marginBottom: 4, fontFamily: "Regular" },
                    tabBarIcon: ({ focused }) => <Icon.User color={focused ? themeColors.text : "#9ca3af"} width={20} height={20} strokeWidth={1.8} />
                }}
            />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
                <Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false }} />
                <Stack.Screen name="Restaurant" component={Restaurant} options={{ headerShown: false }} />
                <Stack.Screen name="Cart" component={Cart} options={{
                    presentation: 'modal',
                    // animationTypeForReplace: 'push',
                    headerShown: false
                }} />
                <Stack.Screen name="OrderPreparing" component={OrderPreparing} options={{
                    presentation: 'modal',
                    headerShown: false,
                }} />
                <Stack.Screen name="Delivery" component={Delivery} options={{
                    presentation: 'modal',
                    headerShown: false,
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}