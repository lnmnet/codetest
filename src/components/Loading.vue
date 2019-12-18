<template>
  <div :class="$style.loading">loading...</div>
</template>

<script>
export default {
  name: 'loading'
}
</script>

<style lang="postcss" module>
.loading {
  padding: 24px;
  text-align: center;
}
</style>