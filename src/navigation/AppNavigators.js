import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, ImageBackground, ScrollView, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'; // Removed unnecessary imports
import HomeScreen from '../screen/HomeScreen';
import DrawerContent from '../component/DrawerContent';
import FeeScreen from '../screen/FeeScreen';
import ProfileScreen from '../screen/ProfileScreen';
import AnnouncementScreen from './../screen/AnnouncementScreen';
import AnnouncementDetailScreen from './../screen/AnnouncementDetailScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Extracted the common tab bar icon rendering logic
const renderTabBarIcon = (route, iconName) => {
  return ({ focused, color, size }) => {
    return (
      <Ionicons
        name={iconName}
        size={size}
        color={focused ? '#000080' : '#C0A2C0'}
      />
    );
  };
};

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: true,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeScreen') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'school';
          } else if (route.name === 'Fees') { // Fixed 'Fees' icon name
            iconName = 'newspaper';
          }

          return renderTabBarIcon(route, iconName)({ focused, color, size });
        },
        tabBarStyle: {
          backgroundColor: '#ECECEC',
          borderColor: '#205CE5',
          borderWidth: 5,
          borderTopWidth: 5,
          height: 60,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.2,
          shadowRadius: 4.65,
          elevation: 25,
        },
        tabBarItemStyle: {
          fontSize: 18,
          fontWeight: 'bold',
        },
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: 'bold',
          color: '#000080',
        },
        tabBarItemActiveTintColor: '#ECECEC',
        tabBarItemInactiveTintColor: '#CCC',
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: "Home",
          drawerIcon: ({ color, size }) => (
            <AntDesign
              name="home"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <AntDesign
              name="school"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Fees"
        component={FeeScreen}
        options={{
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="newspaper"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  const screenOptions = {
    drawerStyle: {
      width: '80%',
    },
    drawerContentOptions: {
      activeTintColor: '#ff9900',
      inactiveTintColor: '#999999',
      labelStyle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    },
  };

  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} screenOptions={screenOptions} />}
    >
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign
              name="home"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign
              name="user"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Fees"
        component={FeeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="newspaper"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="App"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="AnnouncementScreen"
        component={AnnouncementScreen}
        options={({ navigation }) => ({
          title: 'Announcement',
          headerTitleStyle: styles.headerTitle,
          headerShown: true,
          headerTitleAlign: 'center',
          tabBarIcon: renderTabBarIcon({ name: 'Fees' }, 'book'),
          headerLeft: () => (
            <Ionicons
              name="chevron-back-outline"
              size={28}
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 20 }}
            />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => {}}>
              <Image
                source={require('./../../assets/images/school-logo.png')}
                style={styles.logo}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="FeeScreen"
        component={FeeScreen}
        options={({ navigation }) => ({
          title: 'Pay Fees',
          headerTitleStyle: styles.headerTitle,
          headerShown: true,
          headerTitleAlign: 'center',
          tabBarIcon: renderTabBarIcon({ name: 'Fees' }, 'book'),
          headerLeft: () => (
            <Ionicons
              name="chevron-back-outline"
              size={28}
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 20 }}
            />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => {}}>
              <Image
                source={require('./../../assets/images/school-logo.png')}
                style={styles.logo}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="AnnouncementDetailScreen"
        component={AnnouncementDetailScreen}
        options={({ navigation }) => ({
          title: 'Pay Fees',
          headerTitleStyle: styles.headerTitle,
          headerShown: true,
          headerTitleAlign: 'center',
          tabBarIcon: renderTabBarIcon({ name: 'Fees' }, 'book'),
          headerLeft: () => (
            <Ionicons
              name="chevron-back-outline"
              size={28}
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 20 }}
            />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => {}}>
              <Image
                source={require('./../../assets/images/school-logo.png')}
                style={styles.logo}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  logo: {
    width: 40, // Adjust the width as needed
    height: 40, // Adjust the height as needed
    borderRadius: 20, // Half of the width/height to make it rounded
  },
});


