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
import {
  Avatar,
  SectionHeader,
  AnnouncementCard,
  DeadlineCard,
  EventCard,
  ConfessionCard,
  FilterTab,
  FilterTabList,
  FilterItem,
} from "@/components/ui";
import { PostCard } from "@/features/post";
import colors from "@/constants/colors";

export default function CampusFeedScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Campus Feed</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity
            style={styles.headerButton}
            onPress={() => console.log("Search")}
            activeOpacity={0.7}
          >
            <Ionicons
              name="search-outline"
              size={24}
              color={colors.text.primary}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headerButton}
            onPress={() => console.log("Profile")}
            activeOpacity={0.7}
          >
            <Avatar
              name="User"
              size={32}
              backgroundColor={colors.teal.light}
              iconColor={colors.teal.primary}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* Content */}
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Official Announcements */}
        <View style={styles.section}>
          <SectionHeader
            title="Official Announcements"
            icon="megaphone-outline"
            iconColor="#EF4444"
            viewAllLabel="View All"
            onViewAllPress={() => console.log("View All Announcements")}
            style={styles.sectionHeader}
          />
          <AnnouncementCard
            tag="ANNOUNCEMENT"
            author="Admin"
            timestamp="2h ago"
            title="Trường Đại học Thủ Dầu Một phát hành Bộ lịch năm 2026"
            description="Bộ lịch Tết 2026 của Trường Đại học Thủ Dầu Một được xây dựng với chủ đề “Chiến lược phát triển đến năm 2035, tầm nhìn đến năm 2050”, phản ánh định hướng phát triển dài hạn của Nhà trường trong bối cảnh chính thức bước vào không gian phát triển mở rộng của Thành phố Hồ Chí Minh từ ngày 01/7/2025"
            backgroundImage={{
              uri: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/8/23/1084256/295497942_2922294937.jpg",
            }}
            onPress={() => console.log("View Announcement")}
            onBookmarkPress={() => console.log("Bookmark")}
          />
        </View>

        {/* Academic Deadlines */}
        <View style={styles.section}>
          <SectionHeader
            title="Academic Deadlines"
            icon="calendar-outline"
            style={styles.sectionHeader}
          />
          <DeadlineCard
            tag="DEADLINE"
            author="Registrar"
            timestamp="Today"
            title="Fall Semester Course Withdrawal Deadline"
            description="Last day to withdraw with a 'W' grade."
            month="FEB"
            day="14"
            onPress={() => console.log("View Deadline")}
            onBookmarkPress={() => console.log("Bookmark")}
            onViewGuidelinesPress={() => console.log("View Guidelines")}
          />
        </View>

        {/* Upcoming Events */}
        <View style={styles.section}>
          <SectionHeader
            title="Upcoming Events"
            icon="ticket-outline"
            style={styles.sectionHeader}
          />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.eventsScroll}
          >
            <EventCard
              tag="EVENT"
              author="Career Services"
              title="Annual Tech Career Fair 2024"
              time="Tomorrow, 10 AM"
              backgroundImage={{
                uri: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800",
              }}
              onPress={() => console.log("View Event 1")}
            />
            <EventCard
              tag="GAME DAY"
              author="Athletics Department"
              title="Varsity Basketball Championship"
              time="This Saturday, 7 PM"
              onPress={() => console.log("View Event 2")}
            />
          </ScrollView>
        </View>

        {/* Featured Posts */}
        <View style={styles.section}>
          <SectionHeader
            title="Featured Posts"
            icon="star"
            iconColor="#FBBF24"
            style={styles.sectionHeader}
          />
          <View style={styles.postCardWrapper}>
            <View style={styles.postTag}>
              <Text style={styles.postTagText}>DISCUSSION</Text>
            </View>
            <PostCard
              author={{
                name: "John Doe",
                role: "Student Union",
                icon: "person-outline",
                backgroundColor: "#9333EA",
                iconColor: colors.text.white,
              }}
              timestamp="5h ago"
              content="Proposal for extended library hours during finals. We are gathering signatures to keep the main library open 24/7 during the upcoming finals week. Check the details attached."
              onPress={() => console.log("View Post")}
              onLikePress={() => console.log("Like")}
              onCommentPress={() => console.log("Comment")}
              onSharePress={() => console.log("Share")}
            />
          </View>
          <View style={styles.postFooter}>
            <View style={styles.warningContainer}>
              <Ionicons
                name="warning-outline"
                size={16}
                color={colors.state.warning}
              />
              <Text style={styles.warningText}>Not an official channel</Text>
            </View>
            <View style={styles.postActions}>
              <TouchableOpacity
                onPress={() => console.log("View Detail")}
                activeOpacity={0.7}
              >
                <Text style={styles.viewDetailText}>View Detail</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.bookmarkButton}
                onPress={() => console.log("Bookmark")}
                activeOpacity={0.7}
              >
                <Ionicons
                  name="bookmark-outline"
                  size={20}
                  color={colors.text.secondary}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Selected Confessions */}
        <View style={styles.section}>
          <SectionHeader
            title="Selected Confessions"
            icon="chatbubble-ellipses-outline"
            iconColor="#FBBF24"
            style={styles.sectionHeader}
          />
          <ConfessionCard
            tag="CONFESSION"
            author="Anonymous"
            timestamp="30m ago"
            content={
              "The coffee in the library vending machine is actually surprisingly good today. Maybe I'm just sleep deprived."
            }
            onPress={() => console.log("View Confession")}
            onSavePress={() => console.log("Save")}
          />
        </View>
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
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.text.primary,
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  headerButton: {
    padding: 4,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: colors.background.white,
    marginBottom: 8,
  },
  sectionHeader: {
    marginBottom: 16,
  },
  eventsScroll: {
    paddingRight: 20,
  },
  postCardWrapper: {
    position: "relative",
    marginBottom: 8,
  },
  postTag: {
    position: "absolute",
    top: 16,
    right: 16,
    zIndex: 10,
    backgroundColor: "#9333EA",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  postTagText: {
    fontSize: 11,
    fontWeight: "700",
    color: colors.text.white,
    textTransform: "uppercase",
  },
  postFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: colors.background.white,
  },
  warningContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  warningText: {
    fontSize: 12,
    color: colors.state.warning,
    marginLeft: 6,
  },
  postActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  viewDetailText: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.teal.primary,
    marginRight: 12,
  },
  bookmarkButton: {
    padding: 4,
  },
});
