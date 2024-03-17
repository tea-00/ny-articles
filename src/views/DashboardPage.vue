<script setup>
import ArticleList from '../components/ArticleList.vue';
</script>

<template>
  <v-container class="pt-12">
    <v-responsive class="align-centerfill-height mx-auto" max-width="1200">
      <v-row>
        <v-col cols="12">
          <v-card
            class="py-4"
            color="surface-variant"
            prepend-icon="mdi-view-list"
            rounded="lg"
            variant="outlined">
            <template #image>
              <v-img position="top right" />
            </template>
            <template #title>
              <h2 class="text-h5 font-weight-bold">Article list</h2>
            </template>
            <ArticleList />
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>
