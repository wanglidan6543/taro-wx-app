import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class ProductDetail extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '商品详情'
  }

  render () {
    return (
      <View className='index'>
        <Text>这是商品详情页!</Text>
      </View>
    )
  }
}
