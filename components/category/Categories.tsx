import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

export default function Categories() {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 12, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/** CategoryCard */}

      <CategoryCard
        imgUrl={require('../../assets/food.png')}
        title="testing1"
      />
      <CategoryCard
        imgUrl={require('../../assets/food.png')}
        title="testing2"
      />
      <CategoryCard
        imgUrl={require('../../assets/food.png')}
        title="testing2"
      />
      <CategoryCard
        imgUrl={require('../../assets/food.png')}
        title="testing2"
      />
      <CategoryCard
        imgUrl={require('../../assets/food.png')}
        title="testing2"
      />
      <CategoryCard
        imgUrl={require('../../assets/food.png')}
        title="testing2"
      />
    </ScrollView>
  );
}
