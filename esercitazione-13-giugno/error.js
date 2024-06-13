const titleError = document.querySelector('.title_error');
const priceError = document.querySelector('.price_error');

const errorHandler = (err) => {
    titleError.textContent = ""
    priceError.textContent = ""
    
    err.message.forEach((message) => {
    if (message.includes("title")) {
        titleError.textContent = message;
        return
    }
})
}
