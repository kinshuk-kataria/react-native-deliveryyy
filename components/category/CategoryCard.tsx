import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

type Props = {
  imgUrl: any;
  title: String;
};

export default function CategoryCard(props: Props) {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image source={props.imgUrl} className="h-20 w-20 rounded" />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}
