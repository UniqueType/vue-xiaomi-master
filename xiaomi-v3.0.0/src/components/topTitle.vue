<template>
    <div id="topTitle" class="topTitle">
        <div class="backbtn" onClick='window.backbtnClick()'>
            <span class="icon"></span>
        </div>
        <div class="title">{{titleBarParams.title}}</div>
        <div class="topright" @click='rightBtnClick'>
            <div class="icon" v-if='titleBarParams.rightBtnType=="icon"'>
                <img :src="titleBarParams.rightBtnIcon" alt="">
        </div>
                <span v-else>{{titleBarParams.rightBtnText}}</span>
            </div>
        </div>
</template>
<script>
export default {
    name: 'topTitle',
    data() {
        return {}
    },
    created() {
        console.log(this.$name)
    },
    methods: {
        rightBtnClick() {
            console.log('rightBtnClick==' + this.titleBarParams.rightBtnClick);
            if (this.titleBarParams.rightBtnClick && this.titleBarParams.rightBtnClick !== 'null') {
                this.$emit(this.titleBarParams.rightBtnClick, this.titleBarParams.curPageName)
            }
        }
    },
    props: {
        titleBarParams: {
            type: Object,
            default: () => {
                return {
                    title: '',
                    rightBtnType: 'icon', // text || icon
                    rightBtnIcon: 'static/assets/more.png',
                    rightBtnText: '更多',
                    rightBtnClick: null,
                    curPageName: 'Cart'
                }
            }
        }
    }
}

</script>
<style scoped>
@import '../common/css/reset.css';

.topTitle {
    width: 100%;
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    background-color: #eee;
    font-size: 20px;
    color: #343;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
}

.topTitle .backbtn {
    width: 40px;
    height: 40px;
}

.topTitle .backbtn .icon {
    display: inline-block;
    margin: 10px;
    width: 30px;
    height: 30px;
    background: url('../../static/assets/arrow.png') no-repeat;
    background-size: cover;
    transform: rotate(90deg);
}

.topright .icon {
    width: 30px;
    height: 30px;
    margin: 10px;
}

.topright .icon img {
    width: 100%;
    height: 100%;
}

.topright span {
    padding-right: 10px;
}

</style>
