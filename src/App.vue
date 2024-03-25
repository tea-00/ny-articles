<template>
  <v-app id="app">
    <v-navigation-drawer v-model="drawer">
      <v-list>
          <v-list-item
            prepend-avatar="@/assets/profile.jpeg"
            subtitle="tea.juresic@fpmoz.sum.ba"
            title="Tea Jurešić"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-web"
            title="Landing page"
            :to="{ name: 'landing' }">
          </v-list-item>
          <v-list-item
            prepend-icon="mdi-folder"
            title="Dashboard"
            :to="{ name: 'dashboard' }">
          </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(null)
</script>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>

<style lang="scss" scoped>
.v-list-item :deep(.v-list-item-subtitle) {
  font-size: 13px;
}
</style>
