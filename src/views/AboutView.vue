<template>
  <div class="about">
    <section class="wrapper mt-5">
      <div class="container">
        <div class="col-lg-10 offset-1">
          <img
            class="mb-4 w-100"
            :src="require(`@/assets/img/${post.image}`)"
            alt=""
          />
          <h2>{{ post.title }}</h2>
          <div class="description">
            {{ post.desc }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  components: {},
  computed: {
    pageName() {
      return this.$route.name;
    },
    post() {
      return this.$store.getters["getPostById"](this.$route.params.id);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 20px 0;
}
</style>