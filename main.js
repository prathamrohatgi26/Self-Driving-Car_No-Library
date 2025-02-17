document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('mainCanvas')
    canvas.width = 200

    const ctx = canvas.getContext('2d')
    const car = new Car(100,100,30,50)

    animate()

    function animate() {
        car.upadte()
    canvas.height = window.innerHeight
        car.draw(ctx)
        requestAnimationFrame(animate)
    }

});