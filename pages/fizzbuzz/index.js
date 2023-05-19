export class FizzBuzz {
  execute(i) {
    if (i % 3 === 0 && i % 5 === 0) {
      return "FizzBuzz";
    } else if (i % 3 === 0) {
      return "Fizz";
    } else if (i % 5 === 0) {
      return "Buzz";
    } else {
      return i.toString();
    }
  }
}

export class FizzBuzzExecutor {
  constructor(fizzBuzz) {
    this.fizzBuzz = fizzBuzz;
  }

  execute(start, end) {
    for (let i = start; i <= end; i++) {
      this.fizzBuzz.execute(i);
    }
  }
}
