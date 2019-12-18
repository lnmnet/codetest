<template>
  <div :class="$style.nodata">No Data</div>
</template>

<script>
export default {
  name: 'no-data'
}
</script>

<style lang="postcss" module>
.nodata {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  background-color: #fff;
  border-radius: 2px;
  padding: 16px;
  border-left: 5px solid #f39;
}
</style>