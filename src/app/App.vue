<template lang="html">
  <div>
    <h1> Vue2 CRUD.Example</h1>
    <router-link :to="{ name: 'CreateItem' }" class="btn btn-primary">
      Crear Item Nuevo
    </router-link>
    <router-link :to="{ name: 'RegisterUser' }" class="btn btn-dark">
      Registrarme
    </router-link>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
