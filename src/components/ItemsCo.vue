<template>
  <div class="main">
    <h1>{{ title }}</h1>

    <div class="wrapper">
      <div class="container">
        <div class="items">
          <router-link
            :to="`/about/${post.id}`"
            @click="onEmmit(post.id)"
            v-for="post of posts"
            :key="post.id"
          >
            <div class="item-wrapper">
              <img
                :src="require(`@/assets/img/${posts[post.id].image}`)"
                class="mb-3"
                :alt="posts[post.id].image"
              />
              <h3>{{ post.title }}</h3>
              <div class="description">
                {{ slicer(post.desc, 380) }}
                <br />
                <span v-if="post.desc.length > 380">{{ maxLength }}</span>
              </div>
            </div>
          </router-link>
          {{ lengthPosts }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      maxLength: "Читать далее ...",
      slicer(str, num) {
        return str.trim().length > num
          ? str.trim().substring(0, num) + "..."
          : str.trim();
      },
    };
  },
  computed: {
    lengthPosts() {
      this.posts.forEach((item) => {
        if (item.desc.length > 379) {
          return console.log(item.desc.length);
        }
      });
    },
    posts() {
      return this.$store.getters["getPosts"];
    },
  },
  name: "ItemsCo",
  props: {
    title: String,
  },
  methods: {
    onEmmit(id) {
      console.log(id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 30px 0 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.items {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}
img {
  width: 100%;
  width: -webkit-fill-available;
}
</style>
