<template>
  <div>
    <Topbar id="top-nav"/>
    <about-vue
        id="about-me"
        style="margin-top: -280px"

    />
    <Projects id="projects"/>
    <Footer id="footer"/>

  </div>
</template>
<script>

import AboutVue from "@/components/AboutVue";
import Topbar from "@/components/Topbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
export default {
  name: "Main-layout",
  components: {Footer, Projects, Topbar, AboutVue}
}
</script>
