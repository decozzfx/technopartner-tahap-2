import React from "react";
import { PreviewModalProp } from "src/navigation/types";

import BaseModal from "src/modals/BaseModal";
import logo from "src/assets/logo.png";
import { Image } from "react-native";

function ModalPreview(props: PreviewModalProp) {
  const { navigation } = props;

  return (
    <BaseModal navigation={navigation}>
      <Image
        style={{
          width: 300,
          height: 300,
          resizeMode: "contain",
        }}
        source={logo}
      />
    </BaseModal>
  );
}

export default ModalPreview;
