let box = document.querySelector(".box");
let btn = document.querySelector("button");
async function getdata(){
    try{
        let url = await fetch("https://dummyjson.com/quotes/random");
        let data = await url.json();
        return data;
    }
    catch(err){
        console.error("error occured");
    }
    
}
btn.addEventListener("click",async()=>{
    let li = document.createElement("li");
    box.appendChild(li);
    let urlData = await getdata();
    li.innerText = `${urlData.quote}`;
})