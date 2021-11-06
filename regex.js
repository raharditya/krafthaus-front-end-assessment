const strings = [
  "Polyester 180x185inch Shower Curtain Charcoal",
  "Poncho Pal 60x120cm Dexter Dinosaur",
  "PVC 1x2m Bath Mat Blue",
  "Stella 100x140cm Floor Rug",
];

const regex = /((?:[a-zA-Z]+\s)+)(\d+x\d+)([a-z]+)/;

let extracted = [];
strings.forEach((string) => {
  const matched = string.match(regex);
  extracted.push({
    name: matched[1].trim(),
    size: matched[2],
    unit: matched[3],
  });
});

console.log(extracted);
