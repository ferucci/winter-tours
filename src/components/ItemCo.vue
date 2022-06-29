<template>
  <div class="item-wrapper">
    <img
      :src="require(`@/assets/img/${image}`)"
      class="mb-3"
      alt="elbrus.jpeg"
    />
    <h3>{{ title }}</h3>
    <div class="description">
      {{ desc }}
      <br />
      <!-- <span>{{ maxLength }}</span> -->
    </div>
    {{ count }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: [String, Number],
      default: "Не передан",
    },
    desc: {
      default: "Не передано описание",
    },
    image: {
      default: "2.jpg",
    },
  },
  computed: {
    count() {
      return this.$store.getters["getCount"];
    },
  },
};
</script>

<style scoped>
.item-wrapper {
  margin: 0 auto;
  margin-bottom: 100px;
}
img {
  max-width: 100%;
}
</style>