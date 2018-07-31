<template >
  <div >
    <input v-bind:value="value" v-on:input="$emit('input', $event.target.value)"
     type="range" name="Filter" min="0" max="200"  class="slider" />
  </div>
</template>

<script>
export default {
  name: "FilterContainer",
  props: {
    value: 0
  },
  model: {
    prop: "value",
    event: "input"
  },
  data() {
    return {};
  },
  methods: {},

  created: function() {},
  mounted: function() {},
  updated: function() {}
};
</script>


<style lang="scss" scoped>
</style>
