import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Icon } from "@/components/ui";
import colors from "@/constants/colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.icon.teal,
        tabBarInactiveTintColor: colors.icon.secondary,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Trang chủ",

          tabBarIcon: ({ focused }) => (
            <Icon
              name="home"
              state={focused ? "active" : "inactive"}
              size={24}
              color={focused ? colors.icon.teal : colors.icon.secondary}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: "Community",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name="courses"
              state={focused ? "active" : "inactive"}
              size={24}
              color={focused ? colors.icon.teal : colors.icon.secondary}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name="chat"
              state={focused ? "active" : "inactive"}
              size={24}
              color={focused ? colors.icon.teal : colors.icon.secondary}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name="search"
              state={focused ? "active" : "inactive"}
              size={24}
              color={focused ? colors.icon.teal : colors.icon.secondary}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: "Notification",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name="notification"
              state={focused ? "active" : "inactive"}
              size={24}
              color={focused ? colors.icon.teal : colors.icon.secondary}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name="profile"
              state={focused ? "active" : "inactive"}
              size={24}
              color={focused ? colors.icon.teal : colors.icon.secondary}
            />
          ),
        }}
      />
    </Tabs>
  );
}
