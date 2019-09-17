<template>
  <section class="content">
    <div class="row center-block">
      <h2>作物种植进度分析</h2>
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">各品种植物成熟度</h3>
          </div>
          <!-- /.box-header -->
          <div class="box-body no-padding table-responsive">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th style="width: 10px">#</th>
                  <th>品种</th>
                  <th>进度</th>
                  <th style="width: 40px"></th>
                </tr>
                <tr>
                  <td>1.</td>
                  <td>苹果</td>
                  <td>
                    <div class="progress progress-xs">
                      <div class="progress-bar progress-bar-danger" style="width: 55%"></div>
                    </div>
                  </td>
                  <td><span class="badge bg-red">55%</span></td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>西红柿</td>
                  <td>
                    <div class="progress progress-xs">
                      <div class="progress-bar progress-bar-yellow" style="width: 70%"></div>
                    </div>
                  </td>
                  <td><span class="badge bg-yellow">70%</span></td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>西瓜</td>
                  <td>
                    <div class="progress progress-xs progress-striped active">
                      <div class="progress-bar progress-bar-primary" style="width: 30%"></div>
                    </div>
                  </td>
                  <td><span class="badge bg-light-blue">30%</span></td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>青菜</td>
                  <td>
                    <div class="progress progress-xs progress-striped active">
                      <div class="progress-bar progress-bar-success" style="width: 90%"></div>
                    </div>
                  </td>
                  <td><span class="badge bg-green">90%</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.box-body -->
        </div>
      </div>
    </div>

    <div class="row center-block">
      <div class="col-xs-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">各作物改进建议</h3>

            <div class="box-tools">
              <div class="input-group input-group-sm hidden-xs" style="width: 150px;">
                <input type="text" name="table_search" class="form-control pull-right" placeholder="Search">

                <div class="input-group-btn">
                  <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
                </div>
              </div>
            </div>
          </div>
          <!-- /.box-header -->
          <div class="box-body table-responsive no-padding">
            <table class="table table-hover">
              <tbody>
                <tr>
                  <th>编号</th>
                  <th>作物</th>
                  <th>日期</th>
                  <th>状态</th>
                  <th>建议</th>
                </tr>
                <tr>
                  <td>183</td>
                  <td>苹果</td>
                  <td>11-7-2014</td>
                  <td><span class="label label-success">批准</span></td>
                  <td>苹果树上虫害较多</td>
                </tr>
                <tr>
                  <td>219</td>
                  <td>土豆</td>
                  <td>11-7-2014</td>
                  <td><span class="label label-warning">审批</span></td>
                  <td>土壤肥力下降，需要补充</td>
                </tr>
                <tr>
                  <td>657</td>
                  <td>西红柿</td>
                  <td>11-7-2014</td>
                  <td><span class="label label-primary">批准</span></td>
                  <td>适当增加光照时间</td>
                </tr>
                <tr>
                  <td>175</td>
                  <td>青菜</td>
                  <td>11-7-2014</td>
                  <td><span class="label label-danger">否决</span></td>
                  <td>需要增加灌溉广度和强度</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.box-body -->
        </div>
        <!-- /.box -->
      </div>
    </div> 
  </section>
</template>

<script>
import $ from 'jquery'
// Require needed datatables modules
require('datatables.net')
require('datatables.net-bs')

export default {
  name: 'Tables',
  mounted() {
    this.$nextTick(() => {
      $('#example1').DataTable()
    })
  }
}
</script>

<style>
/* Using the bootstrap style, but overriding the font to not draw in
   the Glyphicons Halflings font as an additional requirement for sorting icons.

   An alternative to the solution active below is to use the jquery style
   which uses images, but the color on the images does not match adminlte.

@import url('/static/js/plugins/datatables/jquery.dataTables.min.css');
*/

@import url('/static/js/plugins/datatables/dataTables.bootstrap.css');

table.dataTable thead .sorting:after,
table.dataTable thead .sorting_asc:after,
table.dataTable thead .sorting_desc:after {
  font-family: 'FontAwesome';
}

table.dataTable thead .sorting:after {
  content: '\f0dc';
}

table.dataTable thead .sorting_asc:after {
  content: '\f0dd';
}

table.dataTable thead .sorting_desc:after {
  content: '\f0de';
}
</style>
