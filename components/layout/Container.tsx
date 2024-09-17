import Spacing from '@/constants/Spacing'
import { SafeAreaView, ScrollView } from 'react-native'

type Props = {
    children: React.ReactNode
}

const Container:React.FC<Props> = ({children}) => {
  return (
    <SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
        padding: Spacing.padding.base,
                  paddingBottom:Spacing.padding.xxl
          }}>
              {children}
          </ScrollView>
          </SafeAreaView>
  )
}

export default Container
