window.addEventListener("DOMContentLoaded", () => {

  const fragment = document.createDocumentFragment();
  const map = [
"lollnlllnlomllllllmllllllllllllllllllnllllllllllmollmjjjllll",
"nllllllllml70_24_17E7PbE3R2M77777llonllll3_1llllnllm__0L0oll",
"ollllllm77_________McMQQDPL2E3P0ML7molll_29f_llloll_Wg_F01ll",
"mllllll____GWGFFGGWc2df_1b41040b1E3emllllMHLllllll703___WfPl",
"lll5k_1__c__9FFFFWg_3E_____b04eZcO0Qablllolll0llll4L_YU__1fl",
"llllljk_____CX_4_120f_YFWW3cbcOROaQb12TlllllllllllMd2bEPe_al",
"lllll_______BC_d20Lb4dWF___!Pha4PeOh;#Pllllllnllll5WMPHDR#_o",
"nlllb_WW3__fSB_2e0cbP3c0b___Zcc2EQ___00l1llllllllll_77p77_ln",
"olOEDc_WW__CiS9G0f_WW_dDQ_F_____GFGGXXdllll7777lllll_3pa_nlo",
"llZEOZR_WWciBiSEegf_____M3PfL___FFFFFc07lllEM1327llll_p0llll",
"llb6hPNRFF6hAhOHDb0XfFYR2PPc3deFXFFFgGYWlllfL1P1R7lll4p_omll",
"nl77777ZZO__p_g_XGX_Z_WYW_YYF_qw___1ecklllNQL1e2___7o2p_noll",
"l;#___FW___ap______g_GggY____qw_4RM2dlll7_03e_PLC_1_7_pdnlln",
"c___XGWGgG__pZ_0___________a_p__ef4lll7___M3bJ0_B_____p17lll",
"__1____YF_Mcvyzxxxy_zxxyzxryxuxyM###exyzxs_M_I_6S__Q_Zp__lll",
"n_4L0_____MePMQ0_W__e___L4p__FYXI777I_e3Mp___MTOhJ__fOp__lll",
"ln0Ld_PN7___O__1dPbd_c__0Qp_YXGlljjk_00c_p9_DgXFFIFXqxw__lll",
"nn_FR1Q____!h5_fHPaEd_____pggdlllml7_0b9CiS_gFFFXW__p__G_lnl",
"o_6aZMW9_____dQqx3zzxyz__zwgWllllljk___iSSiC__J_d1_Op__P_lll",
"_YPPPOZPP4__1dbp_f0___mjjjjlllljdlQYXX_B3p1B__I_Md_Zp_6K57nl",
"_OPNHDPHhNDK_M1pL_kjklllllnlllfRe_2MQ__i_p_i_XWg__J_p__M04mn",
"__0DHHDHb77__FFp__llollRLllllllo_bed4_6h_p6h#3d___J_pa__Mc7l",
"c_____4__qxy_zxw_lllnlMEEelll7YX___gXFYg_p___Lc2e_I_p___cd3l",
"__WWFWW_Z________llllllllol7W_GgGFFXXGX_quxxyz___zyxwX_0fbQo",
"0________pXXGX_Rjjjlll7_________________pO_021___c1___332ERm",
"_1E3GYGX_pWWzxyz!!!yx___1zxy__4zxxrxys_dp7__ddMC_Q3__040Mb3l",
"D433Q7dGggG____k777_e4c1__WXG__GFgpa_p__p__2YfbKRLX_dQ1d22Pl",
"0DfLERFFFXW____lll_MRLf_YFFFFYW___p__vyzw__d__74d___2d3_deKl",
"YFWYFVYFFFFYX_alllcP3bbRDc26hh;#c_p_0_O___a____1_c_____EPcOl",
"FFFFWg_WGGFWd__lllER22P0bc1___4___p__27___WFYg___FXGgWf302hl",
"_GYY_g_WW_____6lllHdd0c___zy_fdaezts____GgGG741TDGFFFGX_1fQn",
"____OHPZPDe__6llll001__J___fQcEHT4vwzsGFFFFFX__f1________1_j",
"jbEQHRhHPbP_6lllllb4__MI__WFgGR_M3___vs_______9_4QMd__Yg0__7",
"mljjkkkkkjjlollll7___dZK!e_WGWXX2HR___p_______8X_L4__d_R_d_3",
"nlmllllllllllllll_4ffc1_________d7c___vy_zxy_ME7O#_____O5__6",
"ollllD2llllllll7____ZZaZ_kkjjjjkk__4GFFGWg_YRDhNKa5_g_6Kh5_o",
"mlo2LQ31Rllll7_YFGYgaZkjllllllllll5_1_dd104__YWFFFFFXg_6llll",
"lllRc2EQ0a_WFYXXGYG_6llllllllllllll5___2_W_gYWGXkkkkk_6lllll",
"lll3Pc3d0LfM4FYg__6lllllllmllollllll5_MLYbRLL04lllllllllloll",
"lllll2Z001kkkMLllllllllllollllllllnlllDHNPEbllllllnlllllllll"
];

  function randomWaterTile() {
    const weighted = ["l","l","l","l","l","l","m","n","o"];
    return weighted[Math.floor(Math.random() * weighted.length)];
  }

  function addWaterBorder(originalMap, thickness = 2) {
    const width = Math.max(...originalMap.map(r => r.length));
    const padded = originalMap.map(row => row.padEnd(width, "l"));

    const topBottom = Array.from({ length: thickness }, () =>
      Array.from({ length: width + thickness * 2 }, randomWaterTile).join("")
    );

    const middle = padded.map(row => {
      const side = Array.from({ length: thickness }, randomWaterTile).join("");
      return side + row + side;
    });

    return [...topBottom, ...middle, ...topBottom];
  }

  const borderedMap = addWaterBorder(map, 10);

  const tileGroups = {
    rocks: ["D","E","H","N","L","M","P","Q","R","T","V","b","c","d","e","f","0","1","2","3","4","7"],
    building: ["A","U","8"],
    buildingTop: ["B","C","i","9","S"],
    grass: ["F","G","W","X","Y","g"],
    water: ["j","k","l","m","n","o"],
    paths: ["p","q","r","s","t","u","v","w","x","y","z"],
    empty: ["_"],
    ground: ["I","6","5","J","K","O","Z","a","h","!",";","#"]
  };

  const tileCategory = {};
  Object.entries(tileGroups).forEach(([group, chars]) => {
    chars.forEach(c => tileCategory[c] = group);
  });

  const groupProperties = {
    rocks:{walkable:true,cover:false},
    building:{walkable:true,cover:false},
    buildingTop:{walkable:true,cover:true},
    grass:{walkable:true,cover:false},
    paths:{walkable:true,cover:false},
    empty:{walkable:true,cover:false},
    ground:{walkable:true,cover:false},
    water:{walkable:false,cover:false}
  };

  const linkTiles = {
    A:{description:"Get a load of this guy!",url:"about.html"},
    U:{description:"Awesome library of cool and epic works",url:"archives.html"},
    8:{description:"Wow, the stuff in here is pretty comprehensive. I wouldn't go in if I were you... unless... you're hiring, come on in...",url:"cv.html"},
    V:{description:"hey, psst, congrats on finding me. i love you."}
  };

  const coordinateCaptions = {
    "51,30": "thanks for going through my gate. I spent a lot of time working on this.",
    "34,42": "hm... a sword... in a stone...",
    "52,12": "hey! what! how'd you get in here?! get out, you're not supposed to be here.",
    "27,35": "just pretend this is a bridge.",
    "45,19": "you encountered a wild Pikachu!.",
    "57,27": "A couple people used to live here... now its a ghost town...",
    "14,48": "i bet the view here is really pretty, too bad i can't see."
  };

  const world = document.getElementById("world");
  const caption = document.getElementById("caption");

  let player = { x: 44, y: 24 };
  const grid = [];

  let camX = 0, camY = 0, targetX = 0, targetY = 0;
  const cameraSpeed = 0.15;

  const viewport = document.getElementById("viewport");

const buildingLabels = [
  { x: 22, y: 17, text: "About" },
  { x: 64, y: 13, text: "Archives" },
  { x: 57, y: 42, text: "CV" }
];

const labelElements = [];

function createLabels() {
  buildingLabels.forEach(label => {

    const el = document.createElement("div");
    el.className = "map-label";

    const text = document.createElement("span");
    text.textContent = label.text;

    const arrow = document.createElement("span");
    arrow.className = "label-arrow";
    arrow.textContent = ">";

    el.appendChild(arrow);
    el.appendChild(text);

    viewport.appendChild(el);

    label.el = el;
    label.arrow = arrow;

    labelElements.push(label);
  });
}

  const paletteCache = {};
  function getPalette(group) {
    if (paletteCache[group]) return paletteCache[group];
    const styles = getComputedStyle(document.documentElement);
    const palette = [];
    for (let i = 1;; i++) {
      const val = styles.getPropertyValue(`--${group}-${i}`).trim();
      if (!val) break;
      palette.push(val);
    }
    return paletteCache[group] = palette.length ? palette : ["#000"];
  }

  borderedMap.forEach((row, y) => {

    const rowEl = document.createElement("div");
    grid[y] = [];

    // ONE click listener per row
    rowEl.addEventListener("click", e => {

      const tile = e.target;
      if (!tile.classList.contains("tile")) return;

      const x = [...tile.parentNode.children].indexOf(tile);
      const y = [...world.children].indexOf(tile.parentNode);

      movePlayerIfAllowed(x, y);

    });

    [...row].forEach((char, x) => {

      const span = document.createElement("span");
      span.className = `tile ${tileCategory[char] || "empty"}`;
      span.textContent = char;

      const palette = getPalette(tileCategory[char] || "empty");
      const color = palette[Math.floor(Math.random() * palette.length)];
      span.style.color = color;
      span.dataset.baseColor = color;

      if (linkTiles[char]) {
        span.classList.add("interactive");

        span.addEventListener("mouseenter", () => {
          caption.innerHTML = `<span class="player-symbol">${char}</span> — ${linkTiles[char].description}`;
        });

        span.addEventListener("mouseleave", () => {
          caption.textContent = "";
        });
      }

      grid[y][x] = span;
      rowEl.appendChild(span);

    });

    fragment.appendChild(rowEl);

  });
  world.appendChild(fragment);

  function movePlayerIfAllowed(x,y){
    if(y<0||y>=borderedMap.length) return;
    if(x<0||x>=borderedMap[y].length) return;
    const category = tileCategory[borderedMap[y][x]] || "empty";
    if(!(groupProperties[category]||groupProperties.empty).walkable) return;
    movePlayerTo(x,y);
  }


  function movePlayerTo(x,y){
    const oldTile = grid[player.y][player.x];
    oldTile.textContent = borderedMap[player.y][player.x];
    oldTile.classList.remove("player");
    oldTile.style.color = oldTile.dataset.baseColor;

    player = {x,y};

    console.log("player:", x, y, "| raw:", x-10, y-10);

    const newTile = grid[y][x];
    const category = tileCategory[borderedMap[y][x]] || "empty";

    if(!(groupProperties[category]||groupProperties.empty).cover){
      newTile.textContent = "@";
      newTile.classList.add("player");
      newTile.style.color = "#000";
    }

    centerCamera();
    const char = borderedMap[y][x];
    const key = `${x},${y}`;

    // 1. coordinate-based captions (priority)
    if (coordinateCaptions[key]) {
      caption.textContent = coordinateCaptions[key];
    }

    // 2. tile-based captions (fallback)
    else if (linkTiles[char]) {
      caption.innerHTML = `<span class="player-symbol">${char}</span> — ${linkTiles[char].description}`;
    }

    // 3. nothing
    else {
      caption.textContent = "";
    }
  }

  function centerCamera(){
    const viewport = document.getElementById("viewport");
    const rect = grid[0][0].offsetWidth ? {width:grid[0][0].offsetWidth, height:grid[0][0].offsetHeight} : grid[0][0].getBoundingClientRect();
    targetX = viewport.clientWidth/2 - player.x*rect.width - rect.width/2;
    targetY = viewport.clientHeight/2 - player.y*rect.height - rect.height/2;
  }

  createLabels();

  function updateCamera(){
  camX += (targetX-camX)*cameraSpeed;
  camY += (targetY-camY)*cameraSpeed;

  world.style.transform = `translate(${camX}px,${camY}px)`;

  updateLabels();

  requestAnimationFrame(updateCamera);
}

function updateLabels(){

  const rect = grid[0][0].getBoundingClientRect();
  const tileW = rect.width;
  const tileH = rect.height;

  const vw = viewport.clientWidth;
  const vh = viewport.clientHeight;

  const centerX = vw / 2;
  const centerY = vh / 2;

  const placed = [];

 
  const captionHeight = document.getElementById("caption").offsetHeight;

  labelElements.forEach(label => {

    const worldX = label.x * tileW + camX + tileW/2;
    const worldY = label.y * tileH + camY + tileH/2;

    let x = worldX;
    let y = worldY;

    let offscreen = false;

    const margin = 8;
    const width = 140;
    const height = 22;

    // LEFT / RIGHT (unchanged)
    if (x < margin) { x = margin; offscreen = true; }
    if (x > vw - width - margin) { x = vw - width - margin; offscreen = true; }

    // TOP (unchanged)
    if (y < margin) { y = margin; offscreen = true; }

    //BOTTOM FIX (avoid caption area)
    const maxY = vh - captionHeight - height - margin;
    if (y > maxY) { y = maxY; offscreen = true; }

    /* simple collision avoidance */
    for (let other of placed) {
      if (
        x < other.x + width &&
        x + width > other.x &&
        y < other.y + height &&
        y + height > other.y
      ) {
        y = other.y + height + 4;
      }
    }

    placed.push({x,y});

    label.el.style.transform = `translate(${x}px,${y}px)`;

    if (offscreen) {

      const dx = worldX - centerX;
      const dy = worldY - centerY;

      const angle = Math.atan2(dy, dx) * 180 / Math.PI;

      label.arrow.style.display = "inline-block";
      label.arrow.style.transform = `rotate(${angle}deg)`;

    } else {

      label.arrow.style.display = "none";

    }

  });
}

  movePlayerTo(player.x, player.y);
  camX = targetX;
  camY = targetY;
  world.style.transform = `translate(${camX}px,${camY}px)`;
  updateCamera();

  document.addEventListener("keydown", e=>{
    const keys = {w:[0,-1],ArrowUp:[0,-1],s:[0,1],ArrowDown:[0,1],a:[-1,0],ArrowLeft:[-1,0],d:[1,0],ArrowRight:[1,0]};
    if(e.key==="Enter"){ linkTiles[borderedMap[player.y][player.x]]?.url && (window.location.href = linkTiles[borderedMap[player.y][player.x]].url); return; }
    if(!keys[e.key]) return;
    const [dx,dy]=keys[e.key];
    movePlayerIfAllowed(player.x+dx,player.y+dy);
    e.preventDefault();
  });

  window.addEventListener("resize", centerCamera);

});