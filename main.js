// // alert('connected!')
// // it create a wrapper around canvas element in HTML, create an instance of fabric canvas
let canvas = new fabric.Canvas('c')
let triangle = new fabric.Rect({
    fill : 'red' ,
    left : 100 ,
    top : 100,
    width : 20 ,
    height : 20
})
canvas.add(triangle)
// create a wrapper around native canvas element (with id="c")

// create a rectangle object
let rect = new fabric.Triangle({
  left: 100,
  top: 100,
  fill: 'blue',
  width: 20,
  height: 20
});
let rect2 = new fabric.Triangle({
    left: 100,
    top: 100,
    fill: 'pink',
    width: 100,
    height: 100
  });
  
  document.querySelectorAll('.library img').forEach(el => {
      el.addEventListener('click', ()=>{
        console.log('clicked')
        fabric.Image.fromURL(el.src , img => {
            img.scale(0.2)
            img.set({left : 100 , top : 100})
            canvas.add(img)
        })
      })
  })
// "add" rectangle onto canvas
canvas.add(rect);
canvas.add(rect2);
