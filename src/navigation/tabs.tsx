import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from '../ui/home/home';
import ProfileScreen from '../ui/profile/profile';


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        elevation: 5,
                        marginBottom:15,
                        height: 70,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30,
                        backgroundColor: '#7ca982'
                    }
                }}>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: () => {
                            return (
                                <Ionicons name='home-outline' size={30} />
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
                                <Ionicons name='person-outline' size={30} />
                            )
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Tabs;