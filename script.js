let box = document.querySelector(".box");

// Throttling Function
const throttleFunction = (func, delay) => {

    // Previously called time of the function
    let prev = 0;
    return (...args) => {
        // Current called time of the function
        let now = new Date().getTime();

        // Logging the difference
        // between previously 
        // called and current called timings
        console.log(now - prev, delay);

        // If difference is greater
        // than delay call
        // the function again.
        if (now - prev > delay) {
            prev = now;

            // "..." is the spread
            // operator here 
            // returning the function with the 
            // array of arguments
            return func(...args);
        }
    }
}
let imgurl=[
    "https://i.pinimg.com/474x/af/49/60/af4960c8c3b0bf117d11f89bcbedd1d7.jpg",
    "https://i.pinimg.com/474x/df/c5/f8/dfc5f8a59327fe3d920adcb5cf52324b.jpg",
    "https://i.pinimg.com/474x/03/12/ec/0312ec8c680d58ec16098ebabe05a45a.jpg",
    "https://i.pinimg.com/474x/a3/0d/79/a30d7912fa77d12ecfd98a3c29e07dbb.jpg",
    "https://i.pinimg.com/474x/97/61/7d/97617d6cc2eee137819a427769497561.jpg",
    "https://i.pinimg.com/474x/75/fb/1f/75fb1fe499fbf01fc9018a0be877f7b7.jpg",
    "https://i.pinimg.com/474x/d0/4f/e8/d04fe8062ccf3868df4ef1983b69a280.jpg",
    "https://i.pinimg.com/474x/d8/0f/00/d80f0022271eb227e76f99ed6c7b635c.jpg"
]
document.addEventListener("mousemove",
    throttleFunction((dets) => {
      let div = document.createElement("div")

      div.style.left=dets.clientX+"px"
      div.style.top=dets.clientY+"px"
    div.classList.add("imgdiv")
    const randomImageUrl = imgurl[Math.floor(Math.random() * imgurl.length)];
    let img =document.createElement("img")
    img.setAttribute("src",imgurl.length)
    div.appendChild(img)
    document.body.appendChild(div)
    gsap.from(img,{
        y:90,

    }

    )

    setTimeout(() => {
        div.remove();
    }, 2000);
  
       
    }, 1000));
    

  
  
  