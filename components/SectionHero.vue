<template lang="html">
  <div class="section-hero">
    <nuxt-img :src="image" class="image cover" />
    <h1 class="text" v-text="text" />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.section-hero {
  position: relative;

  overflow: hidden;

  .image {
    height: var(--unit-100vh);
  }

  /deep/ .media {
    min-height: var(--unit-100vh);
  }

  .text {
    position: absolute;

    bottom: 120px;

    padding: 0 100px;
    margin-bottom: 0;

    text-align: center;
    font-size: 50px;
    line-height: 60px;
    color: var(--color-white);
  }

  //Breakpoints
  @media #{$gt-cinema} {
    .text {
      padding: 0 360px;
      bottom: 130px;
    }
  }
  @media #{$lt-tablet} {
    .text {
      padding: 0 40px;
      bottom: 90px;
    }
  }
  @media #{$lt-phone} {
    .text {
      padding: 0 20px;
      bottom: 45px;

      font-size: 24px;
      line-height: 26px;
    }
  }
}
</style>
