import React from "react";
import styled from "styled-components/native";
import { HomeScreenProp } from "src/navigation/types";
import { ColorProps } from "src/shared/types";
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  Image,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/AppStore";
import logo from "src/assets/logo.png";
import motif from "src/assets/motif.png";
import { Text } from "react-native";
import { ImageSlider } from "react-native-image-slider-banner";
const { width } = Dimensions.get("window");

function Home(props: HomeScreenProp) {
  const dataUser = useSelector(
    (state: RootState) => state.dataUser.access_token
  );

  useFocusEffect(() => {
    if (!dataUser) return props.navigation.navigate("auth" as never);
  });

  return (
    <HomeContainer color={"white"}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <View style={{ marginVertical: -35, paddingHorizontal: 16 }}>
          <Image
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
            }}
            source={logo}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <ImageBackground
            style={{ height: 200, justifyContent: "center", padding: 24 }}
            resizeMode="repeat"
            source={motif}
          >
            <View
              style={{
                backgroundColor: "#fff",
                padding: 16,
                elevation: 2,
                borderRadius: 10,
              }}
            >
              <View style={{ marginBottom: 10 }}>
                <Text>Good afternoon</Text>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Guntur Saputro
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate("modal_preview" as never)
                  }
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    backgroundColor: "#fff",
                    elevation: 4,
                  }}
                >
                  <Image
                    source={logo}
                    resizeMode="contain"
                    style={{ width: 50, height: 50, borderRadius: 50 }}
                  />
                </TouchableOpacity>

                <View
                  style={{
                    borderColor: "#f1f1f1",
                    borderWidth: 1,
                    borderStyle: "dashed",
                  }}
                />

                <View
                  style={{
                    width: width - width * 0.4,
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text>Saldo</Text>
                    <Text style={{ fontWeight: "bold" }}>Rp 279.000</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text>Point</Text>
                    <Text style={{ fontWeight: "bold", color: "green" }}>
                      2500
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
        <ImageSlider
          data={[{ img: logo }, { img: logo }, { img: logo }]}
          localImg
          caroselImageStyle={{
            resizeMode: "contain",
            height: 200,
            width: width - width * 0.075,
          }}
          activeIndicatorStyle={{
            backgroundColor: "black",
            width: 10,
            height: 10,
          }}
          indicatorContainerStyle={{
            height: 0,
          }}
          caroselImageContainerStyle={{ paddingHorizontal: 10 }}
          autoPlay={true}
          timer={2000}
        />
      </ScrollView>
    </HomeContainer>
  );
}

const HomeContainer = styled.ScrollView<ColorProps>`
  background-color: ${({ color }) => color};
  flex: 1;
`;

export default Home;
