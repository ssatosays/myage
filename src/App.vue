<template>
  <div id="birthday">birthday: {{ birthday }}</div>
  <div id="age">age: {{ age }}</div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      birthday: '1993/11/10',
      age: 0
    }
  },
  mounted() {
    this.age = this.calc()
  },
  methods: {
    calc() {
      const birthday = {
        year: 1993,
        month: 11,
        date: 10
      }
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
}
</style>
