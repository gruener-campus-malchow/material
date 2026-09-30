const playground = { element: document.getElementById("playground") };
playground.rect = playground.element.getBoundingClientRect();

function createBoundary() {
    const e = document.createElement("div");
    e.className = "boundary";

    const cx = (Math.random() * 0.2 + 0.4) * playground.rect.width;
    const cy = (Math.random() * 0.2 + 0.4) * playground.rect.height;

    const radius = Math.min(cx, cy, playground.rect.width - cx, playground.rect.height - cy);
    const size = radius * Math.sqrt(2) * (Math.random() * 0.5 + 0.5);

    const angle = Math.random() * 2 * Math.PI;

    e.style.left = cx - size / 2 + "px";
    e.style.top = cy - size / 2 + "px";
    e.style.width = size + "px";
    e.style.rotate = angle + "rad";

    playground.element.appendChild(e);
    return { element: e, rotation: angle, size, cx, cy };
}

function createMarker({ x, y }) {
    const e = document.createElement("div");
    e.className = "marker";
    e.style.left = x + "px";
    e.style.top = y + "px";

    playground.element.appendChild(e);
    return { element: e, x, y };
}

function createExplorer(boundary) {
    const e = document.createElement("div");
    e.className = "explorer";

    const rect = boundary.element.getBoundingClientRect();
    const space = ((rect.width / 2) * Math.sqrt(2) / 2) * Math.sqrt(2);
    const offset = (rect.width - space) / 2;

    const x = (rect.x - playground.rect.x) + offset + Math.random() * 0.8 * space;
    const y = (rect.y - playground.rect.y) + offset + Math.random() * 0.8 * space;
    const size = 0.2 * space;
    const r = size / 2;

    e.style.left = x + "px";
    e.style.top = y + "px";
    e.style.width = size + "px";

    playground.element.appendChild(e);
    return { element: e, cx: x + r, cy: y + r, r, size, v: { x: 0, y: -1 }, a: 0 };
}

function createGuess() {
    const e = document.createElement("div");
    e.className = "guess";

    playground.element.appendChild(e);
    return { element: e }
}

function updateGuess(guess, points) {
    if (points.length < 3) return;

    const { cx, cy, s, a } = fitSquare(points);
    guess.element.style.left = cx - s / 2 + "px";
    guess.element.style.top = cy - s / 2 + "px";
    guess.element.style.rotate = a + "rad";
    guess.element.style.width = s + "px";
}

function fitSquare(points) {
    let best = { err: Infinity };
    // Test every angle
    for (let d = 0; d < 360; d++) {
        const a = d * Math.PI / 180;

        // Rotate points by angle
        const rotatedPoints = points.map(p => ({
            x: Math.cos(-a) * p.x - Math.sin(-a) * p.y,
            y: Math.sin(-a) * p.x + Math.cos(-a) * p.y
        }));

        // Compute bounding box
        const xmin = rotatedPoints.reduce((x, p) => Math.min(x, p.x), Infinity);
        const xmax = rotatedPoints.reduce((x, p) => Math.max(x, p.x), -Infinity);
        const ymin = rotatedPoints.reduce((y, p) => Math.min(y, p.y), Infinity);
        const ymax = rotatedPoints.reduce((y, p) => Math.max(y, p.y), -Infinity);

        const s = Math.max(xmax - xmin, ymax - ymin);

        // Compute offset for the shorter side (offsetX or offsetY will be 0)
        const offsetX = (s - (xmax - xmin)) / 2;
        const offsetY = (s - (ymax - ymin)) / 2;

        // Shift bounding box by offset to the furthermost positions
        for (let i of [1, -1]) {
            const rcx = (xmin + xmax) / 2 + offsetX * i;
            const rcy = (ymin + ymax) / 2 + offsetY * i;

            // Minimize squared distances to square border
            const err = rotatedPoints.reduce((sum, p) => {
                const u = Math.abs(p.x - rcx);
                const v = Math.abs(p.y - rcy);

                const d = (Math.max(u, v) <= s / 2) ?
                    s / 2 - Math.max(u, v) :
                    Math.sqrt(Math.max(u - s / 2, 0) ** 2 + Math.max(v - s / 2, 0) ** 2);

                return sum + d ** 2;
            }, 0);

            if (err < best.err) {
                // Rotate center coords back to actual position
                const cx = Math.cos(a) * rcx - Math.sin(a) * rcy;
                const cy = Math.sin(a) * rcx + Math.cos(a) * rcy;
                best = { cx, cy, s, a, err };
            }
        }
    }

    return best;
}

function detectEdge(explorer, boundary) {
    const { cx, cy, r, v } = explorer;

    const left = { x: -v.y, y: v.x };
    const right = { x: v.y, y: -v.x };

    // Get current topleft and topright point
    const lx = cx + (v.x + left.x) * r;
    const ly = cy + (v.y + left.y) * r;
    const rx = cx + (v.x + right.x) * r;
    const ry = cy + (v.y + right.y) * r;

    // Transform into boundary aligned coords
    const a = -boundary.rotation;
    const lbx = Math.cos(a) * (lx - boundary.cx) - Math.sin(a) * (ly - boundary.cy);
    const lby = Math.sin(a) * (lx - boundary.cx) + Math.cos(a) * (ly - boundary.cy);
    const rbx = Math.cos(a) * (rx - boundary.cx) - Math.sin(a) * (ry - boundary.cy);
    const rby = Math.sin(a) * (rx - boundary.cx) + Math.cos(a) * (ry - boundary.cy);

    const br = boundary.size / 2;
    if (!(lbx > -br && lbx < br && lby > -br && lby < br))
        return { x: lx, y: ly, o: -1 };

    if (!(rbx > -br && rbx < br && rby > -br && rby < br))
        return { x: rx, y: ry, o: 1 };
}

function forward(s) {
    const { cx: x0, cy: y0, r, v } = s.explorer;
    const x1 = x0 + v.x;
    const y1 = y0 + v.y;

    s.explorer.element.style.left = x1 - r + "px";
    s.explorer.element.style.top = y1 - r + "px";
    s.explorer.cx = x1;
    s.explorer.cy = y1;

    // If there is a edge: save point, update guess and proceed to turn
    const edge = detectEdge(s.explorer, s.boundary);
    if (edge) {
        s.edges.push(edge);
        createMarker(edge);

        updateGuess(s.guess, s.edges);

        return turn;
    }
    // Otherwise: keep going forward
    return forward;
}

function turn(s) {
    // Turn away from the last edge (e.g. turn left if edge was right)
    const a = (s.edges.at(-1).o / 180) * Math.PI;

    const { x: vx, y: vy } = s.explorer.v
    const v = {
        x: Math.cos(a) * vx - Math.sin(a) * vy,
        y: Math.sin(a) * vx + Math.cos(a) * vy
    };

    s.explorer.a = (s.explorer.a + a) % (2 * Math.PI)
    s.explorer.v = v;
    s.explorer.element.style.rotate = s.explorer.a + "rad";


    // Turn while there is a edge
    if (detectEdge(s.explorer, s.boundary)) {
        s.turnedDeg = 0;
        s.targetDeg = undefined;
        return turn;
    }

    // If there is no edge turn an additional ~45 deg
    s.turnedDeg += 1;
    s.targetDeg ??= 45 + Math.random() * 15;
    if (s.turnedDeg < s.targetDeg)
        return turn

    // After turning ~45 deg after a edge (without detecting an egde again): proceed to go forward
    s.turnedDeg = 0;
    s.targetDeg = undefined;
    return forward;
}

let s;
let next;
let paused = true;
function init() {
    const boundary = createBoundary();
    const explorer = createExplorer(boundary);
    const guess = createGuess();
    s = { boundary, explorer, guess, edges: [], turnedDeg: 0 };
    next = forward;
}

function reset() {
    pause();
    setTimeout(() => {
        playground.element.replaceChildren();
        init();
    }, 20);
}

function step() {
    if (!next || paused) return

    requestAnimationFrame(() => {
        next = next(s);
        setTimeout(step, 8);
    })
}

function pause() { paused = true; }
function play() {
    if (paused) {
        paused = false;
        step();
    }
}

document.querySelector("#play").onclick = () => play();
document.querySelector("#pause").onclick = () => pause();
document.querySelector("#reset").onclick = () => reset();

init();