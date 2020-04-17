import Vue from 'vue'
import Vuex from 'vuex'
import dateFilter from "@/filters/date.filters";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    progress: [{
        name: "Ручное бронирование",
        num: 11,
        widthPersent: 81,
        color: "#B1E19B"
      },
      {
        name: "Пакетные туры",
        num: 3,
        widthPersent: 20,
        color: "#ACE2F8"
      },
      {
        name: "Отели",
        num: 1,
        widthPersent: 12,
        color: "#ACE2F8"
      }
    ],
    comments: [{
        name: "Влад",
        date: "13 октября 2011",
        text: "Привет, Верунь! ниче себе ты крутая. фотка класс!!!!"
      },
      {
        name: "Андрей",
        date: "13 октября 2011",
        text: "Привет, Верунь! ниче себе ты крутая. фотка класс!!!!"
      },
      {
        name: "Люба",
        date: "13 октября 2011",
        text: "Привет, Верунь! ниче себе ты крутая. фотка класс!!!!"
      },
      {
        name: "Катя",
        date: "13 октября 2011",
        text: "Привет, Верунь! ниче себе ты крутая. фотка класс!!!!"
      },
      {
        name: "Женя",
        date: "13 октября 2011",
        text: "Привет, Верунь! ниче себе ты крутая. фотка класс!!!!"
      },
      {
        name: "Вова",
        date: "13 октября 2011",
        text: "Привет, Верунь! ниче себе ты крутая. фотка класс!!!!"
      },
      {
        name: "Надя",
        date: "13 октября 2011",
        text: "Привет, Верунь! ниче себе ты крутая. фотка класс!!!!"
      },
      {
        name: "Нолан",
        date: "13 октября 2011",
        text: "Привет, Верунь! ниче себе ты крутая. фотка класс!!!!"
      },
      {
        name: "Лада",
        date: "13 октября 2011",
        text: "Привет, Верунь! ниче себе ты крутая. фотка класс!!!!"
      },
      {
        name: "Дина",
        date: "13 октября 2011",
        text: "Привет, Верунь! ниче себе ты крутая. фотка класс!!!!"
      },
      {
        name: "Кайл",
        date: "13 октября 2011",
        text: "Привет, Верунь! ниче себе ты крутая. фотка класс!!!!"
      },
      {
        name: "Самуил",
        date: "13 октября 2011",
        text: "Привет, Верунь! ниче себе ты крутая. фотка класс!!!!"
      },
      {
        name: "Лилия Семёновна",
        date: "13 октября 2011",
        text: "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?"
      },
      {
        name: "Лилия Семёновна",
        date: "13 октября 2011",
        text: "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?"
      }
    ],
  },
  getters: {
    totalProgress(state) {
      return state.progress.reduce((value, current) => value + current.num, 0);
    },
    lastComments(state) {
      let from = state.comments.length;
      return state.comments.slice(from - 3, from);
    }
  },
  mutations: {
    setCommentToList(state, value) {
      if (value.trim()) {
        let commentObject = {
          name: "Front-end",
          text: value,
          date: dateFilter(new Date())
        };
        state.comments.push(commentObject);
      }
    }

  },
  actions: {


  }
})

export default store;