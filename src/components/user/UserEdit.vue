<template lang="pug">
  div
    h3 Edit the User
    p locale: {{ $route.query.locale }}
    div#data-container
    p#data some text
</template>

<script></script>

<style scoped>
  #data-container {
    height: 700px;
  }
</style>