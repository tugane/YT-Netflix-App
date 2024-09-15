import Colors from '@/constants/Colors'
import Font from '@/constants/Font'
import FontSize from '@/constants/FontSize'
import Spacing from '@/constants/Spacing'
import { filterData, FilterItem } from '@/data'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type Props = {
    onFilter?: (item:FilterItem) => void
}

const CategoryFilter:React.FC<Props> = ({onFilter}) => {
  return (
   <View style={{
        flexDirection: "row",
        marginVertical:Spacing.margin.lg
    }}>
          {filterData.map(item => <TouchableOpacity
              onPress={()=>onFilter?.(item)}
            style={{
                flexDirection: "row",
                marginRight: Spacing.margin.base,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderColor: Colors.border,
                paddingHorizontal: Spacing.padding.base,
                paddingVertical: Spacing.padding.xs,
                borderRadius: Spacing.borderRadius.xxl
            }}
            key={item.id}>
            <Text style={{
                fontSize: FontSize.sm,
                color: Colors.text,
                fontFamily: Font['poppins-bold']
            }}>
                {item.title}
            </Text>
            {item.items && <Ionicons name="chevron-down" color={Colors.text} size={24} />}
        </TouchableOpacity>)}
    </View>
  )
}

export default CategoryFilter

const styles = StyleSheet.create({})