import { consola } from 'consola'
import Person from './Person'

export default class Girl extends Person {
  /**
   * Kiss
   */
  kiss(someone: Person) {
    consola.info(`「${this.name}」 亲了下 「${someone.name}」。`)
  }

  /**
   * 与某人坠入爱河
   * @param someone 某人
   */
  fallInLoveWith(someone: Person) {
    consola.info(`「${this.name}」 与 「${someone.name}」 坠入爱河。`)
  }
}
