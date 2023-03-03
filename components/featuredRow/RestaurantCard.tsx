import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/outline';

type Props = {
  id: number;
  imgUrl: any;

  title: String;
  rating: number;
  genre: String;
  address: String;
  shortDescription: String;
  dishes: String;
  long: number;
  lat: number;
};

export default function RestaurantCard({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  shortDescription,
  dishes,
  long,
  lat
}: Props) {
  return (
    <TouchableOpacity className="bg-white mr-3 mb-3  shadow">
      <Image source={imgUrl} className="w-64 h-36 rounded-sm" />
      <View className="px-3  pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row pt-1 items-center space-x-1">
          <StarIcon color="green" opacity={0.4} size={15} />
          <Text className=" text-xs text-green-500">
            {rating} . <Text className="text-gray-500">{genre}</Text>
          </Text>
        </View>
        <View className="flex-row pt-1 space-x-1 items-center">
          <MapPinIcon size={15} color="gray" opacity={0.5} />
          <Text className="text-xs text-gray-500">Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
