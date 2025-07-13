
let sketch3 = function(p) {
  let cols, rows;
  let resolution = 10;
  let grid;

  p.setup = function() {
    let canvas = p.createCanvas(300, 300);
    canvas.parent("canvas-container-3");
    cols = p.width / resolution;
    rows = p.height / resolution;
    grid = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j] = p.floor(p.random(2));
      }
    }
  };

  p.draw = function() {
    p.background("#F1F0F7");
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i * resolution;
        let y = j * resolution;
        if (grid[i][j] == 1) {
          p.fill(p.random(["#D8C4DF", "#EAC4D5", "#C8D3E1", "#F1C7E7"]));
          p.stroke("#ECECEC");
          p.rect(x, y, resolution - 1, resolution - 1);
        }
      }
    }

    let next = make2DArray(cols, rows);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let state = grid[i][j];
        let sum = 0;
        for (let xoff = -1; xoff < 2; xoff++) {
          for (let yoff = -1; yoff < 2; yoff++) {
            let col = (i + xoff + cols) % cols;
            let row = (j + yoff + rows) % rows;
            sum += grid[col][row];
          }
        }
        sum -= state;
        if (state == 1 && (sum < 2 || sum > 3)) next[i][j] = 0;
        else if (state == 0 && sum == 3) next[i][j] = 1;
        else next[i][j] = state;
      }
    }
    grid = next;
  };

  function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(rows);
    }
    return arr;
  }
};
new p5(sketch3);
