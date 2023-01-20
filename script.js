let options=document.querySelectorAll('.nor')
console.log(typeof options[0].id)
let adv=document.querySelectorAll('.adv')
// let adv=document.createElement('adv')

let fontname=document.getElementById('fontName')

let fontsize=document.getElementById('fontSize')

let textarea=document.getElementById('text-input')

let linkbutton=document.getElementById('createLink')

let alignbuttons=document.querySelectorAll('.algn')
let spacingbuttons=document.querySelectorAll('.spacing')
let formatbuttons=document.querySelectorAll('.format')
let scriptbuttons=document.querySelectorAll('.script')

let fontlist=[
    'Arial','Verdana','Times New Roman','Garamond','Georgia','Courier New','Cursive'
]
const initializer=()=>{
    highlighter(alignbuttons,true)
    highlighter(spacingbuttons,true)
    highlighter(formatbuttons,false)
    highlighter(scriptbuttons,true)
    

    fontlist.map((value)=>{
        let option =document.createElement('option')
        option.value=value
        option.innerHTML=value;
        option.style.textAlign='left'
        fontname.appendChild(option)



    })

    for(let i=4;i<=14;i=i+2){
        let option=document.createElement('option')
        option.value=i
        option.innerHTML=i
        fontsize.appendChild(option)

    }
}

const highlighter=(className,state)=>{
    className.forEach((e)=>{
    e.addEventListener('click',()=>{

        if(state){
            let alreadyactive=false
            
            if(e.classList.contains('active')){
                alreadyactive=true
            }
            
            removehighlighter(className);
            if(!alreadyactive){
                e.classList.add('active')
            }
        }
        else{
                e.classList.toggle('active')
            }
            
    })  
        
    
    });
}

const modifytext =(command,defaultUi,value)=>{

    document.execCommand(command,defaultUi,value)
}

// window.onload=initializer()
const removehighlighter=(className)=>{
    className.forEach((e)=>{
        e.classList.remove('active')
    })
    
}

options.forEach((button)=>{
button.addEventListener('click',()=>{

    modifytext(button.id,false,null)
})
})

// options.forEach((button)=>{
// button.addEventListener('click',()=>{

//     modifytext(button.id,false,null)
// })
// })

adv.forEach((button)=>{
button.addEventListener('change',()=>{

    modifytext(button.id,false,button.value)
})
})


linkbutton.addEventListener("click", () => {
    let userLink = prompt("Enter a URL");
    //if link has http then pass directly else add https
    if (/http/i.test(userLink)) {
      modifytext(linkbutton.id, false, userLink);
    } else {
      userLink = "http://" + userLink;
      modifytext(linkbutton.id, false, userLink);
    }
  });


window.onload=initializer()