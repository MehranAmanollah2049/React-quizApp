

export default function Alert(type,text,timer = 5000) {
    
    let NotificationContainer = document.querySelector(".NotificationContainer")
    let Icon = {
        success: `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.com/svgjs" x="0" y="0" viewBox="0 0 24 24" xmlSpace="preserve" ><g><path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0Zm6.2 10.512-4.426 4.345a3.984 3.984 0 0 1-2.8 1.151 3.984 3.984 0 0 1-2.776-1.129l-1.899-1.867a1 1 0 1 1 1.402-1.426l1.893 1.861c.776.75 2.001.746 2.781-.018L16.8 9.085a.999.999 0 1 1 1.4 1.427Z" opacity="1" data-original="#000000" ></path></g></svg>`,

        error: `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlnsSvgjs="http://svgjs.com/svgjs" x="0" y="0" viewBox="0 0 24 24"
             xmlSpace="preserve">
            <g>
                <path
                    d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0Zm3.707 14.293a.999.999 0 1 1-1.414 1.414L12 13.414l-2.293 2.293a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414L10.586 12 8.293 9.707a.999.999 0 1 1 1.414-1.414L12 10.586l2.293-2.293a.999.999 0 1 1 1.414 1.414L13.414 12l2.293 2.293Z"
                    data-original="#000000"></path>
            </g>
        </svg>`,

        warning: `<svg  viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12.254 16.7847C11.84 16.7847 11.499 16.4487 11.499 16.0347C11.499 15.6207 11.831 15.2847 12.245 15.2847H12.254C12.668 15.2847 13.004 15.6207 13.004 16.0347C13.004 16.4487 12.668 16.7847 12.254 16.7847ZM11.5 8.63967C11.5 8.22567 11.836 7.88967 12.25 7.88967C12.664 7.88967 13 8.22567 13 8.63967V12.5347C13 12.9487 12.664 13.2847 12.25 13.2847C11.836 13.2847 11.5 12.9487 11.5 12.5347V8.63967ZM12.25 2.78467C5.052 2.78467 2.5 5.33667 2.5 12.5347C2.5 19.7327 5.052 22.2847 12.25 22.2847C19.448 22.2847 22 19.7327 22 12.5347C22 5.33667 19.448 2.78467 12.25 2.78467Z" />
        </svg>`
    }

    let toast = document.createElement("div")
    toast.className = `Toast ${type}`
    toast.innerHTML = `${Icon[type]}<span>${text}</span>
    <div class="progressBar"></div>`
    NotificationContainer.appendChild(toast)

    let lastToast = NotificationContainer.lastElementChild
    lastToast.setAttribute("style" , `--margin: -${lastToast.clientHeight + 12}px;--timer: ${Math.floor(timer / 1000)}s`)

    toast.classList.add('show')

    toast.timer = setTimeout(() => {
        toast.classList.add('remove')
        setTimeout(() => {
            toast.remove()
        }, 500);
    }, timer);
}