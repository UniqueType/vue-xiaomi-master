<template>
    <div id="category" class="category">
        <div class="marintop50"></div>
        <TopTitle :titleBarParams='titleBarParams' />
        <div class="category-content">
            <div class="category-left">
                <PortraitNav class='PortraitNav' @PortraitNavBarChange='PortraitNavBarChange' />
            </div>
            <div class="category-right">
                <PhoneList />
                <div class="marintop60"></div>
            </div>
        </div>
    </div>
</template>
<script>
import TopTitle from '../components/topTitle.vue'
import PortraitNav from '../components/portraitNav.vue'
import PhoneList from '../components/phoneList.vue'

export default {
    name: 'Category',
    components: {
        TopTitle,
        PortraitNav,
        PhoneList
    },
    data() {
        return {
            titleBarParams: {
              title: '分类',
              rightBtnType: 'text', // text || icon
              rightBtnIcon: 'static/assets/search.png',
              rightBtnText: '更多',
              rightBtnClick: null,
              curPageName: 'Category'
          }
        }
    },
    created() {
        window.onBack = () => {
            // 接管返回事件
            console.log('category --- onBack')
        }
    },
    methods: {
        PortraitNavBarChange(params) {
            console.log('PortraitNavBarChange');
        }
    },
    destroyed() {
        console.log('destroy')
        window.onBack = null;
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css">
.category-content {
    width: 100%;
    height: calc(100% - 102px);
    /* overflow: auto; */
}

.category-content .category-left {
    width: 25%;
    height: calc(100% - 102px);
    overflow: scroll;
    border-right: 2px solid #eee;
    position: fixed;
    left: 0;
    top: 50px;
}

.category-content .category-right {
    width: 75%;
    float: right;
}

</style>
