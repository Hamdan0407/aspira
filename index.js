let one = document.getElementById("text")
let two = document.getElementById("btn")
let three = document.getElementById("img")
let down = document.getElementById("down")

two.addEventListener("click",()=>{
    three.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+text.value
})

down.addEventListener("click",()=>{
    fetch(img.src)
    .then(response=>{
        return response.blob()
    })
    .then(blob=>{
        let url=URL.createObjectURL(blob)
        let a=document.createElement("a")
        a.href=url
        a.download="QRcode"
        a.click()
    })
})

