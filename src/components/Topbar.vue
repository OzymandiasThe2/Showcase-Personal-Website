<template>
  <div>

      <v-toolbar
          id="top-nav1"
          dark
          prominent
          src="https://i.imgur.com/RnlncgD.jpg"
      >
        <v-toolbar-title>Networking and IT Security Undergraduate</v-toolbar-title>
        <v-spacer/>

        <a :href="pdfLink">
          <v-btn icon @click="printSection">

            <v-icon>mdi-export</v-icon>
          </v-btn>
        </a>
      </v-toolbar>

  </div>
</template>
<script>

export default {
  name: "Topbar",
  data() {
    return {
      pdfLink: require("@/assets/Shriji Shah - Cover Letter + Resume.pdf"),
    }
  }
}
</script>

<style scoped>

</style>
