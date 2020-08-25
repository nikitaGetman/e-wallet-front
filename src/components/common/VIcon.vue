<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="24 * size" :height="24 * size" viewBox="0 0 24 24">
    <!-- eslint-disable -->
    <path
      v-if="name === 'gift'"
      d="M22 12v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8a1 1 0 01-1-1V8a2 2 0 012-2h3.17A3 3 0 016 5a3 3 0 013-3c1 0 1.88.5 2.43 1.24v-.01L12 4l.57-.77v.01C13.12 2.5 14 2 15 2a3 3 0 013 3 3 3 0 01-.17 1H21a2 2 0 012 2v3a1 1 0 01-1 1M4 20h7v-8H4v8m16 0v-8h-7v8h7M9 4a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1m6 0a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1M3 8v2h8V8H3m10 0v2h8V8h-8z"
    />
    <path
      v-if="name === 'arrow-left'"
      d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z"
    />
    <path
      v-if="name === 'arrow-right'"
      d="M4 11v2h12l-5.5 5.5 1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5 16 11H4z"
    />
    <path
      v-if="name === 'arrow-top-right'"
      d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19 5 17.59z"
    />
    <path
      v-if="name === 'arrow-bottom-left'"
      d="M19 6.41L17.59 5 7 15.59V9H5v10h10v-2H8.41L19 6.41z"
    />
    <path
      v-if="name === 'to-bank'"
      d="M2 15v-3h3v-2l4 3.5L5 17v-2H2m20-6.3V10H10V8.7L16 5l6 3.7M10 17h12v2H10v-2m5-6h2v5h-2v-5m-4 0h2v5h-2v-5m8 0h2v5h-2v-5z"
    />
    <path
      v-if="name === 'handshake'"
      d="M21.71 8.71c1.25-1.25.68-2.71 0-3.42l-3-3c-1.26-1.25-2.71-.68-3.42 0L13.59 4H11C9.1 4 8 5 7.44 6.15L3 10.59v4l-.71.7c-1.25 1.26-.68 2.71 0 3.42l3 3c.54.54 1.12.74 1.67.74.71 0 1.36-.35 1.75-.74l2.7-2.71H15c1.7 0 2.56-1.06 2.87-2.1 1.13-.3 1.75-1.16 2-2C21.42 14.5 22 13.03 22 12V9h-.59l.3-.29M20 12c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-4.41l-3.28 3.28c-.31.29-.49.12-.6.01l-2.99-2.98c-.29-.31-.12-.49-.01-.6L5 15.41v-4l2-2V11c0 1.21.8 3 3 3s3-1.79 3-3h7v1m.29-4.71L18.59 9H11v2c0 .45-.19 1-1 1s-1-.55-1-1V8c0-.46.17-2 2-2h3.41l2.28-2.28c.31-.29.49-.12.6-.01l2.99 2.98c.29.31.12.49.01.6z"
    />
    <path
      v-if="name === 'receipt'"
      d="M3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2m15 7H6V7h12m0 6H6v-2h12m0 6H6v-2h12v2z"
    />
  </svg>
</template>

<script>
const icons = [
  'gift',
  'arrow-left',
  'arrow-right',
  'arrow-top-right',
  'arrow-bottom-left',
  'to-bank',
  'handshake',
  'receipt'
]

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
