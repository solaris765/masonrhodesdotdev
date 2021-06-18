<template>
    <v-container grid-list-md text-xs>
        <v-layout row wrap>
            <v-flex xs12 sm12 md6 lg6 xl6 justify>
                <span class="name">Mason Rhodes</span>
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
.name {
    font-size: 25pt;
}
.cooper {
    height: 200px;
}
</style>

<script>
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
## Links:
[Github](https://github.com/solaris765)
[Linkdin](https://www.linkedin.com/in/mason-rhodes/)
[Resume](https://drive.google.com/file/d/1ktewYfQZnZInVS0k3TYxJ_LGACgIkXCd/view?usp=sharing)

This is here so I can mess around with vue and AWS hosting
Maybe I'll put more here in the future I dunno ¯\\\\_(ツ)_/¯
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
        // this.lorem()
    },
    methods: {
        // async lorem() {
        //     console.log(`started ipsum`)
        //     let l = (await axios.get(
        //         `https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1`
        //     )).data
        //     let text = ``
        //     l.forEach(par => {
        //         text += par + `\n\n`
        //     })
        //     this.gotit = text
        //     console.log(this.gotit)
        // }
    }
}
</script>
