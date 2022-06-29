import { createStore } from 'vuex'

import count from "./count";
import posts from "./posts";

export default createStore({

  modules: {
    count,
    posts
  }
})
