import React from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const products = [
  { id: '1', name: 'Product 1', price: '$10', image: 'https://via.placeholder.com/150' },
  { id: '2', name: 'Product 2', price: '$20', image: 'https://via.placeholder.com/150' },
  { id: '3', name: 'Product 3', price: '$30', image: 'https://via.placeholder.com/150' },
  { id: '4', name: 'Product 3', price: '$30', image: 'https://via.placeholder.com/150' },
  { id: '5', name: 'Product 3', price: '$30', image: 'https://via.placeholder.com/150' },
  { id: '6', name: 'Product 3', price: '$30', image: 'https://via.placeholder.com/150' },
  
];

const App = () => {
  const renderProduct = ({ item }: { item: { id: string, name: string, price: string, image: string } }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Menu</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Products</Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerButtonText}>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerButtonText}>Cart</Text>
          </TouchableOpacity>
        </View>
      </View>

     
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.productList}
        numColumns={2} 
      />

      
      <View style={styles.navigation}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#f8f8f8',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerButtons: {
    flexDirection: 'row',
  },
  headerButton: {
    marginHorizontal: 5,
  },
  headerButtonText: {
    fontSize: 16,
    color: 'blue',
  },
  productList: {
    padding: 10,
  },
  productCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    margin: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    width: (width - 30) / 2,
  },
  productImage: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#f8f8f8',
  },
  navButton: {
    padding: 10,
  },
  navButtonText: {
    fontSize: 16,
    color: 'blue',
  },
});

export default App;
