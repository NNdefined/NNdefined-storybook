<template>
  <button v-bind:style="getStyles" class="custom-button" @click="handleClick">
    <i :class="pasrseIconLeft"></i>
    <slot></slot>
    <i :class="pasrseIconRight"></i>
  </button>
</template>

<script>
  export default {
    name: 'NnButton',
    props: {
      handleClick: {
        default: () => () => null
      },
      isDisabled: {
        type: Boolean,
        default: false
      },
      width: {
        type: Number,
        default: 90
      },
      height: {
        type: Number,
        default: 30
      },
      bg: {
        type: String,
        default: '#fff'
      },
      color: {
        type: String,
        default: '#000'
      },
      border: {
        type: String
      },
      borderColor: {
        type: String,
        default: '#ddd'
      },
      borderRadius: {
        type: Number,
        default: 1
      },
      iconNameLeft: {
        type: String
      },
      iconNameRight: {
        type: String
      }
    },
    computed: {
      getStyles() {
        return this.parseColors + this.parseSize + this.parseBorder
      },
      parseColors() {
        return 'background-color:' + this.bg + '; color:' + this.color + ';'
      },
      parseSize() {
        return 'width:' + this.width + 'px; height:' + this.height + 'px;'
      },
      parseBorder() {
        return (this.border) 
        ? (this.border + 'border-radius:' + this.borderRadius + 'px;')
        : (this.borderColor && this.borderRadius) 
        ? ('border: 1px solid ' + this.borderColor + ';border-radius:' + this.borderRadius + 'px;') 
        : (this.borderColor && !this.borderRadius) 
        ? ('border: 1px solid ' + this.borderColor + ';') : ''
      },
      pasrseIconLeft() {
        return (this.iconNameLeft) ? ('fa fa-' + this.iconNameLeft) : ''
      },
      pasrseIconRight() {
        return (this.iconNameRight) ? ('fa fa-' + this.iconNameRight) : ''
      }
    },
  }
</script>

<style>
  .button {
    border: 3px solid;
    padding: 10px 20px;
    background-color: white;
    outline: none;
  }
</style>
