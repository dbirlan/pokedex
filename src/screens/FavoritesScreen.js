import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import PokemonCard from '../components/PokemonCard';

const FavoritesScreen = ({ navigation }) => {
  var [favoritePokemons, setFavoritePokemons] = useState([]);
  useEffect(() => {
    AsyncStorage.getAllKeys().then((response) => {
      setFavoritePokemons(response);
    });
  }, []);

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={favoritePokemons}
        keyExtractor={(pokemon) => pokemon}
        renderItem={({ item }) => {
          return <PokemonCard name={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default FavoritesScreen;
