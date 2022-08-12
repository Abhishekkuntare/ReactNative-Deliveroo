import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, selectBasketItemsWithId } from "../featrures/basketSlice";

const data = [
  {
    id: 1,
    name: "Peri-Peri Pizza ",
    desc: "Flame - grilled infused    with peri peri and perfect for paring with cock",
    price: "₹ 399.00",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80",
  },
  {
    id: 2,
    name: "Salad Internal",
    desc: "one breaset whole chilken and 5 large sides ,Servers 4-5",
    price: "₹ 299.00",
    img: "https://images.unsplash.com/photo-1602881916963-5daf2d97c06e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
  {
    id: 3,
    name: "Black Burger",
    desc: "Tow chiken and onion salad with cock and water",
    price: "₹ 579.00",
    img: "https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
  {
    id: 4,
    name: "Tomato mery ",
    desc: "Tomatoes with very spicy one and tasty that things and then some",
    price: "₹ 439.00",
    img: "https://images.unsplash.com/photo-1478369402113-1fd53f17e8b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=80",
  },
  {
    id: 5,
    name: "Cake ",
    desc: "Tomatoes with very spicy one and tasty that things and then some",
    price: "₹ 599.00",
    img: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
  },
];
const DishRow = () => {
  const Items = useSelector((state) => selectBasketItemsWithId(state));
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket(data));
  };
  return (
    <View>
      {data.map((dish) => {
        return (
          <TouchableOpacity
            className=" bg-white border p-4 border-gray-200 "
            key={dish.id}
          >
            <View className="flex-row">
              <View className="flex-1 pr-2">
                <Text className="text-lg mb-1">{dish.name}</Text>
                <Text className="text-gray-400">{dish.desc}</Text>
                <Text className="text-gray-400 mt-2">{dish.price}</Text>
                <View className="flex-row pt-2 ">
                  <View className="bg-white ">
                    <View className="flex-row items-center    space-x-2 pb-3">
                      <TouchableOpacity>
                        <MinusCircleIcon color="#00CCBB" size={20} />
                      </TouchableOpacity>
                      <Text>{Items.length}</Text>
                      <TouchableOpacity onPress={addItemToBasket}>
                        <PlusCircleIcon color="#00CCBB" size={20} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              <Image
                source={dish.img}
                className="h-20 w-20 bg-gray-300 p-4 rounded-full   "
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default DishRow;
