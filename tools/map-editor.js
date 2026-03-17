const tileGroups = {
  rocks: ["D","E","H","N","L","M","P","Q","R","T","V","b","c","d","e","f","0","1","2","3","4","7"],
  building: ["A","U","8"],
  buildingTop: ["B","C","i","9","S"],
  grass: ["F","G","W","X","Y","g"],
  water: ["l","m","n","o"],
  paths: ["p","q","r","s","t","u","v","w","x","y","z"],
  empty: ["_"],
  ground: ["I","6","5","J","K","O","Z","a","h","!",";","#"],
  misc: ["j","k"]
};

/* ===== state ===== */

let currentTile = "_";
let currentBrush = null;
let isPainting = false;

let width = 60;
let height = 30;

let map = createMap(width, height);

const editor = document.getElementById("editor");

/* ===== helpers ===== */

function createMap(w, h){
  return Array.from({ length: h }, () => Array(w).fill("_"));
}

function getColor(char) {

  for (const [group, chars] of Object.entries(tileGroups)) {
    if (chars.includes(char)) {

      const styles = getComputedStyle(document.documentElement);

      const paletteGroup = group === "misc" ? "water" : group;

      return styles.getPropertyValue(`--${paletteGroup}-1`).trim();
    }
  }

  return "#000";
}

/* ===== mouse ===== */

document.addEventListener("mouseup", () => {
  isPainting = false;
});

/* ===== render ===== */

function render() {

  editor.innerHTML = "";

  map.forEach((row, y) => {

    const rowEl = document.createElement("div");
    rowEl.className = "row";

    row.forEach((char, x) => {

      const span = document.createElement("span");
      span.className = "tile";
      span.textContent = char;
      span.style.color = getColor(char);

      span.onmousedown = (e) => {
        e.preventDefault();
        isPainting = true;
        paint(x, y);
      };

      span.onmouseenter = () => {
        if (isPainting) paint(x, y);
      };

      rowEl.appendChild(span);
    });

    editor.appendChild(rowEl);
  });
}

/* ===== painting ===== */

function randomFrom(group) {
  const arr = tileGroups[group];
  return arr[Math.floor(Math.random() * arr.length)];
}

function paint(x, y) {

  const newChar = currentBrush
    ? randomFrom(currentBrush)
    : currentTile;

  map[y][x] = newChar;

  const row = editor.children[y];
  const tile = row.children[x];

  tile.textContent = newChar;
  tile.style.color = getColor(newChar);
}

/* ===== tools ===== */

document.querySelectorAll("[data-brush]").forEach(btn => {

  let group = btn.dataset.brush;

  // replace ground brush with rocks
  if (group === "ground") group = "rocks";

  btn.onclick = () => {
    currentBrush = group;
    currentTile = null;
    highlight(btn);
  };

  const sampleChar = tileGroups[group][0];
  btn.style.color = getColor(sampleChar);
});

function highlight(active) {
  document.querySelectorAll("button").forEach(b => {
    b.classList.remove("active");
  });
  active.classList.add("active");
}

/* ===== tile list ===== */

const tileList = document.getElementById("tile-list");

Object.values(tileGroups).flat().forEach(char => {

  const btn = document.createElement("button");
  btn.textContent = char;
  btn.style.color = getColor(char);

  btn.onclick = () => {
    currentTile = char;
    currentBrush = null;
    highlight(btn);
  };

  tileList.appendChild(btn);
});

/* ===== resize ===== */

document.getElementById("resize").onclick = () => {

  const w = parseInt(document.getElementById("map-width").value);
  const h = parseInt(document.getElementById("map-height").value);

  if (!w || !h) return;

  width = w;
  height = h;

  map = createMap(width, height);
  render();
};

/* ===== export ===== */

document.getElementById("export").onclick = async () => {

  const output = map.map(r => `"${r.join("")}"`).join(",\n");
  const final = "[\n" + output + "\n]";

  console.log(final);

  try {
    await navigator.clipboard.writeText(final);
    alert("Copied to clipboard");
  } catch {
    alert("Copy failed — check console");
  }

};

/* ===== import ===== */

document.getElementById("import").onclick = () => {

  const text = document.getElementById("import-box").value;

  try {

    const parsed = eval(text);

    height = parsed.length;
    width = parsed[0].length;

    map = parsed.map(row => row.split(""));

    render();

  } catch {
    alert("Invalid map format");
  }

};

/* ===== init ===== */

render();