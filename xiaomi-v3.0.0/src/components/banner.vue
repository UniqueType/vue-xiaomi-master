<template>
    <div id="banner" class="banner swipe-wrapper">
        <mt-swipe :auto='3000' :continuous="true">
            <mt-swipe-item v-for="(item,index) in bannerList" :key='index'>
                <img :src="item.url" @click="goToBanner(item)">
        </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

export default {
    name: 'banner',
    components: {
        'mt-swipe': Swipe,
        'mt-swipe-item': SwipeItem
    },
    data() {
        return {
            bannerList: []
        }
    },
    created() {
        console.log('【banner.vue】');
        this.$ajax.run('getBanner', {}, r => {
            console.log(r);
            this.bannerList = this.filterBanner(r, this.bannerType);
        });
    },
    methods: {
        goToBanner(item) {
            console.log(item);
        },
        filterBanner(list, type) {
            let arr = [];
            for (let i = 0; i < list.length; i++) {
                if (type === list[i].bannerType) {
                    arr.push(list[i]);
                } else if (type === list[i].bannerType) {
                    arr.push(list[i]);
                } else {}
            }
            return arr
        }
    },
    props: {
        bannerType: {
            type: String,
            default: '0'
        }
    }
}

</script>
<style scoped>
.banner {
    width: 100%;
    height: 180px;
}

.banner img {
    width: 100%;
}

</style>
