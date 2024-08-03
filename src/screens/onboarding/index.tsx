import React from "react";
import styled from "styled-components/native";
import logo from "src/assets/logo.png";

import { ActivityIndicator, Image, Text, View } from "react-native";

function Onboarding() {
  return (
    <Container>
      <View style={{ alignItems: "center", marginTop: "70%" }}>
        <Image
          style={{
            width: 220,
            height: 200,
            resizeMode: "contain",
          }}
          source={logo}
        />
        <View style={{ marginTop: "20%" }}>
          <ActivityIndicator size="large" color="grey" />
          <Text style={{ color: "grey", marginTop: 10 }}>Harap Tunggu...</Text>
        </View>
      </View>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export default Onboarding;
