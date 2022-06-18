export function move() {
  var elem = document.getElementById('myBar');
  var width = 0;
  var id = setInterval(frame, 50);
  function frame() {
    if (width >= 80) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
    }
  }
}

export function move2() {
  var elem = document.getElementById('myBar2');
  var width = 0;
  var id = setInterval(frame, 50);
  function frame() {
    if (width >= 75) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
    }
  }
}

export function move3() {
  var elem = document.getElementById('myBar3');
  var width = 0;
  var id = setInterval(frame, 50);
  function frame() {
    if (width >= 80) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
    }
  }
}

export function move4() {
  var elem = document.getElementById('myBar4');
  var width = 0;
  var id = setInterval(frame, 50);
  function frame() {
    if (width >= 70) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
    }
  }
}
