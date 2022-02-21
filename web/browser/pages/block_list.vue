<template>
    <article class="scan_block_list_view">
      <com-header></com-header>
      <article class="w1340">
        <section class="head_box">
          <h2>
            <span class="title">Block</span>
            <span class="txs">The list only shows the previous ones 10,000 Time Records (Update on: {{dataFormat(time)}})</span>
          </h2>
        </section>

        <ul class="item_box">
          <li class="item item_head">
            <div class="td">Block</div>
            <div class="td">Time</div>
            <div class="td">Block Number</div>
            <div class="td">Miners</div>
            <div class="td">Size</div>
            <div class="td">Status</div>
            <div class="td">Liquidity mining number</div>
            <div class="td tx_r">DAO mining number</div>
          </li>
          <li class="item item_list" v-for="(list, index) in resData" :key="index">
            <div class="td color_T4"><span >{{list.height}}</span></div>
            <div class="td color_T4">{{dataFormat(list.block_time)}}</div>
            <div class="td color_T4">{{list.transaction_total}} Txns</div>
            <div class="td color_T4">{{list.mining_people}}</div>
            <div class="td color_T4">{{list.block_size}} Bytes</div>
            <div class="td color_T4">{{statusTx(2, list.status)}}</div>
            <div class="td color_T4">{{numFormat(list.liquidity_mining_number)}} {{list.symbol}}</div>
            <div class="td color_T4 tx_r">{{numFormat(list.extension_mining_number)}} {{list.symbol}}</div>
          </li>
        </ul>
        <section class="page_box mt_40 tx_cen">
          <Page :total="total" :current="page" @on-change="pageFn"/>
        </section>
      </article>
    </article>
</template>

<script>
  import ComHeader from '~/components/header/index.vue'
  import { getBlockList }from '~/utils/api/block_list.js'
    export default {
      name: 'BlockList',
      data () {
        return {
          flowChartData: [],
          resData: [],
          page: 1,
          size: 10,
          total: 1,
          isOnce: true,
          time: '',
        }
      },
      components: {
        ComHeader,
      },
      created () {
        this.resInit()
      },
      methods: {
        statusTx (ec, status) {
          if (!ec) {
            return '-'
          }
          if (ec ==1) {
            return 'Confirming'
          }
          if (status == 1 && ec == 2) {
            return 'Success'
          }
          return 'Failed'
        },
        async resInit () {
          try {
            const res = await getBlockList({
              page: this.page,
              size: this.size,
            })
            this.resData = res.list ? res.list : []
            this.total = parseFloat(res.total)
            if (this.isOnce) {
              this.time = this.resData[0].block_time
              this.isOnce = false
            }
          } catch (e) {
            this.$Message.error(e.msg)
          }
        },
        pageFn (index) {
          this.page = index
          this.resInit()
        },
      }
    }
</script>

<style lang="scss">
  .scan_block_list_view{
    .head_box{
      background: $FFF;
      line-height: 66px;
      padding: 0px 24px;
      border-radius: 8px 8px 0 0;
      .title{
        color: $T4;
        font-size: 18px;
        margin-right: 10px;
      }
      .txs{
        color: $T5;
        font-size: 12px;
        font-weight: 400;
      }
    }
    .item_box{
      background: $FFF;
      border-radius: 0 0 8px 8px;
      .item_head{
        padding: 0px 14px;
        border-top: 1px solid $BR;
        border-bottom: 1px solid $BR;
        font-size: 12px;
        color: $T5;
        .td{
          padding: 10px;
        }
      }
      .item_list{
        color: $T4;
        margin: 0px 14px;
        border-bottom: 1px solid $BR;
        .td{
          padding: 20px 10px;
        }
      }
      .item_list:last-child{
        .td{
          border-bottom: 0px;
        }
      }
      .item{
        display: flex;
        align-items: center;
        .td{
          width: calc((100% - 100px)  / 7);

        }
        .td_width{
          width: 100px;
        }
      }
    }
  }

</style>
