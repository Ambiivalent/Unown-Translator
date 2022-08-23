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
    ["Missing", "https://img.pokemondb.net/sprites/emerald/shiny/unown-qm.png"]
]);

function convertText() {
    if (document.getElementById("input-box").value) {
        let user_text = document.getElementById("input-box").value.toLowerCase();
        let image_area = document.getElementById("image-box");
        image_area.classList.add("image-box");
        image_area.innerHTML = "";
        for (var i = 0; i < user_text.length; i++) {
            let currentCharacter = user_text.charAt(i);
            if (db.has(currentCharacter)) {
                let character = document.createElement('img');
                character.src = db.get(currentCharacter);
                image_area.append(character);
            }
            else {
                let character = document.createElement('img');
                character.src = db.get("Missing");
                image_area.append(character);
            }
        }

        background_checkbox = document.getElementById("bckg-cb");
        if (background_checkbox.checked) {
            image_area.style.backgroundImage = "url(img/tile.png)";
            image_area.style.backgroundRepeat = "repeat";
        }
        else {
            image_area.style.backgroundImage = "";
            image_area.style.backgroundRepeat = "";
        }
    }
    else {
        alert("Nothing to convert!");
    }
}

document.getElementById('conversion-btn').addEventListener('click', convertText);

