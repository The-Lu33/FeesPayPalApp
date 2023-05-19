import { Image, Linking, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function Footer() {
  return (
    <View className='mt-[70px]'>
      <TouchableOpacity
        className='flex flex-row justify-center items-center gap-1'
        onPress={() => {
          Linking.openURL('https://github.com/The-Lu33');
        }}
      >
        <Image
          source={require('../../assets/github.png')}
          style={{ width: 30, height: 30 }}
        />
        <Text className='text-orange-400'> Made by The Lú</Text>
      </TouchableOpacity>
      {/* <Text className='text-red-400'>footer</Text> */}
    </View>
  );
}
