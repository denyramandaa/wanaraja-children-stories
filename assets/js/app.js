new Vue({
    el: '#app',
    data() {
        return {
            swiper: null,
            gameIsStart: false,
            activeScene: 0,
            allowSlide: false,
            orientationError: false,
            navigationIsOpen: false,
            soundIsOn: true,
            gameStep: [
                {
                    scene: 1,
                    step: 0,
                    done: false,
                    naration: "Di sebuah hutan, hiduplah sekelompok monyet yang dipimpin oleh Wanaraja, si raja monyet. Mereka tinggal di dekat pohon ara raksasa yang banyak buahnya. Para monyet amat menyukai buah ara itu.",
                    img: "assets/img/scene-1.jpg"
                },
                {
                    scene: 2,
                    step: 0,
                    done: false,
                    naration: "Namun, ada satu buah ara yang luput dari perhatian mereka. Buah itu pun jatuh dan hanyut ke sungai. Buah itu lalu tersangkut di jala milik manusia. Aromanya yang harum membuat orang-orang tertarik.",
                    img: "assets/img/scene-2-bg-1.jpg"
                },
                {
                    scene: 3,
                    step: 0,
                    done: false,
                    naration: "Buah ara itu dipersembahkan pada Raja. Raja pun terpikat dengan aroma buah ara. Dia bergegas mencicipinya.",
                    img: "assets/img/scene-3.jpg"
                },
                {
                    scene: 4,
                    step: 0,
                    done: false,
                    naration: "Raja lalu mengajak para pengawal untuk mencari pohon buah ara itu. Langkah mereka berderap memasuki hutan.",
                    img: "assets/img/scene-4.jpg"
                },
                {
                    scene: 5,
                    step: 0,
                    done: false,
                    naration: "Sampai di tengah hutan.. Para monyet pun ketakutan. Mereka berlari dan meloncat tak tentu arah.",
                    img: "assets/img/scene-5.jpg"
                },
                {
                    scene: 6,
                    step: 0,
                    done: false,
                    naration: "Melihat rakyatnya ketakutan, Wanaraja pun mencari akal. Dia mengikatkan sebatang bambu pada kakinya. Dia meminta para monyet untuk menyelamatkan diri lewat bambu itu.",
                    img: "assets/img/scene-6.jpg"
                },
                {
                    scene: 7,
                    step: 0,
                    done: false,
                    naration: "Wanaraja tak kuat. Dia terjatuh. Namun dia lega, rakyatnya sudah berhasil melarikan diri.",
                    img: "assets/img/scene-7.jpg"
                },
                {
                    scene: 8,
                    step: 0,
                    done: false,
                    naration: "Raja terharu mendengar penjelasan Wanaraja. Apalagi, Wanaraja bilang bahwa pohon ara itu adalah sumber makanan mereka.",
                    img: "assets/img/scene-8.jpg"
                },
                {
                    scene: 9,
                    step: 0,
                    done: false,
                    naration: "Raja memutuskan untuk membiarkan para monyet kembali ke pohon itu. Dia dan Wanaraja sepakat untuk berbagi buah ara di kemudian hari.",
                    img: "assets/img/scene-8.jpg"
                }
            ],
            audioAssets: [
                {
                    type: "click",
                    src: "assets/audio/Ambiance/Click UI.aac",
                    id: "click"
                },
                {
                    type: "ambiance",
                    src: "assets/audio/Ambiance/Hutan dan Pasukan.aac",
                    id: "pasukan"
                },
                {
                    type: "ambiance",
                    src: "assets/audio/Ambiance/Monkey Forest di serang.aac",
                    id: "serang"
                },
                {
                    type: "ambiance",
                    src: "assets/audio/Ambiance/Monkey Forest.aac",
                    id: "monyet"
                },
                {
                    type: "ambiance",
                    src: "assets/audio/Ambiance/River Stream.aac",
                    id: "sungai"
                },
                {
                    type: "ambiance",
                    src: "assets/audio/Ambiance/Forest.aac",
                    id: "forest"
                },
                {
                    type: "narator",
                    src: "assets/audio/VO Narator/Narator Slide 1.aac",
                    id: "narator0"
                },
                {
                    type: "narator",
                    src: "assets/audio/VO Narator/Narator Slide 2.aac",
                    id: "narator1"
                },
                {
                    type: "narator",
                    src: "assets/audio/VO Narator/Narator Slide 3.aac",
                    id: "narator2"
                },
                {
                    type: "narator",
                    src: "assets/audio/VO Narator/Narator Slide 4.aac",
                    id: "narator3"
                },
                {
                    type: "narator",
                    src: "assets/audio/VO Narator/Narator Slide 5.aac",
                    id: "narator4"
                },
                {
                    type: "narator",
                    src: "assets/audio/VO Narator/Narator Slide 6 Part 1.aac",
                    id: "narator5"
                },
                {
                    type: "narator",
                    src: "assets/audio/VO Narator/Narator Slide 7.aac",
                    id: "narator6"
                },
                {
                    type: "narator",
                    src: "assets/audio/VO Narator/Narator Slide 8 Part 1.aac",
                    id: "narator7"
                },
                {
                    type: "narator",
                    src: "assets/audio/VO Narator/Narator Slide 8 Part 2.aac",
                    id: "narator8"
                },

                {
                    type: "karakter",
                    src: "assets/audio/VO Karakter/Monyet Slide 1 Part 1.aac",
                    id: "karakter0"
                },
                {
                    type: "karakter",
                    src: "assets/audio/VO Karakter/Monyet Slide 1 Part 4.aac",
                    id: "karakter1"
                },{
                    type: "karakter",
                    src: "assets/audio/VO Karakter/Monyet Slide 1 Part 2.aac",
                    id: "karakter2"
                },{
                    type: "karakter",
                    src: "assets/audio/VO Karakter/Monyet Slide 1 Part 3.aac",
                    id: "karakter3"
                },{
                    type: "karakter",
                    src: "assets/audio/VO Karakter/Pelayan Slide 3.aac",
                    id: "karakter5"
                },{
                    type: "karakter",
                    src: "assets/audio/VO Karakter/Raja 2 Slide 3.aac",
                    id: "karakter6"
                },{
                    type: "karakter",
                    src: "assets/audio/VO Karakter/Prajurit 1 Slide 5.aac",
                    id: "karakter7"
                },{
                    type: "karakter",
                    src: "assets/audio/VO Karakter/Prajurit 2 Slide 5.aac",
                    id: "karakter8"
                },{
                    type: "karakter",
                    src: "assets/audio/VO Karakter/Raja Monyet Slide 6.aac",
                    id: "karakter9"
                },{
                    type: "karakter",
                    src: "assets/audio/VO Karakter/Raja Slide 7.aac",
                    id: "karakter10"
                },{
                    type: "karakter",
                    src: "assets/audio/VO Karakter/Raja Monyet Slide 7.aac",
                    id: "karakter11"
                }
            ]
        }
    },
    computed: {
        isMobileRegex() {
            let check = false;
            (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            return check;
        },
    },
    watch: {
        gameIsStart() {
            if(this.gameIsStart) {
                this.unMuteAllSound()
                this.playAudioNaration('narator0')
                const vm = this;
                setTimeout(() => {
                    vm.gameStep[0].showButton1 = true
                }, 1500)
            }
        },
        activeScene() {
            // console.log(this.activeScene)
        },
        soundIsOn() {
            this.soundIsOn ? this.unMuteAllSound() : this.muteAllSound()
        }
    },
    methods: {
        muteAllSound() {
            for(const d in this.audioAssets) {
                document.getElementsByClassName('audio')[d].muted = true
            }
        },
        unMuteAllSound() {
            for(const d in this.audioAssets) {
                document.getElementsByClassName('audio')[d].muted = false
            }
        },
        playClickAudio() {
            document.getElementById('click').play()
        },
        playAudioNaration(id) {
            for(let d=0; d < document.getElementsByClassName('karakter').length; d++) {
                document.getElementsByClassName('karakter')[d].pause()
                document.getElementsByClassName('karakter')[d].currentTime = 0
            }
            for(let f=0; f < document.getElementsByClassName('narator').length; f++) {
                document.getElementsByClassName('narator')[f].pause()
                document.getElementsByClassName('narator')[f].currentTime = 0
            }
            document.getElementById(id).play()
        },
        resetAmbience() {
            for(let d=0; d < document.getElementsByClassName('ambiance').length; d++) {
                document.getElementsByClassName('ambiance')[d].pause()
                document.getElementsByClassName('ambiance')[d].currentTime = 0
            }
        },
        playAmbience(id) {
            for(let d=0; d < document.getElementsByClassName('ambiance').length; d++) {
                document.getElementsByClassName('ambiance')[d].pause()
                document.getElementsByClassName('ambiance')[d].currentTime = 0
            }
            document.getElementById(id).play()
        },
        initSwiper() {
            const vm = this
            vm.swiper = new Swiper('.swiper', {
                followFinger: false,
                slidesPerView: 1,
                allowTouchMove: false
            });
            vm.swiper.on('slideChangeTransitionEnd', () => {
                vm.activeScene = vm.swiper.activeIndex
                if(vm.activeScene == 1) vm.simulateScene2() // scene 2
                if(vm.activeScene == 3) vm.allowSlide = true // scene 4
                if(vm.activeScene == 7) vm.allowSlide = true // scene 8
                if(vm.activeScene == 8) vm.allowSlide = true // scene 9

                if(vm.activeScene == 0) {
                    vm.playAudioNaration('narator0')
                    vm.playAmbience('forest')
                }
                if(vm.activeScene == 1) { 
                    vm.playAudioNaration('narator1')
                    vm.playAmbience('sungai')
                }
                if(vm.activeScene == 2) {
                    vm.playAudioNaration('narator2')
                    vm.resetAmbience()
                }
                if(vm.activeScene == 3) { 
                    vm.playAudioNaration('narator3')
                    vm.playAmbience('pasukan')
                }
                if(vm.activeScene == 4) { 
                    vm.playAudioNaration('narator4')
                    vm.playAmbience('monyet')
                }
                if(vm.activeScene == 5) { 
                    vm.playAudioNaration('narator5')
                    vm.playAmbience('serang')
                }
                if(vm.activeScene == 6) {
                    vm.playAudioNaration('narator6')
                    vm.resetAmbience()
                }
                if(vm.activeScene == 7) {
                    vm.playAudioNaration('narator7')
                    vm.resetAmbience()
                }
                if(vm.activeScene == 8) {
                    vm.playAudioNaration('narator8')
                    vm.resetAmbience()
                }
            });
        },
        slide(dir) {
            if(!this.allowSlide) return
            this.allowSlide = false
            this.resetScene()
            dir ? this.swiper.slideNext() : this.swiper.slidePrev()
        },
        slideTo(dir) {
            this.allowSlide = false
            this.resetScene()
            this.swiper.slideTo(dir)
        },
        resetScene() {
            this.gameStep[this.activeScene].step = 0
            this.gameStep[this.activeScene].done = false
        },
        checkingDeviceError() {
            const vm = this;
            if(vm.isMobileRegex){
                vm.orientationError = window.innerHeight > window.innerWidth
                window.onorientationchange = () => { 
                    vm.orientationError = window.innerHeight < window.innerWidth 
                    console.log(vm.orientationError)
                }
            }
        },
        simulateScene2() {
            const vm = this
            const scene2Interval = setInterval(() => {
                if(vm.gameStep[1].step == 2) { 
                    clearInterval(scene2Interval) 
                    vm.allowSlide = true
                }
                vm.gameStep[1].step++
            }, 2000)
        }
    },
    mounted() {
        this.initSwiper()
        this.checkingDeviceError()
    }
})