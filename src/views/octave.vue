<template>
    <div class="octave">
      <div v-on:click = "pushKeyboard(1)" class="keyboard keyboardC"></div>
      <div class="keyboardS keyboardCS">
        <div class="spline"/>
      </div>
      <div v-on:click = "pushKeyboard(2)" class="keyboard keyboardD"></div>
      <div class="keyboardS keyboardDS">
        <div class="spline"/>
      </div>
      <div v-on:click = "pushKeyboard(3)" class="keyboard keyboardE"></div>
      <div v-on:click = "pushKeyboard(4)" class="keyboard keyboardF"></div>
      <div class="keyboardS keyboardFS">
        <div class="spline"/>
      </div>
      <div v-on:click = "pushKeyboard(5)" class="keyboard keyboardG"></div>
      <div class="keyboardS keyboardGS">
        <div class="spline"/>
      </div>
      <div v-on:click = "pushKeyboard(6)" class="keyboard keyboardA"></div>
      <div class="keyboardS keyboardAS">
        <div class="spline"/>
      </div>
      <div v-on:click = "pushKeyboard(7)" class="keyboard keyboardB"></div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private octave!: number;
  
  private pushKeyboard (button: number) {
    //   console.log(this.octave, button)
      var audio = new Audio();
      var src = `../octave${this.octave}/sound${button}.mp3`
      audio.src = src
    //   console.log(audio.src)
      audio.play();
  }
}
</script>


<style src = "./keyboard.css"/>