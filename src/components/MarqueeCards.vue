<template>
  <div class="overflow-hidden w-full relative" :class="className">
    <div class="flex whitespace-nowrap marquee-container gap-4 group">
      <div
        class="flex gap-2.5 sm:gap-4 animate-marquee group-hover:animation-pause"
      >
        <div
          v-for="card in cards"
          :key="`first-${card.id}`"
          class="w-[224px] sm:w-[373px] h-[133px] sm:h-[221px] rounded-lg shrink-0"
        >
          <img :src="card.image" alt="card image" />
        </div>
      </div>

      <div
        class="flex gap-2.5 sm:gap-4 animate-marquee group-hover:animation-pause"
      >
        <div
          v-for="card in cards"
          :key="`second-${card.id}`"
          class="w-[224px] sm:w-[373px] h-[133px] sm:h-[221px] rounded-lg shrink-0"
        >
          <img :src="card.image" alt="card image" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.marquee-container {
  display: flex;
  width: max-content;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-marquee {
  animation: marquee 20s linear infinite;
}

.animation-pause {
  animation-play-state: paused;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

interface Card {
  id: number;
  image: string;
}

export interface MarqueeCardsProps {
  className?: string;
}

export const MarqueeCards = defineComponent({
  name: "MarqueeCards",
  props: {
    className: {
      type: String as PropType<string>,
      default: "",
    },
  },
  setup(props: MarqueeCardsProps) {
    const cards: Card[] = [
      {
        id: 1,
        image: "/card1.svg",
      },
      {
        id: 2,
        image: "/card2.svg",
      },
      {
        id: 3,
        image: "/card1.svg",
      },
      {
        id: 4,
        image: "/card2.svg",
      },
      {
        id: 5,
        image: "/card1.svg",
      },
      {
        id: 6,
        image: "/card2.svg",
      },
    ];

    return { cards };
  },
});

export default MarqueeCards;
</script>
