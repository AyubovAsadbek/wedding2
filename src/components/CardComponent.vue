<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

export default defineComponent({
  components: { Icon },
  props: ["mode", "mainText", "subText"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
});
</script>

<template>
  <div
    v-if="mode == 'dark'"
    class="flex p-5 bg-DarkRed w-full max-w-[400px] rounded-xl text-white justify-between overflow-hidden text-start"
  >
    <div class="w-[50%] flex flex-col gap-5 justify-between">
      <img class="max-w-[100px]" src="/white-logo.svg" alt="" />
      <div class="flex flex-col gap-2">
        <h1 class="text-xl font-semibold">Свадьба</h1>
        <p class="text-[12px]">
          {{ mainText.cardMainText }}
        </p>
      </div>
      <p class="text-[7px]">
        {{ subText.cardSubText }}
      </p>
    </div>

    <div class="relative w-[30%] flex flex-col gap-2 justify-between items-end">
      <img
        class="-bottom-5 -right-5 absolute w-[200px] max-w-[none]"
        src="/card/Clip path group.png"
        alt=""
      />
      <div></div>
      <img class="w-[100px]" src="/card/whiteQR.png" alt="" />
      <p class="text-[8px]">14 5151 843451 51541</p>
    </div>
  </div>

  <div
    v-if="mode == 'light'"
    class="relative flex p-5 bg-white w-full max-w-[400px] rounded-xl text-Red justify-between overflow-hidden text-start"
  >
    <img class="absolute top-[30%] left-[0]" src="/card/cardWave1.png" alt="" />
    <img class="absolute top-[0] right-[0]" src="/card/cardWave2.png" alt="" />
    <div class="w-[50%] flex flex-col gap-5 justify-between">
      <img class="max-w-[100px]" src="/Logo.svg" alt="" />
      <div class="flex flex-col gap-2">
        <h1 class="text-xl font-semibold">Свадьба</h1>
        <p class="text-[12px]">
          {{ mainText.cardMainText }}
        </p>
      </div>
      <p class="text-[7px]">
        {{ subText.cardSubText }}
      </p>
    </div>

    <div class="relative w-[30%] flex flex-col gap-2 justify-between items-end">
      <div></div>
      <img class="w-[100px]" src="/card/blackQR.png" alt="" />
      <p class="text-[8px]">14 5151 843451 51541</p>
    </div>
  </div>
</template>
