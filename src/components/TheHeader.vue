<template>
  <v-toolbar color="blue accent-2" dark max-height="64">
    <v-toolbar-title>Code Test</v-toolbar-title>
    <v-divider vertical class="mx-4"></v-divider>
    <v-spacer />
    <v-toolbar-items>
      <v-btn text href="/pets">Pets</v-btn>
      <v-divider vertical></v-divider>
      <v-btn text href="/weather">Weather</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'the-header'
}
</script>