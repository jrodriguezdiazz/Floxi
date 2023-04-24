import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "../components/commons/Button";
import { LayoutForm } from "../components/commons/LayoutForm";
import { TextInput } from "../components/commons/TextInput";
import { auth } from "../database/firebase";
import { theme } from "../utils/constant";

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log("Login success"))
        .catch((err) => Alert.alert("Login error", err.message));
    }
  };

  return (
    <LayoutForm>
      <SafeAreaView>
        <TextInput
          placeholder="Enter email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Enter password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          label={"Log In"}
          icon={"login"}
          action={onHandleLogin}
        />

        <View style={styles.container}>
          <View>
            <Text style={{ color: "gray", fontWeight: "600", fontSize: 14 }}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Don't have an account?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUpScreen")}
            >
              <Text
                style={{
                  color: theme.colors.sunflower,
                  fontWeight: "600",
                  fontSize: 14,
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ color: "gray", fontWeight: "600", fontSize: 14 }}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Did you forget your password?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("ForgotPasswordScreen")}
            >
              <Text
                style={{
                  color: theme.colors.sunflower,
                  fontWeight: "600",
                  fontSize: 14,
                }}
              >
                Reset
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LayoutForm>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    marginTop: 20,
  },
});
