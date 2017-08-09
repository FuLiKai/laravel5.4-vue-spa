<template>
    <div class="container">
        <div class="header">
            <op-header></op-header>
        </div>
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
    </div>
</template>

<style lang="scss" scoped>
    .client, .content {
        display: flex;
    }
</style>

<script>
    export default {

    }
</script>