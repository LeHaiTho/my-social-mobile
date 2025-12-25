import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import {
  FilterTab,
  Avatar,
  PostCard,
  PollCard,
  ToggleSwitch,
  FloatingActionButton,
  Title,
  CommentsBottomSheet,
} from "@/components/ui";
import colors from "@/constants/colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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
    <GestureHandlerRootView style={{ flex: 1 }}>
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
              <Text style={styles.greeting}>Good Morning, Alex</Text>
              <Text style={styles.userInfo}>Computer Science • Year 2</Text>
            </View>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
              <Ionicons
                name="search-outline"
                size={24}
                color={colors.text.primary}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
              <View style={styles.badgeContainer}>
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color={colors.text.primary}
                />
                <View style={styles.notificationBadge} />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Filter Tabs */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filtersContainer}
          style={styles.filtersScroll}
        >
          {filters.map((filter) => (
            <FilterTab
              key={filter.id}
              label={filter.label}
              selected={selectedFilter === filter.id}
              onPress={() => setSelectedFilter(filter.id)}
            />
          ))}
        </ScrollView>

        {/* Feed Content */}
        <ScrollView
          style={styles.feedScroll}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.feedContent}
        >
          {/* Feed Header */}
          <View style={styles.feedHeader}>
            <Title variant="h2" weight="bold" style={styles.feedTitle}>
              Your Feed
            </Title>
            <ToggleSwitch
              options={["Newest", "Popular"]}
              selected={feedSort}
              onToggle={setFeedSort}
            />
          </View>

          {/* Pinned Announcement */}
          <PostCard
            author={{
              name: "Registrar's Office",
            }}
            timestamp="2h ago"
            content="The official schedule for Spring 2024 final exams is now available. Please check your student portal for details."
            pinned={true}
            pinnedLabel="PINNED ANNOUNCEMENT"
            image={{ uri: "https://via.placeholder.com/300x200?text=Document" }}
            likes={0}
            comments={0}
          />

          {/* Social Post - Sarah Chen */}
          <PostCard
            author={{
              name: "Sarah Chen",
              avatar: { uri: "https://i.pravatar.cc/150?img=47" },
              role: "Biochemistry",
            }}
            timestamp="15m ago"
            content="Is anyone studying for Bio 101 at the library tonight? Looking for a study buddy to go over the Krebs cycle! #StudyGroup 🧬"
            likes={12}
            comments={4}
          />

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
              uri: "https://via.placeholder.com/400x250?text=Sunset+Photo",
            }}
            likes={48}
            comments={15}
            onCommentPress={() => {
              setSelectedPost({
                post: {
                  author: {
                    name: "Photography Club",
                    icon: "camera-outline" as keyof typeof Ionicons.glyphMap,
                    backgroundColor: colors.text.primary,
                    iconColor: colors.text.white,
                  },
                  content:
                    "Golden hour meet-up this Friday! ☀️ Bring your cameras and let's capture the sunset at the quad. We will be experimenting with long exposure shots near the fountain. Beginners are super welcome! 📷",
                  hashtags: ["#Photography", "#CampusLife", "#Sunset"],
                  image: {
                    uri: "https://via.placeholder.com/400x250?text=Sunset+Photo",
                  },
                },
                comments: [
                  {
                    id: "1",
                    author: {
                      name: "Sarah Chen",
                      avatar: { uri: "https://i.pravatar.cc/150?img=47" },
                    },
                    timestamp: "2h ago",
                    content:
                      "Does anyone have a spare tripod I could borrow? Mine broke last week 😢",
                    likes: 5,
                    isLiked: false,
                    replies: [
                      {
                        id: "1-1",
                        author: {
                          name: "Mike Ross",
                          avatar: { uri: "https://i.pravatar.cc/150?img=33" },
                        },
                        timestamp: "1h ago",
                        content:
                          "I got you! I'll bring my travel tripod. It's not heavy duty but works for mobile/light cams.",
                        likes: 2,
                        isLiked: true,
                      },
                    ],
                  },
                  {
                    id: "2",
                    author: {
                      name: "David Kim",
                      avatar: null,
                    },
                    timestamp: "45m ago",
                    content:
                      "Is it okay if I only have my iPhone? I don't have a DSLR yet.",
                    likes: 0,
                    isLiked: false,
                    replies: [
                      {
                        id: "2-1",
                        author: {
                          name: "Photography Club",
                          icon: "camera-outline" as keyof typeof Ionicons.glyphMap,
                          backgroundColor: colors.text.primary,
                          iconColor: colors.text.white,
                          isAuthor: true,
                        },
                        timestamp: "30m ago",
                        content:
                          "Absolutely! Mobile photography is a huge part of what we do. See you there! 📱",
                        likes: 3,
                        isLiked: false,
                      },
                    ],
                  },
                ],
              });
            }}
          />

          {/* Poll - Mike Ross */}
          <PollCard
            author={{
              name: "Mike Ross",
              avatar: { uri: "https://i.pravatar.cc/150?img=33" },
            }}
            timestamp="5h ago"
            question="Best place for lunch on campus? 🍔🥗"
            options={[
              { label: "Student Center", percentage: 70 },
              { label: "Science Cafe", percentage: 20 },
              { label: "The Green Room", percentage: 10 },
            ]}
            totalVotes={142}
            timeLeft="1 day left"
          />
        </ScrollView>

        {/* Floating Action Button */}
        <View style={styles.fabContainer}>
          <FloatingActionButton
            onPress={() => console.log("Create post")}
            icon="add"
          />
        </View>

        {/* Comments Bottom Sheet */}
        {selectedPost && (
          <CommentsBottomSheet
            post={selectedPost.post}
            comments={selectedPost.comments}
            totalComments={15}
            onClose={() => setSelectedPost(null)}
            onLikeComment={(commentId: string) => {
              console.log("Like comment:", commentId);
            }}
            onReplyComment={(commentId: string, replyText: string) => {
              console.log("Reply to comment:", commentId, replyText);
            }}
            onSendComment={(text: string) => {
              console.log("Send comment:", text);
            }}
          />
        )}
      </SafeAreaView>
    </GestureHandlerRootView>
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
    backgroundColor: "#10B981",
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
    color: colors.text.muted,
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
    backgroundColor: "#EF4444",
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
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 100,
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
  fabContainer: {
    position: "absolute",
    bottom: 80,
    right: 20,
  },
});
