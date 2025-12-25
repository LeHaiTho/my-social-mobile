import React from "react";
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
  Avatar,
  Title,
  StatCard,
  CourseCard,
  ActionButton,
  DetailRow,
  Button,
} from "@/components/ui";
import colors from "@/constants/colors";
import { router } from "expo-router";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* Header */}
      <View style={styles.header}>
        <Title variant="h2" weight="bold" style={styles.headerTitle}>
          Profile
        </Title>
        <TouchableOpacity style={styles.settingsButton} activeOpacity={0.7}>
          <Ionicons
            name="settings-outline"
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
        {/* Profile Section */}
        <View style={styles.profileSection}>
          {/* Avatar with Camera Icon */}
          <View style={styles.avatarContainer}>
            <View style={styles.avatarWrapper}>
              <Avatar
                source={{ uri: "https://i.pravatar.cc/150?img=12" }}
                name="Alex Rivera"
                size={120}
              />
              <TouchableOpacity style={styles.cameraButton} activeOpacity={0.7}>
                <View style={styles.cameraIconContainer}>
                  <Ionicons name="camera" size={16} color={colors.text.white} />
                </View>
              </TouchableOpacity>
            </View>
            {/* Gradient Background */}
            <View style={styles.gradientBackground} />
          </View>

          {/* Name */}
          <Text style={styles.name}>Alex Rivera</Text>

          {/* Academic ID */}
          <Text style={styles.academicId}>COMPUTER SCIENCE • ID: 8933021</Text>

          {/* Edit Profile Button */}
          <Button
            label="Edit Profile"
            variant="outline"
            size="medium"
            onPress={() => console.log("Edit Profile")}
            style={styles.editButton}
            textStyle={styles.editButtonText}
          />
        </View>

        {/* Summary Statistics */}
        <View style={styles.statsContainer}>
          <StatCard label="GPA" value="3.8" />
          <StatCard label="CREDITS" value="86/120" />
          <StatCard label="YEAR" value="Junior" />
        </View>

        {/* Academic Details */}
        <View style={styles.section}>
          <Title variant="h3" weight="bold" style={styles.sectionTitle}>
            Academic Details
          </Title>
          <View style={styles.detailsCard}>
            <DetailRow label="Department" value="Engineering" />
            <DetailRow
              label="Advisor"
              value="Dr. Emily Chen"
              avatar={{ uri: "https://i.pravatar.cc/150?img=45" }}
            />
            <DetailRow
              label="Status"
              value=""
              badge={{ label: "Enrolled", color: colors.state.success }}
            />
          </View>
        </View>

        {/* Current Courses */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Title variant="h3" weight="bold" style={styles.sectionTitle}>
              Current Courses
            </Title>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.coursesContainer}
          >
            <CourseCard
              courseCode="CS 301"
              courseName="Algorithms & Data Structures"
              schedule="Mon, Wed • 10:00 AM"
              professor={{
                name: "Prof. A. Smith",
                avatar: { uri: "https://i.pravatar.cc/150?img=50" },
              }}
              badgeColor="#F59E0B"
              onPress={() => console.log("CS 301 pressed")}
            />
            <CourseCard
              courseCode="ENG 202"
              courseName="Technical Engineers"
              schedule="Tue, Thu • 2:00 PM"
              professor={{
                name: "Prof. J. Davis",
                avatar: { uri: "https://i.pravatar.cc/150?img=51" },
              }}
              badgeColor="#3B82F6"
              onPress={() => console.log("ENG 202 pressed")}
            />
          </ScrollView>
        </View>

        {/* Action Items */}
        <View style={styles.actionsSection}>
          <ActionButton
            icon="document-text-outline"
            label="Transcript Request"
            iconColor="#3B82F6"
            onPress={() => console.log("Transcript Request")}
          />
          <ActionButton
            icon="cash-outline"
            label="Financial Aid"
            iconColor={colors.state.success}
            onPress={() => console.log("Financial Aid")}
          />
          <ActionButton
            icon="log-out-outline"
            label="Log Out"
            iconColor={colors.state.error}
            onPress={() => router.replace("/(auth)/login")}
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
    fontSize: 24,
  },
  settingsButton: {
    padding: 4,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  profileSection: {
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 24,
    backgroundColor: colors.background.white,
    marginBottom: 20,
    position: "relative",
  },
  avatarContainer: {
    position: "relative",
    marginBottom: 16,
  },
  avatarWrapper: {
    position: "relative",
    zIndex: 2,
  },
  cameraButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    zIndex: 3,
  },
  cameraIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.teal.primary,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: colors.background.white,
  },
  gradientBackground: {
    position: "absolute",
    top: -40,
    left: "50%",
    transform: [{ translateX: -100 }],
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#E0F2F1",
    opacity: 0.5,
    zIndex: 1,
  },
  name: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.text.primary,
    marginBottom: 8,
  },
  academicId: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.teal.primary,
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: colors.background.grey,
    borderWidth: 0,
    paddingHorizontal: 32,
    paddingVertical: 10,
  },
  editButtonText: {
    color: colors.text.primary,
    fontWeight: "600",
  },
  statsContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginBottom: 24,
    gap: 8,
  },
  section: {
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  viewAllText: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.teal.primary,
  },
  detailsCard: {
    backgroundColor: colors.background.white,
    borderRadius: 12,
    padding: 20,
  },
  coursesContainer: {
    paddingRight: 20,
  },
  actionsSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});
