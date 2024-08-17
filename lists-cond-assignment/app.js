const app = Vue.createApp({
    data() {
        return {
            goals: [],
            goal: "",
            listVisibility: true
        }
    },
    methods: {
        addGoal() {
            this.goals.push(this.goal)
            this.goal = ""
        },

        toggleList() {
            this.listVisibility = !this.listVisibility
        }
    },
    computed: {
        toggleButtonText() {
            if (this.listVisibility === true) {
                return "Hide"
            } else {
                return "Show List"
            }
        }
    }
})

app.mount("#assignment")