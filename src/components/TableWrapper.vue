<template>
  <div class="table-wrapper">
    <table class="table">

      <thead>
        <tr class="sticky b-t-b b-b-b">
          <th class="cell-fixed ">
            <div class="content b-r-b b-l-b">Дата</div>
          </th>
          <!-- Заполнение дат -->
          <th
            v-for="(date, i) in arrDate"
            :key="i"
            :class="{'end-week': date.endWeek}"
            :style="`background-color: ${date.background}`"
          >
            <div class="content">{{date.date}} {{date.day}}</div>
          </th>

        </tr>
        <empty-row />
      </thead>

      <slot></slot>
    </table>
  </div>
</template>

<script>
import EmptyRow from './EmptyRow.vue'
import { dayServices } from '../services/dayServices'
export default {
  components: { EmptyRow },
  data () {
    return {
      arrDate: []
    }
  },
  created () {


    const startNameDay = 'Ср'
    const start = new Date("2022-06-01")
    const end = new Date("2022-12-31")

    this.arrDate = Object.freeze(dayServices.getDays(start, end, startNameDay))
  }
}
</script>




<style lang="sass">
.sticky
  position: sticky

.table
  border-collapse: collapse
  width: 100%
  border-spacing: 0
  &-wrapper
    max-width: 90vw

td, th
  padding: 0

th
  min-width: 150px
  border: 1px solid darkgrey
  background: lightgray

.b
  &-b
    &-b
      border-bottom: 2px solid black
  &-t
    &-b
      border-top: 2px solid black
  &-r
    &-b
      border-right: 2px solid black
  &-l
    &-b
      border-left: 2px solid black

.end-week
  border-right: 2px solid black

.content
  width: 100%
  height: 100%
  display: flex
  justify-content: center
  align-items: center

.cell
  &-fixed
    width: auto
    position: sticky
    left: 0
    top: 0
    z-index: 9
    & .content
      white-space: nowrap
      padding: 0 0 0 0.5rem
      text-overflow: ellipsis
      background: gray
      width: 150px
      color: #fff
    &-item
      & .content
        background: #efefef
        color: black

.green
  color: green
</style>
