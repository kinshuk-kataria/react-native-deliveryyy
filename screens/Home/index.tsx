import { View, Text, SafeAreaView, Image, TextInput } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  UserIcon
} from 'react-native-heroicons/outline';

function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView className="bg-white ">
      {/**Header */}
      <View className="flex-row pb-3 pt-1 items-center  space-x-2 px-3">
        <Image
          source={require('../../assets/avatar.png')}
          className="h-7 w-7 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver now</Text>
          <Text className="font-bold text-xl">
            Current Location <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} />
      </View>
      <View className="flex-row items-center pb-2  pt-1 space-x-3 px-3">
        <View className="flex-row flex-1 space-x-3 bg-gray-300 items-center p-2">
          <MagnifyingGlassIcon color="gray" />
          <TextInput
            placeholder="Restaurants and cuisine"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="00CCBB" />
      </View>
    </SafeAreaView>
  );
}
export default HomeScreen;
