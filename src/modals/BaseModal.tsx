import React from "react";
import styled from "styled-components/native";
import { ColorProps } from "src/shared/types";
import { RootChildScreenProp } from "src/navigation/types";
import { TouchableOpacity, View } from "react-native";
import MCIIcon from "react-native-vector-icons/MaterialCommunityIcons";

interface Props {
  children?: JSX.Element;
  navigation: RootChildScreenProp;
}

function BaseModal(props: Props) {
  const { children, navigation } = props;

  return (
    <Container color="white">
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <MCIIcon name="close" size={40} />
        </TouchableOpacity>
      </View>
      <View>{children}</View>
    </Container>
  );
}

const Container = styled.View<ColorProps>`
  flex: 1;
  background-color: ${({ color }) => color};
  padding: 36px;
`;

export default React.memo(BaseModal);
