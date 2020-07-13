/**
 * 映射类型
 * TS的一些内置类型，方便类型再次封装等等
 */
void function() {
  interface Obj{
    a: string
    b: number
    c: boolean
  }
  /**同态 */
  type ReadonlyObj = Readonly<Obj>

  type PartialObj = Partial<Obj>

  type PickObj = Pick<Obj, 'a' | 'b'>

  /**非同态 */
  type RecordObj = Record<'x' | 'y', Obj>
}()