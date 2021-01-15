import {createAppContainer} from "react-navigation"
import {createStackNavigator} from "react-navigation-stack"
import { Platform } from "react-native"

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen"
import Colours from "../constants/Colours"

const ProductsNavigator = createStackNavigator({
    ProductsOverview: ProductsOverviewScreen
}, 
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === "android" ? Colours.primary : "" 
            },
            headerTintColor: Platform.OS === "android" ? "white" : Colours.primary
        }
    }
)

export default createAppContainer(ProductsNavigator)

