<template>
  <article class="h5_header_comp">

    <section class="menu_box w1340">
      <div class="logo-box">
        <i class="h5_icon icon_logo"></i>
      </div>
      <div class="nav_box">
        <p class="item" @click="goRouter('/')">Home</p>
        <p class="item" @click="goRouter('/block_list/')">Block</p>
        <p class="item" @click="goRouter('/address_list/')">Address</p>
        <p class="item" @click="goRouter('/transaction_list/')">Transactions</p>
        <p class="item" @click="goRouter('/transfer_list/')">Transfer</p>
      </div>
      <div class="nav_box">
        <p class="item">English</p>
      </div>
    </section>

    <section class="search_box" v-if="false">
      <input type="text" class="input_search" v-model="searchTx" placeholder="Please enter the address/transaction hash/block number">
      <input type="button" class="input_btn"  @click="searchFn">
    </section>

    <div class="t_bg1"></div>
    <div class="t_bg2"></div>
  </article>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        searchTx: ''
      }
    },
    methods: {
      searchFn () {}
    }
  }
</script>

<style lang="scss">
  .h5_header_comp{
    padding: 36px 0 0;
    font-size: 14px;
    position: relative;
    height: 150px;
    margin-bottom: 40px;
    z-index: 2;
    .t_bg1{
      position: absolute;
      background-image: url("../../assets/img/header/t_bg1.png");
      background-position: center top;
      width: 100%;
      height: 150px;
      top: 0px;
      left: 0px;
      z-index: -2;
    }
    .t_bg2{
      position: absolute;
      background-image: url("../../assets/img/header/t_bg2.png");
      background-position: center top;
      width: 100%;
      height: 150px;
      top: 0px;
      left: 0px;
      z-index: -1;
    }
    .menu_box{
      display: flex;
      color: $T7;
      justify-content: space-between;
      .logo-box{
        display: flex;
        font-size: 18px;
        font-weight: bold;
        color: $FFF;
        .icon_logo{
          margin-right: 8px;
        }
      }
      .nav_box{
        display: flex;

        .item:last-child{
          margin-right: 0;
        }
        .item{
          cursor: pointer;
          margin-right: 50px;
          position: relative;
          padding: 0 0 0 8px ;
        }
      }

    }
    .search_box{
      margin: 24px auto 0;
      width: 600px;
      height: 46px;
      background: $FFF;
      box-shadow: inset 0px -1px 0px rgba(255, 255, 255, 0.12);
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      padding: 0 3px;
      align-items: center;
      .input_search{
        background: $FFF;
        padding: 0 10px;
        font-size: 12px;
        flex: 1;
      }
      .input_btn{
        cursor: pointer;
        color: $T1;
        background-color: $T1;
        width: 66px;
        height: 40px;
        border-radius: 6px;
        background-image: url("../../assets/img/icon/search.png");
        background-repeat: no-repeat;
        background-position: 24px 12px;
      }
    }
  }
</style>
