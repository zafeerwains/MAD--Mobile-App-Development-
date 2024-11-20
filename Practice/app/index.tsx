import { Image, SectionList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

const DATA = [
  {
    title: 'Nature',
    data: [
      {
        uri: 'https://media.istockphoto.com/id/1404425850/photo/aerial-view-of-rafting-boat-or-canoe-in-mountain-river-and-forest-recreation-and-camping.jpg?b=1&s=612x612&w=0&k=20&c=xaqgdveNyH_SnA1ZIk1Y4I17QcxMog2AamBbrWlCN8g=',
        description: 'A beautiful cascade boat in China.A scenic countryside waterscape.Aerial view of a couple canoeing in Norway.A beautiful cascade boat in China.A scenic countryside waterscape.Aerial view of a couple canoeing in Norway.A beautiful cascade boat in China.A scenic countryside waterscape.Aerial view of a couple canoeing in Norway.A beautiful cascade boat in China.A scenic countryside waterscape.Aerial view of a couple canoeing in Norway.A beautiful cascade boat in China.A scenic countryside waterscape.Aerial view of a couple canoeing in Norway.A beautiful cascade boat in China.A scenic countryside waterscape.'
      },
      {
        uri: 'https://img.freepik.com/free-photo/background-park-wonder-famous-countryside-waterscape_1417-1105.jpg?t=st=1732090536~exp=1732094136~hmac=fedd41d73f072079cfbaa21b5f3f2322000736baba2d5c9630c0faefdf054341&w=740',
        description: 'A beautiful cascade boat in China.A scenic countryside waterscape.Aerial view of a couple canoeing in Norway.A beautiful cascade boat in China.A scenic countryside waterscape.Aerial view of a couple canoeing in Norway.A beautiful cascade boat in China.A scenic countryside waterscape.Aerial view of a couple canoeing in Norway.A beautiful cascade boat in China.A scenic countryside waterscape.Aerial view of a couple canoeing in Norway.A beautiful cascade boat in China.A scenic countryside waterscape.Aerial view of a couple canoeing in Norway.A beautiful cascade boat in China.A scenic countryside waterscape.'
      },
      {
        uri: 'https://media.istockphoto.com/id/1409728243/photo/aerial-view-of-woman-and-man-contemplating-summer-in-norway-canoeing-in-the-lake-lovatnet.jpg?b=1&s=612x612&w=0&k=20&c=y2D5pwMWjZ7ncglIk8W1w6KFlNfnHZ15vZXGbcRazJc=',
        description: 'Aerial view of a couple canoeing in Norway.A beautiful cascade boat in China.A scenic countryside waterscape.Aerial view of a couple canoeing in Norway.A beautiful cascade boat in China.A scenic countryside waterscape.Aerial view of a couple canoeing in Norway.A beautiful cascade boat in China.A scenic countryside waterscape.Aerial view of a couple canoeing in Norway.A beautiful cascade boat in China.A scenic countryside waterscape.Aerial view of a couple canoeing in Norway.A beautiful cascade boat in China.A scenic countryside waterscape.'
      }
    ],
  },
  {
    title: 'Cities',
    data: [
      {
        uri: "https://img.freepik.com/free-photo/beautiful-city-with-high-skyscrapers-gleaming-colourful-sky-night_181624-44575.jpg?ga=GA1.1.1039570946.1732089407&semt=ais_hybrid",
        description: 'A beautiful city with high skyscrapers at night.Aerial view of a couple canoeing in Norway.A beautiful cascade boat in China.A scenic countryside waterscape.Aerial view of a couple canoeing in Norway.A beautiful cascade boat in China.A scenic countryside waterscape.Aerial view of a couple canoeing in Norway.A beautiful cascade boat in China.A scenic countryside waterscape.'
      },
      {
        uri: "https://img.freepik.com/free-photo/high-angle-pie-chart-with-cities_52683-98166.jpg?ga=GA1.1.1039570946.1732089407&semt=ais_hybrid",
        description: 'High angle view of a pie chart with cities.Aerial view of a couple canoeing in Norway.A beautiful cascade boat in China.A scenic countryside waterscape.Aerial view of a couple canoeing in Norway.A beautiful cascade boat in China.A scenic countryside waterscape.Aerial view of a couple canoeing in Norway.A beautiful cascade boat in China.A scenic countryside waterscape.Aerial view of a couple canoeing in Norway.A beautiful cascade boat in China.A scenic countryside waterscape.'
      },
      {
        uri: "https://img.freepik.com/free-photo/beautiful-modern-buildings-new-york-city-usa_181624-48302.jpg?ga=GA1.1.1039570946.1732089407&semt=ais_hybrid",
        description: 'Modern buildings in New York City, USA.Aerial view of a couple canoeing in Norway.A beautiful cascade boat in China.A scenic countryside waterscape.Aerial view of a couple canoeing in Norway.A beautiful cascade boat in China.A scenic countryside waterscape.Aerial view of a couple canoeing in Norway.A beautiful cascade boat in China.A scenic countryside waterscape.Aerial view of a couple canoeing in Norway.A beautiful cascade boat in China.A scenic countryside waterscape.'
      }
    ],
  },
];
export default function Index() {
  return (

    <SafeAreaView style={styles.container} >
      <SectionList

        sections={DATA}
        keyExtractor={(item, index) => item.uri+ index}
        renderItem={({ item, section }) => (
          <View style={styles.txt}>
            <TouchableOpacity style={styles.tO} onPress={() => alert(section.title)}>
              <Image style={styles.img} source={{ uri: item.uri }} />
            </TouchableOpacity>
            <Text style={styles.item} >{item.description}</Text>
          </View>
        )
        }
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}

      />
    </SafeAreaView >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },

  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
  txt: {
    width: '100%',
    display: "flex",
    flexDirection:"row"
  },

  img: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10
  },
  item: {
    paddingLeft: 10,
  },
  tO: {
    width: '33%',

  }

});