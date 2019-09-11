import moment from 'moment'

export const servers = [{
  name: 'www01',
  status: 'success',
  icon: 'globe',
  description: 'Web server that runs our sites'
}, {
  name: 'sql01',
  status: 'danger',
  icon: 'database',
  description: 'mySQL server used for reporting'
}, {
  name: 'mongoDB01',
  status: 'info',
  icon: 'file-code-o',
  description: 'Main DB server'
}, {
  name: 'ldap01',
  status: 'success',
  icon: 'key',
  description: 'Authentication server'
}, {
  name: 'mgmt01',
  status: 'success',
  icon: 'home',
  description: 'Management server with all tools'
}, {
  name: 'bkup01',
  status: 'warning',
  icon: 'backward',
  description: 'Backup server'
}]

export const stats = [{
  header: '8390',
  text: 'Visitors'
}, {
  header: '30%',
  text: 'Referrals'
}, {
  header: '70%',
  text: 'Organic'
}]

export const timeline =
[
  {
    icon: 'fa-envelope',
    color: 'orange',
    title: '施肥',
    time: moment().endOf('week').fromNow(),
    body: '农田1：使用肥料1，早晚各一次<br>农田2：使用肥料3，中午一次',
    buttons: [{type: 'primary',
      message: '已完成',
      target: '_blank'},

      {type: 'primary',
      message: '编辑',
      target: '_blank'},

      {type: 'primary',
        message: '删除',
        target: '_blank'}]},
  {
    icon: 'fa-envelope',
    color: 'blue',
    title: '浇水',
    time: moment().endOf('week').fromNow(),
    body: '农田1：使用肥料1，早晚各一次<br>农田2：使用肥料3，中午一次',
    buttons: [{type: 'primary',
      message: '已完成',
      target: '_blank'},

      {type: 'primary',
        message: '编辑',
        target: '_blank'},

      {type: 'primary',
        message: '删除',
        target: '_blank'}]},
  {
    icon: 'fa-envelope',
    color: 'red',
    title: '喷洒农药',
    time: moment().endOf('week').fromNow(),
    body: '农田4：使用杀虫剂5，4小时一次<br>农田7：使用杀虫剂2，早晚各一次',
    buttons: [{type: 'primary',
      message: '已完成',
      target: '_blank'},

      {type: 'primary',
        message: '编辑',
        target: '_blank'},

      {type: 'primary',
        message: '删除',
        target: '_blank'}],

  }]

