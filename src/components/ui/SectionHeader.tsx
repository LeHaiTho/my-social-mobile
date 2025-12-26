import React from "react";
import { StyleSheet, Text, ViewStyle } from "react-native";
import colors from "@/constants/colors";

interface SectionHeaderProps {
  title: string;
  style?: ViewStyle;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, style }) => {
  return (
    <Text style={[styles.header, style]}>{title}</Text>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.text.primary,
    marginBottom: 12,
    marginTop: 8,
  },
});

export default SectionHeader;


