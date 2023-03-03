import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

type Props = {
  title: String;
  description: String;
  featuredCategory: String;
};

export default function FeaturedRow({
  title,
  description,
  featuredCategory
}: Props) {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-3">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon />
      </View>
      <Text className="px-3 text-gray-500 font-bold text-xs">
        {description}
      </Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 12 }}
        className="pt-4"
        showsHorizontalScrollIndicator={false}
      >
        {/**restaurant cards */}
        <RestaurantCard
          id={555}
          imgUrl={require('../../assets/food.png')}
          title="Yo! Sushi"
          rating={4.6}
          genre="Japanese"
          address="221-B Main Street"
          shortDescription="Test Short Description"
          dishes="Test Dishes"
          long={678}
          lat={345.878}
        />
        <RestaurantCard
          id={555}
          imgUrl={require('../../assets/food.png')}
          title="Yo! Sushi"
          rating={4.6}
          genre="Japanese"
          address="221-B Main Street"
          shortDescription="Test Short Description"
          dishes="Test Dishes"
          long={678}
          lat={345.878}
        />
        <RestaurantCard
          id={555}
          imgUrl={require('../../assets/food.png')}
          title="Yo! Sushi"
          rating={4.6}
          genre="Japanese"
          address="221-B Main Street"
          shortDescription="Test Short Description"
          dishes="Test Dishes"
          long={678}
          lat={345.878}
        />
      </ScrollView>
    </View>
  );
}
