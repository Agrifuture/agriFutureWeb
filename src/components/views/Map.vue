<template lang="">
    <section class="content">
        <div class="row center-block">
            <h1 class="text-center"></h1>
            <div class="amap-wrapper">
                <!-- <el-amap class="amap-box" :vid="'amap-vue'"></el-amap> -->
                <el-amap ref="map" vid="amapDemo" :amap-manager="amapManager" :center="center" :zoom="zoom" :plugin="plugin" :events="events" class="amap-demo">
                </el-amap>
            </div>
                
            <!-- <div id="container" style="width:800px;height:1000px;"></div> -->
        </div>
        <!-- <el-amap vid="amapDemo" :zoom="zoom" :center="center">
        </el-amap> -->
    </section>
</template>

<script>


export default{
        // mounted() {
        //     this.init();
        // },
        // methods:{
        //     init() {
        //         //步骤：定义map变量 调用 qq.maps.Map() 构造函数   获取地图显示容器
        //         //设置地图中心点
        //         var myLatlng = new qq.maps.LatLng(39.916527,116.397128);
        //         //定义工厂模式函数
        //         var myOptions = {
        //           zoom: 8,               //设置地图缩放级别
        //           center: myLatlng,      //设置中心点样式
        //           mapTypeId: qq.maps.MapTypeId.ROADMAP  //设置地图样式详情参见MapType
        //         }
        //         //获取dom元素添加地图信息
        //         var map = new qq.maps.Map(document.getElementById("container"), myOptions);
        //     }
        // }
        

    }
</script>

<style>
.amap-wrapper {
  width: 1260px;
  height: 600px;
}
</style>

<script>
    // NPM 方式
    // import { AMapManager } from 'vue-amap';
    // CDN 方式
    let amapManager = new VueAMap.AMapManager();
    module.exports = {
      data: function() {
        return {
          amapManager,
          zoom: 12,
          center: [121.59996, 31.197646],
          events: {
            init: (o) => {
              console.log(o.getCenter())
              console.log(this.$refs.map.$$getInstance())
              o.getCity(result => {
                console.log(result)
              })
            },
            'moveend': () => {
            },
            'zoomchange': () => {
            },
            'click': (e) => {
              
            }
          },
          plugin: ['ToolBar', {
            pName: 'MapType',
            defaultType: 0,
            events: {
              init(o) {
                console.log(o);
              }
            }
          }]
        };
      },

      methods: {
        getMap() {
          // amap vue component
          console.log(amapManager._componentMap);
          // gaode map instance
          console.log(amapManager._map);
        }
      }
    };
</script>