const db = new Map([
    ["a", "https://img.pokemondb.net/sprites/emerald/normal/unown-a.png"],
    ["b", "https://img.pokemondb.net/sprites/emerald/normal/unown-b.png"],
    ["c", "https://img.pokemondb.net/sprites/emerald/normal/unown-c.png"],
    ["d", "https://img.pokemondb.net/sprites/emerald/normal/unown-d.png"],
    ["e", "https://img.pokemondb.net/sprites/emerald/normal/unown-e.png"],
    ["f", "https://img.pokemondb.net/sprites/emerald/normal/unown-f.png"],
    ["g", "https://img.pokemondb.net/sprites/emerald/normal/unown-g.png"],
    ["h", "https://img.pokemondb.net/sprites/emerald/normal/unown-h.png"],
    ["i", "https://img.pokemondb.net/sprites/emerald/normal/unown-i.png"],
    ["j", "https://img.pokemondb.net/sprites/emerald/normal/unown-j.png"],
    ["k", "https://img.pokemondb.net/sprites/emerald/normal/unown-k.png"],
    ["l", "https://img.pokemondb.net/sprites/emerald/normal/unown-l.png"],
    ["m", "https://img.pokemondb.net/sprites/emerald/normal/unown-m.png"],
    ["n", "https://img.pokemondb.net/sprites/emerald/normal/unown-n.png"],
    ["o", "https://img.pokemondb.net/sprites/emerald/normal/unown-o.png"],
    ["p", "https://img.pokemondb.net/sprites/emerald/normal/unown-p.png"],
    ["q", "https://img.pokemondb.net/sprites/emerald/normal/unown-q.png"],
    ["r", "https://img.pokemondb.net/sprites/emerald/normal/unown-r.png"],
    ["s", "https://img.pokemondb.net/sprites/emerald/normal/unown-s.png"],
    ["t", "https://img.pokemondb.net/sprites/emerald/normal/unown-t.png"],
    ["u", "https://img.pokemondb.net/sprites/emerald/normal/unown-u.png"],
    ["v", "https://img.pokemondb.net/sprites/emerald/normal/unown-v.png"],
    ["w", "https://img.pokemondb.net/sprites/emerald/normal/unown-w.png"],
    ["x", "https://img.pokemondb.net/sprites/emerald/normal/unown-x.png"],
    ["y", "https://img.pokemondb.net/sprites/emerald/normal/unown-y.png"],
    ["z", "https://img.pokemondb.net/sprites/emerald/normal/unown-z.png"],
    ["!", "https://img.pokemondb.net/sprites/emerald/normal/unown-em.png"],
    ["?", "https://img.pokemondb.net/sprites/emerald/normal/unown-qm.png"],
    [" ", "img/space-bar.png"]
]);


// show all images inside div first
var selection_box = document.getElementById("select-box");
var text_box = document.getElementById("input-box");
for (const [key,value] of db) {
    let new_img = document.createElement("img");
    new_img.src = value;
    new_img.alt = key;
    new_img.title = `Letter ${key.toUpperCase()}`;
    new_img.classList.add("unown-letter");

    if (key == " ") { new_img.title = "Space Bar"}

    selection_box.append(new_img);
}

// click event
var letters = document.getElementsByClassName("unown-letter");
for (var i = 0; i < letters.length; i++) {
    letters[i].addEventListener("click", function () {
        text_box.innerHTML = text_box.innerHTML + this.alt;
    });
}
