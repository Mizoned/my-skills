<template>
  <div class="progress">
    <div class="progress__text">{{this.process}}/100</div>
    <svg class="progress-ring" :width="circle.diameter" :height="circle.diameter">
      <circle class="progress-ring__circle"
              stroke="#EEF6FF"
              :stroke-width="circle.stroke"
              :cx="circle.diameter / 2"
              :cy="circle.diameter / 2"
              :r="circle.radius"
              fill="transparent"
      />
      <circle class="progress-ring__circle"
              stroke="#2E4052"
              :stroke-width="circle.stroke"
              :cx="circle.diameter / 2"
              :cy="circle.diameter / 2"
              :r="circle.radius"
              :style="styleCircle"
              fill="transparent"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    circle: {
      type: Object,
      require: true
    },
    process: {
      type: Number,
      default: 0,
    }
  },
  data() {
    return {
      styleCircle: {
        strokeDashoffset: 0,
        strokeDasharray: 0,
      }
    }
  },
  methods: {
    setCircleSettings(circle) {
      this.circle.radius = (circle.diameter / 2) - circle.stroke;
      this.circle.circumference = 2 * Math.PI * +this.circle.radius;
    },
    setStyleCircleSettings() {
      this.styleCircle.strokeDashoffset = this.circle.circumference - this.process / 100 * this.circle.circumference;
      this.styleCircle.strokeDasharray = `${ this.circle.circumference } ${ this.circle.circumference }`;
    }
  },
  created() {
    this.setCircleSettings(this.circle);
    this.setStyleCircleSettings(this.circle);
  },
  watch: {
    process() {
      this.setStyleCircleSettings(this.circle);
    }
  }
}
</script>

<style scoped lang="scss">
.progress {
  position: relative;

  &__text {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #8D9DB4;
  }

  &-ring {
    &__circle {
      transform-origin: center;
      transform: rotate(-90deg);
      transition: stroke-dashoffset 0.5s ease-out;
    }
  }
}

</style>