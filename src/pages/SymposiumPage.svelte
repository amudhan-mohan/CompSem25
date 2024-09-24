<svelte:head>
    <title>Symposium'24</title>
</svelte:head>
<script lang="ts">
    import {onMount} from 'svelte';
    import {slide} from 'svelte/transition';
    import Footer from '../lib/Footer.svelte';
    import coordinators from '../data/sympCoordinators.json';

    import {sym} from '../lib/store';
    sym.set(true);


    let compSemYear = 0;
    let comSemYearCounter: any;

    const staffCoord = coordinators["staffs"];
    const studCoord = coordinators["student"];

    onMount(() => {
        comSemYearCounter = setInterval(() => {
            if (compSemYear < 24){
                compSemYear = (compSemYear + 1) % 100;
            } else {
                clearInterval(comSemYearCounter);
            }
        }, 30);

    });
</script>



<!-- Add other elements here for overlay -->
<main class="snap-y absolute top-0 left-0 w-screen z-5">
    <section class="flex items-center justify-center w-full h-screen " >
        <!--
           - Hero Section
           -->
        <div class="flex flex-col items-center justify-center">
            <h1 transition:slide class="lg:text-[12rem] md:text-[6rem] text-[3rem] mb-4 text-gray-100">
                <span class=" animate-spotlight font-anta">TechFusion</span><span
                class="bg-clip-text text-transparent bg-gradient-to-r from-[#0B666A] to-blue-800 font-anta">'{compSemYear}</span>
            </h1>
            <div class="border-cyan-400 border-2  text-sm md:text-lg border py-3 rounded-md px-4 flex flex-col items-center">
                <p class="font-anta text-cyan-400">On</p>
                <span class="flex gap-2  text-gray-900 bg-gray-800/40 backdrop-blur-sm rounded-md justify-between mt-2">
                   <span class="text-center inline-flex flex-col  text-cyan-400 md:text-md p-6 md:text-2xl rounded-md ">
                    <p class="font-anta">19-03-2024</p>
                       <span class="font-anta text-center text-sm  text-cyan-400 md:text-lg rounded-md ">
                        Tuesday
                       </span>
                   </span>
                </span>
            </div>
        <a href="https://forms.gle/j7oMj1ciDncqfACc8" class="md:text-2xl hover:scale-125 border-2 border-slate-800 bg-gray-800 mt-8 bg-gray-100 inline-flex text-center text-cyan-500  backdrop-blur-sm rounded">
            <p class="px-4 font-anta hover:text-[#2D9596] active:text-[#2D9596] py-2">Register Now</p>
        </a>
    </section>

    <section class="flex flex-col w-full lg:px-32 justify-center items-center p-6">
        <!--
           - Staff Coordinators Section
           -->
        <h2 class="text-xl md:text-2xl text-gray-300 font-semibold mb-4">Staff Coordinators</h2>
        <div class="text-[8px] sm:text-xs text-gray-300 gap-2 p-3 md:text-sm md:p-8 bg-gray-800/50 backdrop-blur-sm rounded-md grid grid-rows-1 grid-cols-3 ">
            {#each staffCoord as contact}
            <div class="text-center p-1 md:p-4">
                <p class="font-anta md:text-lg font-semibold">{contact.name}</p>
                <p>{contact.designation}</p>
            </div>
            {/each}
        </div>
    </section>
    <section class="flex flex-col w-full lg:px-32 justify-center items-center p-6">
        <!--
           - Students Coordinators Section
           -->
        <h2 class="text-xl md:text-2xl text-gray-300 font-semibold mb-4">Students Coordinators</h2>
        <div class="text-[8px] sm:text-xs text-gray-300 gap-2 p-3 md:text-sm md:p-8 bg-gray-800/50 backdrop-blur-sm rounded-md grid grid-rows-1 grid-cols-2 ">
            {#each studCoord as contact}
            <div class="text-center p-1 md:p-4">
                <p class="font-anta md:text-lg font-semibold">{contact.name}</p>
                <p>{contact.designation}</p>
                <a href="tel:{contact.phone}" class="text-cyan-400  md:text-sm"><span class="hidden md:inline text-gray-300" >Phone: </span>{contact.phone}</a><br/>
            </div>
            {/each}
        </div>
    </section>
    <Footer />
</main>
