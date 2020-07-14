import './part1.base/05.datatype'
import './part1.base/06.enum'
import './part1.base/07-08.interface'
import './part1.base/09.function'
import './part1.base/10-11.class'
import './part1.base/12.class-interface'
import './part1.base/13-14.generics'
import './part1.base/15.inference'
import './part1.base/16.compatible'
import './part1.base/17.guards'
import './part1.base/18.advanced-1'
import './part1.base/19.advanced-2'
import './part1.base/20.advanced-3'
import './part1.base/21.advanced-4'
import './part2.project/01.module/es6/c'
import './part2.project/01.module/node/c.node'
import './part2.project/02.namespace/b'
import './part2.project/03.merge/merge'
import './part2.project/04.libs'
import { type } from 'jquery'

const hello: string = 'Hello TypeScript'
const App = document.getElementById('app') as HTMLElement
if ('innerHTML' in App) {
  App.innerHTML = hello
}


/**
 * example
 */
interface Result{
  error_msg: string
  error_code: number
}

function getList<Promise>() {
  return new Promise<Result>((resolve,reject) => {
    setTimeout(() => {
      resolve({
        error_msg: '200',
        error_code: 0
      })
    }, 500)
  })
}

async function API() {
  console.log('666')
  console.time('flag')
  let res = await getList<Result>()
  console.timeEnd('flag')
  console.log(res.error_code);
  console.log(res.error_msg);
}

API()