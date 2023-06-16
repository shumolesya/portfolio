// gsap.from(".my_photo", {x: 250, ease: 'power1.in', duration: 2, opacity: 0, delay: 1})



// // let text = " email"; 
// // let speed = 100;
// // let item = document.getElementById("word"); 
// // let print_text = function(text, item, speed) {
// // 		if(text.length > 0) {
// // 			item.innerHTML += text[0];
// // 			setTimeout(
// // 				function() {
// // 					print_text(text.slice(1), item, speed);}, 
// //     speed);}
// //   }
// // 	print_text(text, item, speed);
// //   setInterval(function() { 
// //     item.innerHTML = "";   
// //     print_text(text, item, speed);
// //   }, 7 * 1000);


// gsap.to(".contact_title", {
//   text: "email",
//   duration: 2,
//   repeat: 3,
//   repeatDelay: 1.5,
//   ease: "power1.in",
//   yoyo: true,
//   delay: 1
// })


// const button = document.querySelector("#myButton");
// const audio = document.querySelector("#myAudio");

// button.addEventListener("click", function() {
//     if(audio.paused) {
//         audio.play();
//         button.classList.toggle("pause");
//     }
//     else {
//         audio.pause();
//         button.classList.toggle("pause");
//     }
//     // document.querySelector("#myAudio").play();
// })




// // AOS initialization

// AOS.init(); 

// // JS particles


// //== particles.js config ==//
// /* -----------------------------------------------
// Author : Vincent Garreau  - vincentgarreau.com
// MIT license: http://opensource.org/licenses/MIT
// Demo / Generator : vincentgarreau.com/particles.js
// GitHub : github.com/VincentGarreau/particles.js
// ----------------------------------------------- */

// particlesJS("particles-js", {
//     "particles": {
//       "number": {
//         "value": 100,
//         "density": {
//           "enable": true,
//           "value_area": 800
//         }
//       },
//       "color": {
//         "value": "#CFF6CF"
//       },
//       "shape": {
//         "type": "circle",
//         "stroke": {
//           "width": 0,
//           "color": "#CFF6CF"
//         },
//         "polygon": {
//           "nb_sides": 5
//         },
//         "image": {
//           "src": "img/github.svg",
//           "width": 100,
//           "height": 100
//         }
//       },
//       "opacity": {
//         "value": 0.5,
//         "random": false,
//         "anim": {
//           "enable": false,
//           "speed": .5,
//           "opacity_min": 0.1,
//           "sync": false
//         }
//       },
//       "size": {
//         "value": 2,
//         "random": true,
//         "anim": {
//           "enable": false,
//           "speed": 10,
//           "size_min": 0.1,
//           "sync": false
//         }
//       },
//       "line_linked": {
//         "enable": true,
//         "distance": 150,
//         "color": "#fff",
//         "opacity": 0.4,
//         "width": 1
//       },
//       "move": {
//         "enable": true,
//         "speed": 6,
//         "direction": "none",
//         "random": false,
//         "straight": false,
//         "out_mode": "out",
//         "bounce": false,
//         "attract": {
//           "enable": false,
//           "rotateX": 200,
//           "rotateY": 400
//         }
//       }
//     },
//     "interactivity": {
//       "detect_on": "canvas",
//       "events": {
//         "onhover": {
//           "enable": true,
//           "mode": "grab"
//         },
//         "onclick": {
//           "enable": true,
//           "mode": "push"
//         },
//         "resize": true
//       },
//       "modes": {
//         "grab": {
//           "distance": 140,
//           "line_linked": {
//             "opacity": 1
//           }
//         },
//         "bubble": {
//           "distance": 300,
//           "size": 20,
//           "duration": 2,
//           "opacity": 8,
//           "speed": 2
//         },
//         "repulse": {
//           "distance": 200,
//           "duration": 0.4
//         },
//         "push": {
//           "particles_nb": 4
//         },
//         "remove": {
//           "particles_nb": 2
//         }
//       }
//     },
//     "retina_detect": true
//   });
  
  
  
  
  gsap.from(".my_photo", {x: 250, ease: 'power1.in', duration: 2, opacity: 0, delay: 1})

  //== Nav-menu ==//
  const hamb = document.querySelector("#hamb");
  const popup = document.querySelector("#popup");
  const body = document.body;
  const menu = document.querySelector(".header-nav").cloneNode(1);
   
  hamb.addEventListener("click", hambHandler);
   
  function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
  }
   
  function renderPopup() {
    popup.appendChild(menu);
  }
   
  //== Close nav-menu ==//
  const links = Array.from(menu.children);
   
  links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
  });
   
  function closeOnClick() {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
  }
  
  
  gsap.to(".contact_title", {
    text: "email",
    duration: 2,
    repeat: -1,
    repeatDelay: 1.5,
    ease: "power1.in",
    yoyo: true,
    delay: 1
  })
  
  gsap.from("#tool_1", {scale:.9, duration: 1.5, delay: .5, repeat: -1, yoyo: true, repeatDelay: 2.5})
  gsap.from("#tool_2", {scale:.9, duration: 1.5, delay: 1.5, repeat: -1, yoyo: true, repeatDelay: 2.5})
  gsap.from("#tool_3", {scale:.9, duration: 1.5, delay: 2.5, repeat: -1, yoyo: true, repeatDelay: 2.5})
  gsap.from("#tool_4", {scale:.9, duration: 1.5, delay: 3.5, repeat: -1, yoyo: true, repeatDelay: 2.5})
  gsap.from("#tool_5", {scale:.9, duration: 1.5, delay: 4.5, repeat: -1, yoyo: true, repeatDelay: 2.5}) 
  gsap.from("#tool_6", {scale:.9, duration: 1.5, delay: 5.5, repeat: -1, yoyo: true, repeatDelay: 2.5})
  // gsap.from("#tool_7", {scale:.9, duration: 1.5, delay: 6.5, repeat: -1, yoyo: true, repeatDelay: 2.5}) 
  // gsap.from("#tool_8", {scale:.9, duration: 1.5, delay: 7.5, repeat: -1, yoyo: true, repeatDelay: 2.5}) 
  
  
  const button = document.querySelector("#myButton");
  const audio = document.querySelector("#myAudio");
  
  button.addEventListener("click", function() {
      if(audio.paused) {
          audio.play();
          button.classList.toggle("pause");
      }
      else {
          audio.pause();
          button.classList.toggle("pause");
      }
      // document.querySelector("#myAudio").play();
  })
  
  
  
  
  // AOS initialization
  
  AOS.init(); 
  
  // JS particles
  
  
  //== particles.js config ==//
  /* -----------------------------------------------
  Author : Vincent Garreau  - vincentgarreau.com
  MIT license: http://opensource.org/licenses/MIT
  Demo / Generator : vincentgarreau.com/particles.js
  GitHub : github.com/VincentGarreau/particles.js
  ----------------------------------------------- */
  
  particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 100,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#CFF6CF"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#CFF6CF"
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
            "speed": .5,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 2,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 10,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#fff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 200,
            "rotateY": 400
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 300,
            "size": 20,
            "duration": 2,
            "opacity": 8,
            "speed": 2
          },
          "repulse": {
            "distance": 200,
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
    });
    
    
    
    
    
    