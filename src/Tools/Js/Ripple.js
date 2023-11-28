
import React, { useEffect } from 'react'


export default function Ripple() {

    useEffect(() => {

        let btns = document.querySelectorAll(".ripple-btn")
        btns.forEach(btn => {
            btn.addEventListener("mousedown", (e) => {
                let sp = document.createElement("span")
                sp.className = 'ripple-span';
                let x = e.pageX - btn.offsetLeft - 5;
                let y = e.pageY - btn.offsetTop - 5;
                sp.style.setProperty('--x', x + 'px')
                sp.style.setProperty('--y', y + 'px')

                btn.appendChild(sp)

                sp.classList.add('ripple-active')

                btn.addEventListener("mouseup", () => {

                    sp.classList.add('ripple-remove');
                    setTimeout(() => {
                        sp.remove()
                    }, 2000);

                })

            })
        })
    },[])
    return (null)
}

