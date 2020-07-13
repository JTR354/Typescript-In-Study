/**
 * 条件类型
 */
void function () {
  /**
   * T extends U ? X : Y 如果类型T能够被赋值为U那么就是X类型，否则为Y类型
   */
  type TypeName<T> = 
    T extends string ? 'string':
    T extends number ? 'number':
    T extends boolean ? 'boolean':
    T extends undefined ? 'undefined':
    T extends Function ? 'function':
    'object'

  type T1 = TypeName<string>
  type T2 = TypeName<string[]>

  // (A | B) extends U ? X : Y
  // (A extends U ? X : Y) | (B extends U ? X : Y)

  type T3 = TypeName<string | string[]>

  type Diff<T,U> = T extends U ? never: T

  type T4 = Diff<'a' | 'b' | 'c', 'a' | 'e'>
  

  // Diff<"a", "a" | "e"> | Diff<"b", "a" | "e"> | Diff<"c", "a" | "e">
  // never | "b" | "c"
  // "b" | "c"

  // type T44 = Diff<'a' | 'b' | 'c', () => string>

  type NotNull<T> = Diff<T , null | undefined>
  type T5 = NotNull<string|number|undefined|null>

  // Exclued<T, U> // T对U的相对补集
  // NonNullable<T>

  // Extract<T, U>
  type T6 = Extract<'a' | 'b', 'a'> // 交集

  // ReturnType<T>
  /**
   * infer关键字: 延迟推断，待推断
   */
  type T8 = ReturnType<() => string>
}()