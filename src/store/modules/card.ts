import { defineStore } from 'pinia'

interface CardType {
  counter: number
  type: string
}

// type exclude = Exclude<'a' | 'b', 'a'>
// console.log(ke)
export const useCard = defineStore('card', {
  state: (): CardType => ({
    counter: 4,
    type: 'a'
  }),
  getters: {
    add: (state) => state.counter++
  }
})
