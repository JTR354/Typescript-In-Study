/**
 * generics 泛型（一般的，通用的）
 */
void function() {
  /**
   * part01
   */
  function log<T>(value: T): T {
    console.log(value);
    return value
  }
 
  // log<string[]>(['a','b','c'])
  // log(['a','b','c'])

  type Log = <T>(value: T) => T
  let myLog: Log = log

  interface Log2<T> {
    (value: T): T
  }
  let myLog2: Log2<number> = log
  // myLog(1)
  // myLog2(3) 

}()

void function() {
  /**
   * part02
   */
  class Log<T>{
    run(value: T) {
      console.log(value);
      return value
    }
  }
  let log1 = new Log<number>()
  // log1.run(123)
  let log2 = new Log<string>()
  // log2.run('hello log2')


  /**
   * part03
   */
  interface Length{
    length: number
  }
  function logAdvance<T extends Length>(value: T):T {
    console.log(value, value.length);
    return value
  }
  // logAdvance([1])
  // logAdvance('123')
  // logAdvance({length: 66})
}()
