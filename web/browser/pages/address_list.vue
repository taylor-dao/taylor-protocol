<template>
    <article class="h5_address_list_view">
      <com-header></com-header>
      <article class="w1340">
        <section class="head_box">
          <h2>
            <span class="title">Address</span>
            <span class="txs">The list only shows the previous ones 1,000 Records(Show by asset balance)</span>
          </h2>
        </section>
        <ul class="item_box">
          <li class="item item_head">
            <div class="td">Address</div>
            <div class="td">Balance</div>
            <div class="td">Percentage</div>
            <div class="td">Mining Number</div>
            <div class="td_width tx_r">Transaction number</div>
          </li>
          <li class="item item_list" v-for="(list, index) in resData" :key="index">
            <div class="td">
              <span>{{substr(list.address, 0,6)}}...{{substr(list.address, -6)}}</span>
            </div>
            <div class="td">{{numFormat(list.balance)}} {{list.symbol}}</div>
            <div class="td">{{numFormat(list.percent * 100, 2)}} %</div>
            <div class="td">{{numFormat(list.mining_num)}} {{list.symbol}}</div>
            <div class="td_width tx_r">{{numFormat(list.txs)}}</div>
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
  import { getAddressList }from '~/utils/api/address_list.js'
  export default {
    name: 'AddressList',
    data () {
      return {
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
      async resInit () {
        try {
          const res = await getAddressList({
            page: this.page,
            size: this.size,
          })
          this.resData = res.list ? res.list : []
          this.total = parseFloat(res.total)
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
  .h5_address_list_view{
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
        .td_width {
          padding: 10px;
        }
      }
      .item_list{
        color: $T4;
        margin: 0px 14px;
        border-bottom: 1px solid $BR;
        .td, .td_width{
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
          width: calc((100%)  / 4);
        }
        .td_width{
          width: 140px;
        }
      }
    }
  }

</style>
