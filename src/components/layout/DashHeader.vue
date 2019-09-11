<template>
  <header class="main-header">

    <!-- 快速跳转到首页 -->
    <span class="logo-mini">
      <a href="/"><img src="/static/img/copilot-logo-white.svg" alt="Logo" class="img-responsive center-block logo"></a>
    </span>

    <!-- Header Navbar -->
    <nav class="navbar navbar-static-top" role="navigation">
      
      <!-- Sidebar toggle button-->
      <a href="javascript:;" class="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>

      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <li>         
            <a  class="nav navbar-nav navbar-right" >
              添加土地
            </a>
          </li>
          <messages-menu></messages-menu>
          <notifications-menu></notifications-menu>
          <tasks-menu></tasks-menu>

          <user-menu :user="user"></user-menu>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState } from 'vuex'
import MessagesMenu from './MessagesMenu'
import NotificationsMenu from './NotificationsMenu'
import TasksMenu from './TasksMenu'
import UserMenu from './UserMenu'

export default {
  name: 'DashHeader',
  components: {
    MessagesMenu,
    NotificationsMenu,
    TasksMenu,
    UserMenu
  },
  props: ['user'],
  computed: {
    ...mapState([
      'userInfo'
    ])
  }
}
</script>
