<template>
    <div id="index">
        <TabBar ref='tabbar' @tabBarChange='tabBarChange' />
        <div class="pagebox">
            <!-- v-if  v-else-if v-else 与 v-show 同样出现短暂空白 -->
            <transition-group :name="transitionName">
                <Home v-show='currentPage=="home"' :key='"home"' />
                <Category v-show='currentPage=="category"' :key='"category"' />
                <Cart v-show='currentPage=="cart"' :key='"cart"' @setCurPage='setCurPage' />
                <Mine v-show='currentPage=="mine"' :key='"mine"' />
            </transition-group>
        </div>
    </div>
</template>
<script>
import TabBar from '../components/tabBar'
import Home from './home'
import Category from './category'
import Cart from './cart'
import Mine from './mine'

export default {
    name: 'Index',
    components: {
        TabBar,
        Home,
        Category,
        Cart,
        Mine
    },
    data() {
        return {
            currentPage: 'home',
            transitionName: 'pre',
            preTabIndex: 0
        }
    },
    created() {
        console.log('【index.vue】');
        if (this.$router.history.current.name === 'Index' && this.currentPage === 'home') {
            window.onBack = () => {
                console.log('不再返回');
            }
        }
    },
    methods: {
        tabBarChange(params) {
            console.log(params);
            this.currentPage = params.pageName;
            if (this.preTabIndex >= params.index) {
                this.transitionName = 'next'
            } else {
                this.transitionName = 'pre'
            }
            this.preTabIndex = params.index;
        },
        setCurPage(params) { // 来自子组件的触发
            this.tabBarChange(params); // 切换当前页面
            this.$refs.tabbar.setCurTab(params); // 触发子组件tabbar激活状态
        }
    },
    mounted() {
        this.$ajax.run('queryGoodsInfo', {}, r => {
            // console.log('queryGoodsInfo==='+ r);
        })
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../common/css/reset.css';

.pagebox {
    width: 100%;
    min-height: calc(100% - 52px);
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 0;
}

.next-enter-active {
    animation-name: next-in;
    animation-duration: .5s;
}

.next-leave-active{
    animation-name: next-out;
    animation-duration: .5s;
}
.pre-enter-active {
    animation-name: pre-in;
    animation-duration: .5s;
}

.pre-leave-active{
    animation-name: pre-out;
    animation-duration: .5s;
}
@keyframes pre-in {
  0% {
    transform: translate(100%, 0)
  }
  100% {
    transform: translate(0, 0)
  }
}
@keyframes pre-out {
  0% {
    transform: translate(0, 0)
  }
  100% {
    transform: translate(-100%, 0)
  }
}

@keyframes next-in {
  0% {
    transform: translate(-100%, 0)
  }
  100% {
    transform: translate(0, 0)
  }
}
@keyframes next-out {
  0% {
    transform: translate(0, 0)
  }
  100% {
    transform: translate(100%, 0)
  }
}


</style>
