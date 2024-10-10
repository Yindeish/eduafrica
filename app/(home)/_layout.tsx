import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import { flexCenter, flexCol, gap } from '@/utils/styles';
import { Text } from 'react-native-paper';
import { c, fs10, fw500 } from '@/utils/fontStyles';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ color, focused }) => (<TouchableOpacity style={[flexCol, gap(7)]}>
                        <AntDesign name="eyeo" size={24} color={focused ? '#00BF63' : '#384250'} />
                        <Text style={[fw500, fs10, c(focused ? '#00BF63' : '#384250')]}>Snoop</Text>
                    </TouchableOpacity>),
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    tabBarIcon: ({ color, focused }) => (<TouchableOpacity style={[flexCol, gap(7)]}>
                        <AntDesign name="search1" size={24} color={focused ? '#00BF63' : '#384250'} />
                        <Text style={[fw500, fs10, c(focused ? '#00BF63' : '#384250')]}>Search</Text>
                    </TouchableOpacity>)

                }}
            />
            <Tabs.Screen
                name="learning"
                options={{
                    tabBarIcon: ({ color, focused }) => (<TouchableOpacity style={[flexCol, gap(7)]}>
                        <Ionicons name="document-text-outline" size={24} color={focused ? '#00BF63' : '#384250'} />
                        <Text style={[fw500, fs10, c(focused ? '#00BF63' : '#384250')]}>Learning</Text>
                    </TouchableOpacity>)
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({ color, focused }) => (<TouchableOpacity style={[flexCol, gap(7)]}>
                        <Ionicons name="person-outline" size={24} color={focused ? '#00BF63' : '#384250'} />
                        <Text style={[fw500, fs10, c(focused ? '#00BF63' : '#384250')]}>Profile</Text>
                    </TouchableOpacity>)
                }}
            />

        </Tabs>
    );
}
