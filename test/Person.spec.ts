import Person from '../src/Person'

import {describe, expect, test} from '@jest/globals';

describe('Person', () => {
  test('Should return its name in string', () => {
    const p = new Person('Johnny Bravo')
  
    expect(p.toString()).toBe('Johnny Bravo')
  })
})
