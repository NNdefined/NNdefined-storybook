<template>
  <div class="content">
    <vue-markdown 
      :source="text" 
    />
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  components: {
    VueMarkdown
  },
  props: {
    topic: {
      type: String
    },
    category: {
      type: String
    },
    text: {
      type: String,
      default: '***'
    }
  }
}

</script>

<style lang="css"> 
  .left-part {
    width: 30%;
    text-align: -webkit-center;
    float: left;
  }
  .content {
    background: #eee;
    min-height: 200px;
    width: 65%;
    float: right;
    padding-left: 20px;
  }
</style>