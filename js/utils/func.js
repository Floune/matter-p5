function isShapeClicked() {

  let actualX = mConstraint.mouse.position.x
  let actualY = mConstraint.mouse.position.y
  lines.forEach(line => {
    let verts = line.body.vertices
    let nVert = verts.length
    let vertx = verts.map(ver => { return ver.x }) 
    let verty = verts.map(ver => { return ver.y }) 
    if (eskeJeClicDansUnPolygone(nVert, vertx, verty, actualX, actualY) === true) {
      console.log(line.body)
      line.selected = !line.selected
    }
  })
}

function getDistance(x1, y1, x2, y2) {
  var xs = x2 - x1,
  ys = y2 - y1;   
  
  xs *= xs;
  ys *= ys;

  return Math.sqrt( xs + ys );
}

//styley
//https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html
function eskeJeClicDansUnPolygone(nvert, vertx, verty, testx, testy)
{
  let i, j, c = 0;
  for (i = 0, j = nvert-1; i < nvert; j = i++) {
    if ( ((verty[i]>testy) != (verty[j]>testy)) && (testx < (vertx[j]-vertx[i]) * (testy-verty[i]) / (verty[j]-verty[i]) + vertx[i]) )
       c = !c;
  }
  return c;
}


