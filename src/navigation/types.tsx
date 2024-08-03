import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  onboarding: undefined;
  auth: undefined;
  bottom_bar: NavigatorScreenParams<BottomBarParamList>;
  modal_preview: undefined;
};

export type BottomBarParamList = {
  bottom_bar_home: undefined;
  bottom_bar_search: undefined;
  bottom_bar_bookmark: undefined;
  bottom_bar_menu: undefined;
  bottom_bar_profile: undefined;
};

export type OnboardingScreenProp = NativeStackScreenProps<
  RootStackParamList,
  "onboarding"
>;

export type AuthScreenProp = NativeStackScreenProps<RootStackParamList, "auth">;

export type BottomBarProp = NativeStackScreenProps<
  RootStackParamList,
  "bottom_bar"
>;

export type HomeScreenProp = CompositeScreenProps<
  BottomTabScreenProps<BottomBarParamList, "bottom_bar_home">,
  NativeStackScreenProps<RootStackParamList>
>;

export type HistoryScreenProp = CompositeScreenProps<
  BottomTabScreenProps<BottomBarParamList, "bottom_bar_menu">,
  NativeStackScreenProps<RootStackParamList>
>;

export type PreviewModalProp = NativeStackScreenProps<
  RootStackParamList,
  "modal_preview"
>;

export type RootChildScreenProp = PreviewModalProp["navigation"];
