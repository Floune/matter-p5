function isShapeClicked() {
  let clicked = false;
  let i = 0;
  let found = false;
  let actualX = mConstraint.mouse.position.x
  let actualY = mConstraint.mouse.position.y
  while(i < lines.length) {
    let verts = lines[i].body.vertices
    if (Vertices.contains(verts, {x: actualX, y: actualY})) {
      clicked = lines[i];
      lines[i].selected = !lines[i].selected 
      found = true
    }
    i++
  }
  return clicked;
}

function getDistance(x1, y1, x2, y2) {
  var xs = x2 - x1,
  ys = y2 - y1;   
  
  xs *= xs;
  ys *= ys;

  return Math.sqrt( xs + ys );
}

function randomColor() {
  let r = random(255); 
  let g = random(255); 
  let b = random(255); 

  return color(r, g, b);
}

function isNotInToolbar() {
  return mConstraint.mouse.position.x > 81
}


