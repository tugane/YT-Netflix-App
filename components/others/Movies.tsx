import { ITEM_SIZE, ITEM_HEIGHT } from '@/constants'
import Colors from '@/constants/Colors'
import Font from '@/constants/Font'
import FontSize from '@/constants/FontSize'
import Spacing from '@/constants/Spacing'
import { Movie} from '@/data'
import React from 'react'
import { ScrollView, Text, TouchableOpacity, View,Image } from 'react-native'

type Props = {
    title: string,
    movies: Movie[]
}

const Movies:React.FC<Props> = ({title, movies}) => {
  return (
    <View style={{
        marginVertical:Spacing.margin.base
    }}>
        <Text style={{
            color: Colors.text,
            fontSize: FontSize.lg,
            fontFamily:Font['poppins-semiBold']
        }}>
            {title}
        </Text>
        <ScrollView style={{
            marginTop: Spacing.margin.base
        }} horizontal showsHorizontalScrollIndicator={false} >
            {movies.map(movie => <TouchableOpacity
            key={movie.id}
                style={{
                marginRight: Spacing.margin.base
            }}>
                <Image style={{
                    width: ITEM_SIZE,
                    height: ITEM_HEIGHT,
                    borderRadius: Spacing.borderRadius.sm,
                }} source={movie.image} />
            </TouchableOpacity>)}
        </ScrollView>
    </View>
  )
}

export default Movies
