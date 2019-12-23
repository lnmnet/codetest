<template>
  <v-card class="mt-9 mx-auto" width="400" :loading="isLoading">
    <v-card-title>Pets</v-card-title>
    <v-card-text>
      <PetParent :items="pets" :isLoading="isLoading" />
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex"
import { FETCH_PETS } from "@/store/actions.type"
import PetParent from "@/components/PetParent"

export default {
  name: 'pets',

  data: () => ({
    type: 'Cat'
  }),

  components: { PetParent },

  computed: {
    ...mapGetters(['isLoading', 'pets'])
  },

  created () {
    this.getPets();
  },

  methods: {
    getPets () {
      this.$store.dispatch(FETCH_PETS, this.type);
    }
  }
}
</script>