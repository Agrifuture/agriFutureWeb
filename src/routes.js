import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views - Dash
import DashboardView from './components/views/Dashboard.vue'
import TablesView from './components/views/Tables.vue'
import TasksView from './components/views/Tasks.vue'
import SettingView from './components/views/Setting.vue'
import AccessView from './components/views/Access.vue'
import ServerView from './components/views/Server.vue'
import ReposView from './components/views/Repos.vue'
import MapView from './components/views/Map.vue'

// Routes
const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: DashView,
    children: [
      {
        path: 'dashboard',
        alias: '',
        component: DashboardView,
        name: '概览',
        meta: {description: '控制台的总体情况'}
      }, {
        path: 'datacenter',
        component: TablesView,
        name: '数据中心',
        meta: {description: '全方位地展示农业生产中的数据'}
      }, {
        path: 'plan',
        component: TasksView,
        name: '计划',
        meta: {description: '记录并智能指导农业生产'}
      }, {
        path: 'record',
        component: SettingView,
        name: 'Settings',
        meta: {description: '农民自我记录'}
      }, {
        path: 'analysis',
        component: AccessView,
        name: 'Access',
        meta: {description: '大数据分析农业数据'}
      }, 
      // {
      //   path: 'server',
      //   component: ServerView,
      //   name: 'Servers',
      //   meta: {description: 'List of our servers', requiresAuth: true}
      // }, {
      //   path: 'repos',
      //   component: ReposView,
      //   name: 'Repository',
      //   meta: {description: 'List of popular javascript repos'}
      // },

      // new added 
      {
        path: 'map',
        component: MapView,
        name: 'map',
        meta: {description: '卫星的遥感俯视图'}
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]



export default routes
