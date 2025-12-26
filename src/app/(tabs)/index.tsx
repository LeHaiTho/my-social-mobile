import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, PostCard, FloatingActionButton, Icon } from "@/components/ui";
import colors from "@/constants/colors";
import { icons } from "@/constants/icon";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [feedSort, setFeedSort] = useState<0 | 1>(0);
  const [selectedPost, setSelectedPost] = useState<{
    post: any;
    comments: any[];
  } | null>(null);

  const filters = [
    { id: "all", label: "All" },
    { id: "official", label: "Official" },
    { id: "clubs", label: "Clubs" },
    { id: "events", label: "Events" },
  ];

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarContainer}>
            <Avatar
              source={{ uri: "https://i.pravatar.cc/150?img=12" }}
              name="Alex"
              size={48}
            />
            <View style={styles.onlineIndicator} />
          </View>
          <View style={styles.greetingContainer}>
            <Text style={styles.greeting}>Lê Hải Thọ</Text>
            <Text style={styles.userInfo}>Khoa Công nghệ thông tin</Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <Icon
              name={icons.search.inactive.name}
              set={icons.search.inactive.set}
              size={24}
              color={colors.icon.primary}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <View style={styles.badgeContainer}>
              <Icon
                name={icons.notification.inactive.name}
                set={icons.notification.inactive.set}
                size={24}
                color={colors.icon.primary}
              />
              <View style={styles.notificationBadge} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Feed Content */}
      <ScrollView
        style={styles.feedScroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.feedContent}
      >
        {/* Pinned Announcement */}
        <PostCard
          author={{
            name: "Registrar's Office",
          }}
          timestamp="2h ago"
          content="The official schedule for Spring 2024 final exams is now available. Please check your student portal for details."
          // pinned={true}
          // pinnedLabel="PINNED ANNOUNCEMENT"
          image={{
            uri: "https://khoinguonsangtao.vn/wp-content/uploads/2021/08/tai-hinh-anh-dep-ve-thien-nhien.jpg",
          }}
          likes={0}
          comments={0}
        />
        <View style={styles.divider} />

        {/* Club Event - Photography Club */}
        <PostCard
          author={{
            name: "Photography Club",
            icon: "camera-outline" as keyof typeof Ionicons.glyphMap,
            backgroundColor: colors.text.primary,
            iconColor: colors.text.white,
          }}
          timestamp="3h ago"
          content="Golden hour meet-up this Friday! ☀️ Bring your cameras and let's capture the sunset at the quad. We will be experimenting with long exposure shots near the fountain. Beginners are super welcome! 📷"
          image={{
            uri: "https://khoinguonsangtao.vn/wp-content/uploads/2021/08/tai-hinh-anh-dep-ve-thien-nhien.jpg",
          }}
          likes={48}
          comments={15}
          onCommentPress={() => {
            console.log("comment press");
          }}
        />
        <View style={styles.divider} />
        <PostCard
          author={{
            name: "Photography Club",
            icon: "camera-outline" as keyof typeof Ionicons.glyphMap,
            backgroundColor: colors.text.primary,
            iconColor: colors.text.white,
          }}
          timestamp="3h ago"
          content="Golden hour meet-up this Friday! ☀️ Bring your cameras and let's capture the sunset at the quad. We will be experimenting with long exposure shots near the fountain. Beginners are super welcome! 📷"
          image={{
            uri: "https://khoinguonsangtao.vn/wp-content/uploads/2021/08/tai-hinh-anh-dep-ve-thien-nhien.jpg",
          }}
          likes={48}
          comments={15}
          onCommentPress={() => {
            console.log("comment press");
          }}
        />
      </ScrollView>

      {/* Sau thay thành chatbot */}
      <View style={styles.fabContainer}>
        <FloatingActionButton
          onPress={() => console.log("Create post")}
          icon="add"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.white,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: colors.background.white,
    borderBottomWidth: 2,
    borderBottomColor: colors.border.muted,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  avatarContainer: {
    position: "relative",
    marginRight: 12,
  },
  onlineIndicator: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.state.success,
    borderWidth: 2,
    borderColor: colors.background.white,
  },
  greetingContainer: {
    flex: 1,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.text.primary,
    marginBottom: 2,
  },
  userInfo: {
    fontSize: 12,
    color: colors.text.secondary,
    fontWeight: "400",
    fontStyle: "italic",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconButton: {
    padding: 4,
  },
  badgeContainer: {
    position: "relative",
  },
  notificationBadge: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.state.error,
  },
  filtersScroll: {
    maxHeight: 50,
    backgroundColor: colors.background.white,
  },
  filtersContainer: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  feedScroll: {
    flex: 1,
  },
  feedContent: {
    // padding: 16,
  },
  feedHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  feedTitle: {
    fontSize: 24,
  },
  divider: {
    height: 5,
    backgroundColor: colors.background.grey,
  },
  fabContainer: {
    position: "absolute",
    bottom: 16,
    right: 20,
  },
});
