import { StackNavigator } from 'react-navigation';
import home from '../pages/home';
import launch from '../pages/launch';
import Tabbar from './Tabbar';
import User from './User';

const Route = {
  Launch: {
    screen: launch,
  },
  Home: {
    screen: home,
  },
  Tabbar: {
    screen: Tabbar,
  },
  ...User,
};

const AppNavigation = StackNavigator(Route, {
  initialRouteName: 'Launch', // 默认显示界面
  navigationOptions: { // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
    headerBackTitle: null, // 左上角返回键文字
    headerBackTitleStyle: {
      color: 'white',
    },
    headerStyle: {
      backgroundColor: '#BC181E',
    },
    headerTitleStyle: {
      color: '#FFFFFF',
    },
    cardStack: {
      gesturesEnabled: true,
    },
    headerTintColor: 'white',
  },
  mode: 'card', // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
  headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
  onTransitionStart: () => { }, // 回调
  onTransitionEnd: () => { }, // 回调
});

export default AppNavigation;
