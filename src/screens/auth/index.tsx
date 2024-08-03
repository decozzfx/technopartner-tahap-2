import React, { useMemo } from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import logo from "src/assets/logo.png";
import InputText from "src/components/InputText";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { HttpClient } from "src/api";
import { showMessage } from "react-native-flash-message";
import { actions as actionDataUser } from "src/redux/reducers/DataUserReducer";

interface IFormValue {
  email: string;
  password: string;
}

export default function () {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();

  const { mutate } = useMutation(["login"], async (formValue: IFormValue) => {
    let formData = new FormData();
    formData.append("grant_type", "password");
    formData.append("client_id", "e78869f77986684a");
    formData.append("client_secret", "0a40f69db4e5fd2f4ac65a090f31b823");
    formData.append("username", formValue.email);
    formData.append("password", formValue.password);
    const response = await HttpClient.post("/oauth/token", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormValue>({
    defaultValues: {
      email: "support@technopartner.id",
      password: "1234567",
    },
  });

  const onPressLogin = async (formValue: IFormValue) => {
    mutate(formValue, {
      onSuccess(data) {
        showMessage({
          message: "Success",
          description: "Login Success",
          type: "success",
        });
        dispatch(actionDataUser.setUserData(data));
        navigation.navigate("bottom_bar" as never);
      },
      onError(error: any) {
        console.log(error);
        showMessage({
          message: "Failed to login",
          description: "Email or password is wrong",
          type: "danger",
        });
      },
    });
  };

  const renderMain = useMemo(() => {
    return (
      <>
        <StatusBar barStyle={"dark-content"} backgroundColor="#f5f5f5" />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            backgroundColor: "#f5f5f5",
          }}
        >
          <Image
            style={{
              width: 220,
              height: 200,
              resizeMode: "contain",
            }}
            source={logo}
          />
          <View style={{ flexDirection: "column" }}>
            <Controller
              name="email"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field: { onChange } }) => (
                <InputText
                  title="Email"
                  placeholder="Email"
                  onChangeText={onChange}
                  errorMessages={errors.email?.message}
                />
              )}
            />
            <Controller
              name="password"
              rules={{ required: "This field is required" }}
              control={control}
              render={({ field: { onChange } }) => (
                <InputText
                  onChangeText={onChange}
                  title="Password"
                  secureTextEntry
                  placeholder="Password"
                  errorMessages={errors.password?.message}
                />
              )}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit(onPressLogin)}
            >
              <Text style={{ color: "black", fontWeight: "bold" }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }, [width, dispatch, navigation, errors, watch]);

  return renderMain;
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    alignItems: "center",
    backgroundColor: "white",
    elevation: 1,
    borderWidth: 1,
    borderColor: "slategray",
    borderRadius: 10,
    width: 100,
    alignSelf: "center",
  },
});
