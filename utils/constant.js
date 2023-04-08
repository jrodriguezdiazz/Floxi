import { EditProfile } from "../screens/EditProfile";
import { ForgotPassword } from "../screens/ForgotPassword";
import { Login } from "../screens/Login";
import { Main } from "../screens/Main";
import { NewPassword } from "../screens/NewPassword";
import { Profile } from "../screens/Profile";
import { SignUp } from "../screens/SignUp";
import { Verification } from "../screens/Verification";

export const DEFAULT_IMAGE = "https://placehold.co/600x600/png";
export const SCREEN_MAP = {
  defaultScreen: "LoginScreen",
  screens: [
    {
      name: "HomeScreen",
      component: Main,
    },
    {
      name: "LoginScreen",
      component: Login,
    },
    {
      name: "SignUpScreen",
      component: SignUp,
    },
    {
      name: "ForgotPasswordScreen",
      component: ForgotPassword,
    },
    {
      name: "VerificationScreen",
      component: Verification,
    },
    {
      name: "NewPasswordScreen",
      component: NewPassword,
    },
    {
      name: "ProfileScreen",
      component: Profile,
    },
    {
      name: "EditProfileScreen",
      component: EditProfile,
    },
  ],
};
export const MINIMUM_REGISTRATION_AGE = 13;
export const VERIFICATION_CELL_COUNT = 6;
export const MAXIMUM_NUMBER_OF_CHARACTERS_FOR_MESSAGE = 40;

export const POST_ACTIONS = [
  {
    iconName: "comment-multiple-outline",
    name: "Comment",
  },
  {
    iconName: "fire",
    name: "Fire",
  },
  {
    iconName: "share",
    name: "Share",
  },
];

export const theme = {
  colors: {
    sunflower: "#e4c220",
    safetyYellow: "#f5d40f",
    flax: "#f3e397",
    white: "#fbfbfb",
    bone: "#eadfce",
    alabaster: "#eee6da",
    error: "#ff2929ff",
    back: "#000000",
    payneGrey: "#3C3C43",
  },
};
