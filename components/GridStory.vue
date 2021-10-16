<template lang="html">
    <div class="grid-story">
        <div class="meta">
            <h3
                class="title"
                v-text="title"
            />
            <div
                class="text"
                v-html="text"
            />
        </div>
        <block-story
            v-for="item in items"
            :key="item.title"
            :image="item.image"
            :text="item.text"
            :title="item.title"
        />
    </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => [], // [{image, text, title}]
        },
        title: {
            type: String,
            default: "",
        },
        text: {
            type: String,
            default: "",
        },
    },
}
</script>

<style lang="scss" scoped>
.grid-story {
    max-width: 1800px;
    margin: 0 auto 150px;

    .meta {
        display: flex;
        flex-direction: column;

        margin: 0 auto 125px;
        max-width: 1400px;
        padding: 0 25px;
        box-sizing: border-box;

        text-align: center;
        color: var(--color-navy);
    }

    .title {
        font-size: 80px;
        line-height: 100px;
        margin: 0 0 30px;
    }

    /deep/ .block-story {
        background-color: var(--color-white);
    }

    /deep/ .meta .text {
        font-size: 50px;
        line-height: 60px;

        p {
            margin: 0;
        }
    }

    @media #{$lt-phone} {
        margin-bottom: 0;

        .meta {
            margin: 50px auto 45px;
        }

        .title {
            font-size: 36px;
            line-height: 36px;
        }

        .meta .text {
            font-size: 20px;
            line-height: 24px;
        }
    }
}
</style>
