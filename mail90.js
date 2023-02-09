let add = document.querySelector(".addB");
let div12 = document.querySelector(".div12")


add.addEventListener("click" , () =>{
    let v = document.createElement("div");
    v.style.width = "800px";
    v.style.heigth = "40px";
    v.style.marginLeft = "220px";
    v.style.borderRadius = "20px";
    v.style.backgroundColor = "white";
    div12.append(v);
});

add.addEventListener("click" , () => {
    let c = document.createElement("div");
    c.style.position = "relative";
});
