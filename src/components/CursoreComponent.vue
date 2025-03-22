<template>
  <div class="hidden sm:block">
    <div class="relative cursor-dot z-50" ref="cursorDot"></div>
    <div class="cursor-outline z-50" ref="cursorOutline"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "CustomCursor",
  setup() {
    const cursorDot = ref<HTMLElement | null>(null);
    const cursorOutline = ref<HTMLElement | null>(null);

    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorDot.value || !cursorOutline.value) return;

      const posX = e.clientX;
      const posY = e.clientY;

      // Move the dot instantly
      cursorDot.value.style.left = `${posX}px`;
      cursorDot.value.style.top = `${posY}px`;

      // Move the outline with animation
      cursorOutline.value.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 500, fill: "forwards" }
      );
    };

    onMounted(() => {
      window.addEventListener("mousemove", handleMouseMove);
    });

    return {
      cursorDot,
      cursorOutline,
    };
  },
});
</script>

<style scoped>
/* Your existing styles remain the same */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  cursor: none;
}

body {
  width: 100%;
  height: 100vh;
  background-color: black;
}

.cursor-dot {
  width: 5px;
  height: 5px;
  background: #e84797;
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: 50;
  pointer-events: none;
}

.cursor-outline {
  width: 30px;
  height: 30px;
  border: 2px solid #e84797;
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: 50;
  pointer-events: none;
}
</style>
