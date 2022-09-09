<template>
  <tbody>
    <tr class="sticky b-t-b b-b-b">
      <th class="cell-fixed ">
        <div class="content b-r-b b-l-b">Менеджеры</div>
      </th>
      <!-- Заполнение дат -->
      <th
        v-for="(date, i) in arrDate"
        :key="i"
        :class="{'end-week': date.endWeek}"
        :style="`background-color: ${i === todayIdx ? date.background : ''}`"
      >
        <div class="content">Утро:<span class="green">{{1}}</span> Вечер:<span class="green">{{1}}</span></div>
      </th>
    </tr>
    <tr
      class="sticky b-t-b b-b-b"
      v-for="(row, i) of managers"
      :key="i"
    >
      <th class="cell-fixed cell-fixed-item">
        <div class="content b-r-b b-l-b">{{row.name}}</div>
      </th>
      <th
        v-for="(date, i) in arrDate"
        :key="i"
        :class="{'end-week': date.endWeek}"
        :style="`background-color: white; color: rgb(170, 170, 170)`"
      >
        <div class="content">Утро</div>
      </th>
    </tr>
  </tbody>
</template>

<script>
import { dayServices } from '../services/dayServices'
export default {
  data () {
    return {
      arrDate: [],
      todayIdx: 0,
      managers: [
        {
          name: 'Косовов М.',
          data: []
        },
        {
          name: 'Косовов М.',
          data: []
        },
        {
          name: 'Косовов М.',
          data: []
        },
        {
          name: 'Косовов М.',
          data: []
        },
        {
          name: 'Косовов М.',
          data: []
        },
        {
          name: 'Косовов М.',
          data: []
        },
        {
          name: 'Косовов М.',
          data: []
        },
      ]
    }
  },
  created () {
    const startNameDay = 'Cб'
    const start = new Date("2022-06-01")
    const end = new Date("2022-12-31")

    this.arrDate = Object.freeze(dayServices.getDays(start, end, startNameDay))
    this.todayIdx = dayServices.getTodayIdx()
  }
}
</script>
