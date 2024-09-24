<script lang="ts">
    import {sym} from './store';

</script>

<footer class="p-1 md:px-8 md:py-6  md:text-sm flex flex-col items-center  justify-center ">
    <div class="flex mb-4 md:mb-8 justify-around items-center w-full text-gray-200 md:mb-8">
        <div class="flex flex-col items-center ">
            <img class="w-10 md:w-12 p-1 md:p-2 bg-gray-400/60 mb-2 backdrop-blur-sm rounded-full md:w-20" src="Favi.png" alt="CSE Logo">
            <p class="text-[6px] font-anta md:text-2xl">CSE</p>
         </div>
        <div class="flex  justify-center flex-col  items-center uppercase ">
            <a class="justify-center md:mb-2 md:text-3xl items-center flex" href="https://annamalaiuniversity.ac.in/index.php">
                <p class="font-anta">Annamalai</p> <img class="px-1 w-8 md:w-12" src="AU_logo.png" alt="Annamalai University Logo"><p class="font-anta">University</p>
            </a>
            <div class="flex flex-col text-center">
                <p class="font-anta text-[4px] md:text-xs text-gray-300 normal-case">(Accredited with 'A<sup>+</sup>' Grade by NAAC)</p>
                <p class="font-anta text-[6px] md:text-sm">Faculty of Engineering and Technology</p>
                <p class="font-anta text-[6px] md:text-sm">Department of Computer Science and Engineering</p>
            </div>
        </div>

        <div class="flex flex-col items-center ">
           <img class="w-10 md:w-12 p-1 md:p-2 bg-gray-400/60 mb-2 backdrop-blur-sm rounded-full md:w-20" src="TechclubLogo.jpg" alt="TechClub Logo">
           <p class="text-[6px] font-anta md:text-2xl">TechClub</p>
        </div>

    </div>
    <div class="w-full flex justify-between">
        <p class="bg-clip-text text-[6px] md:text-sm text-transparent bg-gradient-to-r {$sym ? 'from-cyan-400 to-cyan-200' : 'from-pink-300 to-red-400'} ">&copy; Department of CSE | All Rights Reserved.</p>
        <p class='bg-clip-text text-[6px] md:text-sm text-transparent bg-gradient-to-r {$sym ? 'from-cyan-400 to-cyan-200' : 'from-pink-300 to-red-400'} '>Made with ❤️ by <span class="font-semibold">TechClub</span></p>
    </div>
</footer>
