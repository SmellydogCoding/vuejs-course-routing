<template lang="pug">
  div
    h1 The User Page
    hr
    button.btn.btn-primary(@click="goHome()") Go Home
    hr
    router-view
</template>

<script>
  export default {
    methods: {
      goHome() {
        this.$router.push('/');
      }
    }
  }
</script>