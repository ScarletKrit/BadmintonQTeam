import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { Button_Icon, IconButton } from "./myButton";
import Ionicons from "@expo/vector-icons/Ionicons";

export function Court(props) {
  return (
    <View style={styles.header}>
      <View style={styles.GroupCourt}>
        <Text style={styles.sizetext1}>Court</Text>
        <Text style={styles.sizetext2}>สนามที่</Text>
      </View>
      <Text style={styles.NUMCourt}>{props.text}</Text>
      <Image
        source={require("./Pic/backgroundCourt.png")}
        style={styles.picCourt}
      ></Image>
      <TouchableOpacity>
        <View style={styles.IconButton}>
          <Ionicons name="chevron-down" size={24} color="#CC5A3F" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export function Play(props) {
  return (
    <View style={styles.Playing}>
      <Text style={styles.pText}>{props.playing}</Text>
      <View style={styles.Versus}>
        <Player TeamName1={"No ME No Win"} title={"ทีมของคุณ :"} />
        <Image source={require("./Pic/VS.png")} style={styles.VS}></Image>
        <Player TeamName1={"ตบบ่แฮงแรงบ่มี"} title={"ทีม :"} />
      </View>
    </View>
  );
}

export function Player(props) {
  return (
    <View style={styles.BTL}>
      <View style={styles.Team}>
        <View style={styles.PlayerTeam}>
          <Image
            source={require("./Pic/IMG_2745.jpeg")}
            style={styles.One}
          ></Image>
          <Image
            source={require("./Pic/IMG_2758.jpeg")}
            style={styles.Two}
          ></Image>
          <View style={styles.TeamName}>
            <Text style={{ fontSize: 12, paddingLeft: 32, color: "#989898" }}>
              {props.title}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                paddingLeft: 32,
                color: "#333",
              }}
            >
              {props.TeamName1}
            </Text>
          </View>
        </View>
      </View>
      <Button_Icon />
    </View>
  );
}

export function Match(props) {
  return (
    <View style={styles.BGMatch}>
      <View style={styles.textQ}>
        <Text style={{fontSize: 16, color: "#808080"}}>{props.waiting}</Text>
        <Text style={{fontSize: 16, color: "#808080"}}>{props.allTeam}</Text>
      </View>
    </View>
  );
}

export function PlayerNoButton(props) {
  return (
    <View style={styles.BTL}>
      <View style={styles.Team}>
        <Text style={{fontSize: 16, fontWeight: "bold",color:"#989898", width: 20,}}>{props.NO}</Text>
        <View style={styles.PlayerTeam}>
          <Image
            source={require("./Pic/IMG_2745.jpeg")}
            style={styles.One}
          ></Image>
          <Image
            source={require("./Pic/IMG_2758.jpeg")}
            style={styles.Two}
          ></Image>
          <View style={styles.TeamName}>
            <Text style={{ fontSize: 12, paddingLeft: 32, color: "#989898" }}>
              {props.title}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                paddingLeft: 32,
                color: "#333",
              }}
            >
              {props.TeamName1}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
