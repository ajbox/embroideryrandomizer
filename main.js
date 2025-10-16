const colorArray = [
   "#f3e84e",
    "#d34c3d",
    "#663972",
    "#e4b0bd",
    "#8b2a5d",
    "#b789b5",
    "#b789b5",
    "#f1dfc4",
    "#2b623b",
    "#5d4a3f",
    "#21509a",
    "#21509a",
    "#f5f5f5",
    "#000000"
  ]
  
  let myColor = generateColor()
  $('body').css("background-color", myColor)
  
  $('#random').click(function() {
    let myColor = generateColor()
    $('body').css("background-color", myColor)
  })
      
  function generateColor() {
    const randomColorIndex = Math.floor(Math.random() *     colorArray.length)
    let color = colorArray[randomColorIndex]
    return color;
  }