<template>
  <ul>
    <li v-for="(pet, index) in sort(pets)" :key="index">
      <slot name="pet" :pet="pet">{{ pet.name }}</slot>
    </li>
  </ul>
</template>


<script>
export default {
  name: 'pet-child',

  props: ['pets'],
  
  methods: {
    sort (pets) {
      return pets.sort(this._compare('name'));
    },

    _compare (prop) {
      return (a, b) => a[prop].localeCompare(b[prop]);
    }
  }
}
</script>