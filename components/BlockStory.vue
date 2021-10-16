<template lang="html">
  <div
    class="block-story"
    v-intersection-observer.once="{
      threshold: 0.4
    }"
  >
    <div class="image-meta">
      <nuxt-img class="image cover" :src="image" />

      <div class="overlay" />
    </div>

    <div class="text-meta">
      <h3 v-if="title" class="title" v-text="title" />
      <div v-if="text" class="text" v-html="text" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: ""
    },
    title: {
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
.block-story {
  position: relative;
  overflow: hidden;

  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;

  font-family: var(--font-primary);
  color: var(--color-blue);

  .image-meta {
    flex: 1 0 50%;
    min-height: 800px;
    overflow: hidden;

    .image {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;

      width: 50%;
      height: 100%;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: var(--color-white);

    width: 50%;
    height: 100%;

    transform: scaleX(1);
    transition: transform 0.8s var(--easing-authentic-motion);
    transform-origin: right;
  }

  .text-meta {
    flex: 1 0 50%;
    box-sizing: border-box;
    padding: 0 60px;
  }

  .title {
    margin: 0 0 20px;

    font-size: 90px;
    line-height: 90px;

    transform: translateX(100vw);
    transition: transform 0.8s var(--easing-authentic-motion);
  }

  /deep/ .text {
    margin: 0;

    font-size: 36px;
    line-height: 42px;

    transform: translateY(100vh);
    transition: transform 0.8s var(--easing-authentic-motion);

    p {
      margin-top: 0;
    }
  }

  &:nth-child(odd) {
    flex-direction: row-reverse;

    .image-meta .image {
      left: auto;
    }

    .overlay {
      transform-origin: left;
      left: auto;
    }

    .title {
      transform: translateX(-100vw);
    }
  }

  // Has Intersected Styles
  &.has-intersected {
    .image-meta .overlay {
      transform: scaleX(0);
    }

    .title {
      transform: translateX(0);
    }

    .text {
      transform: translateY(0);
    }
  }

  //Breakpoints
  @media #{$lt-tablet} {
    .text-meta {
      padding: 0 40px;
    }

    .title {
      font-size: 75px;
      line-height: 75px;
    }

    .text {
      font-size: 28px;
      line-height: 30px;
    }
  }

  @media #{$lt-phone} {
    flex-direction: column;

    .text-meta {
      flex: 1 0 100%;
      min-height: 450px;
      display: flex;
      flex-direction: column;

      justify-content: center;
      align-content: center;
      align-items: flex-start;

      padding: 40px;
    }

    .image-meta {
      flex: 1 0 100%;
      min-height: 450px;
      width: 100%;

      position: relative;

      .image {
        width: 100%;
      }
    }

    &:nth-child(odd) {
      flex-direction: column;
    }

    .title {
      font-size: 36px;
      line-height: 36px;
      margin-bottom: 10px;
    }

    .text {
      font-size: 20px;
      line-height: 24px;
    }

    .overlay {
      width: 100%;
    }
  }
}
</style>
