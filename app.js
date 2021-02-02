const app = Vue.createApp({
  data() {
    return {
      name: "Iñigo",
      age: 25,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
    };
  },
  methods: {
      randomNumber(){
          return Math.random()
      }
  }
});

app.mount("#assignment");
