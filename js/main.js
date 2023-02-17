const { createApp } = Vue;

createApp({
  data() {
    return {
      randomMails: [],
    };
  },
  methods: {
    getRandomMail() {
      for (i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((response) => {
            if (this.randomMails.length < 10) {
              this.randomMails.push(response.data.response);
            }
          });
      }
    },
  },
  created() {
    this.getRandomMail();
  },
}).mount("#root");
