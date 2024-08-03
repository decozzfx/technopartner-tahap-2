import React, { useMemo } from "react";

import { useSelector } from "react-redux";
import { RootState } from "src/redux/AppStore";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface IBootstrapProps {
  children: React.ReactNode;
}

const Bootstrap = (props: IBootstrapProps) => {
  const { children } = props;
  const navigation = useNavigation();

  // Redux
  const dataUser = useSelector(
    (state: RootState) => state.dataUser.access_token
  );

  // Queries

  useFocusEffect(() => {
    if (!dataUser) return navigation.navigate("auth" as never);
  });

  const RenderMain = useMemo(() => {
    return <GestureHandlerRootView>{children}</GestureHandlerRootView>;
  }, [children]);

  return RenderMain;
};

export default Bootstrap;
