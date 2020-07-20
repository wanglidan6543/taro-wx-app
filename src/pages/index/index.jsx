import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
 
  toDetail() {
    console.log('click')
    Taro.navigateTo({
      url: '/pages/product/detail/index'
    })
  }

  config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='index'>
        <Text>首页!</Text>
        <Button onClick={this.toDetail}>点击我</Button>
      </View>
    )
  }
}
