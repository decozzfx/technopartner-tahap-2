import React from "react";
import { PreviewModalProp } from "src/navigation/types";

import BaseModal from "src/modals/BaseModal";
import { Image } from "react-native";

function ModalPreview(props: PreviewModalProp) {
  const {
    navigation,
    route: {
      params: { url },
    },
  } = props;

  return (
    <BaseModal navigation={navigation}>
      <Image
        style={{
          width: 300,
          height: 300,
          resizeMode: "contain",
        }}
        source={{ uri: url }}
      />
    </BaseModal>
  );
}

export default ModalPreview;
