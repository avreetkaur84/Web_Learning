catBtn = document.querySelector("#factBtn");
dogBtn = document.querySelector("#dogImg");


catBtn.addEventListener("click", async () => {
    let fact = await getFacts();
    let p = document.querySelector("#catPara");
    p.innerText = fact;
})

dogBtn.addEventListener("click", async () => {
    let link = await getImg();
    let img = document.querySelector("#image");
    img.setAttribute("src", link);
    console.log(link);      //link of image will be printed in console area.
})


let url1 = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";



async function getFacts() {
    try {
        let res = await axios.get(url1);
        return res.data.fact;
    } catch (e) {
        console.log("error - ", e);
        return "No Fact Found";
    }
}


async function getImg() {
    try {
        let img = await axios.get(url2);
        return img.data.message;
    } catch (e) {
        console.log("error - ", e);
        return "/";
    }
}