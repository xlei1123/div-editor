<script lang="ts">
export default {
  props: {
    msg: String
  },
  data() {
    return {
      count: 1
    }
  }, 
  methods: {
    change: function() {
      this.count = this.count + 1;
    }
  }
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      <p>You’ve successfully created a project with</p>
      <a target="_blank" href="https://github.com/xlei1123/div-editor">div-editor</a>
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>.
    </h3>
    {{ count }}
    <button @click="change"> 加1</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
