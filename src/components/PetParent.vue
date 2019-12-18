<template>
  <div>
    <Loading v-if="isLoading" />
    <NoData v-if="!isLoading && !Object.keys(items).length"/>
    <div v-for="(key, index) in Object.keys(items)" :key="index" :class="$style.box">
      <h3>{{ key }}</h3>
      <PetChild :pets="items[key]">
        <template v-slot:pet="{ pet }">
          <span v-if="!pet.name">--</span>
          {{ pet.name }}
        </template>
      </PetChild>
    </div>
  </div>
</template>

<script>
import PetChild from "@/components/PetChild"
import Loading from "@/components/Loading"
import NoData from "@/components/NoData"

export default {
  name: 'pet-parent',

  components: { PetChild, Loading, NoData },

  props: ['items', 'isLoading']
}
</script>

<style lang="postcss" module>
.box {
  margin-bottom: 16px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  background-color: #fff;
  border-radius: 2px;

  & h3 {
    margin: 0;
    border-bottom: 1px solid #efefef;
    padding: 16px;
    font-weight: normal;
  }

  & ul {
    padding: 16px 64px;
    margin: 0;

    & li {
      height: 32px;
      display: flex;
      align-items: center;
    }
  }
}
</style>