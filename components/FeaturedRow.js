import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCards from "./RestaurantCards";

const FeaturedRow = ({ title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title} </Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="py-4"
      >
        {/* Restaurants cards ... */}
        <RestaurantCards
          id={123}
          imgUrl={
            "https://images.unsplash.com/photo-1497888329096-51c27beff665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          }
          title="Yo Shushi"
          rating={4.5}
          genre="Etalian"
          address="134 yt-Los angelies"
          short_description="Food decoration is something we use to decorate a dish. The main difference between garnish and decoration is that decoration is entirely a visual component."
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCards
          id={123}
          imgUrl={
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          title="Nando's"
          rating={5.5}
          genre="Glore"
          address="15main yt-Los angelies"
          short_description="this is the test destcitopn"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCards
          id={123}
          imgUrl={
            "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80"
          }
          title="KFC-pokd"
          rating={5.5}
          genre="parish"
          address="1 yt-Los angelies"
          short_description="KFC is an American fast food restaurant chain headquartered in Louisville,"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCards
          id={123}
          imgUrl={
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          }
          title="Cafe tina"
          rating={4.5}
          genre="All Type"
          address="1 Marine-dive-2"
          short_description="rder Food Online from Tina's Cafe Mysore North Vani Vilas Mohalla and see it's menu for Home Delivery in Mysore. "
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
