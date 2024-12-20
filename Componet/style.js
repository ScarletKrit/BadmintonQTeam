import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    alignItems: "center",
    // justifyContent: "flex-start",
    gap: 16,
  },
  header: {
    paddingTop: 64,
    padding: 16,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    // flex: 1,
    height: 190,
    width: 430,
    backgroundColor: "#CC5A3F",
    borderRadius: 24,
    gap: 8,
  },
  NUMCourt: {},
  sizetext1: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Noto-Sans-Thai",
  },
  sizetext2: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: "Noto-Sans-Thai",
  },
  GroupCourt: {},
  NUMCourt: {
    color: "#fff",
    fontSize: 56,
    fontWeight: "bold",
    // backgroundColor: "black",
    paddingTop: 8,
  },
  picCourt: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  IconButton: {
    width: 64,
    height: 64,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 8,
    position: "static",
    bottom: -70,
    right: -50,
    // borderRadius: 64/2,
    borderTopLeftRadius: 555,
    borderTopRightRadius: 555,
  },
  Playing: {
    // width: 430,
    // backgroundColor: "#f2f2f2",
    paddingTop: 0,
    padding: 16,
    gap: 8,
  },
  pText: {
    color: "#808080",
    fontSize: 16,
    paddingLeft: 8
  },
  Versus: {
    backgroundColor: "#fff",
    // width: 398,
    // height: 200,
    borderRadius: 16,
    justifyContent: "center",
    // alignItems: "f",
    gap: 8,
    // borderColor: "#e6e6e6",
    // borderWidth: 1,
    padding: 16,
    shadowColor: "#A83B24",
    shadowOffset: {
    //   width: 2,
    //   height: 2,
    },
    shadowOpacity: 1/4,
    shadowRadius: 6,

    elevation: 10,
  },
  VS: {},
  PlayerTeam: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    // height: 60,
    // width: 382,
    // borderColor: "#333",
    // borderWidth: 1,
  },
  One: {
    width: 40,
    height: 40,
    borderRadius: 32,
    position: "absolute",
    left: 24,
    borderWidth: 2,
    borderColor: "white",
  },

  Two: {
    width: 40,
    height: 40,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "white",
  },
  TeamName: {
    gap: 4,
  },

  Button_Icon: {
    backgroundColor: "#fff",
    borderColor: "#f2f2f2",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 12,
    paddingLeft: 8,
    paddingBottom: 8,
    paddingTop: 8,
    borderRadius: 32,
    gap: 2,
  },
  BTL: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16
  },
  BG: {
    // backgroundColor: "#e6e6e6",
    width: 430,
    paddingLeft: 16,
    paddingRight: 16,
    gap: 8,

  },

  textQ: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 8,
    paddingRight: 8
  },
  queue:{
    gap: 16
  },
  Team: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6
  },
  BGqueue:{
    backgroundColor: "white",
    padding: 16,
    borderRadius: 16,
    borderColor: "#f5f5f5",
    borderWidth: 1,
  },
  PrimaryButton:{
    backgroundColor: "#A83B24",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 48,
    width: 398,
    borderRadius: 32
  },

});
