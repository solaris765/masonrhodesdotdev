<template>
    <v-container grid-list-md text-xs>
        <v-layout row wrap>
            <v-flex xs12 sm12 md6 lg6 xl6 justify>
                <div :key="gotit" v-html="text" />
            </v-flex>
            <v-flex xs12 sm12 md6 lg6 xl6 justify-start>
                <v-img
                    :src="cooper"
                    aspect-ratio="1.77"
                    contain
                    max-height="200"
                />
            </v-flex>
        </v-layout>
    </v-container>
</template>
<style>
.cooper {
    height: 200px;
}
</style>

<script>
import axios from 'axios'
import marked from 'marked'

export default {
    data: () => ({
        cooper: require(`@/assets/cooper.jpg`),
        marked: null,
        gotit: ``
    }),
    computed: {
        text: function() {
            let html = `
## About me:
I am a dog person. 

${this.gotit || ``}

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
            return marked(html)
        }
    },
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
        })
        this.lorem()
    },
    methods: {
        async lorem() {
            console.log(`started ipsum`)
            let l = (await axios.get(
                `https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1`
            )).data
            let text = ``

            l.forEach(par => {
                text += par + `\n\n`
            })

            this.gotit = text
            console.log(this.gotit)
        }
    }
}
</script>
