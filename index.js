// let Javascript={
//     name:"Javascript",
//     libraries:['React','Angular','Vue'],
//     printLibraries:function(){
//         console.log(this)
//         var self=this
//         this.libraries.forEach(function(a){
            
            
            
//             console.log(`${self.name} love ${a}`)
//         })
//     }
// }

// Javascript.printLibraries()

// let Javascript={
//     name:"Javascript",
//     libraries:['React','Angular','Vue'],
//     printLibraries:function(){
//         console.log(this)
        
//         this.libraries.forEach(a=>console.log(`${this.name} love ${a}`))
//     }
// }

// Javascript.printLibraries()

var Searchinput=document.querySelector('.input')
var display=document.querySelector(".result")
var thanks=document.querySelector(".thanks")

function show(){
    display.innerHTML=this.value;
   
    setTimeout(()=>thanks.innerHTML=`You have typed: ${this.value}`
    ,1000)
}
// show=()=>display.innerHTML=thanks.value
// setTimeout(()=>thanks.innerHTML=this.value)
Searchinput.addEventListener('keyup',show)