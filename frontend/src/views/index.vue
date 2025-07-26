<script setup>
import Scrolltext from './components/scrolltext.vue'
import Continue from './components/continue.vue'
import Logo from './components/logo.vue'

import { onMounted, onBeforeUnmount } from 'vue'

// Add state management for scroll position
const SCROLL_KEY = 'scrollPosition'
let animationStartTime

onMounted(() => {
  // Get saved position or start from beginning
  const savedPosition = localStorage.getItem(SCROLL_KEY) || 0
  const marqueeContent = document.querySelector('.marquee-content')
  
  if (marqueeContent) {
    // Set initial animation time based on saved position
    animationStartTime = Date.now() - savedPosition
    marqueeContent.style.animationDelay = `-${savedPosition}ms`
  }
})

onBeforeUnmount(() => {
  // Save current position before unmounting
  const elapsedTime = Date.now() - animationStartTime
  const normalizedPosition = elapsedTime % 180000 // 180s = 180000ms
  localStorage.setItem(SCROLL_KEY, normalizedPosition.toString())
})

</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 h-screen">
        <div class="relative flex items-center justify-center min-h-0 "> <!--Left Side-->
            <div class="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center">
                <Logo class="h-2/5 w-auto" />
            </div>

            <!-- Scrolltext: centered, behind logo -->
            <div class="marquee-container flex flex-col items-center justify-center z-0 h-full overflow-hidden select-none opacity-50">
                <!-- Original set -->

                <div class="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white via-white/80 to-transparent"></div>

                <div class="marquee-content">
                    <Scrolltext class="font-serif font-bold text-6xl text-justify text-[#939393]"
                    msg="Lorem ipsum dolor sit amet consectetur adipiscing elit. Semper vel class aptent taciti sociosqu ad litora. Blandit quis suspendisse aliquet nisi sodales consequat magna. Cras eleifend turpis fames primis vulputate ornare sagittis. Sem placerat in id cursus mi pretium tellus. Orci varius natoque penatibus et magnis dis parturient. Finibus facilisis dapibus etiam interdum tortor ligula congue. Proin libero feugiat tristique accumsan maecenas potenti ultricies. Sed diam urna tempor pulvinar vivamus fringilla lacus. Eros lobortis nulla molestie mattis scelerisque maximus eget. Porta elementum a enim euismod quam justo lectus." />
                
                    <Scrolltext class="font-serif font-bold text-5xl text-justify text-[#939393]"
                    msg="Curabitur facilisi cubilia curae hac habitasse platea dictumst. Nisl malesuada lacinia integer nunc posuere ut hendrerit. Efficitur laoreet mauris pharetra vestibulum fusce dictum risus. Imperdiet mollis nullam volutpat porttitor ullamcorper rutrum gravida. Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Ad litora torquent per conubia nostra inceptos himenaeos. Consequat magna ante condimentum neque at luctus nibh. Ornare sagittis vehicula praesent dui felis venenatis ultrices. Pretium tellus duis convallis tempus leo eu aenean. Dis parturient montes nascetur ridiculus mus donec rhoncus." />
                
                    <Scrolltext class="font-serif font-bold text-5xl text-justify text-[#939393]"
                    msg="Ligula congue sollicitudin erat viverra ac tincidunt nam. Potenti ultricies habitant morbi senectus netus suscipit auctor. Fringilla lacus nec metus bibendum egestas iaculis massa. Maximus eget fermentum odio phasellus non purus est. Justo lectus commodo augue arcu dignissim velit aliquam. Platea dictumst lorem ipsum dolor sit amet consectetur. Ut hendrerit semper vel class aptent taciti sociosqu. Dictum risus blandit quis suspendisse aliquet nisi sodales. Rutrum gravida cras eleifend turpis fames primis vulputate. Vitae pellentesque sem placerat in id cursus mi."/>

                    <Scrolltext class="font-serif font-bold text-5xl text-justify text-[#939393]" 
                    msg="Inceptos himenaeos orci varius natoque pe natibus et magnis. Luctus nibh finibus facilisis dapibus etiam interdum tortor. Venenatis ultrices proin libero feugiat tristique accumsan maecenas. Eu aenean sed diam urna tempor pulvinar vivamus. Donec rhoncus eros lobortis nulla molestie mattis scelerisque. Tincidunt nam porta elementum a enim euismod quam. Suscipit auctor curabitur facilisi cubilia curae hac habitasse. Iaculis massa nisl malesuada lacinia integer nunc posuere. Purus est efficitur laoreet mauris pharetra vestibulum fusce."/>

                    <Scrolltext class="font-serif font-bold text-5xl text-justify text-[#939393]" 
                    msg="Velit aliquam imperdiet mollis nullam volutpat porttitor ullamcorper. Amet consectetur adipiscing elit quisque faucibus ex sapien. Taciti sociosqu ad litora torquent per conubia nostra. Nisi sodales consequat magna ante condimentum neque at. Primis vulputate ornare sagittis vehicula praesent dui felis. Cursus mi pretium tellus duis convallis tempus leo. Et magnis dis parturient montes nascetur ridiculus mus. Interdum tortor ligula congue sollicitudin erat viverra ac. Accumsan maecenas potenti ultricies habitant morbi senectus netus. Pulvinar vivamus fringilla lacus nec metus bibendum egestas."/>
                </div>

                <!-- Duplicate set for seamless loop -->
                <div class="marquee-content" aria-hidden="true">
                    <Scrolltext class="font-serif font-bold text-5xl text-justify text-[#939393]"
                    msg="Lorem ipsum dolor sit amet consectetur adipiscing elit. Semper vel class aptent taciti sociosqu ad litora. Blandit quis suspendisse aliquet nisi sodales consequat magna. Cras eleifend turpis fames primis vulputate ornare sagittis. Sem placerat in id cursus mi pretium tellus. Orci varius natoque penatibus et magnis dis parturient. Finibus facilisis dapibus etiam interdum tortor ligula congue. Proin libero feugiat tristique accumsan maecenas potenti ultricies. Sed diam urna tempor pulvinar vivamus fringilla lacus. Eros lobortis nulla molestie mattis scelerisque maximus eget. Porta elementum a enim euismod quam justo lectus." />
                
                    <Scrolltext class="font-serif font-bold text-5xl text-justify text-[#939393]"
                    msg="Curabitur facilisi cubilia curae hac habitasse platea dictumst. Nisl malesuada lacinia integer nunc posuere ut hendrerit. Efficitur laoreet mauris pharetra vestibulum fusce dictum risus. Imperdiet mollis nullam volutpat porttitor ullamcorper rutrum gravida. Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Ad litora torquent per conubia nostra inceptos himenaeos. Consequat magna ante condimentum neque at luctus nibh. Ornare sagittis vehicula praesent dui felis venenatis ultrices. Pretium tellus duis convallis tempus leo eu aenean. Dis parturient montes nascetur ridiculus mus donec rhoncus." />
                
                    <Scrolltext class="font-serif font-bold text-5xl text-justify text-[#939393]"
                    msg="Ligula congue sollicitudin erat viverra ac tincidunt nam. Potenti ultricies habitant morbi senectus netus suscipit auctor. Fringilla lacus nec metus bibendum egestas iaculis massa. Maximus eget fermentum odio phasellus non purus est. Justo lectus commodo augue arcu dignissim velit aliquam. Platea dictumst lorem ipsum dolor sit amet consectetur. Ut hendrerit semper vel class aptent taciti sociosqu. Dictum risus blandit quis suspendisse aliquet nisi sodales. Rutrum gravida cras eleifend turpis fames primis vulputate. Vitae pellentesque sem placerat in id cursus mi."/>

                    <Scrolltext class="font-serif font-bold text-5xl text-justify text-[#939393]" 
                    msg="Inceptos himenaeos orci varius natoque pe natibus et magnis. Luctus nibh finibus facilisis dapibus etiam interdum tortor. Venenatis ultrices proin libero feugiat tristique accumsan maecenas. Eu aenean sed diam urna tempor pulvinar vivamus. Donec rhoncus eros lobortis nulla molestie mattis scelerisque. Tincidunt nam porta elementum a enim euismod quam. Suscipit auctor curabitur facilisi cubilia curae hac habitasse. Iaculis massa nisl malesuada lacinia integer nunc posuere. Purus est efficitur laoreet mauris pharetra vestibulum fusce."/>

                    <Scrolltext class="font-serif font-bold text-5xl text-justify text-[#939393]" 
                    msg="Velit aliquam imperdiet mollis nullam volutpat porttitor ullamcorper. Amet consectetur adipiscing elit quisque faucibus ex sapien. Taciti sociosqu ad litora torquent per conubia nostra. Nisi sodales consequat magna ante condimentum neque at. Primis vulputate ornare sagittis vehicula praesent dui felis. Cursus mi pretium tellus duis convallis tempus leo. Et magnis dis parturient montes nascetur ridiculus mus. Interdum tortor ligula congue sollicitudin erat viverra ac. Accumsan maecenas potenti ultricies habitant morbi senectus netus. Pulvinar vivamus fringilla lacus nec metus bibendum egestas."/>
                </div>
            </div>

            <div class="absolute right-0 top-0 h-full w-48 bg-gradient-to-l from-white/90 via-white/60 to-transparent z-[2]"></div>

        </div>


        <!-- Right Side -->
        <div class="flex items-center justify-center">
            <div class="max-w-lg w-full">
                <Continue />
            </div>
        </div>

        

    </div>
</template>


<style scoped>
.marquee-container {
    position: relative;
    height: 100%;
    overflow: hidden;
}

.marquee-content {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    animation: scroll 180s linear infinite;
    transform: translateY(-25%); /* Start halfway through first Lorem ipsum */
}

@keyframes scroll {
    0% {
        transform: translateY(-25%);
    }
    100% {
        transform: translateY(-75%); /* Adjust to maintain seamless loop */
    }
}
</style>


<script>
</script>