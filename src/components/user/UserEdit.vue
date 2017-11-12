<template lang="pug">
  div
    h3 Edit the User
    p locale: {{ $route.query.locale }}
    hr
    button.btn.btn-primary(@click="confirmed = true") Confirm
    div#data-container
    p#data some text
</template>

<script>
export default {
  data() {
    return {
      confirmed: false
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirmed) {
      next();
    } else {
      if (confirm('Are you sure?')) {
        next();
      } else {
        next(false);
      }
    } 
  }
}
</script>


<style scoped>
  #data-container {
    height: 700px;
  }
</style>