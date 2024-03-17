<script setup>
import { computed, ref, watch } from 'vue';
import cloneDeep from 'lodash/cloneDeep';
import set from 'lodash/set';
import TypeChip from './TypeChip.vue';
import { useTimeAgo } from '@vueuse/core';

const emit = defineEmits(['save', 'close']);

const props = defineProps({
  article: { type: Object, required: true }
});

const item = ref(null);
const form = ref(null)

const isNew = computed(() => !props.article._id);
const title = computed(() => isNew.value ? 'Create article' : 'Edit article');
const image = computed(() => {
  if (isNew.value) return;
  return props.article.multimedia.find(it => it.subtype === 'xlarge');
});

const mainHeadline = computed({
  get: () => item.value.headline && item.value.headline.main,
  set: value =>  set(item.value, 'headline.main', value)
})

const save = () => {
  form.value.validate().then(({ valid }) => {
    if (valid) return emit('save', item.value);
  })
}

const publishedAgo = useTimeAgo(new Date(props.article.pub_date));

const rules = {
  headline: [
    value => !!value || 'Headline is required',
    value => value.length > 15 || 'Headline should be longer than 15 characters'
  ],
  source: [
    value => !!value || 'Source is required',
    value => value.length > 5 || 'Headline should be longer than five characters'
  ],
  abstract: [
    value => !!value || 'Abstract is required',
    value => value.length > 20 || 'Headline should be longer than 20 characters'
  ],
  snippet: [
    value => !!value || 'Values is required',
    value => value.length > 20 || 'Snippet should be longer than 20 characters'
  ],
  keywords: [
    value => !!value || 'keywords is a required field',
    value => value.length > 0 || 'At least one keyword is required'
  ]
}

watch(() => props.article.uri, () => {
  item.value = cloneDeep(props.article);
}, { immediate: true });
</script>

<template>
  <v-dialog
    @update:modelValue="emit('close')"
    :model-value="true"
    max-width="1200">
    <v-card prepend-icon="mdi-pencil" :title="title">
      <template #text>
        <v-row v-if="!isNew">
          <v-col cols="12" md="6">
            <v-btn
              :href="item.web_url"
              target="_blank"
              text
              class="article-link d-inline text-subtitle-1">
              {{ article.headline?.main }}
            </v-btn>
          </v-col>
          <v-col cols="12" md="6">
            <div class="d-flex align-center justify-end">
              <TypeChip :type="item.type_of_material" />
              <div class="ml-3">
                Published {{ publishedAgo }}
              </div>
            </div>
          </v-col>
          <v-col cols="12">
            <div class="pa-5">
              <v-img
                v-if="image"
                :src="`https://www.nytimes.com/${image.url}`"
                cover
                class="pa-4">
              </v-img>
            </div>
          </v-col>
        </v-row>
        <v-form ref="form" class="mt-4 pa-5">
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="mainHeadline"
                :rules="rules.headline"
                label="Headline" />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
              v-model="item.source"
              :rules="rules.source"
              label="Source" />
            </v-col>
            <v-col cols="12" md="6">
              <v-textarea
                v-model="item.abstract"
                :rules="rules.abstract"
                label="Abstract" />
            </v-col>
            <v-col cols="12" md="6">
              <v-textarea
                v-model="item.snippet"
                :rules="rules.snippet"
                label="Snippet" />
            </v-col>
            <v-col cols="12" md="6">
            <v-combobox
              :model-value="item.keywords"
              :items="article.keywords" 
              :rules="rules.keywords"
              item-title="value"
              item-value="rank"
              label="Keywords"
              chips
              multiple />
          </v-col>
          </v-row>
        </v-form>
      </template>
      <template v-slot:actions>
        <div class="ml-auto">
          <v-btn
            @click="emit('close')"
            text="Close"
            class="ms-auto">
          </v-btn>
          <v-btn
            @click="save"
            color="secondary"
            class="ml-3"
            text="Save">
          </v-btn>
        </div>
      </template>
    </v-card>
  </v-dialog>
</template>

<style lang="scss" scoped>
.article-link ::v-deep {
  .v-btn__content {
    text-wrap: wrap;
    display: inline-block;
  }
}
</style>
