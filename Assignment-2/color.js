const wrap= document.getElementById("wrap")
//const  color1=document.getElementById('color')
const btn=document.getElementById('btn')
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']


btn.addEventListener('click',function(){
    let hexcolor='#'

    for(let i=1;i<=6;i++){
        hexcolor+=randhexvalue()
    }
    wrap.style.backgroundColor=hexcolor
    //color1.innerHTML=hexcolor
})    

function randhexvalue(){
let ran=Math.floor(Math.random()*16)
 return hex[ran]
}

