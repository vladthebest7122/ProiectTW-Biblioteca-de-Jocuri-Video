// Validare pe server: datele de la client nu sunt niciodată de încredere.
export const PLATFORME = ["pc", "playstation", "xbox", "switch"];
const TITLU_MAX = 100;

// partial = true pentru PATCH (se verifică doar câmpurile trimise)
export function valideazaJoc(body, { partial = false } = {}) {
  const erori = [];
  const date = {};

  if (!partial || body.titlu !== undefined) {
    if (typeof body.titlu !== "string" || body.titlu.trim() === "") {
      erori.push("titlu este obligatoriu");
    } else if (body.titlu.trim().length > TITLU_MAX) {
      erori.push(`titlu are maximum ${TITLU_MAX} de caractere`);
    } else {
      date.titlu = body.titlu.trim();
    }
  }

  if (!partial || body.platforma !== undefined) {
    const p = body.platforma ?? "pc";
    if (!PLATFORME.includes(p)) {
      erori.push(`platforma trebuie să fie una din: ${PLATFORME.join(", ")}`);
    } else {
      date.platforma = p;
    }
  }

  if (body.terminat !== undefined) {
    if (typeof body.terminat !== "boolean") {
      erori.push("terminat trebuie să fie true sau false");
    } else {
      date.terminat = body.terminat;
    }
  } else if (!partial) {
    date.terminat = false;
  }

  if (body.imagine !== undefined) {
    if (typeof body.imagine !== "string") {
      erori.push("imagine trebuie să fie text");
    } else {
      date.imagine = body.imagine.trim() || "/default-game.jpg";
    }
  } else if (!partial) {
    date.imagine = "/default-game.jpg";
  }

  return { erori, date };
}

// Id-urile din adresă vin ca text; se acceptă doar numere întregi pozitive
export function parseId(value) {
  const id = Number(value);
  return Number.isInteger(id) && id > 0 ? id : null;
}