<template>
  <div class="login-container">
    <h2>Авторизація</h2>
    <input v-model="username" placeholder="Логін">
    <input v-model="password" type="password" placeholder="Пароль">
    <button @click="login">Увійти</button>
    <p v-if="message" class="error">{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      message: "",
      users: []
    };
  },
  async mounted() {
    try {
      const response = await fetch("/admin.json");
      if (!response.ok) {
        throw new Error(`HTTP помилка: ${response.status}`);
      }
      this.users = await response.json();
    } catch (error) {
      console.error("Помилка завантаження JSON:", error);
      this.message = "Помилка сервера! Спробуйте пізніше.";
    }
  },
  methods: {
    login() {
      if (!this.username || !this.password) {
        this.message = "Введіть логін та пароль!";
        return;
      }

      const user = this.users.find(u => u.username === this.username && u.password === this.password);
      
      if (user) {
        localStorage.setItem("authUser", this.username);
        this.$router.push("/profile");
      } else {
        this.message = "Невірний логін або пароль!";
      }
    }
  }
};
</script>

<style>
.login-container {
  max-width: 300px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
input, button {
  padding: 10px;
  font-size: 16px;
}
button {
  cursor: pointer;
}
.error {
  color: red;
  font-size: 14px;
}
</style>
