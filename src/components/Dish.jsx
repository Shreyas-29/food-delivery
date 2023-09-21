import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import * as Icon from "react-native-feather";
import CartIcon from './CartIcon';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, selectCartItemById, selectCartItems, selectCartTotal, selectQuantityById, selectTotalQuantity } from '../slices/cart';
import { urlFor } from '../../sanity';

const Dish = ({ item }) => {

    console.log("item Id: ", item._id);

    // const itemId = id;

    const dispatch = useDispatch();
    // const totalItems = useSelector((state) => selectCartItemById(state, item._id));
    const cartItem = useSelector((state) => selectCartItemById(state, item._id));
    const totalItems = cartItem ? cartItem.quantity : 0;

    console.log("totalItems", totalItems, "cartItem", cartItem);

    const handleAddItem = () => {
        dispatch(addToCart({ ...item }));
    };

    const handleRemoveItem = () => {
        dispatch(removeFromCart({ id: item._id }));
    };

    return (
        <View className="flex-row items-center flex-grow p-3 mr-2 bg-white shadow-none rounded-3xl shadow-gray-400/60">
            <View className="flex-row items-center justify-center p-4 w-28 h-28 bg-gray-50 rounded-3xl">
                <Image source={{ uri: urlFor(item?.image).url() }} className="w-full h-full rounded-2xl" />
            </View>
            <View className="flex flex-1 space-y-3">
                <View className="pl-3">
                    <Text className="text-xl text-gray-900 capitalize" style={{ fontFamily: "Medium" }}>
                        {item?.name}
                    </Text>
                    <Text className="text-gray-700 capitalize" style={{ fontFamily: "Regular" }}>
                        {item?.description}
                    </Text>
                </View>
                <View className="flex-row items-center justify-between pl-3">
                    <Text className="text-lg text-gray-600" style={{ fontFamily: "Medium" }}>
                        ${item?.price}
                    </Text>
                    <View className="flex-row items-center">
                        <TouchableOpacity
                            // disabled={!totalQuantity}
                            onPress={handleRemoveItem}
                            className="p-1.5 rounded-full"
                            style={{ backgroundColor: themeColors.bgColor(1) }}
                        >
                            <Icon.Minus strokeWidth={2} height={16} width={16} stroke="#fff" />
                        </TouchableOpacity>
                        <Text className="px-3" style={{ fontFamily: "Regular" }}>
                            {totalItems}
                        </Text>
                        {/* {renderTotalQuantity()} */}
                        <TouchableOpacity
                            onPress={handleAddItem}
                            className="p-1.5 rounded-full"
                            style={{ backgroundColor: themeColors.bgColor(1) }}
                        >
                            <Icon.Plus strokeWidth={2} height={16} width={16} stroke="#fff" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Dish

const styles = StyleSheet.create({})