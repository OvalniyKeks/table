
import { getDays } from "./getDays"

export let dayServices = {
  getDays: getDays,
  getTodayIdx: () => {
    let oneDay = 1000 * 60 * 60 * 24;
    let diff = new Date() - new Date(new Date().getFullYear(), 0, 0) - oneDay;
    return Math.floor(diff / oneDay);
  }
}
