import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export interface IFilterOptions {
  id: string;
  label: string;
  value: string;
}

interface IPropsTabHeader {
  option: IFilterOptions[];
  activeIndex?: number;
  onSelectedIndex: (index: number) => void;
}

function TabHeader(props: IPropsTabHeader) {
  const { option, activeIndex, onSelectedIndex } = props;
  const [selectedFilterId, setSelectedFilterId] = useState<number>(0);

  /* Effects */
  useEffect(() => {
    if (activeIndex == null) return;
    setSelectedFilterId(activeIndex);
    onSelectedIndex(activeIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <View>
      <ScrollView
        horizontal
        style={styles.scrollContainer}
        showsHorizontalScrollIndicator={false}
      >
        {option.map((item: IFilterOptions, index: number) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setSelectedFilterId(index);
              onSelectedIndex(index);
            }}
            style={[
              styles.filterItem,
              [
                index === selectedFilterId
                  ? {
                      borderColor: "black",
                      borderBottomWidth: 3,
                    }
                  : {},
              ],
            ]}
          >
            <Text
              style={
                index === selectedFilterId ? { color: "black" } : undefined
              }
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

export default React.memo(TabHeader);
