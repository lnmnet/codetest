<template>
  <div :class="$style.pet">
    <h1>Code Test - Pets</h1>
    <PetParent :items="pets" :isLoading="isLoading" />
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import { FETCH_PETS } from "@/store/actions.type"
import PetParent from "@/components/PetParent"

export default {
  name: 'pets',

  components: { PetParent },

  computed: {
    ...mapGetters(['isLoading', 'pets'])
  },

  created () {
    this.getPets();
  },

  methods: {
    getPets () {
      this.$store.dispatch(FETCH_PETS);
    }
  }
}
</script>

<style lang="postcss" module>
.pet {
  width: 343px;
  margin: 0 auto;
  padding-top: 10vh;

  & h1 {
    text-align: center;
    font-size: 36px;
    margin-bottom: 16px;
  }
}
</style>