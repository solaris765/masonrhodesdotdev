<template>
    <v-app :dark="isDark">
        <v-toolbar app>
            <v-toolbar-title class="headline text-uppercase">
                <v-img
                    :class="isDark ? 'logo' : ''"
                    :src="logo"
                    contain
                    width="50"
                    :fill="'#000'"
                />
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
.logo {
    filter: brightness(0) invert(1);
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
            logo: require(`@/assets/logo.svg`),
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
