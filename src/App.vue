<template>
  <div class="card">
    <div id="birthday">birthday: {{ birthday }}</div>
    <div id="today">today: {{ today }}</div>
    <div id="age">age: {{ age }}</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      birthday: '',
      today: '',
      age: 0,
      internalData: {
        birthday: {
          year: 1993,
          month: 11,
          date: 10
        }
      }
    }
  },
  mounted() {
    this.birthday = this.getBirthday()
    this.today = this.getToday()
    this.age = this.getAge()
  },
  methods: {
    getBirthday() {
      const birthday = this.internalData.birthday
      return birthday.year + '/' + birthday.month + '/' + birthday.date
    },
    getToday() {
      const today = new Date()
      return today.getFullYear() + '/' + 
        (today.getMonth() + 1).toString().padStart(2, '0') + '/' +
        today.getDate().toString().padStart(2, '0')
    },
    getAge() {
      const birthday = this.internalData.birthday
      const today = new Date()
      const thisYearBirthday = new Date(today.getFullYear(), birthday.month - 1, birthday.date)
      let age = today.getFullYear() - birthday.year
      if (today < thisYearBirthday) {
        age--
      }
      return age
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.25rem;
}
div.card {
  background: #f2f2f2;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: #d9d9d9;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 10px;
}
</style>
