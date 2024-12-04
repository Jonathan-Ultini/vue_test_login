<template>
  <div>
    <h1>Welcome to the Dashboard!</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      // Rimuove il token e reindirizza al login
      localStorage.removeItem('auth_token');
      this.$router.push('/login');
    }
  }
};
</script>
