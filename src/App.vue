<template>
    <v-app :dark="isDark">
        <v-toolbar app>
            <v-toolbar-title class="headline text-uppercase">
                <span>Mason Rhodes</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-flex shrink>
                <v-switch
                    v-model="isDark"
                    label="Toggle dark them"
                    class="buffer"
                />
            </v-flex>
        </v-toolbar>

        <v-content>
            <Home />
        </v-content>
    </v-app>
</template>

<style>
.buffer {
    padding-top: 20px;
}
</style>

<script>
import Home from './components/Home'

export default {
    name: `App`,
    components: {
        Home
    },
    data() {
        return {
            isDark: false
        }
    },
    watch: {
        isDark: {
            handler() {
                localStorage.setItem(`dark`, JSON.stringify(this.isDark))
            }
        }
    },
    mounted() {
        let dark = localStorage.getItem(`dark`)
        if (dark) this.isDark = JSON.parse(dark)
    }
}
</script>
