import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from '../ui/home/home';
import ProfileScreen from '../ui/profile/profile';
import ActivityScreen from '../ui/activity/activity';
import PaymentScreen from '../ui/payment/payment';
import MessageScreen from '../ui/message/message';
import { Dimensions, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View } from 'react-native';

const { width, height } = Dimensions.get("window")

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{
                width,
                height
            }}>
                <NavigationContainer>
                    <Tab.Navigator
                        screenOptions={{
                            // tabBarHideOnKeyboard: true,
                            headerShown: false,
                            tabBarActiveTintColor: 'green',
                            // tabBarStyle:{backgroundColor:'green'}
                            // tabBarActiveBackgroundColor:'green',
                        }}>
                        <Tab.Screen
                            name="Home"
                            component={HomeScreen}
                            options={{
                                tabBarIcon: () => {
                                    return (
                                        <Ionicons name='compass-outline' size={25} />
                                    )
                                }
                            }}
                        />
                        <Tab.Screen
                            name="Activity"
                            component={ActivityScreen}
                            options={{
                                tabBarIcon: () => {
                                    return (
                                        <Ionicons name='receipt-outline' size={25} />
                                    )
                                }
                            }}
                        />
                        <Tab.Screen
                            name="Payment"
                            component={PaymentScreen}
                            options={{
                                tabBarIcon: () => {
                                    return (
                                        <Ionicons name='wallet-outline' size={25} />
                                    )
                                }
                            }}
                        />
                        <Tab.Screen
                            name="Message"
                            component={MessageScreen}
                            options={{
                                tabBarIcon: () => {
                                    return (
                                        <Ionicons name='chatbox-ellipses-outline' size={25} />
                                    )
                                }
                            }}
                        />
                        <Tab.Screen
                            name="Profile"
                            component={ProfileScreen}
                            options={{
                                tabBarIcon: () => {
                                    return (
                                        <Ionicons name='person-outline' size={25} />
                                    )
                                }
                            }}
                        />
                    </Tab.Navigator>
                </NavigationContainer>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default Tabs;