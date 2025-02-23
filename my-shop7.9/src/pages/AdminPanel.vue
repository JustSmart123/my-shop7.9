<template>
    <div class="admin-container">
      <h2>Адмін-панель</h2>
      <p>Вітаємо, {{ username }}!</p>
      <button @click="logout">Вийти</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: localStorage.getItem("authUser") || ""
      };
    },
    methods: {
      logout() {
        localStorage.removeItem("authUser");
        this.$router.push("/");
      }
    },
    beforeMount() {
      if (!this.username) {
        this.$router.push("/login");
      }
    }
  };
  </script>
  
  <style>
  .admin-container {
    max-width: 400px;
    margin: 50px auto;
    text-align: center;
  }
  button {
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
  }
  </style>
  