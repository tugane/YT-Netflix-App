import Colors from '@/constants/Colors'
import Font from '@/constants/Font'
import FontSize from '@/constants/FontSize'
import Spacing from '@/constants/Spacing'
import { Feather } from '@expo/vector-icons'
import { Text, TouchableOpacity, View,Image } from 'react-native'


type Props = {
    title: string
}

const Header:React.FC<Props> = ({title}) => {
  return (
   <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center"
    }}>
        <Text style={{color: Colors.text, fontSize:FontSize.xl, fontFamily:Font['poppins-semiBold']}}>
            {title}
        </Text>
        <View style={{
            flexDirection: "row",
            alignItems:"center"
        }}>
            <TouchableOpacity style={{
                marginRight: Spacing.margin.lg
            }} >
                <Feather name="cast" size={FontSize.xl} color={Colors.text} />
            </TouchableOpacity>
            <TouchableOpacity style={{
                marginRight: Spacing.margin.lg
            }} >
                <Feather name="search" size={FontSize.xl} color={Colors.text} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={{
                    height: 30,
                    width: 30,
                    borderRadius: Spacing.borderRadius.sm
                }} source={require('../../assets/images/user/user.jpg')} />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Header
