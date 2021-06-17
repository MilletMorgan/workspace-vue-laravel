<template>
  <div class="home">
    {{ users }}
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'Home',
  data() {
    return {
      users: []
    }
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get('/api/users')
        console.log(response)
        this.users = response.data
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>
