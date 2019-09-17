<template>
  <div>
    <h1 class="text-center">Settings</h1>
    <section class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="box box-info">
            <!-- Input Addons -->
            <div class="box-header with-border">
              <h3 class="box-title">Inputs</h3>
            </div>

            <div class="box-body">
              <!-- calendar group -->

              <br />
              <br />

              <!-- with characthers -->
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="fa fa-fw fa-at" aria-hidden="true"></i>
                </span>
                <input class="form-control" placeholder="Username" type="text">
              </div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="fa fa-fw fa-at" aria-hidden="true"></i>
                </span>
                <input class="form-control" placeholder="Username" type="text">
              </div>

            </div>
            <!-- /.box-body -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
require('moment')
import datepicker from 'vue-date-picker'

export default {
  name: 'Settings',
  components: { datepicker },
  computed: {
    datetime () {
      return new Date()
    }
  },
  methods: {
    clearInput (vueModel) {
      vueModel = ''
    }
  }
}
</script>

<style>
.datetime-picker input {
  height: 4em !important;
}
</style>
