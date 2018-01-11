<template lang="html">
  <div>
    <h1>Register</h1>
    <form v-on:submit.prevent="registerUser" class="card">
      <div class="card-body">
        <div class="form-group">
          <input type="email" v-model="user.email" placeholder="example@example.com"
          class="form-control">
        </div>
        <div class="form-group">
          <input type="password" v-model="user.password" placeholder="*************"
          class="form-control">
        </div>
        <button type="submit" class="btn btn-primary">
          Registrar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {}
    }
  }, methods: {
    registerUser () {
      this.axios.post('/register', this.user)
        .then(res => {
          this.$router.replace({name: 'DisplayUser'})
        })
        .catch(err => console.log(err))
    }
  }
}
</script>
