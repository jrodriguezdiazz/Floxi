import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProfilePicture } from "../commons/ProfilePicture";
import { ButtonEditProfileInfo } from "../profile-info/ButtonEditProfileInfo";
import { NameAndBio } from "../profile-info/NameAndBio";
import { Statistics } from "../profile-info/Statistics";

export const ProfileInfo = ({ navigation, user }) => {
  const isOwnProfile = true;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ProfilePicture
          size={100}
          uri={user.profilePicture}
        />
        <NameAndBio user={user} />
        <Statistics user={user} />
        {isOwnProfile && <ButtonEditProfileInfo navigation={navigation} />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "stretch",
    marginTop: 50,
  },
});
