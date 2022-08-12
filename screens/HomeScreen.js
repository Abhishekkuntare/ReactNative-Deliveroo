import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import FeaturedRow1 from "../components/FeaturedRow1";
import FeaturedRow2 from "../components/FeaturedRow2";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5">
      {/* header  */}
      <View className=" flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs ">Deliver now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search  */}
      <View className="flex-row items-center space-x-2   pb-2 mx-4">
        <View className="rounded-md flex-1 flex-row space-x-2 bg-gray-200 p-3 ">
          <SearchIcon color="gray" size={20} />
          <TextInput
            keyboardType="default"
            placeholder="Restaurants and cuisins"
            className="outline-none border-none w-150"
          />
        </View>
        <AdjustmentsIcon color="#00CCBB" />
      </View>

      <ScrollView>
        {/* Categories */}
        <Categories />

        {/* featured rows  */}
        <FeaturedRow
          id="1"
          title="Featured"
          description="Paid placements for our parterns"
        />

        <FeaturedRow1
          id="12"
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts !"
        />

        <FeaturedRow2
          id="123"
          title="Offters Near You"
          description="Why not support your local restaurant tonight!"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
