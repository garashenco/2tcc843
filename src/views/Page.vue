<template>
  <div class="container">
    <div class="about-me">
      <img src="@/assets/img/photo.png" alt="Avatar" class="about-img" />
      <div class="about-content">
        <h1 class="title">Вероника Ростова</h1>
        <h2 class="subtitle">Менеджер по продажам</h2>
        <p class="text">Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны</p>
        <div class="progress-block">
          <div class="progress-info">
            <p>Услуг</p>
          </div>
          <div class="list-progress">
            <Progress v-for="item in progress" :key="item.num" :progressInfo="item"></Progress>
          </div>
          <div class="total">
            <span class="total-name">Всего</span>
            <span class="total-value">{{totalProgress}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="reviews">
      <div class="info">
        <div class="wrapp-info">
          <h2 class="title">Последние отзывы</h2>
          <button class="btn" @click="viewAllComents = !viewAllComents">Все отзывы</button>
        </div>
        <div class="wrapp-value">
          <div class="value value-like">131</div>
          <div class="value value-coment">{{comments.length}}</div>
        </div>
      </div>
      <div class="wrapp-coments">
        <Comments
          v-for="(comment,index) in  (viewAllComents ? comments : lastComments)"
          :key="index"
          :comment="comment"
        />
      </div>
    </div>
    <div class="sending-text">
      <textarea class="textarea" v-model="commentText" @keyup.ctrl.enter="addCommentToList"></textarea>
      <button class="btn" @click="addCommentToList">Написать консультанту</button>
    </div>
  </div>
</template>

<script>
import Progress from "@/components/Progress";
import Comments from "../components/Сomments";
import { mapGetters, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      commentText: "",
      viewAllComents: false
    };
  },
  computed: {
    ...mapGetters(["totalProgress", "lastComments"]),
    ...mapState(["progress", "comments"])
  },
  components: {
    Progress,
    Comments
  },
  methods: {
    ...mapMutations(["setCommentToList"]),
    addCommentToList() {
      this.setCommentToList(this.commentText);
      this.commentText = "";
    }
  },
  mounted() {}
};
</script>

<style scoped>
</style>
