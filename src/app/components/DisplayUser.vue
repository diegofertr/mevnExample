<template lang="html">
  <div class="users">
    <h3>Usuarios</h3>
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <td> {{ user._id }} </td>
          <td> {{ user.email }} </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      users: []
    }
  },
  created () {
    this.fetchUsers();
  },
  methods: {
    fetchUsers () {
      this.axios.get('/register/user')
        .then(res => {
          this.users = res.data;
        })
        .catch(err => console.log(err));
    }
  }
}
</script>
