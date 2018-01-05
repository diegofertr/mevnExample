<template lang="html">
  <div>
    <h1> Editar Item <strong>{{ this.item.name }}</strong> </h1>
    <form v-on:submit.prevent="updateItem">
      <div class="form-group">
        <input type="text" v-model="item.name" class="form-control">
      </div>
      <div class="form-group">
        <input type="text" v-model="item.price" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">
        Actualizar Item
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      item: {}
    }
  },
  created () {
    this.getItem();
  },
  methods: {
    getItem () {
      this.axios.get(`/item/${this.$route.params.id}`)
        .then(res => {
          this.item = res.data;
          //console.log(this.item);
        })
        .catch(err => console.log(err));
    },
    updateItem () {
      this.axios.put(`/item/${this.$route.params.id}`, this.item)
        .then(res => {
          console.log(res);
          this.$router.replace({name: 'DisplayItem'});
        });
    }
  }
}
</script>
