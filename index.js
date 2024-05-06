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

let Javascript={
    name:"Javascript",
    libraries:['React','Angular','Vue'],
    printLibraries:function(){
        console.log(this)
        
        this.libraries.forEach(a=>console.log(`${this.name} love ${a}`))
    }
}

Javascript.printLibraries()