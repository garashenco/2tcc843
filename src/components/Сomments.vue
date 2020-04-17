<template>
  <div class="comment">
    <div class="comment-info">
      <h2 class="comment-name">{{comment.name}}</h2>
      <span class="comment-date">{{comment.date}}</span>
    </div>
    <div class="comment-text">
      <p class="comment-paragraph">{{comment.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object
    }
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style scoped>
</style>
