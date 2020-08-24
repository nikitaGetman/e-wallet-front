<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="24 * size" :height="24 * size" viewBox="0 0 24 24">
    <!-- eslint-disable -->
    <path
      v-if="name === 'gift'"
      d="M22 12v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8a1 1 0 01-1-1V8a2 2 0 012-2h3.17A3 3 0 016 5a3 3 0 013-3c1 0 1.88.5 2.43 1.24v-.01L12 4l.57-.77v.01C13.12 2.5 14 2 15 2a3 3 0 013 3 3 3 0 01-.17 1H21a2 2 0 012 2v3a1 1 0 01-1 1M4 20h7v-8H4v8m16 0v-8h-7v8h7M9 4a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1m6 0a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1M3 8v2h8V8H3m10 0v2h8V8h-8z"
    />
    <path v-if="name === 'arrow-left'" d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z" />
    <path v-if="name === 'arrow-right'" d="M4 11v2h12l-5.5 5.5 1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5 16 11H4z" />
    <path v-if="name === 'arrow-top-right'" d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19 5 17.59z" />
    <path v-if="name === 'arrow-bottom-left'" d="M19 6.41L17.59 5 7 15.59V9H5v10h10v-2H8.41L19 6.41z" />
  </svg>
</template>

<script>
const icons = ['gift', 'arrow-left', 'arrow-right', 'arrow-top-right', 'arrow-bottom-left']

export default {
  name: 'VIcon',
  props: {
    name: {
      type: String,
      validator: val => icons.includes(val)
    },
    size: {
      type: [Number, String],
      default: 1
    }
  }
}
</script>
