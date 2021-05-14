<template>
  <div>
    <Topbar ref="pdf"  id="top-nav"/>
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
// import DesktopNav from "@/components/DesktopNav";
import Topbar from "@/components/Topbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
export default {
  name: "Main-layout",
  components: {Footer, Projects, Topbar, AboutVue}
}
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
</style>