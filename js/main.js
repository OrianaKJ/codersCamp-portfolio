console.log("Hey there👋. It's nice to see you here 😊. I think that you like details as much as I, so maybe it's good idea to do something together❓❗ Catch my at my social media channels or send me a message💬. Have a nice day and till the next time👋");

let modal = document.querySelector('.portfolio__modal');

let sendBtn = document.querySelector('.contact__button');

let modalClose = document.querySelector('.modal__close');

sendBtn.addEventListener('click', function () {
    modal.style.display = "block";
}
)

modalClose.addEventListener('click', function () {
    modal.style.display = "none"
})
