<template lang="html">
  <div class="section-text-image">
    <h3 class="text" v-text="text" />
    <div class="meta">
      <nuxt-img v-prlx.mobile="prlxOptions" class="image cover" :src="image" />
    </div>
  </div>
</template>

<script>
const prlxOptions = {
  preserveInitialPosition: true,
  speed: 0.2,
  fromBottom: true,
  reverse: true,
  limit: { min: -100, max: 250 }
};

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
  },
  data() {
    return {
      prlxOptions
    };
  }
};
</script>

<style lang="scss" scoped>
.section-text-image {
  margin: 0 auto;
  padding: 0 var(--unit-gap);
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  max-width: 1800px;

  color: var(--color-blue);
  font-family: var(--font-primary);

  .text {
    margin: 120px auto;
    max-width: 1400px;

    font-size: 50px;
    text-align: center;
    line-height: 60px;
  }

  .meta {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  //Breakpoints
  @media #{$lt-phone} {
    margin-bottom: 45px;

    .text {
      margin: 40px 0 85px;

      font-size: 20px;
      line-height: 24px;
    }
  }
}
</style>
