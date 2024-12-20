import { View, Text, ScrollView } from "react-native";
import { styles } from "./Componet/style";
import { Court, Play, Match, PlayerNoButton } from "./Componet/myComponent";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { PrimaryButton,Button_Icon } from "./Componet/myButton";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Court text="1" />
      </View>
      <View>
        <Play playing={"กำลังแข่ง..."} />
      </View>
      <View style={styles.BG}>
        <View>
          <Match waiting="ลำดับ" allTeam="ทีมทั้งหมด 8" />
        </View>
        <View style={styles.BGqueue}>
          <ScrollView>
            <View style={styles.queue}>
              <PlayerNoButton NO="3" title="ทีม : " TeamName1="A" />
              <PlayerNoButton NO="4" title="ทีม : " TeamName1="B" />
              <PlayerNoButton NO="5" title="ทีม : " TeamName1="C" />
              <PlayerNoButton NO="6" title="ทีม : " TeamName1="D" />
              <PlayerNoButton NO="7" title="ทีม : " TeamName1="E" />
            </View>
          </ScrollView>
        </View>
      </View>
      <PrimaryButton text="ต่อคิว"/>
    </View>
  );
}
