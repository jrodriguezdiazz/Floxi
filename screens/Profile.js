import { View } from "react-native";
import { Feed } from "../components/commons/Feed";
import { POSTS } from "../data/post";

export const Profile = () => {
  return (
    <View>
      <Feed post={POSTS} />
    </View>
  );
};
