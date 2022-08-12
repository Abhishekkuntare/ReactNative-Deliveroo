import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCards from "./RestaurantCards";

const FeaturedRow2 = ({ title, description }) => {
  return (
    <View className="pb-12">
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
            "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          title="Burger Hunt"
          rating={6.5}
          genre="All type"
          address="main - California"
          short_description="A café is a type of restaurant which typically serves coffee and tea, in addition to light refreshments such as baked goods or snacks"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCards
          id={123}
          imgUrl={
            "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
          }
          title="Glory Foodie"
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
            "https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          title="Veg Mode"
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
            "https://images.unsplash.com/photo-1629385701021-fcd568a743e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          title="Cool Sttuf "
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

export default FeaturedRow2;
