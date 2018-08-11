<template>
  <div class="letterWarp" ref="letterWarp">
    <div class="letter"
      v-for="item of letter"
      :key="item"
      :ref="item"
      @click="clickLetter"
      @touchstart="startLetter"
      @touchmove="moveLetter"
      @touchend="endLetter"
    >{{item}}</div>
  </div>
</template>
<script>
export default {
  name: 'CityLetter',
  data () {
    return {
      touchStatus: false
    }
  },
  props: {
    cities: {
      type: Object
    }
  },
  computed: {
    letter () {
      const letter = []
      for (let key in this.cities) {
        letter.push(key)
      }
      return letter
    }
  },
  methods: {
    clickLetter (event) {
      console.log(event.target.innerText)
    },
    startLetter () {
      this.touchStatus = true
    },
    moveLetter (event) {
      if (this.touchStatus) {
        const e = event.changedTouches[0]

        const top = this.$refs['letterWarp'].offsetTop + this.$refs['A'][0].offsetTop
        const elementHeight = e.target.offsetHeight
        const index = Math.floor((e.pageY - top) / elementHeight)

        if (index >= 0 && index < this.letter.length) {
          this.$emit('handleLetterIndex', this.letter[index])
        }
      }
    },
    endLetter () {
      this.touchStatus = false
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~style/varibles.scss";
.letterWarp{
  position: fixed;
  top:px(83);
  bottom:0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .letter{
    width: px(30);
    line-height: px(20);
    text-align: center;
    color: $bgColor;
  }
}
</style>
