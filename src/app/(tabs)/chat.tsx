import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { SearchBar, Chip, StoryItem, ChatItem, Avatar } from "@/components/ui";
import colors from "@/constants/colors";
import type { ChatType } from "@/components/ui";
import { router } from "expo-router";

export default function MessagesScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const stories = [
    { id: "1", type: "my" as const },
    {
      id: "2",
      type: "user" as const,
      name: "Sarah",
      avatar: { uri: "https://i.pravatar.cc/150?img=47" },
      online: true,
      hasNewStory: true,
    },
    {
      id: "3",
      type: "user" as const,
      name: "Mike",
      avatar: { uri: "https://i.pravatar.cc/150?img=33" },
      online: true,
      hasNewStory: false,
    },
    {
      id: "4",
      type: "user" as const,
      name: "Jessica",
      avatar: { uri: "https://i.pravatar.cc/150?img=20" },
      online: false,
      hasNewStory: true,
    },
    {
      id: "5",
      type: "user" as const,
      name: "Dav",
      avatar: { uri: "https://i.pravatar.cc/150?img=12" },
      online: false,
      hasNewStory: false,
    },
  ];

  const chats = [
    {
      id: "1",
      type: "class" as ChatType,
      name: "Intro to Psychology 101",
      lastMessage: "Prof. Smith: Don't forget the quizs...",
      timestamp: "10:30 AM",
      unreadCount: 2,
      icon: "school-outline" as keyof typeof Ionicons.glyphMap,
      iconBackgroundColor: "#3B82F6",
      iconColor: colors.text.white,
      groupIcon: "people-outline" as keyof typeof Ionicons.glyphMap,
    },
    {
      id: "2",
      type: "direct" as ChatType,
      name: "Sarah Jenkins",
      lastMessage: "Are we meeting at the library later?",
      timestamp: "2m ago",
      unreadCount: 0,
      isOnline: true,
      avatar: { uri: "https://i.pravatar.cc/150?img=47" },
      isRead: false,
    },
    {
      id: "3",
      type: "group" as ChatType,
      name: "Student Union",
      lastMessage: "Campus concert tickets are now avail...",
      timestamp: "Friday",
      unreadCount: 0,
      icon: "megaphone-outline" as keyof typeof Ionicons.glyphMap,
      iconBackgroundColor: "#9333EA",
      iconColor: colors.text.white,
    },
    {
      id: "4",
      type: "group" as ChatType,
      name: "Soccer Team",
      lastMessage: "Coach: Practice moved to 5 PM due to...",
      timestamp: "Thursday",
      unreadCount: 0,
      icon: "football-outline" as keyof typeof Ionicons.glyphMap,
      iconBackgroundColor: "#F97316",
      iconColor: colors.text.white,
      groupIcon: "people-outline" as keyof typeof Ionicons.glyphMap,
    },
    {
      id: "5",
      type: "direct" as ChatType,
      name: "James Wilson",
      lastMessage: "You: Sounds good, see you then.",
      timestamp: "Wed",
      unreadCount: 0,
      avatar: { uri: "https://i.pravatar.cc/150?img=12" },
      isRead: true,
    },
  ];

  const filters = [
    { id: "all", label: "All" },
    { id: "groups", label: "Groups" },
    { id: "direct", label: "Direct" },
    { id: "class", label: "Class" },
  ];

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.headerAvatarContainer}>
            <Avatar
              source={{ uri: "https://i.pravatar.cc/150?img=12" }}
              name="Alex"
              size={40}
            />
            <View style={styles.headerOnlineIndicator} />
          </View>
          <Text style={styles.headerTitle}>Messages</Text>
        </View>
        <TouchableOpacity style={styles.composeButton} activeOpacity={0.7}>
          <View style={styles.composeIconContainer}>
            <Ionicons
              name="create-outline"
              size={20}
              color={colors.text.white}
            />
          </View>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <SearchBar
          placeholder="Search friends or classes..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          onClear={() => setSearchQuery("")}
        />
      </View>

      {/* Stories Section */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.storiesContainer}
        style={styles.storiesScroll}
      >
        {stories.map((story) => (
          <StoryItem
            key={story.id}
            type={story.type}
            name={story.name}
            avatar={story.avatar}
            online={story.online}
            hasNewStory={story.hasNewStory}
            onPress={() => console.log("Story:", story.id)}
          />
        ))}
      </ScrollView>

      {/* Filter Chips */}
      <View style={styles.filtersContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filtersRow}
        >
          {filters.map((filter) => (
            <Chip
              key={filter.id}
              label={filter.label}
              selected={selectedFilter === filter.id}
              onPress={() => setSelectedFilter(filter.id)}
              variant="light"
            />
          ))}
        </ScrollView>
      </View>

      {/* Chat List */}
      <ScrollView style={styles.chatList} showsVerticalScrollIndicator={false}>
        {chats.map((chat) => (
          <ChatItem
            key={chat.id}
            type={chat.type}
            name={chat.name}
            lastMessage={chat.lastMessage}
            timestamp={chat.timestamp}
            unreadCount={chat.unreadCount}
            isRead={chat.isRead}
            isOnline={chat.isOnline}
            avatar={chat.avatar}
            icon={chat.icon}
            iconBackgroundColor={chat.iconBackgroundColor}
            iconColor={chat.iconColor}
            groupIcon={chat.groupIcon}
            onPress={() => router.push(`/chat/${chat.id}` as any)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: colors.background.white,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  headerAvatarContainer: {
    position: "relative",
    marginRight: 12,
  },
  headerOnlineIndicator: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#10B981",
    borderWidth: 2,
    borderColor: colors.background.white,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.text.primary,
  },
  composeButton: {
    padding: 4,
  },
  composeIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: colors.teal.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: colors.background.white,
  },
  storiesScroll: {
    maxHeight: 100,
    backgroundColor: colors.background.white,
  },
  storiesContainer: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  filtersContainer: {
    paddingVertical: 12,
    backgroundColor: colors.background.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.light,
  },
  filtersRow: {
    paddingHorizontal: 20,
  },
  chatList: {
    flex: 1,
    backgroundColor: colors.background.white,
  },
});
