let add = document.getElementById("add");
let sec2 =document.querySelector(".section2");
let btnlist = document.querySelector(".list");

add.addEventListener("click",()=>{

    sec2.classList.toggle("active");

});
btnlist.addEventListener("click",()=>{

    sec2.classList.toggle("active");
});


// remove post
let del = document.querySelectorAll(".remove");
let post = document.querySelectorAll(".post");

for(let i=0 ;i<post.length ;i++ ){
    del[i].addEventListener("click",()=>{
        post[i].remove();
});
}


// like
let like =document.querySelectorAll(".iconsheart1");
let dislike = document.querySelectorAll(".iconsheart");
let post1 = document.querySelectorAll(".post1");

for(let i=0 ;i<post1.length ;i++ ){
    dislike[i].addEventListener("click",()=>{
        like[i].style.display="block";
        dislike[i].style.display="none";
    });
}
for(let i=0 ;i<post1.length ;i++ ){
    like[i].addEventListener("click",()=>{
        dislike[i].style.display="block";
        like[i].style.display="none";
        
    });
}


//upload post

// let addpost= document.getElementById("addpost");

// let lab1=document.getElementById("lab1");
// let lab2=document.getElementById("lab2");
// let name = document.getElementById("name");


// lab1.onkeyup = lab1.onkeydown = function(){
    
// }
// let sec = document.querySelector(".local");
// // let k =null;
// // let u=null;
// addpost.addEventListener("click",()=>{
//     let x = document.createElement("div");
//     x.innerText="hgydjhksdhc";
//     x.append(sec);
// })
    
// // addpost.addEventListener('submit', () => {
// //     // e.preventDefault();
// //     // const data = new FormData(e.target);
// //     // console.log([...data.entries()]);
// //     console.log(lab1.value);
// // })
