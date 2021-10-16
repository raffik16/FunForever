<template lang="html">
  <section :class="classes">
    <section-hero :image="topImage" :text="topText" class="section-hero" />

    <div class="panel-bottom">
      <section-text-image
        text="All-in-one package. Ebooks, Videos and audios"
        :image="topImage"
        class="section-text-image"
      />

      <grid-story
        title="All-in-one Package"
        text="All styles of piano covered – pop, blues, jazz, ballads, improvisation, classical."
        :items="items"
        class="grid-story"
      />
    </div>
  </section>
</template>

<script>
import _get from "lodash/get";

export default {
  computed: {
    classes() {
      return ["page", "page-index"];
    },
    //
    topImage() {
      return "/Playing-Piano-3.jpeg";
    },
    topText() {
      return "Pianoforall shows you how to sound extraordinary right from the beginning!";
    },
    items() {
      return [
        {
          title: "Play-by-ear",
          text: "Learn to read music at the same time",
          image: "/person-indoor.jpg"
        },
        {
          text:
            "Filled with tricks, tips and formulas to help people sound great right from the start",
          title: "Imagine",
          image: "/Playing-Piano-3.jpeg"
        }
      ];
    }
  },
  mounted() {},
  destroyed() {},
  methods: {}
};
</script>

<style lang="scss">
.page-index {
  // max-width: 1800px;
  margin: 0 auto;
  overflow: hidden;

  .section-hero {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
  }

  .panel-bottom {
    background-color: var(--color-white);
    position: relative;
    margin-top: var(--unit-100vh);
    padding-bottom: 160px;

    .section-marquee {
      padding-bottom: 100px;
    }
  }

  // Breakpoints
  @media #{$gt-cinema} {
  }
  @media #{$lt-tablet} {
  }
  @media #{$lt-phone} {
    .panel-bottom {
      padding-bottom: 30px;
    }
  }
}

// Remove margin on this page to handle background bleeding.
.route-our-story .global-footer {
  margin-top: 0;
}

// Hide these elements when bio is open.
.bio-detail-open-true {
  .global-logo,
  .global-hamburger,
  .global-footer {
    display: none;
  }
}
</style>
