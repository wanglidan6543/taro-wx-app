import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  config = {
    pages: [
      'pages/index/index',
      'pages/shopcart/index',
      'pages/my/index',
      'pages/product/detail/index'
    ],
    tabBar: {
      'color': "#999999",
      'selectedColor': "#333333",
      'borderStyle': "white",
      list: [
        {
          pagePath: "pages/index/index",
          text: "首页",
          'iconPath': "images/home.png",
          'selectedIconPath': "images/home_selected.png"
        },
        {
          pagePath: "pages/shopcart/index",
          text: "购物车",
          'iconPath': "images/shopcart.png",
          'selectedIconPath': "images/shopcart_selected.png"
        },
        {
          pagePath: "pages/my/index",
          text: "我的",
          'iconPath': "images/my.png",
          'selectedIconPath': "images/my_selected.png"
        }
      ]
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
