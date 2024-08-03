import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { RootState } from "src/redux/AppStore";
import { Dimensions, FlatList, Image, Text, View } from "react-native";
import TabHeader from "src/components/TabHeader";
import { useQuery } from "@tanstack/react-query";
import { HttpClient } from "src/api";
import { ICategory, IMenuResponse } from "src/shared/types";
const { width } = Dimensions.get("window");

function Menu() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const dataUser = useSelector((state: RootState) => state.dataUser);

  const { data } = useQuery(["menu"], async () => {
    const response = await HttpClient.post<IMenuResponse>(
      "/api/menu",
      { show_all: 1 },
      {
        headers: {
          Authorization: `Bearer ${dataUser.access_token}`,
        },
      }
    );

    return response.data;
  });

  const dataList = useMemo(() => {
    return Object.values(data?.result ?? {});
  }, [data]);

  const tabBarHeight = useBottomTabBarHeight();

  const lisTabHeader = [
    {
      id: "1",
      label: "Seasonal Product",
      value: "Seasonal Product",
    },
    {
      id: "2",
      label: "Best Seller",
      value: "Best Seller",
    },
    {
      id: "3",
      label: "Coffee",
      value: "Coffee",
    },
    {
      id: "4",
      label: "Cold Brew",
      value: "Cold Brew",
    },
    {
      id: "5",
      label: "Chocolate",
      value: "Chocolate",
    },
  ];

  return (
    <Container color={"white"} tabBarHeight={tabBarHeight}>
      <Text
        style={[
          {
            marginBottom: 14,
            textAlign: "center",
            fontSize: 24,
            color: "black",
            fontWeight: "600",
          },
        ]}
      >
        MENU
      </Text>
      <TabHeader
        option={lisTabHeader}
        onSelectedIndex={(index) => setActiveTabIndex(index)}
      />
      <FlatList
        data={dataList?.[0] ?? []}
        style={{ backgroundColor: "#f1f1f1" }}
        renderItem={({ item }: { item: ICategory }) => (
          <View key={item.category_name}>
            <Text style={{ fontSize: 16, padding: 8, fontWeight: 600 }}>
              {item.category_name}
            </Text>
            <FlatList
              data={item.menu}
              renderItem={({ item }) => (
                <View
                  style={{ flexDirection: "row", backgroundColor: "white" }}
                >
                  <View>
                    <Image
                      source={{ uri: item.photo }}
                      style={{ width: 100, height: 100 }}
                    />
                  </View>
                  <View style={{ width: width - width * 0.4, paddingTop: 10 }}>
                    <Text style={{ fontWeight: 600 }}>{item.name}</Text>
                    <Text style={{ fontSize: 12 }}>{item.description}</Text>
                  </View>
                  <View style={{ padding: 10 }}>
                    <Text style={{ fontWeight: "bold" }}>{item.price}</Text>
                  </View>
                </View>
              )}
            />
          </View>
        )}
      />
    </Container>
  );
}

interface ContainerProps {
  tabBarHeight: number;
  color: string;
}

const Container = styled.View<ContainerProps>`
  flex: 1;
  background-color: ${({ color }) => color};
  padding: 16px 0px ${({ tabBarHeight }) => tabBarHeight + 16}px 0px;
`;

const ScrollContainer = styled.ScrollView`
  flex: 1;
`;

export default Menu;
