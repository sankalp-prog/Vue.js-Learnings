<template>
  <section>
    <div>
      <h2>Todo List</h2>
      <ul>
        <li>Create the 3x3 tic tac toe grid.</li>
        <li>Allow user to click and put 'X'</li>
        <li>Computer randomly puts 'O' where it's empty</li>
        <li>Continue till winner is determined or all boxes are filled.</li>
      </ul>
    </div>

    <div id="grid" v-if="this.result === ''">
      <div
        class="square"
        v-for="square in squares"
        :key="square.id"
        @click="playerInput(square.id)"
      >
        {{ square.value }}
      </div>
    </div>
    <div v-else-if="this.result === 'player'">Player wins</div>
    <div v-else-if="this.result === 'computer'">Computer wins</div>
    <div v-else-if="this.result === 'draw'">Its a Draw</div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      char: "",
      result: "",
      squares: [
        {
          id: 0,
          value: "",
        },
        {
          id: 1,
          value: "",
        },
        {
          id: 2,
          value: "",
        },
        {
          id: 3,
          value: "",
        },
        {
          id: 4,
          value: "",
        },
        {
          id: 5,
          value: "",
        },
        {
          id: 6,
          value: "",
        },
        {
          id: 7,
          value: "",
        },
        {
          id: 8,
          value: "",
        },
      ],
      winningSquares: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
  },
  methods: {
    computerInput() {
      this.char = "O";
      let num = 0;
      let selectedSquare = this.squares[0];
      while (selectedSquare.value !== "") {
        num = Math.floor(Math.random() * 9);
        selectedSquare = this.squares.find((square) => square.id === num);
      }
      selectedSquare.value = this.char;
      if (this.check()) {
        this.result = "computer";
      }
    },
    playerInput(id) {
      this.char = "X";
      const selectedSquare = this.squares.find((square) => square.id === id);
      if (selectedSquare.value === "") {
        selectedSquare.value = this.char;
        if (this.check()) {
          this.result = "player";
        }
        if (this.squares.find((square) => square.value === "")) {
          this.computerInput();
        } else {
          this.result = "draw";
        }
      }
    },
    check() {
      for (let i = 0; i < this.winningSquares.length; i++) {
        let [a, b, c] = this.winningSquares[i];
        let squareA = this.squares.find((square) => square.id === a);
        let squareB = this.squares.find((square) => square.id === b);
        let squareC = this.squares.find((square) => square.id === c);
        if (
          squareA.value === this.char &&
          squareB.value === this.char &&
          squareC.value === this.char
        ) {
          return true;
        }
      }
      return false;
    },
  },
};
</script>

<style>
#grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.square {
  border-style: solid;
  border-width: 2px;
  padding: 16px;
  text-align: center;
}
</style>
