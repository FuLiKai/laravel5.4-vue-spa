<template>
    <div class="container">
        <op-header></op-header>
        <div class="client">
            <div class="nav">
                <op-navigation></op-navigation>
            </div>
            <div class="content">
                <transition name="fade" enter-active-class="fadeIn" leave-active-class="fadeOut">
                    <router-view class="animated"></router-view> 
                </transition>   
            </div>
        </div>
        <op-footer></op-footer>
    </div>
</template>

<style lang="scss" scoped>
    .client, .content {
        display: flex;
        width: 100%;
    }
    .client {
        min-height: 924px;
    }
</style>

<script>
    export default {

    }
</script>