<template lang="pug">
  div
    p Please select a User
    hr
    ul.list-group
      router-link.list-group-item(tag="li" to="/user/1") User 1
      router-link.list-group-item(tag="li" to="/user/2") User 2
      router-link.list-group-item(tag="li" to="/user/3") User 3
</template>

<script></script>

<style scoped>
  li {
    cursor: pointer;
  }
  
  li:hover {
    background: #337AB7;
    color: white;
  }
</style>