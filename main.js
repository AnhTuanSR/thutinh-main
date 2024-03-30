// Thay đổi nội dung búc thư ở đây
var letterContent =" Dear my baby. Em bé Huỳnh Thảo Trang của anh giỏi quá ạ. Em đang rất cố gắng nhìn bé anh sót với thương điên đầu luôn. Anh làm web này vì muốn cho em biết là anh tin mọi nổ lực của bé điều sẽ có kết quả tốt, chăm chỉ là rất giỏi nhưng cũng nhớ chú ý sức khỏe của mình giúp anh ạ ! Bé cố lên ! ANH YÊU EM LẮM 💕"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})