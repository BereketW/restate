import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";

const SignIn = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          resizeMode="contain"
          source={images.onboarding}
          className="w-full h-4/6"
        />
        <View className="px-10">
          <Text className="text-center text-base text-black-200 uppercase font-rubik">
            Welcome to Restate
          </Text>
          <Text className="text-3xl font-rubik-bold mt-2 text-center">
            Let's Get You Closer {"\n"}
            <Text className="text-primary-300"> To Your Ideal Home</Text>
          </Text>
          <Text className="mt-12 text-center font-rubik text-black-200 text-lg">
            Login to Real Scout using Google
          </Text>
          <TouchableOpacity className="py-4 mt-5 rounded-fill bg-white shadow-md shadow-zinc-300 w-full">
            <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                resizeMode="contain"
                className="  w-5 h-5"
              />
              <Text className="ml-2 font-rubik-medium text-black-300">
                Continue with google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
