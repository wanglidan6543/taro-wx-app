import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class ShopCart extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '购物车'
  }

  render () {
    return (
      <View className='index'>
        <Text>购物车!</Text>
      </View>
    )
  }
}
