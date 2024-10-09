<template>
<div class="home-preview" :style='{"padding":"0","margin":"0px auto","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","justifyContent":"space-between"}'>




		<!-- 系统简介 -->
		<div id="system" class="animate__animated" :style='{"border":"0px solid #e9e9e9","padding":"40px calc((100% - 1200px)/2) 50px","margin":"20px auto","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20240201/e9a2af1430904a429b1324af254352a3.jpg) no-repeat center top / cover","flexDirection":"row-reverse","display":"block","width":"100%","position":"relative","height":"auto","order":"4"}'>
		  <div :style='{"padding":"0 24px","margin":"0","borderColor":"#fb3f52","color":"rgba(22,159, 25,1)","textAlign":"center","background":"url(http://codegen.caihongy.cn/20240131/5af3f154380a4335a049d27ad57b60bb.png) no-repeat center bottom","borderWidth":"0 0 0px","width":"auto","fontSize":"25px","lineHeight":"44px","borderStyle":"solid","fontWeight":"500","height":"58px","zIndex":"9"}'>{{systemIntroductionDetail.title}}</div>
		  <div :style='{"margin":"0 0 30px","color":"#888","textAlign":"right","display":"none","width":"100%","lineHeight":"1.5","fontSize":"16px"}'>{{systemIntroductionDetail.subtitle}}</div>
		  <div :style='{"padding":"0","margin":"30px 0 0","flexWrap":"wrap","display":"block","width":"540px","float":"left","height":"360px"}'>
		    <img :style='{"width":"100%","margin":"0 0px","objectFit":"cover","display":"block","height":"100%"}' :src="baseUrl + systemIntroductionDetail.picture1">
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + systemIntroductionDetail.picture2">
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + systemIntroductionDetail.picture3">
		  </div>
		  <div :style='{"padding":"0px","margin":"30px 0 0","overflow":"hidden","color":"rgb(82, 82, 82)","background":"none","width":"calc(100% - 570px)","lineHeight":"30px","fontSize":"14px","textIndent":"2em","float":"right","height":"240px"}' v-html="systemIntroductionDetail.content"></div>
		  <div :style='{"borderColor":"#ddd","top":"0","background":"none","borderWidth":"0 0 2px","display":"none","width":"100%","position":"absolute","right":"0","borderStyle":"solid","height":"48px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"border":"1px solid #1d800150","cursor":"pointer","padding":"0 10px","margin":"0px auto","textAlign":"right","bottom":"80px","display":"flex","right":"calc((100% - 1200px)/2 + 460px)","justifyContent":"center","borderRadius":"0px","background":"none","width":"168px","lineHeight":"44px","position":"absolute","order":"8"}' @click="toDetail('systemintroDetail',systemIntroductionDetail)">
		    <span :style='{"color":"#1d8001","fontSize":"15px","order":"2"}'>查看更多</span>
		    <span class="icon iconfont icon-jiantou18" :style='{"color":"#1d8001","margin":"0 5px 0 0","fontSize":"16px"}'></span>
		  </div>
		</div>
		<!-- 系统简介 -->
		
	<!-- 新闻资讯 -->
	<div id="animate_newsnews" class="news animate__animated" :style='{"width":"100%","padding":"0 calc((100% - 1200px)/2)","margin":"20px auto 10px","position":"relative","background":"url(),#fff","order":"5"}'>
		<div v-if="false" class="idea newsIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
			<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		</div>
		
		<div class="title" :style='{"padding":"0 0 10px","margin":"0 auto","textAlign":"center","background":"url(http://codegen.caihongy.cn/20240131/2a430ef16f4e4cd097649b7ed3473f46.png) no-repeat center bottom","display":"block","width":"100%","height":"auto"}'>
			<span :style='{"padding":"0 20px","color":"rgba(22,159, 25,1)","background":"none","display":"block","fontSize":"25px","lineHeight":"44px","fontWeight":"500"}'>音乐资讯</span>
		</div>
		
			
			
			
			
			
			
			
			<!-- 样式七 -->
		<div v-if="newsList.length" class="list list7 index-pv1" :style='{"padding":"0","margin":"40px 0 0","color":"#aaa","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","fontSize":"12px","justifyContent":"space-between","height":"auto"}'>
		  <div v-for="(item,index) in newsList" v-if="index<4" :key="index" @click="toDetail('newsDetail', item)" class="new7-list-item animation-box" style="cursor: pointer;" :style='{"cursor":"pointer","padding":"0 0 16px","margin":"0 0 16px","borderColor":"#ccc","background":"#fff","borderWidth":"0 0 1px","width":"49%","position":"relative","borderStyle":"dashed","height":"auto"}'>
		    <img :style='{"width":"130px","margin":"0 10px 0 0","objectFit":"cover","float":"left","height":"110px"}' style="box-sizing: border-box;object-fit: cover;width: 100%;height: 250px;" :src="baseUrl + item.picture">
		    <div :style='{"padding":"0 0 0 70px","overflow":"hidden","whiteSpace":"nowrap","color":"#333","background":"#fff","width":"calc(100% - 140px)","fontSize":"14px","lineHeight":"24px","textOverflow":"ellipsis","float":"right"}' class="new7-list-item-title line1">{{ item.title }}</div>
		    <div :style='{"padding":"0 0px","overflow":"hidden","color":"#5A5A5A","background":"#fff","width":"calc(100% - 140px)","fontSize":"12px","lineHeight":"24px","float":"right","height":"48px"}' class="new7-list-item-descript line1">{{ item.introduction }}</div>
		    <div :style='{"width":"calc(100% - 140px)","padding":"0 0px","lineHeight":"1.5","fontSize":"12px","color":"#aaa","float":"right"}'>
		      <span class="icon iconfont " :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		      <span class="text" :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.addtime}}</span>
		    </div>
		    <div :style='{"padding":"0 0px","display":"inline-block"}'>
		      <span class="icon iconfont icon-geren16" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		      <span class="text" :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.name}}</span>
		    </div>
		    <div :style='{"padding":"0 0px","display":"inline-block"}'>
		      <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		      <span class="text" :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.thumbsupnum}}</span>
		    </div>
		    <div :style='{"padding":"0 0px","display":"inline-block"}'>
		      <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		      <span class="text" :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.storeupnum}}</span>
		    </div>
		    <div :style='{"padding":"0 0px","display":"inline-block"}'>
		      <span class="icon iconfont icon-chakan2" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
		      <span class="text" :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.clicknum}}</span>
		    </div>
			<div :style='{"padding":"0 0px","alignItems":"center","top":"0","left":"140px","display":"inline","width":"auto","position":"absolute","justifyContent":"space-between","height":"auto"}'>
		      <div :style='{"color":"#169f19","fontSize":"14px","lineHeight":"24px"}'>[新闻咨询]</div>
		      <div :style='{"fontSize":"14px","lineHeight":"24px","color":"#999","display":"none"}'></div>
		    </div>
		  </div>
		</div>
			
			
			
		











		<div @click="moreBtn('news')" :style='{"border":"1px solid #1d800150","cursor":"pointer","padding":"0 10px","margin":"20px auto 0","textAlign":"center","background":"none","display":"flex","width":"168px","lineHeight":"44px","justifyContent":"center"}'>
			<span :style='{"color":"#1d8001","fontSize":"15px","order":"2"}'>查看更多</span>
			<i :style='{"color":"#1d8001","margin":"0 5px 0 0","fontSize":"16px"}' class="icon iconfont icon-jiantou18"></i>
		</div>
		
		</div>
	<!-- 新闻资讯 -->


<!-- 商品推荐 -->
<div id="animate_recommendgequxinxi" class="recommend animate__animated" :style='{"padding":"0 calc((100% - 1200px)/2)","margin":"64px 0 0","borderColor":"#e9e9e9","background":"#fff","borderWidth":"0px","width":"100%","position":"relative","borderStyle":"solid","order":"1"}'>
	<div v-if="false" class="idea recommendIdea" :style='{"padding":"0","top":"105px","left":"calc((100% - 1200px)/2 + 35px)","background":"url(http://codegen.caihongy.cn/20240131/07f0b43b4dae4a399769d3e3e076b783.png) no-repeat center top","width":"231px","position":"absolute","height":"126px"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
    <div class="title" :style='{"margin":"0px 0 40px","borderColor":"#ddd","alignItems":"center","background":"url(http://codegen.caihongy.cn/20240131/2a430ef16f4e4cd097649b7ed3473f46.png) no-repeat center bottom","borderWidth":"0 0 0px","display":"flex","width":"100%","borderStyle":"solid","justifyContent":"center","height":"78px"}'>
		<span :style='{"padding":"0","borderColor":"#fb3f52","margin":"10px 0 0","color":"rgba(22,159, 25,1)","background":"none","borderWidth":"0 0 0px","display":"inline-block","width":"auto","fontSize":"25px","lineHeight":"1.2","borderStyle":"solid","fontWeight":"600"}'>歌曲信息推荐</span>
	</div>
	
	
	
	
	
	
	
	
	
	


	<div v-if="gequxinxiRecommend.length" class="list list11 index-pv1" :style='{"padding":"0","margin":"0","background":"none","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
	  <div class="tab" :style='{"border":"0px solid rgba(22, 159, 25)","padding":"0","margin":"0 40px 0 0","flexWrap":"wrap","background":"none","display":"flex","width":"240px","height":"auto"}'>
		<template v-for="(item,index) in recommendList11gequxinxi">
	    <div v-if="index < 6" :style='{"cursor":"pointer","padding":"0 10px","margin":"0 0 10px","borderColor":"#eee","alignItems":"center","textAlign":"center","display":"flex","justifyContent":"center","borderWidth":"0 0 1px","background":"#169f19","width":"100%","borderStyle":"solid","height":"auto"}' class="item" @click="recommendIndexClick11(item,'gequxinxi')">
	      <span class="icon iconfont icon-jiantou34" :style='{"margin":"0 5px 0 0","lineHeight":"44px","fontSize":"16px","color":"#333","display":"none"}'></span>
	      <img v-if="item.image" :style='{"width":"44px","margin":"0 5px 0 0","objectFit":"cover","display":"none","height":"44px"}' :src="baseUrl + (item.image?item.image.split(',')[0]:'')">
		  <span :style='{"color":"#fff","lineHeight":"44px","fontSize":"14px"}'>{{item[recommendColumn11gequxinxi]}}</span>
	    </div>
		</template>
		<div :style='{"cursor":"pointer","padding":"0 20px","margin":"10px 0","borderColor":"#169f1950","alignItems":"center","textAlign":"center","borderWidth":"1px","display":"flex","width":"100%","borderStyle":"solid","justifyContent":"center","height":"auto"}' class="more" @click="moreBtn('gequxinxi')">
		  <span class="icon iconfont icon-jiantou18" :style='{"margin":"0 5px 0 0","lineHeight":"40px","fontSize":"16px","color":"#169f19","display":"inline-block"}'></span>
		  <div :style='{"lineHeight":"40px","fontSize":"16px","color":"#169f19","display":"inline-block"}'>查看更多</div>
		</div>
	  </div>
	  <div class="list" :style='{"flexWrap":"wrap","flex":"1","background":"none","justifyContent":"space-between","display":"flex","height":"auto"}'>
	    <div :style='{"cursor":"pointer","width":"31%","margin":"0 0 20px","overflow":"hidden","position":"relative","height":"auto"}' class="item list-item animation-box" v-for="item,index in gequxinxiRecommend" :key="index" @click="toDetail('gequxinxiDetail', item)">
			<img :name="item.id" :style='{"width":"100%","margin":"0 0 5px","objectFit":"cover","display":"block","height":"200px"}' v-if="preHttp(item.fengmian)" :src="item.fengmian.split(',')[0]" alt="" />
			<img :name="item.id" :style='{"width":"100%","margin":"0 0 5px","objectFit":"cover","display":"block","height":"200px"}' v-else :src="baseUrl + (item.fengmian?item.fengmian.split(',')[0]:'')" alt="" />
			<div class="line1" :style='{"padding":"0 10px","borderColor":"#ddd","whiteSpace":"nowrap","color":"#333","textAlign":"center","overflow":"hidden","borderWidth":"0 0 0px","background":"#fff","width":"100%","lineHeight":"24px","fontSize":"14px","textOverflow":"ellipsis","borderStyle":"solid"}'>{{item.songname}}</div>
			<div class="line1" :style='{"padding":"0 10px","borderColor":"#ddd","whiteSpace":"nowrap","color":"#333","textAlign":"center","overflow":"hidden","borderWidth":"0 0 0px","background":"#fff","width":"100%","lineHeight":"24px","fontSize":"14px","textOverflow":"ellipsis","borderStyle":"solid"}'>{{item.gequfenlei}}</div>
			<div class="line1" :style='{"padding":"0 10px","borderColor":"#ddd","whiteSpace":"nowrap","color":"#333","textAlign":"center","overflow":"hidden","borderWidth":"0 0 0px","background":"#fff","width":"100%","lineHeight":"24px","fontSize":"14px","textOverflow":"ellipsis","borderStyle":"solid"}'>{{item.singer}}</div>
			<div class="line1" :style='{"padding":"0 10px","borderColor":"#ddd","whiteSpace":"nowrap","color":"#333","textAlign":"center","overflow":"hidden","borderWidth":"0 0 0px","background":"#fff","width":"100%","lineHeight":"24px","fontSize":"14px","textOverflow":"ellipsis","borderStyle":"solid"}'>{{item.zhuanji}}</div>
	    </div>
	  </div>
	</div>





	
	<div @click="moreBtn('gequxinxi')" :style='{"border":"0px solid #fff","cursor":"pointer","padding":"0 10px","margin":"0px auto","textAlign":"center","display":"none","right":"10px","top":"16px","borderRadius":"20px","background":"none","width":"auto","lineHeight":"20px","position":"absolute"}'>
		<span :style='{"color":"#666","fontSize":"14px"}'>更多>></span>
		<i :style='{"color":"#fff","fontSize":"14px","display":"none"}' class="icon iconfont icon-jiantou09"></i>
	</div>
	
</div>
<!-- 商品推荐 -->


<!-- 特价商品 -->
<div id="animate_listsinger" class="lists animate__animated" :style='{"border":"0px solid #e9e9e9","padding":"0 calc((100% - 1200px)/2)","margin":"30px 0","background":"#fff","width":"100%","position":"relative","order":"3"}'>
	<div v-if="false" class="idea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"margin":"0 auto","borderColor":"#d9d9d9","textAlign":"center","background":"url(http://codegen.caihongy.cn/20240131/2a430ef16f4e4cd097649b7ed3473f46.png) no-repeat center bottom","borderWidth":"0 0 0px","width":"100%","borderStyle":"solid","height":"52px"}'>
	  <span :style='{"padding":"0 24px","borderColor":"#fb3f52","color":"rgba(22,159, 25,1)","background":"none","borderWidth":"0 0 0px","display":"inline-block","fontSize":"25px","lineHeight":"44px","borderStyle":"solid","fontWeight":"500","font":"\"微软雅黑\""}'>歌手展示</span>
	</div>
	
	
	
	
	
	
	
	
	
	






	
		<div v-if="singerList.length" class="list list16 index-pv1" :style='{"padding":"0","margin":"30px 0 0","color":"#999","flexWrap":"wrap","background":"none","display":"flex","width":"100%","fontSize":"14px","height":"auto"}'>
		  <div v-for="item,index in singerList" :key="index"  @click="toDetail('singerDetail', item)" class="list-item animation-box">
		    <div :style='{"border":"0px solid #ddd","width":"100%","padding":"0px","overflow":"hidden","height":"300px"}' class="img-box">
				<img class="image" :style='{"width":"100%","objectFit":"cover","display":"block","height":"100%"}' v-if="preHttp(item.touxiang)" :src="item.touxiang.split(',')[0]" alt="" />
				<img class="image" :style='{"width":"100%","objectFit":"cover","display":"block","height":"100%"}' v-else :src="baseUrl + (item.touxiang?item.touxiang.split(',')[0]:'')" alt="" />
			</div>
		    <div :style='{"width":"100%","padding":"0 0px","overflow":"hidden","display":"flex","height":"auto"}' class="item-info">
		      <div :style='{"width":"100%","padding":"5px 0px 0 0","textAlign":"center"}'>
				<div class="title">{{item.singer}}</div>
				<div class="title">{{item.biaoqian}}</div>
				<div class="title">{{item.fengge}}</div>
		        <div :style='{"padding":"0 10px","borderColor":"#ddd","borderStyle":"solid","borderWidth":"0 0 0px 0","display":"none"}' class="time">
		          <span class="icon iconfont icon-shijian21"></span>
		          <span class="text">{{item.addtime}}</span>
		        </div>
		        <div :style='{"padding":"0 10px","borderColor":"#ddd","borderStyle":"solid","borderWidth":"0 0 0px 0","display":"inline-block"}' class="collect">
		          <span class="icon iconfont icon-shoucang10"></span>
		          <span class="text">{{item.storeupnum}}</span>
		        </div>
		      </div>
		      <div class="desc">{{item.gerenzhuanji}}</div>
		    </div>
		  </div>
		</div>
	
	<div @click="moreBtn('singer')" :style='{"border":"1px solid #1d800150","cursor":"pointer","padding":"0 10px","margin":"0px auto 10px","borderRadius":"0px","textAlign":"center","background":"none","display":"flex","width":"200px","lineHeight":"44px","justifyContent":"center"}'>
		<span :style='{"color":"#1d8001","fontSize":"15px","order":"2"}'>查看更多</span>
		<i :style='{"color":"#1d8001","margin":"0 5px 0 0","fontSize":"16px"}' class="icon iconfont icon-jiantou18"></i>
	</div>
	

</div>
<!-- 特价商品 -->

<!-- 特价商品 -->
<div id="animate_listgequxinxi" class="lists animate__animated" :style='{"border":"0px solid #e9e9e9","padding":"0 calc((100% - 1200px)/2)","margin":"30px 0","background":"#fff","width":"100%","position":"relative","order":"3"}'>
	<div v-if="false" class="idea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"margin":"0 auto","borderColor":"#d9d9d9","textAlign":"center","background":"url(http://codegen.caihongy.cn/20240131/2a430ef16f4e4cd097649b7ed3473f46.png) no-repeat center bottom","borderWidth":"0 0 0px","width":"100%","borderStyle":"solid","height":"52px"}'>
	  <span :style='{"padding":"0 24px","borderColor":"#fb3f52","color":"rgba(22,159, 25,1)","background":"none","borderWidth":"0 0 0px","display":"inline-block","fontSize":"25px","lineHeight":"44px","borderStyle":"solid","fontWeight":"500","font":"\"微软雅黑\""}'>歌曲信息展示</span>
	</div>
	
	
	
	
	
	
	
	
	
	






	
		<div v-if="gequxinxiList.length" class="list list16 index-pv1" :style='{"padding":"0","margin":"30px 0 0","color":"#999","flexWrap":"wrap","background":"none","display":"flex","width":"100%","fontSize":"14px","height":"auto"}'>
		  <div v-for="item,index in gequxinxiList" :key="index"  @click="toDetail('gequxinxiDetail', item)" class="list-item animation-box">
		    <div :style='{"border":"0px solid #ddd","width":"100%","padding":"0px","overflow":"hidden","height":"300px"}' class="img-box">
				<img class="image" :style='{"width":"100%","objectFit":"cover","display":"block","height":"100%"}' v-if="preHttp(item.fengmian)" :src="item.fengmian.split(',')[0]" alt="" />
				<img class="image" :style='{"width":"100%","objectFit":"cover","display":"block","height":"100%"}' v-else :src="baseUrl + (item.fengmian?item.fengmian.split(',')[0]:'')" alt="" />
			</div>
		    <div :style='{"width":"100%","padding":"0 0px","overflow":"hidden","display":"flex","height":"auto"}' class="item-info">
		      <div :style='{"width":"100%","padding":"5px 0px 0 0","textAlign":"center"}'>
				<div class="title">{{item.songname}}</div>
				<div class="title">{{item.gequfenlei}}</div>
				<div class="title">{{item.singer}}</div>
				<div class="title">{{item.zhuanji}}</div>
		        <div :style='{"padding":"0 10px","borderColor":"#ddd","borderStyle":"solid","borderWidth":"0 0 0px 0","display":"none"}' class="time">
		          <span class="icon iconfont icon-shijian21"></span>
		          <span class="text">{{item.addtime}}</span>
		        </div>
		        <div :style='{"padding":"0 10px","borderColor":"#ddd","borderStyle":"solid","borderWidth":"0 0 0px 0","display":"inline-block"}' class="publisher">
		          <span class="icon iconfont icon-geren16"></span>
		          <span class="text">{{item.yonghuming}}</span>
		        </div>
		        <div :style='{"padding":"0 10px","borderColor":"#ddd","borderStyle":"solid","borderWidth":"0 0 0px 0","display":"inline-block"}' class="collect">
		          <span class="icon iconfont icon-shoucang10"></span>
		          <span class="text">{{item.storeupnum}}</span>
		        </div>
		        <div :style='{"padding":"0 10px","display":"inline-block"}' class="view">
		          <span class="icon iconfont icon-chakan9"></span>
		          <span class="text">{{item.clicknum}}</span>
		        </div>
		      </div>
		      <div class="desc">{{item.gecidayi}}</div>
		    </div>
		  </div>
		</div>
	
	<div @click="moreBtn('gequxinxi')" :style='{"border":"1px solid #1d800150","cursor":"pointer","padding":"0 10px","margin":"0px auto 10px","borderRadius":"0px","textAlign":"center","background":"none","display":"flex","width":"200px","lineHeight":"44px","justifyContent":"center"}'>
		<span :style='{"color":"#1d8001","fontSize":"15px","order":"2"}'>查看更多</span>
		<i :style='{"color":"#1d8001","margin":"0 5px 0 0","fontSize":"16px"}' class="icon iconfont icon-jiantou18"></i>
	</div>
	

</div>
<!-- 特价商品 -->
	
	<!-- 友链 -->
	<div id="friendly" class="friendly animate__animated" :style='{"padding":"0 calc((100% - 1200px)/2)","margin":"20px auto 0","borderColor":"#ededed","background":"#fff","borderWidth":"0px","width":"100%","borderStyle":"solid","height":"auto","order":"60"}'>
	  <div :style='{"padding":"0 0 10px","borderColor":"#ddd","margin":"0 auto","textAlign":"center","borderWidth":"0 0 0px","background":"url(http://codegen.caihongy.cn/20240131/2a430ef16f4e4cd097649b7ed3473f46.png) no-repeat center bottom","width":"100%","borderStyle":"solid","height":"auto"}'>
	    <div :style='{"padding":"0 20px","borderColor":"#fb3f52","margin":"0","color":"rgba(22,159, 25,1)","borderWidth":"0 0 0px","background":"none","display":"inline-block","lineHeight":"44px","fontSize":"25px","borderStyle":"solid","fontWeight":"500","height":"48px"}'>友情链接</div>
	  </div>
	  <div :style='{"width":"100%","padding":"20px 0 0 20px","flexWrap":"wrap","background":"#fff","display":"flex","height":"auto"}'>
	    <div :style='{"cursor":"pointer","margin":"0 5% 20px 0","alignItems":"center","flexDirection":"column","display":"flex","width":"auto","justifyContent":"flex-start","height":"auto"}' v-for="item in friendLinkList" :key="item.id" @click="friendlinkClick(item.url)">
	      <img :style='{"border":"0px solid #eee","padding":"0","margin":"0 auto","objectFit":"cover","borderRadius":"0px","background":"#fcfcfc","display":"none","width":"100%","height":"100px"}' :src="item.picture?(baseUrl + item.picture.split(',')[0]): ''" alt="">
	      <div :style='{"overflow":"hidden","whiteSpace":"nowrap","color":"#666","textAlign":"center","width":"100%","lineHeight":"40px","fontSize":"14px","textOverflow":"ellipsis"}'>{{item.name}}</div>
	    </div>
	  </div>
	</div>
	<!-- 友链 -->
</div>
</template>

<script>
import 'animate.css'
import Swiper from "swiper";

  export default {
    //数据集合
    data() {
      return {
        baseUrl: '',
        systemIntroductionDetail: {},
        newsList: [],
        gequxinxiRecommend: [],

        singerList: [],
        gequxinxiList: [],


		recommendIndex11gequxinxi: '',
		recommendList11gequxinxi: [],
		recommendColumn11gequxinxi: '',


		friendLinkList: [],
      }
    },
    created() {
		this.baseUrl = this.$config.baseUrl;
		this.getNewsList();
		this.getSystemIntroduction();
		this.getList();
		this.gequxinxiRecommendCate()
		this.getFriendLinkList()
    },
	mounted() {
		window.addEventListener('scroll', this.handleScroll)
		setTimeout(()=>{
			this.handleScroll()
		},100)
		
		this.swiperChanges()
	},
	beforeDestroy() {
	  window.removeEventListener('scroll', this.handleScroll)
	},
    //方法集合
    methods: {
		swiperChanges() {
			setTimeout(()=>{
			},750)
		},
		// 获取友链列表
		getFriendLinkList(){
			this.$http.get('friendlink/list', {params:{page: 1,limit: 100}}).then(res => {
			  if(res.data.code == 0) {
			    this.friendLinkList = res.data.data.list
			  }
			})
		},
		// 友链跳转
		friendlinkClick(url){
			if(url){
				window.open(url)
			}
		},
		gequxinxiRecommendCate(){
			this.$http.get('gequfenlei/list',{}).then(res => {
			  if (res.data.code == 0) {
				this.recommendList11gequxinxi = res.data.data.list
			  }
			});
			this.recommendColumn11gequxinxi = 'gequfenlei'
		},
		recommendIndexClick11(index, name) {
			this['recommendIndex11' + name] = index[this['recommendColumn11' + name]]
			this.getList()
		},


		handleScroll() {
			let arr = [
				{id:'search',css:'animate__'},
				{id:'about',css:'animate__'},
				{id:'system',css:'animate__'},
				{id:'animate_listsinger',css:'animate__'},
				{id:'animate_recommendgequxinxi',css:'animate__'},
				{id:'animate_listgequxinxi',css:'animate__'},
				{id:'animate_newsnews',css:'animate__'},
				{id:'msgs',css:'animate__'},
				{id:'friendly',css:'animate__'}
			]
			
			for (let i in arr) {
				let doc = document.getElementById(arr[i].id)
				if (doc) {
					let top = doc.offsetTop
					let win_top = window.innerHeight + window.pageYOffset
					// console.log(top,win_top)
					if (win_top > top && doc.classList.value.indexOf(arr[i].css) < 0) {
						// console.log(doc)
						doc.classList.add(arr[i].css)
					}
				}
			}
		},
      preHttp(str) {
          return str && str.substr(0,4)=='http';
      },
      getSystemIntroduction() {
          this.$http.get('systemintro/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.systemIntroductionDetail = res.data.data;
            }
          })
      },
		getNewsList() {
			let data = {
				page: 1,
				limit: 6,
                sort: 'addtime',
				order: 'desc'
			}
			this.$http.get('news/list', {params: data}).then(res => {
				if (res.data.code == 0) {
					this.newsList = res.data.data.list;
					
					
				}
			});
		},
		getList() {
			let autoSortUrl = "";
			let data = {}
          autoSortUrl = "gequxinxi/autoSort";
			data = {
				page: 1,
				limit: 6,
			}
			data['sfsh'] = '是'
				if(this.recommendIndex11gequxinxi){
					data.gequfenlei = this.recommendIndex11gequxinxi
				}
			this.$http.get(autoSortUrl, {params: data}).then(res => {
				if (res.data.code == 0) {
					this.gequxinxiRecommend = res.data.data.list;
					
					
					// 商品列表样式五
					
				}
			});
			
			data = {
				page: 1,
				limit: 6,
			}
			this.$http.get('singer/list', {params: data}).then(res => {
				if (res.data.code == 0) {
					this.singerList = res.data.data.list;
					
					// 商品列表样式五
					
				}
			});
			data = {
				page: 1,
				limit: 6,
			}
			data['sfsh']= '是'
			this.$http.get('gequxinxi/list', {params: data}).then(res => {
				if (res.data.code == 0) {
					this.gequxinxiList = res.data.data.list;
					
					// 商品列表样式五
					
				}
			});
		},
		toDetail(path, item) {
			this.$router.push({path: '/index/' + path, query: {id: item.id}});
		},
		moreBtn(path) {
			this.$router.push({path: '/index/' + path});
		}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
		// -------- search --------
		.search .select /deep/ .el-input__inner {
			border: 0px solid #ddd;
			border-radius: 0px;
			padding: 0 30px 0 10px;
			color: #666;
			width: 180px;
			font-size: 14px;
			height: 40px;
		}
		
		.search .input /deep/ .el-input__inner {
			border: 0px solid #ddd;
			border-radius: 0px;
			padding: 0 10px;
			box-shadow: 0 0 0px rgba(64, 158, 255, .3);
			outline: none;
			color: #666;
			width: 350px;
			font-size: 14px;
			height: 40px;
		}
		// -------- search --------
		.recommend {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
        }
        
        .list5 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, -10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1.02) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
		
		.news {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list6 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list6 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	
		.lists {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
        }
        
        .list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-next {
            left: auto;
            right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1.1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	}
	










	.home-preview .lists .list16 .list-item {
				border: 1px solid #eee;
				cursor: pointer;
				padding: 10px;
				margin: 0 2% 30px 0;
				background: none;
				display: flex;
				width: 31.3%;
				font-size: 0;
				position: relative;
				flex-wrap: wrap;
				height: auto;
			}
	
	.home-preview .lists .list16 .list-item:hover {
				border: 1px solid #16a019;
				background: #fff;
			}
	
	.home-preview .lists .list16 .list-item .title {
				padding: 0 10px;
				overflow: hidden;
				color: #333;
				white-space: nowrap;
				width: 100%;
				font-size: 14px;
				border-color: #ddd;
				border-width: 0 0 0px 0;
				line-height: 24px;
				text-overflow: ellipsis;
				border-style: solid;
				text-align: center ;
			}
	
	.home-preview .lists .list16 .list-item:hover .title {
				color: #333;
			}
	
	.home-preview .lists .list16 .list-item .time .icon {
				margin: 0 2px 0 0;
				color: inherit;
				font-size: 14px;
				line-height: 28px;
			}
	.home-preview .lists .list16 .list-item:hover .time .icon {
				color: #666;
			}
	.home-preview .lists .list16 .list-item .time .text {
				color: inherit;
				font-size: 14px;
				line-height: 28px;
			}
	.home-preview .lists .list16 .list-item:hover .time .text {
				color: #666;
			}
	
	.home-preview .lists .list16 .list-item .publisher .icon {
				margin: 0 2px 0 0;
				color: inherit;
				font-size: 14px;
				line-height: 28px;
			}
	.home-preview .lists .list16 .list-item:hover .publisher .icon {
				color: #666;
			}
	.home-preview .lists .list16 .list-item .publisher .text {
				color: inherit;
				font-size: 14px;
				line-height: 28px;
			}
	.home-preview .lists .list16 .list-item:hover .publisher .text {
				color: #666;
			}
	
	.home-preview .lists .list16 .list-item .like .icon {
				margin: 0 2px 0 0;
				color: inherit;
				font-size: 4px;
				line-height: 28px;
			}
	.home-preview .lists .list16 .list-item:hover .like .icon {
				color: #666;
			}
	.home-preview .lists .list16 .list-item .like .text {
				color: inherit;
				font-size: 14px;
				line-height: 28px;
			}
	.home-preview .lists .list16 .list-item:hover .like .text {
				color: #666;
			}
	
	.home-preview .lists .list16 .list-item .collect .icon {
				margin: 0 2px 0 0;
				color: inherit;
				font-size: 14px;
				line-height: 28px;
			}
	.home-preview .lists .list16 .list-item:hover .collect .icon {
				color: #666;
			}
	.home-preview .lists .list16 .list-item .collect .text {
				color: inherit;
				font-size: 14px;
				line-height: 28px;
			}
	.home-preview .lists .list16 .list-item:hover .collect .text {
				color: #666;
			}
	
	.home-preview .lists .list16 .list-item .view .icon {
				margin: 0 2px 0 0;
				color: inherit;
				font-size: 14px;
				line-height: 28px;
			}
	.home-preview .lists .list16 .list-item:hover .view .icon {
				color: #666;
			}
	.home-preview .lists .list16 .list-item .view .text {
				color: inherit;
				font-size: 14px;
				line-height: 28px;
			}
	.home-preview .lists .list16 .list-item:hover .view .text {
				color: #666;
			}
	
	.home-preview .lists .list16 .list-item .desc {
				color: #666;
				flex: 1;
				display: none;
				font-size: 12px;
				line-height: 1.5;
			}
	.home-preview .lists .list16 .list-item:hover .desc {
				color: #fff;
			}
</style>
