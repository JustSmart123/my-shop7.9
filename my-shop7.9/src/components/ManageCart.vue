<template>
  <div>
    <h2>Кошик покупок</h2>
    <p v-if="cartItems.length === 0">Кошик порожній</p>
    <ul>
      <li v-for="(item, index) in cartItems" :key="index">
        <img :src="item.image" :alt="item.name" width="50" />
        {{ item.name }} - {{ item.price }} грн
        <button v-on:click="removeItem(index)">Видалити</button>
      </li>
    </ul>
    <p v-if="cartItems.length > 0">Загальна сума: {{ totalPrice }} грн</p>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  setup() {
    const cartItems = inject("cartItems");
    const totalPrice = inject("totalPrice");
    const removeItem = inject("removeItem");

    return { cartItems, totalPrice, removeItem };
  },
};
</script>

<!-- Приклад домашнього завдання -->

  <style scoped>
  div{
    background-color: white;
    width: 90%;
    margin: 30px auto;
    text-align: center;
    border-radius: 10px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
  }
  button {
    background: red;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background: darkred;
  }
  </style>
  
  