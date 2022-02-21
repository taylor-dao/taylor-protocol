<template>
  <article class="scan_index_view">

    <com-header></com-header>

    <article class="center_box w1340">
      <section class="card_box">
        <h2 class="h2_title">
          <div class="tx_title"><i class="h5_icon icon_home_block mr_10"></i><span>Block</span></div>
          <div class="right_tx" @click="goRouter('/block_list/')">More<i class="h5_icon icon_arrow_right"></i></div>
        </h2>
        <div class="com_nodata_box" v-show="!blockData.length">
          <i class="h5_icon icon_nodata"></i>
          <p>No data</p>
        </div>
        <div class="block_item_box" v-for="(list, index) in blockData" :key="index">
          <div class="left_box">
            <p class="item">
              <span class="right_tx">{{list.height}}</span>
            </p>
            <p class="item">
              <span class="left_tx times">{{dataFormat(list.block_time)}}</span>
            </p>
          </div>
          <div>
            <p class="item">

              <span class="right_tx color_T4">{{numFormat(list.transaction_total)}} Txns</span>
            </p>
          </div>
          <div class="right_box">
            <p class="item color_T4">
              <span class="left_tx">Miners:</span>
              <span class="right_tx">{{numFormat(list.mining_people)}}</span>
            </p>

          </div>
        </div>
      </section>
      <section class="card_box">
        <h2 class="h2_title">
          <div class="tx_title"><i class="h5_icon icon_home_transaction mr_10"></i><span>Transaction</span></div>
          <div class="right_tx" @click="goRouter('/transaction_list/')">More<i class="h5_icon icon_arrow_right"></i></div>
        </h2>
        <div class="com_nodata_box" v-show="!txData.length">
          <i class="h5_icon icon_nodata"></i>
          <p>No data</p>
        </div>
        <div class="transaction_item_box" v-for="(list, index) in txData" :key="'tx' + index">
          <div class="left_box">
            <p class="item">
              <span class="left_tx color_T1"><span >{{substr(list.tx_id, 0,6)}}...{{substr(list.tx_id, -6)}}</span></span>
            </p>
            <p class="item tx">{{list.method_str_en}}</p>
          </div>
          <div>
            <p class="item">
              <span class="left_tx color_T4">From: </span>
              <span class="right_tx color_T1"><span >{{substr(list.from, 0,6)}}...{{substr(list.from, -6)}}</span></span>
            </p>
            <p class="item">
              <span class="left_tx color_T4">To: </span>
              <span class="right_tx color_T1"><span>{{substr(list.to, 0,6)}}...{{substr(list.to, -6)}}</span></span>
            </p>
          </div>
          <div class="right_box">
            <p class="item">
              <span class="left_tx">{{numFormat(list.value)}} TL</span>
            </p>
            <p class="item">
              <span class="left_tx tx">{{dataFormat(list.block_time)}}</span>
            </p>
          </div>
        </div>
      </section>
    </article>

  </article>


</template>

<script>
import ComHeader from '~/components/header/index.vue'
import socket from '~/utils/socket/index'
export default {
  name: 'Index',
  data () {
    return {
      isBeforeDestroy: false,
      socket: null,
      socketTimeFn: null,
      socketTime: 5000,
      blockData: [],
      txData: [],
    }
  },
  created () {
    this.socketFn()
  },
  beforeDestroy () {
    this.isBeforeDestroy = true
    clearTimeout(this.socketTimeFn)
    if (this.socket) {
      this.socket.destroy()
      this.socket = null
    }
  },
  components: {
    ComHeader,
  },
  methods: {
    socketFn () {
      this.socket = new socket(`${this.Utils.URL.wsURL}browserData`)
      this.socket.doOpen()
      this.socket.on('open', () => {})
      this.socket.on('message', this.onMessage)
      this.socket.on('close', this.onClose)
    },
    onClose () {
      if (this.isBeforeDestroy) {
        return false
      }
      this.socket.destroy()
      this.socket = null
      this.socketTimeFn = setTimeout( () => {this.socketFn()}, this.socketTime)
      this.socketTime = this.socketTime + 5000
    },
    onMessage (res) {
      if (res.type == 2) {
        this.blockData = res.data.list ? res.data.list : []
      }
      if (res.type == 3) {
        this.txData = res.data.list ? res.data.list : []
      }
    },
  }
}
</script>

<style lang="scss">
  .scan_index_view{

    .h2_title{
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: $T1;
      padding: 14px 24px;
      border-bottom: 1px solid $BR;
      .right_tx{
        font-size: 12px;
        cursor: pointer;
        .icon_arrow_right{
          top: 1px;
        }
      }
      .tx_title{
        display: flex;
        align-items: center;
      }
    }

    .card_box{
      margin-bottom: 20px;
      background: $FFF;
      border-radius: 8px;
    }

    .center_box{
      display: flex;
      justify-content: space-between;
      .card_box{
        width: 660px;
        min-height: 100%;
      }
      .block_item_box{
        padding: 20px 0px;
        margin: 0 24px;
        display: flex;
        border-bottom: 1px solid $BR;
        justify-content: space-between;
        >div{
          width: 33.33%;
        }
        .left_box{
        }
        .right_box{
          text-align: right
        }
        .times{
          font-size: 12px;
          color: $T5;
          margin-top: 4px;
        }
        .item{

        }
      }
      .block_item_box:last-child{
        border-bottom: 0px;
      }
      .transaction_item_box:last-child{
        border-bottom: 0px;
      }
      .transaction_item_box{
        padding: 20px 0px;
        margin: 0 24px;
        display: flex;
        border-bottom: 1px solid $BR;
        align-items: center;
        justify-content: space-between;
        .tx{
          font-size: 12px;
          color: $T5;
          margin-top: 4px;
        }
        >div{
          width: 33.33%;
        }
        .right_box{
          text-align: right;
        }
      }
    }

  }
</style>
