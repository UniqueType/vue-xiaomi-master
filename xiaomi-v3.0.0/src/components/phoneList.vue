<template>
    <div class="phoneList">
        <mt-loadmore :top-method="refresh" :bottom-method="loadMore" :bottomPullText='loadMoreText' ref="loadmore" cancelable='true'  :bottom-all-loaded="allLoaded">
            <ul class="phoneList-ul">
                <li v-for='(item,index) in phoneList' :key='index'>
                    <div class="image">
                        <img :src="item.url" alt="">
                    </div>
                    <div class="content">
                        <div class="name f_s_20">{{item.productName}}</div>
                        <div class="desc color_999 f_s_14">{{item.desc}}</div>
                        <div class="price">
                            <span class="color_f60">￥{{item.discountPrice}}</span>
                            <span class="linethrough color_999 f_s_12">￥{{item.price}}</span>
                        </div>
                    </div>
                </li>
            </ul>
        </mt-loadmore>
        <div v-if='allLoaded' class="color_999 text_center">没有更多啦，了解小米</div>
    </div>
</template>
<script>
import '../common/css/reset.css'
import '../common/css/common.css'
import { Loadmore } from 'mint-ui'

export default {
    name: 'PhoneList',
    components: {
        'mt-loadmore': Loadmore
    },
    data() {
        return {
            phoneList: [],
            loadMoreText: '加载更多...',
            allLoaded: false
        }
    },
    created() {
        this.$ajax.run('getPhoneList', {}, (res) => {
            console.log(res)
            this.phoneList = res;
        })
    },
    methods: {
        refresh() {
            console.log('refresh');
            this.$refs.loadmore.onTopLoaded();
        },
        loadMore() {
            console.log('loadmore');
            setTimeout(() => {
                this.allLoaded = true; // 不再刷新
                this.$refs.loadmore.onBottomLoaded(); // 固定方法，查询完要调用一次，用于重新定位
            }, 2000);
        }
    },
    activated() {
        this.allLoaded = false;
    }
}

</script>
<style scoped>
.phoneList-ul {
    width: 100%;
    overflow: hidden;
}

.phoneList-ul img {
    width: 100%;
    margin-bottom: 5px;
}

.phoneList-ul li {
    width: 49%;
    float: left;
    margin-bottom: 20px;
}

.phoneList-ul li .content {
    padding-left: 10px;
}

.phoneList-ul li:nth-of-type(2n) {
    margin-left: 2%;
}

</style>
