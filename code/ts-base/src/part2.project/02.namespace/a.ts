/**
 * namespace
 * 命名空间最初用于解决模块化的问题,目前作用不大
 */
namespace Shape {
  const pi = Math.PI
  export function circle(r: number) {
    return pi * r ** 2
  }
}