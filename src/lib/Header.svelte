<script lang='ts'>
    import  {Link} from 'svelte-routing';

    import {sym} from './store';
    let menuToggle = false;
    let mdScreen = screen.width > 1024;

</script>

<header class="px-8 py-6 z-10 absolute top-0 left-0 flex  lg:flex-row lg:justify-between w-screen {$sym ? 'flex-row justify-between' : 'flex-col items-center justify-center'}">
    <Link to="/" >
        <h3 class="font-anta text-xl lg:text-3xl text-gray-200">CompSem<span class="font-anta bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-red-400">'24-25</span></h3>
    </Link>

   <button on:click={
        () => {menuToggle = ! menuToggle}
    } class="p-2 text-gray-200 text-sm lg:hidden transition-transform duration-75 ease-in-out hover:scale-125 rounded-md  hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-300 hover:to-red-400">
        Menu
   </button>


    <nav class="flex bg-gray-800/40 md:bg-transparent {mdScreen ? '' : menuToggle ? 'border-2 border-rose-400 animate-menu-drop flex-col text-center rounded-md items-center backdrop-blur-sm' : 'hidden'} text-sm justify-evenly md:gap-4  text-gray-200">
        <Link on:click= {() => menuToggle = false} to="/" class="font-anta text-xl p-2 transition-transform duration-75 ease-in-out hover:scale-125 rounded-md hover:text-md hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-300 hover:to-red-400">Home</Link>
        <Link on:click= {() => menuToggle = false} to="/events/technical" class="font-anta text-xl p-2  transition-transform duration-75 ease-in-out hover:scale-125 hover:text-md hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-300 hover:to-red-400">Technical Events</Link>
        <Link on:click= {() => menuToggle = false} to="/events/nontechnical" class="font-anta text-xl p-2  transition-transform duration-75 ease-in-out hover:scale-125 hover:text-md hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-300 hover:to-red-400">Non Technical Events</Link>
        <a href="/#contacts" class="font-anta text-xl p-2 transition-transform duration-75 ease-in-out hover:scale-125 hover:text-md hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-300 hover:to-red-400">Contact Us</a>
    </nav>
</header>
