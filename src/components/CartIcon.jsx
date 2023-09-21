import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal, selectTotalQuantity } from '../slices/cart'

const CartIcon = () => {

    const navigation = useNavigation();

    const cartItems = useSelector(selectCartItems);

    // console.log("cartItems", cartItems.quantity);

    const cartTotal = useSelector(selectCartTotal);

    const cartQuantity = useSelector(selectTotalQuantity);

    if (!cartItems?.length) return;

    return (
        <View className="absolute inset-x-0 z-50 w-full pr-8 mx-4 bottom-5">
            <TouchableOpacity
                onPress={() => navigation.navigate("Cart")}
                style={{
                    backgroundColor: themeColors.bgColor(1),
                    shadowColor: themeColors.bgColor(1),
                    shadowOffset: {
                        width: 0,
                        height: 8,
                    },
                    shadowOpacity: 1,
                    shadowRadius: 10,
                    elevation: 8,
                }}
                className="flex-row items-center justify-between w-full px-4 py-3 border-t-2 border-l-2 border-r-2 rounded-full border-orange-500/10"
            >
                {/* <View className="p-2 px-4 border-t border-r rounded-full border-t-white/30 border-r-white/30" style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}> */}
                <View className="flex items-center justify-center p-2 border-t border-r rounded-full w-11 h-11 border-t-white/30 border-r-white/30" style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}>
                    <Text className="text-base text-white" style={{ fontFamily: "SemiBold" }}>
                        {cartQuantity}
                    </Text>
                </View>
                <Text className="flex-1 text-lg text-center text-white" style={{ fontFamily: "SemiBold" }}>
                    View Cart
                </Text>
                <Text className="text-lg text-white" style={{ fontFamily: "SemiBold" }}>
                    ${cartTotal.toFixed(2)}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default CartIcon

const styles = StyleSheet.create({})