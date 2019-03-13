<template>
  <v-layout>
    <v-container justify-center>
      <v-flex md6 justify-center>
        <div :key="gotit" v-html="text"/>
      </v-flex>
      <v-flex>
        <img src="../assets/cooper.jpg" class="cooper">
      </v-flex>
    </v-container>
  </v-layout>
</template>
<style>
.cooper {
  height: 200px;
}
</style>

<script>
import axios from "axios";
import marked from "marked";

export default {
  data: () => ({
    marked: null,
    gotit: ""
  }),
  mounted() {
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });
    this.lorem();
  },
  computed: {
    text: function() {
      let html = `
## About me:
I am a dog person. 

${(this.gotit) || ""}

## Experience:
   - NodeJS Fullstack
   - DotNet Core Fullstack
   - Primary UI focus is vue w/ vuetify
   - MongoDB
   - Docker, Kubernetes w/ Istio for microservice network management
   - Google cloud suite (GCE, GAE, GKE + supporting tech)
   - Exchange / AD server administration
   - Nginx web server administration

## Primary Languages:
   - javascript
   - C#

### With exposer / some experience in
   - C++
   - vbs
   - Powershell
   - Java
   - Python
   - Go
   - Kotlin
   - Racket
    `
      return marked(html);
    }
  },
  methods: {
    async lorem() {
      console.log("started ipsum")
      let l = (await axios.get(
        "https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1"
      )).data;
      let text = "";

      l.forEach(par => {
        text += par + "\n\n";
      });

      this.gotit = text;
      console.log(this.gotit)
    }
  }
};
</script>
