import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Avatar from "./Avatar";
import colors from "@/constants/colors";

interface PostCardProps {
  author: {
    name: string;
    avatar?: { uri: string } | number;
    role?: string;
    online?: boolean;
    icon?: keyof typeof Ionicons.glyphMap;
    backgroundColor?: string;
    iconColor?: string;
  };
  timestamp: string;
  content: string;
  image?: { uri: string } | number;
  likes?: number;
  comments?: number;
  pinned?: boolean;
  pinnedLabel?: string;
  onPress?: () => void;
  onMenuPress?: () => void;
  onLikePress?: () => void;
  onCommentPress?: () => void;
  onSharePress?: () => void;
}

const PostCard: React.FC<PostCardProps> = ({
  author,
  timestamp,
  content,
  image,
  likes = 0,
  comments = 0,
  pinned = false,
  pinnedLabel,
  onPress,
  onMenuPress,
  onLikePress,
  onCommentPress,
  onSharePress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.card, pinned && styles.cardPinned]}
      onPress={onPress}
      activeOpacity={0.95}
    >
      {pinned && (
        <View style={styles.pinnedBar}>
          <View style={styles.pinnedHeader}>
            <View style={styles.pinnedLabelContainer}>
              <Ionicons
                name="pin"
                size={12}
                color={colors.teal.primary}
                style={styles.pinIcon}
              />
              <Text style={styles.pinnedLabel}>
                {pinnedLabel || "PINNED ANNOUNCEMENT"}
              </Text>
            </View>
            <Text style={styles.pinnedTime}>{timestamp}</Text>
          </View>
        </View>
      )}

      <View style={styles.content}>
        {!pinned && (
          <View style={styles.header}>
            <View style={styles.authorInfo}>
              <View style={styles.avatarContainer}>
                <Avatar
                  source={author.avatar}
                  name={author.name}
                  size={40}
                  icon={author.icon}
                  backgroundColor={author.backgroundColor}
                  iconColor={author.iconColor}
                />
                {author.online && (
                  <View style={styles.onlineIndicator} />
                )}
              </View>
              <View style={styles.authorDetails}>
                <Text style={styles.authorName}>{author.name}</Text>
                {author.role && (
                  <Text style={styles.authorRole}>
                    {author.role} • {timestamp}
                  </Text>
                )}
                {!author.role && (
                  <Text style={styles.authorRole}>{timestamp}</Text>
                )}
              </View>
            </View>
            <TouchableOpacity
              onPress={onMenuPress}
              style={styles.menuButton}
              activeOpacity={0.7}
            >
              <Ionicons
                name="ellipsis-horizontal"
                size={20}
                color={colors.text.secondary}
              />
            </TouchableOpacity>
          </View>
        )}

        {pinned && (
          <View style={styles.pinnedAuthor}>
            <View style={styles.pinnedAuthorIcon}>
              <Text style={styles.pinnedAuthorText}>M</Text>
            </View>
            <Text style={styles.pinnedAuthorName}>
              {pinnedLabel || "Registrar's Office"}
            </Text>
          </View>
        )}

        <Text style={styles.postContent}>{content}</Text>

        {image && (
          <Image
            source={image}
            style={styles.postImage}
            resizeMode="cover"
          />
        )}

        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={onLikePress}
            activeOpacity={0.7}
          >
            <Ionicons
              name="heart"
              size={20}
              color={colors.teal.primary}
            />
            <Text style={styles.actionCount}>{likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={onCommentPress}
            activeOpacity={0.7}
          >
            <Ionicons
              name="chatbubble-outline"
              size={20}
              color={colors.teal.primary}
            />
            <Text style={styles.actionCount}>{comments}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, styles.shareButton]}
            onPress={onSharePress}
            activeOpacity={0.7}
          >
            <Ionicons
              name="share-social-outline"
              size={20}
              color={colors.text.secondary}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background.white,
    marginBottom: 12,
    borderRadius: 12,
    overflow: "hidden",
  },
  cardPinned: {
    borderLeftWidth: 4,
    borderLeftColor: colors.teal.light,
  },
  pinnedBar: {
    backgroundColor: colors.background.light,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  pinnedHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pinnedLabelContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  pinIcon: {
    marginRight: 4,
  },
  pinnedLabel: {
    fontSize: 11,
    fontWeight: "600",
    color: colors.teal.primary,
    textTransform: "uppercase",
  },
  pinnedTime: {
    fontSize: 11,
    color: colors.text.muted,
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  authorInfo: {
    flexDirection: "row",
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
  authorDetails: {
    flex: 1,
  },
  authorName: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.text.primary,
    marginBottom: 2,
  },
  authorRole: {
    fontSize: 12,
    color: colors.text.muted,
  },
  menuButton: {
    padding: 4,
  },
  pinnedAuthor: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  pinnedAuthorIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.text.primary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  pinnedAuthorText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.text.white,
  },
  pinnedAuthorName: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.text.primary,
  },
  postContent: {
    fontSize: 15,
    color: colors.text.primary,
    lineHeight: 22,
    marginBottom: 12,
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: colors.border.light,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  shareButton: {
    marginLeft: "auto",
    marginRight: 0,
  },
  actionCount: {
    fontSize: 14,
    color: colors.teal.primary,
    marginLeft: 6,
    fontWeight: "500",
  },
});

export default PostCard;

