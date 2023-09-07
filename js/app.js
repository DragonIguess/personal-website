/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */


document.write('<footer  >');
document.write('   <a>Made by 0uch :)</a>');
document.write('</footer>');



var arrayOfCursors = ['url(./assests/imgs/coursors/wiir.png), auto', 'url(./assests/imgs/coursors/wiic.png), auto', 'url(./assests/imgs/coursors/wheat.png), auto', 'url(./assests/imgs/coursors/villager.png), auto', 'url(./assests/imgs/coursors/toothbrush.png), auto', 'url(./assests/imgs/coursors/pic.png), auto', 'url(./assests/imgs/coursors/mouse.png), auto', 'url(./assests/imgs/coursors/duck.png), auto', 'url(./assests/imgs/coursors/Mace_Windu_Face.png), auto', 'url(./assests/imgs/coursors/Mace_Windu_Lightsaber.png), auto', 'url(./assests/imgs/coursors/RedThing.png), auto', 'url(./assests/imgs/coursors/GreenThing.png), auto'];
function random(arr){
  var num = Math.floor(Math.random() * arr.length);
  return arr[num];
} 
var el = document.getElementById('idName');
el.style.cursor = random(arrayOfCursors);


var arrayImg = new Array();
arrayImg[0] = "./assests/imgs/logos/offline.png";
arrayImg[1] = "./assests/imgs/logos/offline1.png";
arrayImg[2] = "./assests/imgs/logos/offline2.png";
arrayImg[3] = "./assests/imgs/logos/offline3.png";
arrayImg[4] = "./assests/imgs/logos/offline6.png";
arrayImg[5] = "./assests/imgs/logos/offline5.png";



getRandomImage(arrayImg, "");

function getRandomImage(imgAr, path) {
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + img + '">';
    console.log(imgStr)
    document.getElementById('logo').innerHTML = imgStr;
} 



var favicon_images = [
  './assests/imgs/duck/frame_00_delay-0.04s.png',
  './assests/imgs/duck/frame_01_delay-0.04s.png',
  './assests/imgs/duck/frame_02_delay-0.04s.png',
  './assests/imgs/duck/frame_03_delay-0.04s.png',
  './assests/imgs/duck/frame_04_delay-0.04s.png',
  './assests/imgs/duck/frame_05_delay-0.04s.png',
  './assests/imgs/duck/frame_06_delay-0.04s.png',
  './assests/imgs/duck/frame_07_delay-0.04s.png',
  './assests/imgs/duck/frame_08_delay-0.04s.png',
  './assests/imgs/duck/frame_09_delay-0.04s.png',
  './assests/imgs/duck/frame_10_delay-0.04s.png',
  './assests/imgs/duck/frame_11_delay-0.04s.png',
  './assests/imgs/duck/frame_12_delay-0.04s.png',
  './assests/imgs/duck/frame_13_delay-0.04s.png',
  './assests/imgs/duck/frame_14_delay-0.04s.png'

],
image_counter = 0; 

setInterval(function() {
if(document.querySelector("link[rel='icon']") !== null)
document.querySelector("link[rel='icon']").remove();
if(document.querySelector("link[rel='shortcut icon']") !== null)
document.querySelector("link[rel='shortcut icon']").remove();

document.querySelector("head").insertAdjacentHTML('beforeend', '<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/gif">');
  
if(image_counter == favicon_images.length -1)
image_counter = 0;
else
image_counter++;
}, 100);

particlesJS('particles-js',
{
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 80,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 300,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 10,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": true,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 100,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 800,
        "size": 50,
        "duration": 2,
        "opacity": 0.8,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

);


