<template lang="pug">
  div
    h1 The User Page
    hr
    p User: {{ id }}
    button.btn.btn-primary(@click="goHome()") Go Home
</template>

<script>
  export default {
    props: {
      id: {}
    },
    methods: {
      goHome() {
        this.$router.push('/');
      }
    }
  }
</script>