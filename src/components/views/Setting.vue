<template>
  <div>
    <h1 class="text-center">记录</h1>


      <section class="content">
        <div class="row">
          <div class="col-md-12">
            <div class="box box-info">
              {{tomorrow}}
              <input type="button" style="height:30px; line-height:30px; margin-left: 960px;margin-top:5px" value="编辑" />
              <input type="button" style="height:30px; line-height:30px" value="删除" />
              <div class="box-header with-border">
                <h4>农田1 虫害严重</h4>
              </div>
              <button type="button" class="btn btn-primary"  v-on:click="" style="background-color: #c7edcc;color: rgba(0,0,0,0.98);'">上传图片</button>
              <button type="button" class="btn btn-primary"  v-on:click="" style="background-color: #c7edcc;margin-left: 15px;color: rgba(0,0,0,1)">添加位置</button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="box box-info">
              {{today}}
              <input type="button" style="height:30px; line-height:30px; margin-left: 960px;margin-top:5px" value="编辑" />
              <input type="button" style="height:30px; line-height:30px" value="删除" />
              <div class="box-header with-border">
                <h4>农田3 需施肥</h4>
              </div>
              <button type="button" class="btn btn-primary"  v-on:click="" style="background-color: #c7edcc;color: rgba(0,0,0,0.98);'">上传图片</button>
              <button type="button" class="btn btn-primary"  v-on:click="" style="background-color: #c7edcc;margin-left: 15px;color: rgba(0,0,0,1)">添加位置</button>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="box box-info">
              {{yesterday}}
              <input type="button" style="height:30px; line-height:30px; margin-left: 960px;margin-top:5px" value="编辑" />
              <input type="button" style="height:30px; line-height:30px" value="删除" />
              <div class="box-header with-border">
                <h4>农田6 待采摘</h4>
              </div>
              <button type="button" class="btn btn-primary"  v-on:click="" style="background-color: #c7edcc;color: rgba(0,0,0,0.98);'">上传图片</button>
              <button type="button" class="btn btn-primary"  v-on:click="" style="background-color: #c7edcc;margin-left: 15px;color: rgba(0,0,0,1)">添加位置</button>
            </div>
          </div>
        </div>

    </section>


  </div>
</template>
<script>
    import moment from 'moment'

export default {

  name: 'Settings',
  computed: {
      today () {
          return moment().format('MMMM Do YYYY')
      },
      yesterday () {
          return moment(new Date()).add(-1,'days').format('MMMM Do YYYY');
      },
      tomorrow () {
          return moment(new Date()).add(+1,'days').format('MMMM Do YYYY');
      }
  }

}
</script>

<style>
.datetime-picker input {
  height: 4em !important;
}
</style>
