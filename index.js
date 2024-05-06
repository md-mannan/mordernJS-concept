let Javascript={
    name:"Javascript",
    libraries:['React','Angular','Vue'],
    printLibraries:function(){
        
        this.libraries.forEach(function(a){
            
            console.log(`${this.name} love ${a}`)
        })
    }
}

Javascript.printLibraries()