import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';


import Particles from 'react-tsparticles';

function divided(props) {
  return <div id="repulse-div"></div>;
}

class App extends Component{
     render(){
 return (

<React.Fragment>
 <div id="repulse-div">

 <Particles id="tsparticles" params={{
  background: {
    color: {
      value: "#0d47a1"
    }
  },

  backgroundMask: {
        cover: {
            color: {
                value: "#fff"
            },
            opacity: 1
        },
        enable: false
  },

  fpsLimit: 60,

  infection: {
        cure: false,
        delay: 0,
        enable: false,
        infections: false,
        stages: [],
  },

  interactivity: {
    detectsOn: "canvas",

    events: {
      onClick: {
        enable: false,
        mode: "push"
      },
      onDiv: {
        elementId: "repulse-div",
        enable: false,
        mode: "repulse"
      },
      onHover: {
        enable: true,
        mode: "bubble",
        parallax: {
            enable: false,
            force: 2,
            smooth: 10
        }
      },
      resize: true
    },


    modes: {
      bubble: {
        distance: 40,
        duration: 2,
        opacity: 8,
        size: 6,
      },
      push: {
        quantity: 4
      },
      repulse: {
        distance: 200,
        duration: 0.4,
        speed: 1
      },
      slow: {
        factor: 1,
        radius: 0
      },
      remove: {
        quantity: 2
      },
      grab: {
        distance: 400,
        links:{
            opacity: 1
        }
      },
      connect: {
        distance: 80,
        links: {
            opacity: 0.5
        },
        radius: 60
      }
    }
  },

  particles: {
    color: {
      value: "#ffffff",
      animation: {
        enable: false,
        speed: 1,
        sync: true
      }
    },

    links: {
      blink: false,
      color: "#ffffff",
      consent: false,
      distance: 30,
      enable: true,
      opacity: 0.4,
      shadow: {
        blur: 5,
        color: "lime",
        enable: false
      },
      triangles: {
        enable: false,
      },
      width: 1,
      warp: false
    },

    move: {
      attract: {
         enable: false,
         rotate: {
            x: 600,
            y: 1200
         }
      },

      direction: "none",
      enable: true,
      factor: {
        horizontal: {
            value: 50,
            offset: 0
        },
        vertical: {
            value: 10,
            offset: 40000
        }
      },
      outMode: "bounce",
      random: false,
      speed: 1,
      straight: false,
      trail: {
        enable: false,
        length: 10,
        fillColor: {
            value: "#000000"
        }
      },
      vibrate: false,
      warp: false
    },


    number: {
      density: {
        enable: false,
        value_area: 2000,
        factor: 1000
      },
      limit: 0,
      value: 200
    },
    opacity: {
      value: 0.4
    },

    shape: {
      type: "circle",

      star: {
        fill: true,
        close: true,
        sides: 5
      },

      polygon: {
        fill: true,
        close: true,
        sides: 5
      }

    },
    size: {

      random: {
        enable: true,
        minimumValue: 1
      },
      value: 1
    },

    stroke: {
        color: {
            value: "#000000"
        },
        width: 0,
        opacity: 1
    },

    pauseOnBlur: true,

    polygon: {
        draw: {
            enable: true,
            stroke: {
                color: {
                    value: "rgba(255,255,255,0.2)",
                },
                width: 0.5,
                opacity: 0.2
            }
        },
        enable: true,
        inline: {
            arrangement: "equidistant"
        },
        move: {
            radius: 10,
            type: "path"
        },
        scale: 0.5,
        type: "inline",
        url: "https://cdn.matteobruni.it/images/particles/smalldeer.svg"


    }


  },





}} />

</div>

 </React.Fragment>

     );
  }
}

export default App;
