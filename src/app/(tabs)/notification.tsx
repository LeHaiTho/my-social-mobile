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
import { FilterTabList, SectionHeader, type FilterItem } from "@/components/ui";
import {
  NotificationItem,
  type NotificationType,
} from "@/features/notification";
import colors from "@/constants/colors";

type FilterType = "all" | "social" | "academic" | "mentions";

export default function NotificationScreen() {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("all");

  const handleMarkAllRead = () => {
    console.log("Mark all read");
  };

  const filters: FilterItem[] = [
    { id: "all", label: "All", icon: "checkmark", iconPosition: "left" },
    {
      id: "social",
      label: "Social",
      icon: "people-outline",
      iconPosition: "left",
    },
    {
      id: "academic",
      label: "Academic",
      icon: "school-outline",
      iconPosition: "left",
    },
    { id: "mentions", label: "@", icon: "at-outline", iconPosition: "left" },
  ];

  const newNotifications = [
    {
      id: "1",
      avatar: {
        source: { uri: "https://i.pravatar.cc/150?img=12" },
        badge: {
          icon: "book-outline" as keyof typeof Ionicons.glyphMap,
          backgroundColor: colors.teal.primary,
          iconColor: colors.text.white,
        },
      },
      message:
        'Professor Smith posted a new assignment: "Midterm Project Guidelines"',
      type: "academic" as NotificationType,
      timeAgo: "2m ago",
      unread: true,
      boldText: ["Professor Smith"],
    },
    {
      id: "2",
      avatar: {
        source: { uri: "https://i.pravatar.cc/150?img=47" },
        badge: {
          icon: "heart" as keyof typeof Ionicons.glyphMap,
          backgroundColor: "#EC4899",
          iconColor: colors.text.white,
        },
      },
      message: 'Sarah J. liked your post: "Campus library views..."',
      type: "social" as NotificationType,
      timeAgo: "15m ago",
      unread: true,
      boldText: ["Sarah J."],
    },
    {
      id: "3",
      avatar: {
        backgroundColor: "#FED7AA",
        icon: "megaphone-outline" as keyof typeof Ionicons.glyphMap,
        iconColor: "#EA580C",
      },
      message: "University Alert: Campus closes at 6 PM today due to weather.",
      type: "system" as NotificationType,
      timeAgo: "1h ago",
      unread: false,
      boldText: ["University Alert"],
    },
  ];

  const yesterdayNotifications = [
    {
      id: "4",
      avatar: {
        backgroundColor: "#E9D5FF",
        icon: "people-outline" as keyof typeof Ionicons.glyphMap,
        iconColor: "#9333EA",
      },
      message:
        'Study Group mentioned you in a comment: "@Alex, are we meeting...?"',
      type: "social" as NotificationType,
      timeAgo: "1d ago",
      unread: false,
      boldText: ["Study Group"],
    },
    {
      id: "5",
      avatar: {
        backgroundColor: "#BBF7D0",
        icon: "checkmark-circle-outline" as keyof typeof Ionicons.glyphMap,
        iconColor: "#16A34A",
      },
      message: "Grade posted for History 101 Essay. Check your results now.",
      type: "academic" as NotificationType,
      timeAgo: "1d ago",
      unread: false,
      boldText: ["History 101 Essay"],
    },
    {
      id: "6",
      avatar: {
        backgroundColor: "#E9D5FF",
        icon: "calendar-outline" as keyof typeof Ionicons.glyphMap,
        iconColor: "#9333EA",
      },
      message: "Career Fair is happening tomorrow at the Main Hall.",
      type: "event" as NotificationType,
      timeAgo: "1d ago",
      unread: false,
      boldText: [],
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity
          onPress={handleMarkAllRead}
          style={styles.markAllReadButton}
          activeOpacity={0.7}
        >
          <Text style={styles.markAllReadText}>Mark all read</Text>
          <Ionicons
            name="checkmark"
            size={16}
            color={colors.teal.primary}
            style={styles.markAllReadIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Filter Tabs */}
      <FilterTabList
        filters={filters}
        selectedFilter={selectedFilter}
        onFilterChange={(filterId) => setSelectedFilter(filterId as FilterType)}
      />

      {/* Notifications List */}
      <ScrollView
        style={styles.notificationsScroll}
        showsVerticalScrollIndicator={false}
      >
        {/* New Section */}
        <View style={styles.section}>
          <SectionHeader title="New" style={styles.sectionHeader} />
          {newNotifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              avatar={notification.avatar}
              message={notification.message}
              type={notification.type}
              timeAgo={notification.timeAgo}
              unread={notification.unread}
              boldText={notification.boldText}
              onPress={() =>
                console.log("Notification pressed:", notification.id)
              }
            />
          ))}
        </View>

        {/* Yesterday Section */}
        <View style={styles.section}>
          <SectionHeader title="Yesterday" style={styles.sectionHeader} />
          {yesterdayNotifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              avatar={notification.avatar}
              message={notification.message}
              type={notification.type}
              timeAgo={notification.timeAgo}
              unread={notification.unread}
              boldText={notification.boldText}
              onPress={() =>
                console.log("Notification pressed:", notification.id)
              }
            />
          ))}
        </View>

        {/* You're all caught up */}
        <View style={styles.caughtUpContainer}>
          <Ionicons
            name="checkmark-circle-outline"
            size={64}
            color={colors.text.muted}
          />
          <Text style={styles.caughtUpText}>You're all caught up!</Text>
        </View>
      </ScrollView>
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
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.text.primary,
  },
  markAllReadButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  markAllReadText: {
    fontSize: 14,
    color: colors.teal.primary,
    fontWeight: "500",
    marginRight: 4,
  },
  markAllReadIcon: {
    marginLeft: 2,
  },
  notificationsScroll: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 0,
    marginBottom: 8,
  },
  sectionHeader: {
    marginHorizontal: 20,
  },
  caughtUpContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 48,
    paddingHorizontal: 20,
  },
  caughtUpText: {
    fontSize: 16,
    color: colors.text.muted,
    marginTop: 16,
  },
});
