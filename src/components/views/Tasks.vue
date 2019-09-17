<template>
  <section class="content">
    <div class="row center-block">
      <h1 class="text-center">计划</h1>

      <ul>
        <datepicker :readonly="true" format="MMM/D/YYYY"  style="margin-left: 20px" ></datepicker>
<!--        <button type="button" class="btn btn-primary"  v-on:click="">确认</button>-->
        <button type="button" class="btn btn-primary"  v-on:click="" style="margin-left: 690px">添加计划</button>
        <button type="button" class="btn btn-primary" v-on:click="">选择计划</button>
      </ul>



      <ul class="timeline">
        <!-- timeline time label -->
        <li class="time-label">
          <span class="bg-green">{{today}}</span>
        </li>
        <!-- timeline item -->
        <li v-for="line in timeline">
          <!-- timeline icon -->
          <i v-bind:class="'fa ' + line.icon + ' bg-' + line.color"></i>
          <div class="timeline-item">
            <span class="time"><i class="fa fa-clock-o"></i>&nbsp;{{line.time}}</span>
            <h3 class="timeline-header">{{line.title}}</h3>
            <div class="timeline-body" v-if="line.body" v-html="line.body">
            </div>
            <div class="timeline-footer" v-if="line.buttons">
              <a v-for="btn in line.buttons" v-bind:class="'btn btn-' + btn.type + ' btn-xs'" v-bind:href="btn.href" v-bind:target="btn.target">{{btn.message}}</a>
            </div>
          </div>
        </li>
      <!-- END timeline item -->
      </ul>

      <ul class="timeline">
        <!-- timeline time label -->
        <li class="time-label">
          <span class="bg-green">{{yesterday}}</span>
        </li>
        <!-- timeline item -->
        <li v-for="line in timeline">
          <!-- timeline icon -->
          <i v-bind:class="'fa ' + line.icon + ' bg-' + line.color"></i>
          <div class="timeline-item">
            <span class="time"><i class="fa fa-clock-o"></i>&nbsp;{{line.time}}</span>
            <h3 class="timeline-header">{{line.title}}</h3>
            <div class="timeline-body" v-if="line.body" v-html="line.body">
            </div>
            <div class="timeline-footer" v-if="line.buttons">
              <a v-for="btn in line.buttons" v-bind:class="'btn btn-' + btn.type + ' btn-xs'" v-bind:href="btn.href" v-bind:target="btn.target">{{btn.message}}</a>
            </div>
          </div>
        </li>
        <!-- END timeline item -->
      </ul>

    </div>
  </section>
</template>

<script>
  import moment from 'moment'
  import datepicker from 'vue-date-picker'
  import {timeline} from '../../demo'

  export default {
    name: 'Tasks',
    components: { datepicker },
    function:{
    },
    computed: {
      today () {
        return moment().format('MMMM Do YYYY')
      },
        Insert(){
            alert("Hellodreamdu!")
        },
        yesterday(){
        return moment(new Date()).add(-1,'days').format('MMMM Do YYYY');
      },
      tomorrow () {
          return moment(new Date()).add(1,'days').format('MMMM Do YYYY');
      },

      timeline () {
        return timeline
      }
    }
  }

</script>

<style>
  .timeline-footer a.btn {
    margin-right: 10px;
  }
</style>
