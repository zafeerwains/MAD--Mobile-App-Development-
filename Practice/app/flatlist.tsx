import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  SafeAreaView,
} from "react-native";

const DATA = [
  { id: "1", price:100,name: "Pizza" },
  { id: "2", price:200,name: "Burger" },
  { id: "3", price:300,name: "Risotto" },
  { id: "4", price:400,name: "French Fries" },
  { id: "5", price:500,name: "Onion Rings" },
  { id: "6", price:600,name: "Fried Shrimps" },
  { id: "7", price:700,name: "Water" },
  { id: "8", price:800,name: "Coke" },
  { id: "9", price:900,name: "Beer" },
  { id: "10", price:1000,name: "Cheesecake" },
  { id: "11", price:1100,name: "Ice Cream" },
];

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(DATA);

  // Function to handle search
  const handleSearch = (text:any) => {
    setSearchText(text);
    if (text === "") {
      setFilteredData(DATA); // Reset to original data if search is empty
    } else {
      const filtered = DATA.filter(
        // (item) => item.name.toLowerCase().includes(text.toLowerCase())
        (item) => item.price<=text
        // item.name.toLowerCase() === query.toLowerCase()
      );
      setFilteredData(filtered);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar */}
      <Text style={styles.txt}  >{filteredData.length<DATA.length && filteredData.length} </Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search here..."
        value={searchText}
        onChangeText={handleSearch}
        
      />

      {/* List */}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.name}  Price : {item.price}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No items found</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 10,
  },
  txt: {
    fontSize: 20,
    color: "#00796b",
    textAlign: "center",
    marginVertical: 10,
  },
  searchBar: {
    height: 60,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 50,
    backgroundColor: "#fff",
  },
  item: {
    padding: 15,
    backgroundColor: "#e1f5fe",
    borderRadius: 5,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 18,
    color: "#00796b",
  },
  emptyText: {
    textAlign: "center",
    color: "#999",
    fontSize: 16,
    marginTop: 20,
  },
});