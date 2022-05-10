donetype = false;
var introplayed = false;
nocover = false;


document.title = "audio warning | CLICK THE PAGEE !!!"

if (!nocover) {
    addStyle(`
    body {
        overflow: hidden;
    }
    #coverheader {
        transition: all 1s;
        display: block;
        height: 4vh;
        background: transparent;
    }
    #cover {
        position: absolute;
        z-index: 998;
        width: 100%;
        height: 8000%;
        background: #000;
        transition: all 2.5s ease-in-out;
    }
    #rottext {
        transition: all 3s ease-in-out;
        color: #fff;
        border-bottom: solid 5px #fff;
    }

    `)
}

function intro() {
    if (introplayed || nocover) {
        return;
    }
    addStyle(`
    #coverheader {
        transition: all 1s;
        height: 0vh;
    }
    `)

    document.title = "Thanks! :)"
    sleep(200)
    document.title = "ourple"
    introplayed = true;
    window.scrollTo(0, 0);
    type("убить себя. сейчас!", "#rottext")

    async function type(sentence, element) {
        // Keys
        var keyL = new Howl({
            src: "src/audio/keys/keyl.mp3",
            loop: false,
            volume: "1"
        })
        var keyU = new Howl({
            src: "src/audio/keys/keyu.mp3",
            loop: false,
            volume: "1"
        })
        var keyV = new Howl({
            src: "src/audio/keys/keyu.mp3",
            loop: false,
            volume: "1"
        })
        var keyQ = new Howl({
            src: "src/audio/keys/keyu.mp3",
            loop: false,
            volume: "1"
        })
        var keySpace = new Howl({
            src: "src/audio/keys/keyspace.mp3",
            loop: false,
            volume: "1"
        })
        // Background music
        var bmstart = new Howl({
            src: "src/audio/lex1.mp3",
            loop: false,
            volume: "1"
        })
        var bmext = new Howl({
            src: "src/audio/lex23.mp3",
            loop: true, 
            volume: "0.7"
        })
        const letters = sentence.split("");
        let i = 0;
        var dontplay = false;
        while(i < letters.length) {
            await waitForMs(getRandomInt(400));
            if (String(letters[i]).match(" ")) {
                keySpace.play();
            } else {
                switch(getRandomInt(1)) {
                    case 0:
                        keyL.play();
                        console.log("key0")
                    // case 1: 
                    //     keyU.play();
                    //     console.log("key1")
                    // case 2:
                    //     keyQ.play();
                    // case 3:
                    //     keyV.play();
                }
                    
            }
            $(element).append(letters[i]);
            i++
        }
            var audio = new Audio('src/audio/keys/keyenter.mp3'); audio.volume = 1; audio.play();
            addStyle(`
            * {
                filter: none;
            }
            #cover {
                height: 0%;
                background: #fff;
            }
            #coverheader {
                visibility: hidden;
            }

            body {
                display: block;
                overflow: auto;
            }
            #rottext {
                color: #000;
                border-bottom: solid 5px #000;
            }
            /* Scanlines from systemspace.network - stolen code & image - sorry this is just too good*/

            body:after {
                content: "";
                position: fixed;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 1000;
                background-image: url('img/scan.png');
                background-repeat: all;
                background-position: 0px 0px;
                animation-name: Static;
                animation-duration: 0.8s;
                animation-iteration-count: infinite;
                animation-timing-function: steps(4);
            }
            @keyframes Static {
                0% { background-position: 0px 0px; }
                100% { background-position: 0px 4px; }
            }
        `);

        bmstart.play();
        bmstart.on('end', function(){
            bmext.play();
        });
        
            return donetype = true;
        }
        function waitForMs(ms) {
            return new Promise(resolve => setTimeout(resolve, ms))
        }
}