import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0); //енто стейт - реактивный стейт на композиции
  const doubleCount = computed(() => count.value * 2); //енто геттер если шо на композиции
  function increment() {
    count.value++;
  } //а енто тепереча так акшоны выглядят на композиции значится, пнятненько, от но чо

  return { count, doubleCount, increment }; //енто на композиции все что юзается в компоненте надобно вертать
});
