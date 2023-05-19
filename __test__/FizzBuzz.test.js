import { FizzBuzz, FizzBuzzExecutor } from '../pages/fizzbuzz/index'

describe("FizzBuzzは", () => {
  test("3の倍数を受け取るとFizzを返す", () => {
    expect(new FizzBuzz().execute(3)).toEqual("Fizz");
    expect(new FizzBuzz().execute(6)).toEqual("Fizz");
  });
  test("5の倍数を受け取るとBuzzを返す", () => {
    expect(new FizzBuzz().execute(5)).toEqual("Buzz");
    expect(new FizzBuzz().execute(10)).toEqual("Buzz");
  });
  test("3と5の倍数を受け取るとFizzBuzzを返す", () => {
    expect(new FizzBuzz().execute(15)).toEqual("FizzBuzz");
    expect(new FizzBuzz().execute(30)).toEqual("FizzBuzz");
  });
  test("3と5の倍数以外を受け取るとその数を返す", () => {
    expect(new FizzBuzz().execute(1)).toEqual('1');
    expect(new FizzBuzz().execute(2)).toEqual('2');
  });
});

describe("FizzBuzzExecutorは", () => {
  test("1から100までFizzBuzzする", () => {
    const execute = jest.fn();
    const fb = {
      execute: execute,
    }
    new FizzBuzzExecutor(fb).execute(1, 100)

    expect(execute).toHaveBeenCalledTimes(100)
    expect(execute).not.toHaveBeenCalledWith(-1)
    expect(execute).not.toHaveBeenCalledWith(0)
    expect(execute).toHaveBeenNthCalledWith(1, 1)
    expect(execute).toHaveBeenNthCalledWith(2, 2)
    expect(execute).toHaveBeenNthCalledWith(3, 3)
    expect(execute).toHaveBeenNthCalledWith(100, 100)
    expect(execute).not.toHaveBeenCalledWith(101)
  })
})
