<template>
  <!-- Main content -->
  <section class="content">
    <!-- GitHub hint -->
    <div class="row">
      <!-- <div class="col-xs-12">
        <alert :dismissible="true"
               type="success"
               :iconClasses="['fa', 'fa-check']"
               title="CoPilot is open source!">
          <span>Click on icon to check it out on github.</span>
          <a href="https://github.com/misterGF/CoPilot" target="_blank">
            <i class="fa fa-github fa-2x"></i>
          </a>
        </alert>
      </div> -->

      <!-- Info boxes -->
      <div class="col-md-3 col-sm-6 col-xs-12">
        <info-box color-class="bg-aqua"
                  :icon-classes="['ion', 'ion-ios-gear-outline']"
                  text="总湿度"
                  number="90%"></info-box>
      </div>
      <!-- /.col -->
      <div class="col-md-3 col-sm-6 col-xs-12">
        <info-box color-class="bg-red"
                  :icon-classes="['fa', 'fa-google-plus']"
                  text="土地肥料含量"
                  number="41,410"></info-box>
      </div>
      <!-- /.col -->

      <!-- fix for small devices only -->
      <div class="clearfix visible-sm-block"></div>
      
      <div class="col-md-3 col-sm-6 col-xs-12">
        <info-box color-class="bg-green"
                  :icon-classes="['ion', 'ion-ios-cart-outline']"
                  text="二氧化碳含量"
                  number="760"></info-box>
      </div>
      <!-- /.col -->
      <div class="col-md-3 col-sm-6 col-xs-12">
        <info-box color-class="bg-yellow"
                  :icon-classes="['ion', 'ion-ios-people-outline']"
                  text="员工数量"
                  number="2,000"></info-box>
      </div>
      <!-- /.col -->
    </div>
    <!-- /.row -->

    <div class="col-xs-12">
      <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title"></h3>
          <div class="box-body">
            <div class="col-sm-6 col-xs-12">
              <p class="text-center">
                <strong>Web Traffic Overview</strong>
              </p>
              <canvas id="trafficBar" ></canvas>
            </div>
            <hr class="visible-xs-block">
            <div class="col-sm-6 col-xs-12">
              <p class="text-center">
                <strong>Language Overview</strong>
              </p>
              <canvas id="languagePie"></canvas>
            </div>
          </div>
        </div>
        <div class="text-center">
          <small><b>Pro Tip</b> Don't forget to star us on github!</small>
        </div>
      </div>
    </div>
    <!-- /.row -->

    
    <!-- 月度折线报告 -->
     <div class="row">
        <div class="col-md-12">
          <div class="box">
            <div class="box-header with-border">
              <h3 class="box-title">月度生产报告</h3>

              <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
                <div class="btn-group">
                  <button type="button" class="btn btn-box-tool dropdown-toggle" data-toggle="dropdown">
                    <i class="fa fa-wrench"></i></button>
                  <ul class="dropdown-menu" role="menu">
                    <li><a href="#">编辑</a></li>
                    <!-- <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li> -->
                    <!-- <li class="divider"></li>
                    <li><a href="#">Separated link</a></li> -->
                  </ul>
                </div>
                <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
              </div>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <div class="row">
                <div class="col-md-8">
                  <p class="text-center">
                    <strong>生产量: 1 一月, 2014 - 30 六月, 2014</strong>
                  </p>

                  <div class="chart">
                    <!-- Sales Chart Canvas -->
                    <canvas id="salesChart" style="height: 180px;"></canvas>
                  </div>
                  <!-- /.chart-responsive -->
                </div>
                <!-- /.col -->
                <div class="col-md-4">
                  <p class="text-center">
                    <strong>Goal Completion</strong>
                  </p>

                  <div class="progress-group">
                    <span class="progress-text">Add Products to Cart</span>
                    <span class="progress-number"><b>160</b>/200</span>

                    <div class="progress sm">
                      <div class="progress-bar progress-bar-aqua" style="width: 80%"></div>
                    </div>
                  </div>
                  <!-- /.progress-group -->
                  <div class="progress-group">
                    <span class="progress-text">Complete Purchase</span>
                    <span class="progress-number"><b>310</b>/400</span>

                    <div class="progress sm">
                      <div class="progress-bar progress-bar-red" style="width: 80%"></div>
                    </div>
                  </div>
                  <!-- /.progress-group -->
                  <div class="progress-group">
                    <span class="progress-text">Visit Premium Page</span>
                    <span class="progress-number"><b>480</b>/800</span>

                    <div class="progress sm">
                      <div class="progress-bar progress-bar-green" style="width: 80%"></div>
                    </div>
                  </div>
                  <!-- /.progress-group -->
                  <div class="progress-group">
                    <span class="progress-text">Send Inquiries</span>
                    <span class="progress-number"><b>250</b>/500</span>

                    <div class="progress sm">
                      <div class="progress-bar progress-bar-yellow" style="width: 80%"></div>
                    </div>
                  </div>
                  <!-- /.progress-group -->
                </div>
                <!-- /.col -->
              </div>
              <!-- /.row -->
            </div>
            <!-- ./box-body -->
            <div class="box-footer">
              <div class="row">
                <div class="col-sm-3 col-xs-6">
                  <div class="description-block border-right">
                    <span class="description-percentage text-green"><i class="fa fa-caret-up"></i> 17%</span>
                    <h5 class="description-header">$35,210.43</h5>
                    <span class="description-text">TOTAL REVENUE</span>
                  </div>
                  <!-- /.description-block -->
                </div>
                <!-- /.col -->
                <div class="col-sm-3 col-xs-6">
                  <div class="description-block border-right">
                    <span class="description-percentage text-yellow"><i class="fa fa-caret-left"></i> 0%</span>
                    <h5 class="description-header">$10,390.90</h5>
                    <span class="description-text">TOTAL COST</span>
                  </div>
                  <!-- /.description-block -->
                </div>
                <!-- /.col -->
                <div class="col-sm-3 col-xs-6">
                  <div class="description-block border-right">
                    <span class="description-percentage text-green"><i class="fa fa-caret-up"></i> 20%</span>
                    <h5 class="description-header">$24,813.53</h5>
                    <span class="description-text">TOTAL PROFIT</span>
                  </div>
                  <!-- /.description-block -->
                </div>
                <!-- /.col -->
                <div class="col-sm-3 col-xs-6">
                  <div class="description-block">
                    <span class="description-percentage text-red"><i class="fa fa-caret-down"></i> 18%</span>
                    <h5 class="description-header">1200</h5>
                    <span class="description-text">GOAL COMPLETIONS</span>
                  </div>
                  <!-- /.description-block -->
                </div>
              </div>
              <!-- /.row -->
            </div>
            <!-- /.box-footer -->
          </div>
          <!-- /.box -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->

  
        <!-- 全球俯视图 + infoBox -->
        <!-- <div class="col-md-8"> -->
          <!-- MAP & BOX PANE -->
          <!-- <div class="box box-success">
            <div class="box-header with-border">
              <h3 class="box-title">Visitors Report</h3>

              <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
                <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
              </div>
            </div> -->
            <!-- /.box-header -->
            <!-- <div class="box-body no-padding">
              <div class="row">
                <div class="col-md-9 col-sm-8">
                  <div class="pad"> -->
                    <!-- Map will be created here -->
                    <!-- <div id="world-map-markers" style="height: 325px;"></div>
                  </div>
                </div> -->
                <!-- /.col -->
                <!-- <div class="col-md-3 col-sm-4">
                  <div class="pad box-pane-right bg-green" style="min-height: 280px">
                    <div class="description-block margin-bottom">
                      <div class="sparkbar pad" data-color="#fff">90,70,90,70,75,80,70</div>
                      <h5 class="description-header">8390</h5>
                      <span class="description-text">Visits</span>
                    </div> -->
                    <!-- /.description-block -->
                    <!-- <div class="description-block margin-bottom">
                      <div class="sparkbar pad" data-color="#fff">90,50,90,70,61,83,63</div>
                      <h5 class="description-header">30%</h5>
                      <span class="description-text">Referrals</span>
                    </div> -->
                    <!-- /.description-block -->
                    <!-- <div class="description-block">
                      <div class="sparkbar pad" data-color="#fff">90,50,90,70,61,83,63</div>
                      <h5 class="description-header">70%</h5>
                      <span class="description-text">Organic</span>
                    </div> -->
                    <!-- /.description-block -->
                  <!-- </div>
                </div> -->
                <!-- /.col -->
              <!-- </div> -->
              <!-- /.row -->
            <!-- </div> -->
            <!-- /.box-body -->
          <!-- </div>
        </div>  -->

    <!-- Main row -->
    <div class="row">
      <div class="col-md-3 col-sm-6 col-xs-12">
        <process-info-box color-class="bg-yellow"
                          :icon-classes="['ion', 'ion-ios-pricetag-outline']"
                          text="Inventory"
                          number="5,200"
                          :progress="50"
                          description="50% increase since May"></process-info-box>
      </div>
      <!-- /.col -->
      <div class="col-md-3 col-sm-6 col-xs-12">
        <process-info-box color-class="bg-green"
                          :icon-classes="['ion', 'ion-ios-heart-outline']"
                          text="Mentions"
                          number="92,050"
                          :progress="20"
                          description="20% increase in 30 days"></process-info-box>
      </div>
      <!-- /.col -->
      <div class="col-md-3 col-sm-6 col-xs-12">
        <process-info-box color-class="bg-red"
                          :icon-classes="['ion', 'ion-ios-cloud-download-outline']"
                          text="Downloads"
                          number="114,381"
                          :progress="70"
                          description="70% increase since yesterday"></process-info-box>
      </div>
      <!-- /.col -->
      <div class="col-md-3 col-sm-6 col-xs-12">
        <process-info-box color-class="bg-aqua"
                          :icon-classes="['ion', 'ion-ios-chatbubble-outline']"
                          text="Direct Messages"
                          number="163,921"
                          :progress="40"
                          description="40% increase compared to last year"></process-info-box>
      </div>
      <!-- /.col -->
    </div>
    <!-- /.row -->

      <!-- 目前种植的主要成分：饼图-->
      <!-- <div class="row"> -->
             
          <!-- <div class="box box-default">
            <div class="box-header with-border">
              <h3 class="box-title">Browser Usage</h3>

              <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
                <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
              </div>
            </div> -->
            <!-- /.box-header -->
            <!-- <div class="box-body">
              <div class="row">
                <div class="col-md-8">
                  <div class="chart-responsive">
                    <canvas id="pieChart" height="150"></canvas>
                  </div> -->
                  <!-- ./chart-responsive -->
                <!-- </div> -->
                <!-- /.col -->
                <!-- <div class="col-md-4">
                  <ul class="chart-legend clearfix">
                    <li><i class="fa fa-circle-o text-red"></i> Chrome</li>
                    <li><i class="fa fa-circle-o text-green"></i> IE</li>
                    <li><i class="fa fa-circle-o text-yellow"></i> FireFox</li>
                    <li><i class="fa fa-circle-o text-aqua"></i> Safari</li>
                    <li><i class="fa fa-circle-o text-light-blue"></i> Opera</li>
                    <li><i class="fa fa-circle-o text-gray"></i> Navigator</li>
                  </ul>
                </div> -->
                <!-- /.col -->
              <!-- </div> -->
              <!-- /.row -->
            <!-- </div> -->
          <!-- </div> -->

        <!-- TABLE: LATEST ORDERS 收成数量-->
          <div class="box box-info">
            <div class="box-header with-border">
              <h3 class="box-title">最新情况</h3>

              <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
                <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
              </div>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <div class="table-responsive">
                <table class="table no-margin">
                  <thead>
                  <tr>
                    <th>作物ID</th>
                    <th>作物名</th>
                    <th>状态</th>
                    <th>数量</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td><a href="pages/examples/invoice.html">OR9842</a></td>
                    <td>西红柿</td>
                    <td><span class="label label-success">Shipped</span></td>
                    <td>
                      <div class="sparkbar" data-color="#00a65a" data-height="20">60</div>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="pages/examples/invoice.html">OR1848</a></td>
                    <td>土豆</td>
                    <td><span class="label label-warning">Pending</span></td>
                    <td>
                      <div class="sparkbar" data-color="#f39c12" data-height="20">60</div>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="pages/examples/invoice.html">OR7429</a></td>
                    <td>茄子</td>
                    <td><span class="label label-danger">Delivered</span></td>
                    <td>
                      <div class="sparkbar" data-color="#f56954" data-height="20">60</div>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="pages/examples/invoice.html">OR7429</a></td>
                    <td>青菜</td>
                    <td><span class="label label-info">Processing</span></td>
                    <td>
                      <div class="sparkbar" data-color="#00c0ef" data-height="20">60</div>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="pages/examples/invoice.html">OR1848</a></td>
                    <td>西红柿</td>
                    <td><span class="label label-warning">Pending</span></td>
                    <td>
                      <div class="sparkbar" data-color="#f39c12" data-height="20">60</div>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="pages/examples/invoice.html">OR7429</a></td>
                    <td>西红柿</td>
                    <td><span class="label label-danger">Delivered</span></td>
                    <td>
                      <div class="sparkbar" data-color="#f56954" data-height="20">60</div>
                    </td>
                  </tr>
                  <tr>
                    <td><a href="pages/examples/invoice.html">OR9842</a></td>
                    <td>西红柿</td>
                    <td><span class="label label-success">Shipped</span></td>
                    <td>
                      <div class="sparkbar" data-color="#00a65a" data-height="20">60</div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.table-responsive -->
            </div>
            <!-- /.box-body -->
            <div class="box-footer clearfix">
              <a href="javascript:void(0)" class="btn btn-sm btn-info btn-flat pull-left">Place New Order</a>
              <a href="javascript:void(0)" class="btn btn-sm btn-default btn-flat pull-right">View All Orders</a>
            </div>
            <!-- /.box-footer -->
          </div>
          <!-- /.box -->
        </div>
        <!-- /.col -->


        <!-- 最近种植作物 -->
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">最近售出的作物</h3>

              <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
                <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
              </div>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <ul class="products-list product-list-in-box">
                <li class="item">
                  <div class="product-img">
                    <img src="../../../static/img/1.jpg" alt="Product Image">
                  </div>
                  <div class="product-info">
                    <a href="javascript:void(0)" class="product-title">西红柿
                      <span class="label label-warning pull-right">$1800</span></a>
                    <span class="product-description">
                          成熟度 87%
                        </span>
                  </div>
                </li>
                <!-- /.item -->
                <li class="item">
                  <div class="product-img">
                    <img src="../../../static/img/3.jpg" alt="Product Image">
                  </div>
                  <div class="product-info">
                    <a href="javascript:void(0)" class="product-title">茄子
                      <span class="label label-info pull-right">$700</span></a>
                    <span class="product-description">
                          平均重量1.2kg
                        </span>
                  </div>
                </li>
                <!-- /.item -->
                <li class="item">
                  <div class="product-img">
                    <img src="../../../static/img/2.jpg" alt="Product Image">
                  </div>
                  <div class="product-info">
                    <a href="javascript:void(0)" class="product-title">土豆 <span
                        class="label label-danger pull-right">$350</span></a>
                    <span class="product-description">
                          浇水情况正常
                        </span>
                  </div>
                </li>
                <!-- /.item -->
                <li class="item">
                  <div class="product-img">
                    <img src="../../../static/img/4.jpg" alt="Product Image">
                  </div>
                  <div class="product-info">
                    <a href="javascript:void(0)" class="product-title">青菜
                      <span class="label label-success pull-right">$399</span></a>
                    <span class="product-description">
                          日照时间稍长
                        </span>
                  </div>
                </li>
                <!-- /.item -->
              </ul>
            </div>
            <!-- /.box-body -->
            <div class="box-footer text-center">
              <a href="javascript:void(0)" class="uppercase">View All Products</a>
            </div>
            <!-- /.box-footer -->
          </div>
          <!-- /.box -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->


  </section>
  <!-- /.content -->
</template>

<script>
import Chart from "chart.js";
import Alert from "../widgets/Alert";
import InfoBox from "../widgets/InfoBox";
import ProcessInfoBox from "../widgets/ProcessInfoBox";
// window.jQuery = require("jquery");
// require("jvectormap");
// var $ = window.jQuery;
// // require('../lib/jquery-jvectormap-world-mill.js');

export default {
  name: "Dashboard",
  components: {
    Alert,
    InfoBox,
    ProcessInfoBox
  },
  data() {
    return {
      generateRandomNumbers(numbers, max, min) {
        var a = [];
        for (var i = 0; i < numbers; i++) {
          a.push(Math.floor(Math.random() * (max - min + 1)) + max);
        }
        return a;
      }
    };
  },
  computed: {
    coPilotNumbers() {
      return this.generateRandomNumbers(12, 1000000, 10000);
    },
    personalNumbers() {
      return this.generateRandomNumbers(12, 1000000, 10000);
    },
    isMobile() {
      return window.innerWidth <= 800 && window.innerHeight <= 600;
    }
  },
  mounted() {
    this.$nextTick(() => {
      var ctx = document.getElementById("trafficBar").getContext("2d");
      var config = {
        type: "line",
        data: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ],
          datasets: [
            {
              label: "CoPilot",
              fill: false,
              borderColor: "#284184",
              pointBackgroundColor: "#284184",
              backgroundColor: "rgba(0, 0, 0, 0)",
              data: this.coPilotNumbers
            },
            {
              label: "Personal Site",
              borderColor: "#4BC0C0",
              pointBackgroundColor: "#4BC0C0",
              backgroundColor: "rgba(0, 0, 0, 0)",
              data: this.personalNumbers
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: !this.isMobile,
          legend: {
            position: "bottom",
            display: true
          },
          tooltips: {
            mode: "label",
            xPadding: 10,
            yPadding: 10,
            bodySpacing: 10
          }
        }
      };

      new Chart(ctx, config); // eslint-disable-line no-new

      var pieChartCanvas = document
        .getElementById("languagePie")
        .getContext("2d");
      var pieConfig = {
        type: "pie",
        data: {
          labels: ["HTML", "JavaScript", "CSS"],
          datasets: [
            {
              data: [56.6, 37.7, 4.1],
              backgroundColor: ["#00a65a", "#f39c12", "#00c0ef"],
              hoverBackgroundColor: ["#00a65a", "#f39c12", "#00c0ef"]
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: !this.isMobile,
          legend: {
            position: "bottom",
            display: true
          }
        }
      };

      new Chart(pieChartCanvas, pieConfig); // eslint-disable-line no-new

      this.initSalesChart();
      // this.initMap();
      this.initPieChart();
    });
  },

  methods: {
    initSalesChart() {
      var salesChartCanvas = document
        .getElementById("salesChart")
        .getContext("2d");
      var salesChartData = {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "Electronics",
            fillColor: "rgb(210, 214, 222)",
            strokeColor: "rgb(210, 214, 222)",
            pointColor: "rgb(210, 214, 222)",
            pointStrokeColor: "#c1c7d1",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgb(220, 220, 220)",
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: "Digital Goods",
            fillColor: "rgba(60,141,188,0.9)",
            strokeColor: "rgba(60,141,188,0.8)",
            pointColor: "#3b8bba",
            pointStrokeColor: "rgba(60, 141, 188, 1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(60, 141,188, 1)",
            data: [28, 48, 40, 19, 86, 27, 90]
          }
        ]
      };

      var salesChartOptions = {
        // Boolean - If we should show the scale at all
        showScale: true,
        // Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: false,
        // String - Colour of the grid lines
        scaleGridLineColor: "rgba(0, 0, 0, .05)",
        // Number - Width of the grid lines
        scaleGridLineWidth: 1,
        // Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,
        // Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: true,
        // Boolean - Whether the line is curved between points
        bezierCurve: true,
        // Number - Tension of the bezier curve between points
        bezierCurveTension: 0.3,
        // Boolean - Whether to show a dot for each point
        pointDot: false,
        // Number - Radius of each point dot in pixels
        pointDotRadius: 4,
        // Number - Pixel width of point dot stroke
        pointDotStrokeWidth: 1,
        // Number - amount extra to add to the radius to cater for hit detection outside the drawn point
        pointHitDetectionRadius: 20,
        // Boolean - Whether to show a stroke for datasets
        datasetStroke: true,
        // Number - Pixel width of dataset stroke
        datasetStrokeWidth: 2,
        // Boolean - Whether to fill the dataset with a color
        datasetFill: true,
        // String - A legend template
        legendTemplate:
          "<ul class='<%=name.toLowerCase()%>-legend'><% for (var i=0; i<datasets.length; i++){%><li><span style='background-color:<%=datasets[i].lineColor%>'></span><%=datasets[i].label%></li><%}%></ul>",
        // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
        maintainAspectRatio: true,
        // Boolean - whether to make the chart responsive to window resizing
        responsive: true
      };

      var config = {
        type: "line",
        data: salesChartData,
        options: salesChartOptions
      };

      new Chart(salesChartCanvas, config);
    },
    // initMap() {
    //   const usMap = $("#world-map-markers");
    //   usMap.vectorMap({
    //     map: "world_mill_en",
    //     normalizeFunction: "polynomial",
    //     hoverOpacity: 0.7,
    //     hoverColor: false,
    //     backgroundColor: "transparent",
    //     regionStyle: {
    //       initial: {
    //         fill: "rgba(210, 214, 222, 1)",
    //         "fill-opacity": 1,
    //         stroke: "none",
    //         "stroke-width": 0,
    //         "stroke-opacity": 1
    //       },
    //       hover: {
    //         "fill-opacity": 0.7,
    //         cursor: "pointer"
    //       },
    //       selected: {
    //         fill: "yellow"
    //       },
    //       selectedHover: {}
    //     },
    //     markerStyle: {
    //       initial: {
    //         fill: "#00a65a",
    //         stroke: "#111"
    //       }
    //     },
    //     markers: [
    //       { latLng: [41.9, 12.45], name: "Vatican City" },
    //       { latLng: [43.73, 7.41], name: "Monaco" },
    //       { latLng: [-0.52, 166.93], name: "Nauru" },
    //       { latLng: [-8.51, 179.21], name: "Tuvalu" },
    //       { latLng: [43.93, 12.46], name: "San Marino" },
    //       { latLng: [47.14, 9.52], name: "Liechtenstein" },
    //       { latLng: [7.11, 171.06], name: "Marshall Islands" },
    //       { latLng: [17.3, -62.73], name: "Saint Kitts and Nevis" },
    //       { latLng: [3.2, 73.22], name: "Maldives" },
    //       { latLng: [35.88, 14.5], name: "Malta" },
    //       { latLng: [12.05, -61.75], name: "Grenada" },
    //       { latLng: [13.16, -61.23], name: "Saint Vincent and the Grenadines" },
    //       { latLng: [13.16, -59.55], name: "Barbados" },
    //       { latLng: [17.11, -61.85], name: "Antigua and Barbuda" },
    //       { latLng: [-4.61, 55.45], name: "Seychelles" },
    //       { latLng: [7.35, 134.46], name: "Palau" },
    //       { latLng: [42.5, 1.51], name: "Andorra" },
    //       { latLng: [14.01, -60.98], name: "Saint Lucia" },
    //       { latLng: [6.91, 158.18], name: "Federated States of Micronesia" },
    //       { latLng: [1.3, 103.8], name: "Singapore" },
    //       { latLng: [1.46, 173.03], name: "Kiribati" },
    //       { latLng: [-21.13, -175.2], name: "Tonga" },
    //       { latLng: [15.3, -61.38], name: "Dominica" },
    //       { latLng: [-20.2, 57.5], name: "Mauritius" },
    //       { latLng: [26.02, 50.55], name: "Bahrain" },
    //       { latLng: [0.33, 6.73], name: "São Tomé and Príncipe" }
    //     ]
    //   });
    // },
    initPieChart() {
      var salesChartCanvas = document
        .getElementById("salesChart")
        .getContext("2d");
      var PieData = [
        {
          value: 700,
          color: "#f56954",
          highlight: "#f56954",
          label: "Chrome"
        },
        {
          value: 500,
          color: "#00a65a",
          highlight: "#00a65a",
          label: "IE"
        },
        {
          value: 400,
          color: "#f39c12",
          highlight: "#f39c12",
          label: "FireFox"
        },
        {
          value: 600,
          color: "#00c0ef",
          highlight: "#00c0ef",
          label: "Safari"
        },
        {
          value: 300,
          color: "#3c8dbc",
          highlight: "#3c8dbc",
          label: "Opera"
        },
        {
          value: 100,
          color: "#d2d6de",
          highlight: "#d2d6de",
          label: "Navigator"
        }
      ];
      var pieOptions = {
        // Boolean - Whether we should show a stroke on each segment
        segmentShowStroke: true,
        // String - The colour of each segment stroke
        segmentStrokeColor: "#fff",
        // Number - The width of each segment stroke
        segmentStrokeWidth: 1,
        // Number - The percentage of the chart that we cut out of the middle
        percentageInnerCutout: 50, // This is 0 for Pie charts
        // Number - Amount of animation steps
        animationSteps: 100,
        // String - Animation easing effect
        animationEasing: "easeOutBounce",
        // Boolean - Whether we animate the rotation of the Doughnut
        animateRotate: true,
        // Boolean - Whether we animate scaling the Doughnut from the centre
        animateScale: false,
        // Boolean - whether to make the chart responsive to window resizing
        responsive: true,
        // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
        maintainAspectRatio: false,
        // String - A legend template
        legendTemplate:
          "<ul class='<%=name.toLowerCase()%>-legend'><% for (var i=0; i<segments.length; i++){%><li><span style='background-color:<%=segments[i].fillColor%>'></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
        // String - A tooltip template
        tooltipTemplate: "<%=value %> <%=label%> users"
      };
      var config = {
        type: "pie",
        data: PieData,
        options: pieOptions
      }
      new Chart(salesChartCanvas, config);
    }
  }
};
</script>
<style>
.info-box {
  cursor: pointer;
}
.info-box-content {
  text-align: center;
  vertical-align: middle;
  display: inherit;
}
.fullCanvas {
  width: 100%;
}
</style>
