const $mainImage = document.querySelector(".main-image");
const $tbody = document.querySelector("tbody");

const petsModule = (function(){
    const _data = [
        {
            image: "assets/images/dog.jpg",
            name: "Ares",
            type: "Equus Caballus",
            sound: "bark",
            button: "Bark"
        },
        {
            image: "assets/images/cat.jpg",
            name: "Felix",
            type: "Felis Catus",
            sound: "meow",
            button: "Meow"
        },
        {
            image: "assets/images/bird.jpg",
            name: "Arthur",
            type: "Ara Macao",
            sound: "squawk",
            button: "Squawk"
        },
        {
            image: "assets/images/horse.jpg",
            name: "Alfred",
            type: "Equus Caballus",
            sound: "neat",
            button: "Neat"
        }
    ];

    const createEl = function(pet){
        return "<tr class='p-row'><td><img class='p-image' src='"+pet.image+"' /></td><td>"+pet.name+"</td><td>"+pet.type+
        "</td><td><button class='btn btn-danger' data-sound='"+pet.sound+"'>"+pet.button+"</button></td></tr>"
    };
    
    const getButtons = function(){
        return document.querySelectorAll("button");
    }


    const addElToTable = function(content){
        $tbody.innerHTML += content;
    }

    const putElToTable = function(){
        for(let i=0; i< _data.length; i++){
            addElToTable(createEl(_data[i]));
        }
    }

    const bindEvents = function(){
        const buttons = getButtons();
        for(let i= 0; i< buttons.length; i++){
            buttons[i].addEventListener("click", function(event){
              event.stopPropagation();
                const soundId = this.dataset.sound;
                const soundElement = document.getElementById(soundId);
                if(soundElement){
                    soundElement.play();
                }
            });
        }
    }
    
    const getRows = function(){
        return document.querySelectorAll(".p-row");
    }

    var sounds = {
        98 : 'bark', // b
        109 : 'meow', // m
        115: 'squawk', // s
        110: 'neat' // n
     
     };

     document.onkeypress = function(e) {
         var soundId = sounds[e.keyCode];
         if (soundId) document.getElementById(soundId).play();
         else console.log("key not mapped : ", e.keyCode);
     }

    const changeRowBg = function(){
        const rows = getRows();
        rows.forEach((row,index) => {
            row.addEventListener("click", function(){
                $mainImage.setAttribute("src",_data[index].image); 
                row.classList.toggle("row-bg");
            });
        })
    }

    const init = function(){
        putElToTable();
        bindEvents();
        changeRowBg();
    }

    return {
        init: init
    }
})();