import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Avatar from "./Avatar";
import colors from "@/constants/colors";

interface CommentItemProps {
  author: {
    name: string;
    avatar?: { uri: string } | number;
    isAuthor?: boolean;
    icon?: keyof typeof import("@expo/vector-icons").Ionicons.glyphMap;
    backgroundColor?: string;
    iconColor?: string;
  };
  timestamp: string;
  content: string;
  likes?: number;
  isLiked?: boolean;
  isReply?: boolean;
  onLike?: () => void;
  onReply?: () => void;
}

const CommentItem: React.FC<CommentItemProps> = ({
  author,
  timestamp,
  content,
  likes = 0,
  isLiked = false,
  isReply = false,
  onLike,
  onReply,
}) => {
  return (
    <View style={[styles.container, isReply && styles.replyContainer]}>
      <Avatar
        source={author.avatar}
        name={author.name}
        size={isReply ? 32 : 40}
        icon={author.icon}
        backgroundColor={author.backgroundColor}
        iconColor={author.iconColor}
      />
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.authorInfo}>
            <Text style={styles.authorName}>{author.name}</Text>
            {author.isAuthor && (
              <View style={styles.authorTag}>
                <Text style={styles.authorTagText}>Author</Text>
              </View>
            )}
            <Text style={styles.timestamp}>{timestamp}</Text>
          </View>
        </View>
        <Text style={styles.commentText}>{content}</Text>
        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={onLike}
            activeOpacity={0.7}
          >
            <Ionicons
              name={isLiked ? "heart" : "heart-outline"}
              size={16}
              color={isLiked ? "#EF4444" : colors.text.secondary}
            />
            <Text
              style={[
                styles.actionText,
                isLiked && styles.actionTextLiked,
              ]}
            >
              Like
            </Text>
            {likes > 0 && (
              <Text
                style={[
                  styles.likeCount,
                  isLiked && styles.likeCountLiked,
                ]}
              >
                {likes}
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={onReply}
            activeOpacity={0.7}
          >
            <Text style={styles.actionText}>Reply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  replyContainer: {
    marginLeft: 48,
    marginBottom: 12,
  },
  content: {
    flex: 1,
    marginLeft: 12,
  },
  header: {
    marginBottom: 4,
  },
  authorInfo: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  authorName: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text.primary,
    marginRight: 6,
  },
  authorTag: {
    backgroundColor: colors.teal.light,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 6,
  },
  authorTagText: {
    fontSize: 10,
    fontWeight: "600",
    color: colors.teal.primary,
  },
  timestamp: {
    fontSize: 12,
    color: colors.text.muted,
  },
  commentText: {
    fontSize: 14,
    color: colors.text.primary,
    lineHeight: 20,
    marginBottom: 8,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  actionText: {
    fontSize: 13,
    color: colors.text.secondary,
  },
  actionTextLiked: {
    color: "#EF4444",
  },
  likeCount: {
    fontSize: 13,
    color: colors.text.secondary,
    marginLeft: 2,
  },
  likeCountLiked: {
    color: "#EF4444",
  },
});

export default CommentItem;

