<template>
    <article class="h5_transfer_list_view">
      <com-header></com-header>
      <article class="w1340">
        <section class="head_box">
          <h2>
            <span class="title">Transfer</span>
            <span class="txs">The list only shows the previous ones 10,000 Time Records (Update on: {{dataFormat(time)}})</span>
          </h2>
        </section>
        <ul class="item_box">
          <li class="item item_head">
            <div class="td">Hash</div>
            <div class="td">Block</div>
            <div class="td">Block age</div>
            <div class="td">From</div>
            <div class="td">To</div>
            <div class="td">Transaction type</div>
            <div class="td">Result</div>
            <div class="td">Number</div>
            <div class="last_td tx_r">Currency</div>
          </li>
          <li class="item item_list" v-for="(list, index) in resData" :key="index">
            <div class="td">
              <span >{{substr(list.tx_id, 0,6)}}...{{substr(list.tx_id, -6)}}</span>
            </div>
            <div class="td">
              <span >{{list.height}}</span>
            </div>
            <div class="td">{{dataFormat(list.block_time)}}</div>
            <div class="td">
              <span >{{substr(list.from, 0,6)}}...{{substr(list.from, -6)}}</span>
            </div>
            <div class="td">
              <span >{{substr(list.to, 0,6)}}...{{substr(list.to, -6)}}</span>
            </div>
            <div class="td">{{list.method_str}}</div>
            <div class="td">{{statusTx(list.exec_status, list.status)}}</div>
            <div class="td">{{numFormat(list.value)}} {{list.symbol}}</div>
            <div class="last_td tx_r">
              <span class="d_flex_r">
                  <span>
                    {{list.symbol}}
                  </span>
                </span>
            </div>
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
  import { getTransactionList }from '~/utils/api/transaction_list.js'
  export default {
    name: 'TransferList',
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
    created () {
      this.resInit()
    },
    components: {
      ComHeader,
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
          const res = await getTransactionList({
            page: this.page,
            size: this.size,
            method: 'transfer'
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
  .h5_transfer_list_view{
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
        .last_td {
          padding: 10px;
        }
      }
      .item_list{
        color: $T4;
        margin: 0px 14px;
        border-bottom: 1px solid $BR;
        .td, .last_td{
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
          width: calc((100% - 80px)  / 8);

        }
        .last_td{
          width: 80px;
        }
      }
    }
  }

</style>
