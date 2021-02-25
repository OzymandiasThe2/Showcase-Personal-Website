<template>
  <div>
    <Topbar ref="pdf"  id="top-nav"/>
    <about-vue id="about-me"/>
    <Projects id="projects"/>

  </div>
</template>
<script>

import AboutVue from "@/components/AboutVue";
// import DesktopNav from "@/components/DesktopNav";
import Topbar from "@/components/Topbar";
import Projects from "@/components/Projects";
export default {
  name: "Main-layout",
  components: {Projects, Topbar, AboutVue}
}
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
</style>