<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <!-- Campi per l'email e la password -->
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" id="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <p>Non hai un account? <router-link to="/register">Registrati</router-link></p>
  </div>
</template>
