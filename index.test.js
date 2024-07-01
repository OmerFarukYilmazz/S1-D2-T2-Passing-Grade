const calFinalNote = require("./index.js");

describe("calFinalNote fonksiyonu", () => {
  test("Vize ve final notları normal değerlerdeyken doğru sonucu döndürüyor mu?", () => {
    expect(calFinalNote(80, 90, 85)).toBeCloseTo(85);
    expect(calFinalNote(60, 70, 80)).toBeCloseTo(75.5);
    expect(calFinalNote(50, 50, 50)).toBeCloseTo(50);
    expect(calFinalNote(100, 85, 90)).toBeCloseTo(90.75);
  });

  test("Vize ve final notları sıfır olduğunda sonuç sıfır mı dönüyor?", () => {
    expect(calFinalNote(0, 0, 0)).toBe(0);
  });

  test("Vize ve final notları tam puan olduğunda sonuç yüz mü dönüyor?", () => {
    expect(calFinalNote(100, 100, 100)).toBe(100);
  });
});