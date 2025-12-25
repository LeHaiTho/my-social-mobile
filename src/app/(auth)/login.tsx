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
  Button,
  Title,
  TextInput,
  Checkbox,
  SocialButton,
} from "@/components/ui";
import colors from "@/constants/colors";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Handle login logic here
    router.replace("/(tabs)");
    console.log("Login:", { email, password, rememberMe });
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    console.log("Forgot password");
  };

  const handleSignUp = () => {
    router.push("/(auth)/register");
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Main Content */}
        <View style={styles.content}>
          {/* Title and Subtitle */}
          <Title variant="h1" weight="bold">
            Let's get social.
          </Title>
          <Title
            variant="subtitle"
            color={colors.text.secondary}
            style={styles.subtitle}
          >
            Log in to connect with your campus.
          </Title>

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Student Email or Username"
              value={email}
              onChangeText={setEmail}
              type="email"
              containerStyle={styles.input}
            />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              type="password"
              containerStyle={styles.input}
            />
          </View>

          {/* Remember Me and Forgot Password */}
          <View style={styles.optionsRow}>
            <View style={styles.rememberMeContainer}>
              <Checkbox
                checked={rememberMe}
                onPress={() => setRememberMe(!rememberMe)}
              />
              <Text style={styles.rememberMeText}>Remember Me</Text>
            </View>
            <TouchableOpacity
              onPress={handleForgotPassword}
              activeOpacity={0.7}
            >
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          {/* Login Button */}
          <Button
            label="Log In"
            onPress={handleLogin}
            variant="primary"
            size="large"
            fullWidth
            style={styles.loginButton}
            textStyle={styles.loginButtonText}
          />

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Or continue with</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Social Login Buttons */}
          <View style={styles.socialButtonsContainer}>
            <SocialButton
              provider="google"
              onPress={() => console.log("Google login")}
            />
            <SocialButton
              provider="ios"
              onPress={() => console.log("iOS login")}
            />
            <SocialButton
              provider="university"
              onPress={() => console.log("University login")}
            />
          </View>

          {/* Sign Up Link */}
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Don't have an account? </Text>
            <TouchableOpacity onPress={handleSignUp} activeOpacity={0.7}>
              <Text style={styles.signUpLink}>Sign up</Text>
            </TouchableOpacity>
          </View>
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
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    gap: 24,
  },

  backButton: {
    padding: 4,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
  },

  content: {
    paddingTop: 24,
    paddingBottom: 32,
  },
  mainTitle: {
    marginBottom: 8,
  },
  subtitle: {
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: 20,
    gap: 16,
  },
  input: {
    marginBottom: 0,
  },
  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  rememberMeText: {
    fontSize: 14,
    color: colors.text.primary,
    fontWeight: "400",
  },
  forgotPasswordText: {
    fontSize: 14,
    color: colors.link.primary,
    fontWeight: "500",
  },
  loginButton: {
    marginBottom: 32,
  },
  loginButtonText: {
    color: colors.text.primary,
    fontWeight: "600",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border.light,
  },
  dividerText: {
    fontSize: 14,
    color: colors.text.secondary,
    paddingHorizontal: 16,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginBottom: 32,
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signUpText: {
    fontSize: 14,
    color: colors.text.primary,
  },
  signUpLink: {
    fontSize: 14,
    color: colors.link.primary,
    fontWeight: "600",
  },
});
