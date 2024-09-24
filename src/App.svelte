<script>
    import {Router,  Route} from 'svelte-routing';
    import HomePage from './pages/Home.svelte';
    import EventsPage from './pages/EventsPage.svelte';
    import Header from './lib/Header.svelte';
    import EventInfoPage from './pages/EventInfoPage.svelte';
    import {sym} from './lib/store';

    import P5 from 'p5-svelte';

    export let url = "";

    let width = window.innerWidth; // Set canvas width to full screen
    let height = window.innerHeight; // Set canvas height to full screen
    let particles = [];

    class Particle {

        constructor(p5){
            this.x = p5.random(0, width);
            this.y = p5.random(0, height);
            this.r = p5.random(1, 8);
            this.xSpeed = p5.random(-2, 2);
            this.ySpeed = p5.random(-1, 1.5);
        }

        // creation of a particle.
        createParticle(p5) {
            p5.noStroke();
            p5.fill('rgba(45, 149, 150, 0.4)');
            p5.circle(this.x, this.y, this.r);
        }

        // setting the particle in motion.
        moveParticle(p5) {
            if(this.x < 0 || this.x > width)
                this.xSpeed *= -1;
            if(this.y < 0 || this.y > height)
                this.ySpeed *= -1;
            this.x += this.xSpeed;
            this.y += this.ySpeed;
        }

        // this function creates the connections(lines)
        // between particles which are less than a certain distance apart
        joinParticles(particles, p5) {
            particles.forEach(element =>{
            let dis = p5.dist(this.x, this.y, element.x, element.y);
            if(dis < 85) {
                p5.stroke('rgba(45, 149, 150, 0.4)');
                p5.line(this.x, this.y, element.x, element.y);
            }
            });
        }
    }

    const sketch = (p5) => {
        p5.setup = () => {
            let cnv = p5.createCanvas(width, height);
            for(let i = 0; i < width / 10; i++){
                particles.push(new Particle(p5));
            }
            p5.windowResized = () => {
                cnv.resizeCanvas(p5.windowWidth, p5.windowHeight);
            };
        };

        p5.draw = () => {
            p5.clear();

            for(let i = 0; i < particles.length; i++) {
                particles[i].createParticle(p5);
                particles[i].moveParticle(p5);
                particles[i].joinParticles(particles.slice(i), p5);
            }

        };
    };
</script>

<style >
    :global(h2) {
        font-family: "Anta", sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    :global(p) {
        font-family: "Maven Pro", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
    }
</style>

<!-- bg-gradient-to-tr from-yellow-900 from-10% via-yellow-950 to-stone-950 -->

<Router url={url}>
    <Header />
    <div id="p5-container" class="fixed top-0 left-0 w-screen h-screen -z-5 bg-gradient-to-tr from-10% from-[#0B666A] via-zinc-950 to-[#265073]">
        <P5 sketch={sketch} id="p5-canvas"/>
    </div>
    <Route path="/"><HomePage/></Route>
    <Route path="/events/:evType" component={EventsPage}></Route>
    <Route path="/event/:eventId" component={EventInfoPage}></Route>
</Router>

