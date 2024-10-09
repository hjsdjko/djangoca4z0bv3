import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Messages from '../pages/messages/list'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import gequfenleiList from '../pages/gequfenlei/list'
import gequfenleiDetail from '../pages/gequfenlei/detail'
import gequfenleiAdd from '../pages/gequfenlei/add'
import biaoqianList from '../pages/biaoqian/list'
import biaoqianDetail from '../pages/biaoqian/detail'
import biaoqianAdd from '../pages/biaoqian/add'
import zimuList from '../pages/zimu/list'
import zimuDetail from '../pages/zimu/detail'
import zimuAdd from '../pages/zimu/add'
import singerList from '../pages/singer/list'
import singerDetail from '../pages/singer/detail'
import singerAdd from '../pages/singer/add'
import gequxinxiList from '../pages/gequxinxi/list'
import gequxinxiDetail from '../pages/gequxinxi/detail'
import gequxinxiAdd from '../pages/gequxinxi/add'
import paixingleixingList from '../pages/paixingleixing/list'
import paixingleixingDetail from '../pages/paixingleixing/detail'
import paixingleixingAdd from '../pages/paixingleixing/add'
import paixingbangList from '../pages/paixingbang/list'
import paixingbangDetail from '../pages/paixingbang/detail'
import paixingbangAdd from '../pages/paixingbang/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'
import friendlinkList from '../pages/friendlink/list'
import friendlinkDetail from '../pages/friendlink/detail'
import friendlinkAdd from '../pages/friendlink/add'
import discusssingerList from '../pages/discusssinger/list'
import discusssingerDetail from '../pages/discusssinger/detail'
import discusssingerAdd from '../pages/discusssinger/add'
import discussgequxinxiList from '../pages/discussgequxinxi/list'
import discussgequxinxiDetail from '../pages/discussgequxinxi/detail'
import discussgequxinxiAdd from '../pages/discussgequxinxi/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'messages',
					component: Messages
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'gequfenlei',
					component: gequfenleiList
				},
				{
					path: 'gequfenleiDetail',
					component: gequfenleiDetail
				},
				{
					path: 'gequfenleiAdd',
					component: gequfenleiAdd
				},
				{
					path: 'biaoqian',
					component: biaoqianList
				},
				{
					path: 'biaoqianDetail',
					component: biaoqianDetail
				},
				{
					path: 'biaoqianAdd',
					component: biaoqianAdd
				},
				{
					path: 'zimu',
					component: zimuList
				},
				{
					path: 'zimuDetail',
					component: zimuDetail
				},
				{
					path: 'zimuAdd',
					component: zimuAdd
				},
				{
					path: 'singer',
					component: singerList
				},
				{
					path: 'singerDetail',
					component: singerDetail
				},
				{
					path: 'singerAdd',
					component: singerAdd
				},
				{
					path: 'gequxinxi',
					component: gequxinxiList
				},
				{
					path: 'gequxinxiDetail',
					component: gequxinxiDetail
				},
				{
					path: 'gequxinxiAdd',
					component: gequxinxiAdd
				},
				{
					path: 'paixingleixing',
					component: paixingleixingList
				},
				{
					path: 'paixingleixingDetail',
					component: paixingleixingDetail
				},
				{
					path: 'paixingleixingAdd',
					component: paixingleixingAdd
				},
				{
					path: 'paixingbang',
					component: paixingbangList
				},
				{
					path: 'paixingbangDetail',
					component: paixingbangDetail
				},
				{
					path: 'paixingbangAdd',
					component: paixingbangAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
				{
					path: 'friendlink',
					component: friendlinkList
				},
				{
					path: 'friendlinkDetail',
					component: friendlinkDetail
				},
				{
					path: 'friendlinkAdd',
					component: friendlinkAdd
				},
				{
					path: 'discusssinger',
					component: discusssingerList
				},
				{
					path: 'discusssingerDetail',
					component: discusssingerDetail
				},
				{
					path: 'discusssingerAdd',
					component: discusssingerAdd
				},
				{
					path: 'discussgequxinxi',
					component: discussgequxinxiList
				},
				{
					path: 'discussgequxinxiDetail',
					component: discussgequxinxiDetail
				},
				{
					path: 'discussgequxinxiAdd',
					component: discussgequxinxiAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
