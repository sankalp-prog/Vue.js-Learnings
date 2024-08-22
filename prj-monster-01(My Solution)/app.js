function randomValue(min, max) {
  value = Math.floor(Math.random() * (max - min) + min);
  return value;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      rounds: 0,
      winner: null,
      logMessages: [],
    };
  },
  watch: {
    rounds() {
      if (this.playerHealth <= 0 && this.monsterHealth <= 0) {
        this.winner = "Draw";
      } else if (this.monsterHealth <= 0) {
        this.winner = "Player";
      } else if (this.playerHealth <= 0) {
        this.winner = "Monster";
      }
    },
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth <= 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },

    playerBarStyles() {
      if (this.playerHealth <= 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },

    onThirdRound() {
      return this.rounds % 3 !== 0;
    },

    determineOutcome() {},
  },
  methods: {
    monsterAttack() {
      this.rounds++;
      const attackValue = randomValue(8, 15);
      this.playerHealth -= attackValue;
      this.addLogs("Monster", "Attack", attackValue);
    },

    playerAttack() {
      const attackValue = randomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.monsterAttack();
      this.addLogs("Player", "Attack", attackValue);
    },

    playerSpecialAttack() {
      const attackValue = randomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.monsterAttack();
      this.addLogs("Player", "Special Attack", attackValue);
    },

    healPlayer() {
      this.round++;
      const healValue = randomValue(8, 20);
      this.playerHealth += healValue;
      this.monsterAttack();
      this.addLogs("Player", "Heal", healValue);
    },

    playerSurrender() {
      this.winner = "Monster";
    },

    startNewGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.rounds = 0;
      this.winner = null;
      this.logMessages = [];
    },

    addLogs(who, what, howMuch) {
      this.logMessages.unshift({
        who: who,
        what: what,
        howMuch: howMuch,
      });
    },
  },
});

app.mount("#game");
