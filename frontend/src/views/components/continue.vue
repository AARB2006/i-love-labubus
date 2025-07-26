<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function handleGoogle() {
  // Later, you can add Google login here
  router.push('/main')  // Navigate to MainPage
}


</script>

<template>

    <div class = "flex flex-col items-center justify-center h-screen">

        <div>
            <h1 class = "mb-4 font-bold text-lg">Create your own personal notebook with just a few clicks!</h1>
        </div>
        
        <div>
            <button @click = "handleGoogle"
            
            class="w-120 h-15 bg-gray-800 rounded-lg text-white flex items-center justify-center gap-3 font-bold hover:bg-gray-400 hover:text-black">
                <img src="@/assets/Google__G__Logo.svg" alt="">
                Continue with Google
            </button>
        </div>
        
    </div>
    
</template>