AFRAME.registerComponent('rotate', {
    schema:{moveY: {type:'number', default: 1}},
    tick: function(){
        var count = 0
        var r = this.el.getAttribute("rotation")
        r.y = this.data.moveY
        window.addEventListener('click', (m) =>{
            this.data.moveY = this.data.moveY + 0.02
            count = count + 1
            console.log(count)
            this.el.setAttribute("rotation", {
                x: r.x, 
                y: r.y, 
                z: r.z
            })
        })
        window.addEventListener('keypress', (s) =>{
            if(s.key = "Spacebar"){
                r.x = 0
                r.y = 0
                r.z = 1
            }
            this.el.setAttribute("rotation", {
                x: r.x, 
                y: r.y, 
                z: r.z
            })
        })
    }
})
