<template>
  <v-container class="pt-12">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
    
    <div class="text-center">
      <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>
      <h1 class="text-h2 font-weight-bold">Article manager</h1>
    </div>
    
    <div class="py-4" />
    
    <v-row>
      <v-col cols="12">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-lighten-2"
            prepend-icon="mdi-rocket-launch-outline"
            href="https://vuetifyjs.com/"
            rounded="lg"
            target="_blank"
            variant="outlined"
          >
            <template #image>
              <v-img position="top right" />
              <v-img
                class="mb-4"
                height="150"
                src="@/assets/logo.png" />
            </template>

            <template #title>
              <h2 class="text-h5 font-weight-bold">Framework</h2>
            </template>

            <v-overlay
              opacity=".12"
              scrim="primary"
              contained
              model-value
            />
            <template #subtitle>
              <div class="text-subtitle-1">
                This app is made using Vuetify framework
              </div>
            </template>

          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="https://vuetifyjs.com/en/wireframes/baseline/"
            prepend-icon="mdi-view-quilt"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Baseline wireframe with navigation drawer is the building block"
            target="_blank"
            title="Wireframe"
            variant="text"
          >
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="https://developer.nytimes.com/docs/articlesearch-product/1/overview"
            prepend-icon="mdi-text-box-outline"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Article details are fetched from New York Times API"
            target="_blank"
            title="Public API"
            variant="text"
          >
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>
        <v-col cols="12" class="pt-12">
          <div class="text-center">
            <div class="text-body-2 font-weight-light mb-n1">Featured</div>
            <h2 class="text-h3 font-weight-bold">Libraries</h2>
          </div>
        </v-col>        

        <v-col cols="12" md="6">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="https://axios-http.com/"
            prepend-icon="mdi-rocket-launch"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Explore available framework Features."
            target="_blank"
            title="Axios"
            variant="text"
          >
          <template #image>
              <v-img position="top right" />
              <v-img
                height="60"
                src="@/assets/axios-logo.svg" />
            </template>
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="https://vueuse.org/"
            prepend-icon="mdi-widgets-outline"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="For relative dates with 'timeAgo'"
            target="_blank"
            title="VueUse"
            variant="text"
          >
            <template #image>
              <v-img position="top right" />
              <v-img
                class="mb-4"
                height="150"
                src="@/assets/vue-use-logo.svg" />
            </template>
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="https://lodash.com/docs/4.17.15"
            prepend-icon="mdi-wrench"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Utility methods"
            target="_blank"
            title="Lodash"
            variant="text"
          >
          <template #image>
              <v-img position="top right" />
              <v-img
                height="60"
                src="@/assets/lodash-logo.svg" />
            </template>
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="http://bluebirdjs.com/docs/getting-started.html"
            prepend-icon="mdi-clock"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="To make mocked actions feel async"
            target="_blank"
            title="Bluebird"
            variant="text"
          >
          <template #image>
              <v-img position="top right" />
              <v-img
                height="60"
                src="@/assets/bluebird-logo.png" />
            </template>
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
  //
</script>
