import { StyleSheet } from "react-native";

export default StyleSheet.create({
  scrollContainer: {
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
  },
  operatorContainer: {
    marginTop: 8,
  },
  operator: {
    padding: 16,
    backgroundColor: "lightgrey",
    borderRadius: 10,
    marginRight: 10,
  },
  rate: {
    minWidth: 80,
    paddingBottom: 1,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
  },
  informasiTambahan: {
    padding: 30,
    backgroundColor: "lightgrey",
    borderRadius: 10,
    marginRight: 10,
  },
  textBlack: { color: "black", fontWeight: "bold" },
  textPinkBold: { color: "rgba(252, 60, 68, 1)", fontWeight: "bold" },
  textPink: { color: "rgba(252, 60, 68, 1)" },
  textWhite: { color: "white", fontWeight: "bold" },
  greeting: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "rgba(249, 76, 87, 0.1)",
    paddingVertical: 10,
    borderRadius: 10,
  },
  homeProfileContainer: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  banner: {
    backgroundColor: "white",
    borderRadius: 10,
  },
  bannerProfile: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
    shadowColor: "#f94c57",
  },
  logoBanner: {
    width: 100,
    height: 90,
    borderRadius: 50,
  },
  photoProfile: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  logoContainerBanner: {
    alignItems: "center",
    flexDirection: "column",
    alignContent: "center",
  },
  listOperatorTutorial: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 3,
    // borderLeftColor: "#f94c57",
    // borderLeftWidth: 3,
    height: 85,
    shadowColor: "#f94c57",
  },
  listRekening: {
    flex: 1,
    padding: 8,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#f94c57",
  },
  ListDataRekening: {
    padding: 10,
    flex: 1,
    backgroundColor: "white",
    borderRadius: 15,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
    elevation: 5,
  },
  textOperatorItemTutorial: {
    color: "black",
  },
  titleTextOperatorItemTutorial: {
    color: "black",
    fontWeight: "bold",
  },
  operatorIconTutorial: {
    marginRight: 10,
    width: 70,
    resizeMode: "contain",
  },
  buttonProfil: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
  },
  buttonIconProfil: {
    padding: 5,
    borderRadius: 10,
  },

  // SMS
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  sendButtonLabel: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  sendButton: {
    width: "100%",
    backgroundColor: "#22C674",
    borderRadius: 4,
    opacity: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 30,
  },
  titleTextsmall: {
    marginBottom: 8,
    marginTop: 16,
    fontSize: 16,
    alignSelf: "flex-start",
  },
  textInput: {
    paddingLeft: 16,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#3F44511F",
    borderRadius: 4,
    height: 44,
    color: "#000000",
    opacity: 0.75,
    width: "100%",
  },
  headerContainerListDataRekening: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    alignItems: "center",
    marginBottom: 10,
    elevation: 3,
    shadowColor: "#f94c57",
  },
  titleHeaderListDataRekening: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
  },
  itemContainerConvertPulsa: {
    padding: 5,
    backgroundColor: "white",
    height: 85,
    marginBottom: 8,
    borderRadius: 10,
    shadowColor: "#f94c57",
  },
  logoItemConvertPulsa: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: "contain",
    marginRight: 8,
  },
  titleContainerConverPulsa: {
    padding: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  titleConverPulsaConvertPulsa: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    textShadowColor: "#585858",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 5,
  },
  titleTextContainerConvertPulsaScreen: {
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  titleConvertPulsaScreen: {
    marginLeft: 12,
    fontSize: 20,
    color: "black",
    fontWeight: "500",
  },
  yesButton: {
    borderRadius: 8,
    backgroundColor: "rgba(249, 76, 87, 1)",
    padding: 10,
  },
  noButton: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(249, 76, 87, 1)",
    padding: 10,
  },
  textBlackButton: { color: "black", fontWeight: "bold", textAlign: "center" },
  textWhitekButton: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  textRedkButton: {
    color: "rgba(249, 76, 87, 1)",
    fontWeight: "bold",
    textAlign: "center",
  },
  confirmationConvertPulsaInformation: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    alignItems: "center",
  },
  confirmationConvertPulsaInformationWordingLeft: {
    fontSize: 14,
    color: "black",
  },
  confirmationConvertPulsaInformationWordingRight: {
    fontSize: 16,
    color: "black",
  },
  toastContainer: {
    padding: 10,
    // position: "absolute",
    top: 1,
    zIndex: 99,
  },
  nextButton: {
    borderRadius: 12,
    backgroundColor: "rgba(249, 76, 87, 1)",
    padding: 16,
  },
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