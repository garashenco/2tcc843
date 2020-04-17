<template>
  <div class="progress">
    <span class="progress-name">{{progressInfo.name}}</span>
    <span class="progress-num">{{progressInfo.num}}</span>
    <div
      class="progress-line"
      :style="{width: progressInfo.widthPersent + '%', background: progressInfo.color}"
    ></div>
  </div>
</template>

<script>
export default {
  props: ["progressInfo"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
</style>
