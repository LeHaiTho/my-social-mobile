import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { Avatar } from "@/components/ui";
import {
  MessageBubble,
  MessageInput,
  DateSeparator,
  PinnedAnnouncement,
} from "@/features/chat";
import colors from "@/constants/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ChatDetailScreen() {
  const { chatId } = useLocalSearchParams();
  const [message, setMessage] = useState("");
  const insets = useSafeAreaInsets();
  // Mock data - in real app, fetch based on chatId
  const isGroupChat = chatId === "1" || chatId === "3" || chatId === "4";
  const chatInfo = isGroupChat
    ? {
        name: "BIO 202: Microbiology",
        subtitle: "32 Members",
        avatar: null,
        icon: "school-outline" as keyof typeof Ionicons.glyphMap,
        iconBackgroundColor: "#3B82F6",
        iconColor: colors.text.white,
      }
    : {
        name: "Dr. Sarah Jenkins",
        subtitle: "Lecturer • Biology",
        avatar: { uri: "https://i.pravatar.cc/150?img=47" },
        online: true,
      };

  const messages = isGroupChat
    ? [
        {
          id: "1",
          message:
            "Did anyone catch what the professor said about the lab report? I missed the last part.",
          isOwn: false,
          timestamp: "10:30 AM",
          senderName: "Sarah",
          senderAvatar: { uri: "https://i.pravatar.cc/150?img=47" },
        },
        {
          id: "2",
          message:
            "Yeah, it's due next Tuesday, not Monday. He said we have an extra day for the data analysis.",
          isOwn: false,
          timestamp: "10:32 AM",
          senderName: "Mike",
          senderAvatar: { uri: "https://i.pravatar.cc/150?img=33" },
        },
        {
          id: "3",
          message: "Thanks! That's a relief 😉",
          isOwn: true,
          timestamp: "10:35 AM",
          isRead: true,
        },
        {
          id: "4",
          message: "Here is the slide deck referencing the changes.",
          isOwn: true,
          timestamp: "10:45 AM",
          isRead: true,
          fileAttachment: {
            name: "Microbiology_Lab_3.pdf",
            size: "2.4 MB",
            type: "PDF",
          },
        },
      ]
    : [
        {
          id: "1",
          message: "Hi Alex, did you have a question about the assignment?",
          isOwn: false,
          timestamp: "10:23 AM",
          senderName: "Dr. Sarah Jenkins",
          senderAvatar: { uri: "https://i.pravatar.cc/150?img=47" },
        },
        {
          id: "2",
          message: "Yes, I was wondering about the citation format.",
          isOwn: true,
          timestamp: "10:25 AM",
          isRead: true,
        },
        {
          id: "3",
          message: "",
          isOwn: true,
          timestamp: "10:26 AM",
          isRead: true,
        },
        {
          id: "4",
          message:
            "Ah, I see. Use APA 7th edition for this one. Make sure to double check the references page.",
          isOwn: false,
          timestamp: "10:30 AM",
          senderName: "Dr. Sarah Jenkins",
          senderAvatar: { uri: "https://i.pravatar.cc/150?img=47" },
        },
      ];

  const handleSend = () => {
    if (message.trim()) {
      console.log("Send message:", message);
      setMessage("");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <SafeAreaView
        style={[styles.container, { paddingBottom: insets.bottom }]}
        edges={["top"]}
      >
        <Stack.Screen options={{ headerShown: false }} />
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
            activeOpacity={0.7}
          >
            <Ionicons name="arrow-back" size={24} color={colors.icon.primary} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headerInfo}
            activeOpacity={0.7}
            onPress={() => {}}
          >
            {chatInfo.avatar ? (
              <View style={styles.headerAvatarContainer}>
                <Avatar
                  source={chatInfo.avatar}
                  name={chatInfo.name}
                  size={40}
                />
                {chatInfo.online && (
                  <View style={styles.headerOnlineIndicator} />
                )}
              </View>
            ) : (
              <View
                style={[
                  styles.headerIconContainer,
                  { backgroundColor: chatInfo.iconBackgroundColor },
                ]}
              >
                <Ionicons
                  name={chatInfo.icon}
                  size={20}
                  color={chatInfo.iconColor}
                />
              </View>
            )}
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerName}>{chatInfo.name}</Text>
              {chatInfo.subtitle && (
                <View style={styles.subtitleContainer}>
                  <Text style={styles.headerSubtitle}>{chatInfo.subtitle}</Text>
                  {!isGroupChat && (
                    <Ionicons
                      name="school-outline"
                      size={12}
                      color={colors.text.muted}
                      style={styles.subtitleIcon}
                    />
                  )}
                </View>
              )}
            </View>
          </TouchableOpacity>
          {!isGroupChat && (
            <View style={styles.headerActions}>
              <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
                <Ionicons
                  name="videocam-outline"
                  size={24}
                  color={colors.teal.primary}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
                <Ionicons
                  name="call-outline"
                  size={24}
                  color={colors.teal.primary}
                />
              </TouchableOpacity>
            </View>
          )}
          {isGroupChat && (
            <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
              <Ionicons
                name="information-circle-outline"
                size={24}
                color={colors.icon.primary}
              />
            </TouchableOpacity>
          )}
        </View>

        {/* Messages List */}
        <ScrollView
          style={styles.messagesList}
          contentContainerStyle={styles.messagesContent}
          showsVerticalScrollIndicator={false}
        >
          {isGroupChat && (
            <>
              <PinnedAnnouncement
                title="Midterm on Friday"
                author="Prof. Smith posted an announcement"
                onView={() => console.log("View announcement")}
              />
              <View style={styles.pinnedMessageIndicator}>
                <Text style={styles.pinnedMessageText}>
                  Prof. Smith pinned a message
                </Text>
              </View>
            </>
          )}

          <DateSeparator label="Today" />

          {messages.map((msg) => (
            <MessageBubble
              key={msg.id}
              message={msg.message}
              isOwn={msg.isOwn}
              timestamp={msg.timestamp}
              isRead={msg.isRead}
              senderName={msg.senderName}
              senderAvatar={msg.senderAvatar}
              fileAttachment={msg.fileAttachment}
            />
          ))}
        </ScrollView>

        {/* Message Input */}
        <MessageInput
          placeholder={isGroupChat ? "Message BIO 202..." : "Type a message..."}
          value={message}
          onChangeText={setMessage}
          onSend={handleSend}
          onAttach={() => console.log("Attach")}
          onCamera={() => console.log("Camera")}
          onEmoji={() => console.log("Emoji")}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: colors.background.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.light,
  },
  backButton: {
    padding: 4,
    marginRight: 12,
  },
  headerInfo: {
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
  headerIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  headerTextContainer: {
    flex: 1,
  },
  headerName: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.text.primary,
    marginBottom: 2,
  },
  subtitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerSubtitle: {
    fontSize: 13,
    color: colors.text.muted,
  },
  subtitleIcon: {
    marginLeft: 4,
  },
  headerActions: {
    flexDirection: "row",
    gap: 12,
  },
  actionButton: {
    padding: 4,
  },
  messagesList: {
    flex: 1,
  },
  messagesContent: {
    paddingVertical: 16,
  },
  pinnedMessageIndicator: {
    alignItems: "center",
    marginBottom: 8,
  },
  pinnedMessageText: {
    fontSize: 12,
    color: colors.text.muted,
  },
});
