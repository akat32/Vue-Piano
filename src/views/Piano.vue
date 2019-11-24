<template>
  <div class="piano" data-test="piano-div">
    <octave octave = "1"/>
    <octave octave = "2"/>
    <div class="rightLine"/>
  </div>
</template>

<script>
// @ is an alias to /src
// 52, 36
// 한 옥타브에 12개 건반.
// 맨 앞에 ['라','라#','시'] 3개, 맨 뒤에 '도' 하나.
import octave from './octave.vue'

export default {
  name: 'Piano',
  components: {
    octave
  },
  methods: {

  }
}
</script>

<style src = "./keyboard.css">
</style>