<template lang="pug">
  div
    h3 Some User Details
    p User Id: {{ $route.params.id }}
    router-link(tag="button" class="btn btn-primary" :to="{ name: 'editUser', params: { id: $route.params.id }, hash: '#data' }") Edit User
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log('other beforeEach use.  Component data is not available.');
    // you can do authentication here
    next();
  }
}
</script>
