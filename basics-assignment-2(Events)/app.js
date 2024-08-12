const app = Vue.createApp({
  data() {
    return {
        inputValue: "",
        outputValue: ""
    };
  },
  methods: {
    showAlert() {
        alert("Hello World")
    },
    showOutput1(event) {
        this.inputValue = event.target.value
    },
    showOutput2(event) {
        this.outputValue = event.target.value
    }
  },
});

app.mount('#assignment')
