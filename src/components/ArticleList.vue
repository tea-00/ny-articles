<script setup>
import { ref } from 'vue';
import articlesApi from '../api/articles';
import TypeChip from './TypeChip.vue';
import ArticleDialog from './ArticleDialog.vue';
import { Promise } from 'bluebird';
import { useTimeAgo } from '@vueuse/core';
import debounce from 'lodash/debounce';

const headers = [
  { title: 'Headline', align: 'start', key: 'headline', sortable: false },
  { title: 'Published', key: 'date', align: 'end', sortable: false },
  { title: 'Image', key: 'image', align: 'center', sortable: false },
  { title: 'Type', key: 'type', align: 'center', sortable: false },
  { title: 'Link', key: 'link', align: 'center', sortable: false },
  { title: 'Actions', key: 'actions', align: 'center', sortable: false }
];

const serverItems = ref([]);
const loading = ref(true);
const totalItems = ref(0);
const itemsPerPage = ref(10);
const showDeleteSnackbar = ref(false);
const showRateLimitSnackbar = ref(false);
const selectedArticle = ref(null);
const savedMessage = ref('');
const searchTerm = ref(null);

const getImage = item => {
  const thumbnail = item.multimedia.find(it => it.subtype === 'thumbnail');
  return thumbnail ? `https://www.nytimes.com/${thumbnail.url}` : null;
}

const removeItem = index => {
  loading.value = true;
  return Promise.delay(1000)
  .then(() => {
      serverItems.value.splice(index, 1);
      loading.value = false;
      showDeleteSnackbar.value = true;
    })
};

const loadItems = ({ page = 1 } = {}) => {
  loading.value = true
  const params = { page: page - 1 };
  if (searchTerm.value) params.fq = `headline:("${searchTerm.value}")`;
  articlesApi.fetch(params)
    .then(({ response }) => {
      const { meta, docs } = response;
      serverItems.value = docs
      totalItems.value = Math.min(meta.hits, 1000) 
      loading.value = false
    })
    .catch(({ response }) => {
      if (response.status === 429) showRateLimitSnackbar.value = true;
    })
};

const editItem = index => {
  selectedArticle.value = serverItems.value[index];
};

const save = item => {
  console.log(item);
  Promise.delay(1000).then(() => {
    savedMessage.value = item._id
      ? 'Successfully edited existing article'
      : 'Successfully created new article';
    selectedArticle.value = null;
  })
};

const postponedLoad = debounce(loadItems, 600);

const search = value => {
  searchTerm.value = value;
  postponedLoad();
};
</script>

<template>
  <div>
    <v-data-table-server
      v-model:items-per-page="itemsPerPage"
      :items-per-page-options="[{value: 10, title: '10'}]"
      :headers="headers"
      :items="serverItems"
      :items-length="totalItems"
      :loading="loading"
      item-value="name"
      @update:options="loadItems">
      <template #top>
        <div class="d-flex justify-space-between align-center ma-4">
          <v-text-field
            @update:modelValue="search"
            :model-value="searchTerm"
            label="Search term"
            max-width="300px"
            placeholder="Start typing to filter results"
            class="mr-4" />
          <v-btn
            @click="selectedArticle = {}"
            prepend-icon="mdi-plus">
            Create new article
          </v-btn>
        </div>
      </template>
      <template #item.headline="{ item }">
        <div class="text-no-wrap">
          {{ item.headline.main }}
        </div>
      </template>
      <template #item.date="{ item }">
        <div class="text-no-wrap">
          {{ useTimeAgo(new Date(item.pub_date)).value }}
        </div>
      </template>
      <template #item.type="{ item }">
        <TypeChip :type="item.type_of_material" />
      </template>
      <template #item.link="{ item }">
        <v-btn
          :href="item.web_url"
          size="small"
          target="_blank"
          icon="mdi-open-in-new" >
        </v-btn>
      </template>
      <template #item.image="{ item }">
        <v-img
          v-if="getImage(item)"
          :src="getImage(item)"
          height="64"
          width="64"
          cover
          class="article-avatar my-2">
        </v-img>
      </template>
      <template #item.actions="{ index }">
        <div class="d-flex">
          <v-btn
            @click="editItem(index)"
            color="blue-darken-4"
            size="small"
            icon="mdi-pencil"
            class="mr-2">
          </v-btn>
          <v-btn
            @click="removeItem(index)"
            size="small"
            color="red-darken-4"
            icon="mdi-delete" >
          </v-btn>
        </div>
      </template>
    </v-data-table-server>
    <ArticleDialog
      v-if="selectedArticle"
      @close="selectedArticle = null"
      @save="save"
      :article="selectedArticle" />
    <v-snackbar
      v-model="showDeleteSnackbar"
      color="red-lighten-4"
      :timeout="-1"
      multi-line absolute>
      Item successfully deleted
      <template v-slot:actions>
        <v-btn
          color="red"
          variant="text"
          @click="showDeleteSnackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar
      @update:modelValue="savedMessage = ''"
      :model-value="!!savedMessage"
      color="green-lighten-1"
      :timeout="4000"
      multi-line absolute>
      {{ savedMessage }}
    </v-snackbar>
    <v-snackbar
      v-model="showRateLimitSnackbar"
      color="red-lighten-4"
      :timeout="-1"
      multi-line absolute>
      Unable to fetch items because of too many requests. Please try again later!
      <template v-slot:actions>
        <v-btn
          color="red"
          variant="text"
          @click="showRateLimitSnackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<style setup>
.article-avatar {
  border-radius: 200px;
}
</style>
