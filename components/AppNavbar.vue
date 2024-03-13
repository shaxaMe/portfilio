<template>
    <div class="w-full bg-transparent flex items-center justify-between nav-content gap-3 text-white px-8 py-4 mt-8 rounded-full shadow-lg">
      <span class="font-extrabold cursor-pointer text-4xl flex-1">Bek Ismatov</span>
      <ul class="flex justify-between flex-1">
       <li class="text-base rounded-lg hover:border-b-[#F237F6] border-b-[3px] transition-all border-transparent  cursor-pointer font-medium">HOME</li>   
       <li class="text-base rounded-lg hover:border-b-[#F237F6] border-b-[3px] transition-all border-transparent  cursor-pointer font-medium">PROJECTS </li>
       <li class="text-base rounded-lg hover:border-b-[#F237F6] border-b-[3px] transition-all border-transparent  cursor-pointer font-medium">ABOUT</li>
       <li class="text-base rounded-lg hover:border-b-[#F237F6] border-b-[3px] transition-all border-transparent  cursor-pointer font-medium">CONTACT</li>
      </ul>
      <!-- <div class="flex-1">
        LIGHT
        DARK
      </div> -->
      <div class="flex-1 flex justify-end">
        <button class="w-fit bg-[#242121] rounded-full flex justify-center items-center text-xl font-semibold text-white py-2 px-5">
        Contact Me
      </button>
      </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
.nav-content{
    background-image: linear-gradient(to right, #340544, #320333, #2c0424, #240419, #1b020e, #1e0311, #210414, #230517, #310529, #3a0442, #360e61, #0a1f85);
}
</style>