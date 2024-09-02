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

    <div id="grid">
      <div
        class="square"
        v-for="square in squares"
        :key="square.id"
        @click="playerInput(square.id)"
      >
        {{ square.value }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
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
      winningSquares: [[0, 1, 2], [3, 4, 5] [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8],[2, 4, 6]]
    };
  },
  methods: {
    computerInput() {
      let num = 0;
      let selectedSquare = this.squares[0];
      while (selectedSquare.value !== "") {
        num = Math.floor(Math.random() * 9);
        selectedSquare = this.squares.find((square) => square.id === num);
      }
      selectedSquare.value = "O";
    },
    playerInput(id) {
      const selectedSquare = this.squares.find((square) => square.id === id);
      if (selectedSquare.value === "") {
        selectedSquare.value = "X";
        if (this.squares.find((square) => square.value === "")) {
          this.computerInput();
        } else {
          this.result = "Draw"
        }
      }
    },
    // check() {
    //   if (this.squares[])
    // }
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
