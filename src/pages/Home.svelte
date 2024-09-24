<svelte:head>
    <title>CompSem'24-25</title>
</svelte:head>
<script lang="ts">
    import {Link} from 'svelte-routing';
    import {onMount, onDestroy} from 'svelte';
    import Notification from '../lib/notification/Notification.svelte';
    import Footer from '../lib/Footer.svelte';

    import contacts from '../data/contacts.json';
    import notifications from '../data/notifications.json';

    import {sym} from '../lib/store';
    sym.set(false);
    let countdownInterval: any;
    let targetDate: any = new Date("2024-09-25T15:00:00");
    let timeLeft = Math.floor((targetDate - new Date())/ 1000);

    let compSemYearOld = 0;
    let comSemYearOldCounter: any;

    onMount(() => {
        comSemYearOldCounter = setInterval(() => {
            if (compSemYearOld < 24){
                compSemYearOld = (compSemYearOld + 1) % 100;
            } else {
                clearInterval(comSemYearOldCounter);
            }
        }, 30);

    });

    let compSemYear = 0;
    let comSemYearCounter: any;

    onMount(() => {
        comSemYearCounter = setInterval(() => {
            if (compSemYear < 25){
                compSemYear = (compSemYear + 1) % 100;
            } else {
                clearInterval(comSemYearCounter);
            }
        }, 30);

    });

    const committees = [
        {
            "name": "IEI",
            "logo": "IEI_LOGO.png"
        },
        {
            "name": "CSI",
            "logo": "CSI_LOGO.png"
        },
        {
            "name": "CSEA",
            "logo": "CSEA_LOGO.png"
        },


    ]

    const eventsCategories = [
        {
            "name": "Technical Events",
            "to": "events/technical"
        },
        {
            "name": "Non - Technical Events",
            "to": "events/nontechnical"
        }
    ]
    let countdown: {
        days: number,
        hrs: number,
        mins: number,
        secs: number
    } = formatTime(timeLeft);

    onMount(() => {
        countdownInterval = setInterval(() => {
          if (timeLeft > 0) {
                timeLeft--;

                countdown = formatTime(timeLeft);

          } else {
            clearInterval(countdownInterval);
          }
        }, 1000);
    });

    onDestroy(() => {
        clearInterval(countdownInterval);
    });
    function formatTime(seconds: number) {
        const days = Math.floor(seconds / 86400);
        const hrs = Math.floor((seconds % 86400) / 3600);
        const mins = Math.floor((seconds% 3600) / 60);
        const secs = seconds % 60;
        return {
            days, hrs, mins, secs
        }
    }

</script>



<!-- Add other elements here for overlay -->
<main class="snap-y absolute top-0 left-0 w-screen z-5">
    <section class="flex items-center justify-center w-full h-screen " >
        <!--
           - Hero Section
           -->
        <div class="flex flex-col items-center justify-center">
            <h1 class="lg:text-[9rem] md:text-[3.5rem] text-[3rem] mb-4 text-gray-100">
                <span class="animate-clip-text-from-below font-anta">Comp</span><span class="animate-clip-text-from-above font-anta">Sem</span>
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#0B666A] to-blue-800 font-anta">'{compSemYearOld}-{compSemYear}</span>
            </h1>
                {#if timeLeft > 0}
                    <div class="border-cyan-400 border-2  text-sm md:text-lg border py-3 rounded-md px-4 flex flex-col items-center">
                        <p class="text-cyan-400">Resuming in</p>
                        <span class="flex gap-2 text-gray-900 bg-gray-800/40 backdrop-blur-sm rounded-md justify-between mt-2">
                            {#each Object.entries(countdown) as [key, value]}
                            <span class="text-center text-sm text-cyan-400 md:text-md w-14  p-2 rounded-md ">
                                <p>{value}</p>
                                <p>{key}</p>
                            </span>
                            {/each}
                        </span>
                    </div>
                    {:else}
                        <div class="md:text-2xl bg-gray-700/10 inline-flex text-center text-rose-500  backdrop-blur-sm rounded-md">

                                <p class="px-4 font-anta py-2">Live</p>

                                <span class="h-3 z-3 w-3 top-0 right-0 absolute">
                                    <span class="h-full w-full  bg-cyan-400 rounded-full animate-ping opacity-75 absolute"></span>
                                    <span class="h-full w-full rounded-full bg-cyan-400 absolute"></span>
                                </span>
                        </div>
                {/if}
        </div>
    </section>

    {#if notifications.length > 0}

    <section class="flex flex-col items-center px-8 py-12 px-4 md:px-24  max-h-1/3 ">
        <!--
           - Notification Section
           -->
        <h2 class="text-2xl text-gray-300 font-semibold mb-4 font-exo">Notifications</h2>
        <Notification notifications={notifications}/>
    </section>

    {/if}
    <section class="py-12 px-8 md:py-24 md:px-32 w-full ">
        <!--
           - About Department Section
           -->
       <h2 class="text-xl md:text-2xl text-gray-300 font-semibold self-start mb-4 md:mb-12">About The Department</h2>
       <p class="md:px-8 text-gray-300 text-justify indent-8 text-xs leading-tight md:text-lg mt-6">
The Department of Computer Science and Engineering was established in the year 1984 to meet the demand for well-qualified computer professionals. Flexible Choice based Credit System. Student Centric Teaching Methodology is adopted. The various Associations and Clubs promote the leadership and organisational skills of the students by conducting various academic events throughout the year. Apart from academics, students also involve themselves in activities that inculcate service and team spirit. The department library has more than 7500 books.
The department has two research laboratories having high-end systems with NVIDIA GeForce RTX 3080 Graphics Card to carry out research in the areas of Speech, Image/Video Processing and Data Analytics. There are six Computer Laboratories having 300 systems, an IoT Laboratory, and three seminar halls with necessary ICT facilities to conduct conferences/seminars and placement activities.
       </p>

    </section>
    <section class="flex flex-col items-center p-8 lg:py-24 lg:px-48 w-full">
        <!--
           - Associations Section
           -->
        <h2 class="text-xl md:text-2xl text-gray-200 mb-12 font-semibold">Students' Associations</h2>
        <div class="flex items-center px-4 md:px-8 py-8 md:py-16 bg-gray-800/60 backdrop-blur-sm text-xs md:text-lg text-slate-300 rounded-lg justify-around w-full ">
            {#each committees as comm}
            <div class="flex flex-col items-center w-20 md:w-36">
                <img class="object-center object-cover w-full" src="{comm.logo}" alt="">
                <p class="mt-2 md:mt-6">{comm.name}</p>
            </div>
            {/each}
        </div>
    </section>
    <section class="py-12 px-8 md:py-24 md:px-32 w-full">
        <!--
           - About Tech Club Section
           -->
           <h2 class="text-xl md:text-2xl text-gray-300 font-semibold self-start mb-4 md:mb-12">About The TechClub</h2>
           <div class="font-maven text-gray-300 text-justify md:px-10  text-xs leading-tight md:text-lg mt-6">
                <strong>TechClub was founded with a clear mission</strong>: to provide a platform for students to explore, learn, and excel in various domains of technology.
                Our objectives encompass both technical and non-technical aspects, aiming to cultivate a well-rounded skill set among members.
            <ul class="mt-4 md:mt-2 flex flex-col gap-2">
                <li><strong>Facilitate Learning:</strong> Through workshops, seminars, and hands-on sessions, we aim to enhance technical proficiency in diverse areas such as Python programming, web designing, UI/UX design, poster design, and more.</li>

                <li><strong>Promote Innovation:</strong> TechClub encourages members to think outside the box and explore innovative solutions to real-world problems. We foster creativity through activities like app building, game design challenges, and hackathons.</li>

                <li><strong>Soft Skill Development:</strong> Recognizing the importance of soft skills in career development, TechClub organizes sessions focused on communication, leadership, teamwork, and time management. These skills complement technical expertise and prepare members for success in their professional lives.</li>

                <li><strong>Community Engagement:</strong> Beyond individual growth, TechClub serves as a hub for collaboration and camaraderie among students. We organize events, competitions, and social gatherings to foster a sense of belonging and unity within the department.</li>
            </ul>
            </div>

    </section>
    <section class="py-12 px-8 md:py-32 text-gray-300 md:px-32 w-full ">
        <!--
           - History of CompSem Section
           -->
        <h2 class="text-xl md:text-2xl  font-semibold self-start mb-4 md:mb-12">History of The CompSem</h2>
           <p class="text-justify indent-8 mt-6 text-xs md:text-lg md:px-8 leading-tight">
            COMPSEM is a student symposium conducted by the Department of Computer Science and Engineering at Annamalai University every year during the months of February and March. However, this time it will be held in the odd semester, during the months of September and October. COMPSEM is a conglomeration of various events such as Paper Presentation, Coding/Debugging contest, Marketing competition, Photo/Video editing, Quiz and many others organized to promote the abundant talent and creativity prevalent in the student community. COMPSEM is being held since 1990 and typically spans over the course of a day or two to showcase the research, studies and surveys carried out by students through oral presentations and poster sessions. The enthusiasm, creativity, and dedication to push the boundaries of knowledge by participating in such Symposiums will inspire and reaffirm the commitment of academic community to nurturing the next generation of scholars and innovators.
            Beyond the formal sessions, the Symposium offers ample opportunities for networking and building connections with peers and enhances the organizational and leadership skills of the students. By continuing to embrace innovation, foster collaboration, and nurture talent, the Department of Computer Science and Engineering aspires to build on the momentum generated by the Symposium and continue to advance the frontiers of knowledge in the field of Computer Science and Engineering.
           </p>
    </section>
    <section id='events' class="flex flex-col items-center justify-center w-full p-6 lg:px-32 ">
        <!--
           - Event Section
           -->
        <h2 class="text-xl md:text-2xl text-gray-300 font-semibold mb-4">Events</h2>
        <div class="flex gap-3 lg:gap-4 items-center justify-around rounded-md bg-gray-900/40 py-6 md:p-12 w-full ">
            {#each eventsCategories as ev}
                <Link
                    to='{ev.to}'
                    class="text-xs backdrop-blur-sm text-gray-100 md:text-lg hover:scale-110 hover:text-2xl border-cyan-500 border-2 h-24 md:h-80 w-24 md:w-80 flex justify-center items-center p-4 md:p-4 rounded-md  shadow-lg shadow-cyan-500/50">
                    <p class="font-anta">{ev.name}</p>
                </Link>
            {/each}
        </div>
    </section>
    <section id="contacts" class="flex flex-col w-full lg:px-32 justify-center items-center p-6">
        <!--
           - Contact Us
           -->
        <h2 class="text-xl md:text-2xl text-gray-300 font-semibold mb-4">Contact Us</h2>
        <div class="text-[8px] sm:text-xs text-gray-300 gap-2 p-3 md:text-sm md:p-8 bg-gray-800/50 backdrop-blur-sm rounded-md grid grid-rows-2 grid-cols-2 ">
            {#each contacts as contact}
            <div class="text-center p-1 md:p-4">
                <p class="font-anta md:text-lg font-semibold">{contact.name}</p>
                <p>{contact.designation}</p>
                <a href="tel:{contact.phone}" class="text-cyan-400  md:text-sm"><span class="hidden md:inline text-gray-300" >Phone: </span>{contact.phone}</a><br/>
                <a href="mailto:{contact.email}" class="text-cyan-400  md:text-sm"><span class="hidden md:inline text-gray-300" >Email: </span>{contact.email}</a>
            </div>
            {/each}
        </div>
    </section>
    <Footer />
</main>



