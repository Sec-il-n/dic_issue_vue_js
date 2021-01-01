var app = new Vue({
  el: '#app',
  data: {
    // 要宣言
    name: '',
    course: '',
    period: '',
    students: [
      { name: 'モモ', course:'web', period:'2020年11月' },
    ]
  },
  methods: {
    addStudent: function(){
      this.students.push({name: this.name, course: this.course, period: this.period})
      this.name = ''
      this.course = ''
      this.period = ''
    }
  }
})
