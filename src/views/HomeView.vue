<template>
  <div class="home">
    <ItemsCo title="Добро пожаловать в туризм" />
    <router-link to="/about/id">
      <item-co
        @click.prevent="inc"
        title="Проверочный"
        desc="Зубрятник – Камышлинский водопад Завтрак в кафе «Таежник» После завтрака выезд на экскурсию. Первым объектом посещения станет территория всесезонного курорта «Манжерок». Посещение Манжерокского озера, которое находится недалеко от села Манжерок, у подножья гор Синюха и Малая Синюха. Затем на гондольном подъемнике подниметесь на обзорную площадку горы Синюха, откуда открывается красивая панорама долины реки Катунь."
        image="elbrus.jpeg"
      />
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import ItemsCo from "@/components/ItemsCo.vue";
import ItemCo from "@/components/ItemCo.vue";

export default {
  name: "HomeView",
  components: {
    ItemsCo,
    ItemCo,
  },
  methods: {
    inc() {
      this.$store.dispatch("setIncrement");
    },
  },
};
</script>

<style scoped>
</style>