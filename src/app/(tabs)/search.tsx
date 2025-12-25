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
import { router } from "expo-router";
import {
  SearchBar,
  Chip,
  RecentSearchItem,
  SuggestedPersonCard,
  TrendingCard,
  SectionHeader,
} from "@/components/ui";
import colors from "@/constants/colors";
import type { TrendingType } from "@/components/ui";

export default function DiscoverScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopFilter, setSelectedTopFilter] = useState("top");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const recentSearches = [
    {
      id: "1",
      text: "Intro to Psychology",
      icon: "time-outline" as keyof typeof Ionicons.glyphMap,
    },
    {
      id: "2",
      text: "Football Club",
      icon: "time-outline" as keyof typeof Ionicons.glyphMap,
    },
    {
      id: "3",
      text: "Prof. Sarah Jenkins",
      icon: "person-outline" as keyof typeof Ionicons.glyphMap,
    },
  ];

  const suggestedPeople = [
    {
      id: "1",
      name: "Jenny Wilson",
      role: "Computer Science",
      avatar: { uri: "https://i.pravatar.cc/150?img=47" },
      online: true,
    },
    {
      id: "2",
      name: "Robert Fox",
      role: "Architecture",
      avatar: { uri: "https://i.pravatar.cc/150?img=33" },
      online: false,
    },
    {
      id: "3",
      name: "Cody Fisher",
      role: "Medicine",
      avatar: { uri: "https://i.pravatar.cc/150?img=12" },
      online: false,
    },
  ];

  const handleClearRecentSearches = () => {
    console.log("Clear all recent searches");
  };

  const handleRemoveRecentSearch = (id: string) => {
    console.log("Remove search:", id);
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={24} color={colors.icon.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Discover</Text>
        <TouchableOpacity style={styles.filterButton} activeOpacity={0.7}>
          <Ionicons
            name="options-outline"
            size={24}
            color={colors.icon.primary}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <SearchBar
            placeholder="Search for students, courses..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            onClear={() => setSearchQuery("")}
          />
        </View>

        {/* Filter Chips */}
        <View style={styles.chipsContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.chipsRow}
          >
            <Chip
              label="Top"
              selected={selectedTopFilter === "top"}
              onPress={() => setSelectedTopFilter("top")}
            />
            <Chip
              label="Date"
              selected={selectedTopFilter === "date"}
              onPress={() => setSelectedTopFilter("date")}
              icon="chevron-down"
              iconPosition="right"
            />
            <Chip
              label="Computer Science"
              selected={false}
              onPress={() => {}}
            />
            <Chip label="Events" selected={false} onPress={() => {}} />
          </ScrollView>
        </View>

        <View style={styles.chipsContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.chipsRow}
          >
            <Chip
              label="All"
              selected={selectedCategory === "all"}
              onPress={() => setSelectedCategory("all")}
              variant="light"
            />
            <Chip
              label="Posts"
              selected={selectedCategory === "posts"}
              onPress={() => setSelectedCategory("posts")}
            />
            <Chip
              label="People"
              selected={selectedCategory === "people"}
              onPress={() => setSelectedCategory("people")}
            />
            <Chip
              label="Courses"
              selected={selectedCategory === "courses"}
              onPress={() => setSelectedCategory("courses")}
            />
          </ScrollView>
        </View>

        {/* Recent Searches */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <SectionHeader title="Recent Searches" />
            <TouchableOpacity
              onPress={handleClearRecentSearches}
              activeOpacity={0.7}
            >
              <Text style={styles.clearAllText}>Clear All</Text>
            </TouchableOpacity>
          </View>
          {recentSearches.map((search) => (
            <RecentSearchItem
              key={search.id}
              text={search.text}
              icon={search.icon}
              onRemove={() => handleRemoveRecentSearch(search.id)}
            />
          ))}
        </View>

        {/* Suggested People */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <SectionHeader title="Suggested People" />
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.peopleContainer}
          >
            {suggestedPeople.map((person) => (
              <SuggestedPersonCard
                key={person.id}
                name={person.name}
                role={person.role}
                avatar={person.avatar}
                online={person.online}
                onConnect={() => console.log("Connect:", person.name)}
              />
            ))}
          </ScrollView>
        </View>

        {/* Trending on Campus */}
        <View style={styles.section}>
          <SectionHeader title="Trending on Campus" />
          <TrendingCard
            type="event"
            title="Annual Robotics Hackathon 2024"
            description="Join us for a 48-hour hackathon where we will build the future of robotics. Open to all..."
            timestamp="2h ago"
            author={{
              name: "Engineering Society",
              avatar: { uri: "https://i.pravatar.cc/150?img=12" },
            }}
            onMenuPress={() => {}}
          />
          <TrendingCard
            type="course"
            title="CS101: Intro to Java"
            courseInfo={{
              instructor: "Dr. Albert Flores",
              studentCount: 120,
            }}
          />
          <TrendingCard
            type="news"
            title="Campus Library Extended Hours"
            description="Starting next week, the main library will be open 24/7 for the finals preparation period."
            timestamp="5h ago"
            author={{
              name: "University Admin",
              icon: "school-outline" as keyof typeof Ionicons.glyphMap,
              backgroundColor: "#3B82F6",
              iconColor: colors.text.white,
            }}
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
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.text.primary,
  },
  filterButton: {
    padding: 4,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: colors.background.white,
  },
  chipsContainer: {
    paddingVertical: 8,
    backgroundColor: colors.background.white,
  },
  chipsRow: {
    paddingHorizontal: 20,
  },
  section: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 8,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  clearAllText: {
    fontSize: 14,
    color: colors.teal.primary,
    fontWeight: "500",
  },
  seeAllText: {
    fontSize: 14,
    color: colors.teal.primary,
    fontWeight: "500",
  },
  peopleContainer: {
    paddingRight: 20,
  },
});
