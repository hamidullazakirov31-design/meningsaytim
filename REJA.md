# Shaxsiy veb-sayt — Loyiha rejasi

> Buxgalter va moliyachi uchun shaxsiy veb-sayt. O'zbek tilida, rasmiy va
> ishonchli uslubda, telefon va kompyuterda birdek ochiladigan bitta havola.

---

## 1. Umumiy qaror (sizning tanlovlaringiz asosida)

| Nuqta | Qaror |
|---|---|
| **Soha** | Buxgalter va moliyachi |
| **Til** | Faqat o'zbek tili |
| **Texnologiya** | Oddiy statik sayt — HTML + CSS + minimal JavaScript |
| **Dizayn** | Rasmiy va ishonchli: ko'k/kulrang tonlar, toza, professional |
| **Blog / Aloqa** | Statik maqolalar + telefon / email / Telegram havolalari |
| **Qo'shimcha bloklar** | Statistika (raqamlarda yutuqlar) + yuklab olinadigan CV (PDF) |
| **Joylashtirish** | Bitta ommaviy havola — istalgan odam telefon yoki kompyuterda ocha oladi |

**Muhim:** sayt **responsive** (moslashuvchan) bo'ladi — bitta havola ham
telefonda, ham planshet va kompyuterda chiroyli ochiladi.

---

## 2. Saytning tuzilishi (bo'limlar)

Sayt **bitta sahifali** (single-page) qilib quriladi — yuqoridagi menyu
orqali har bir bo'limga silliq o'tiladi. Bu "bitta havola" talabiga eng mos
yechim. Blog maqolalari esa alohida sahifalarda ochiladi.

1. **Bosh qism (Hero)** — ism-familiya, kasb ("Buxgalter · Moliyachi"), qisqa
   shior, ikkita tugma: *Bog'lanish* va *CV yuklab olish*.
2. **Men haqimda** — surat, qisqa biografiya, ta'lim, sertifikat/diplomlar.
3. **Statistika** — raqamlarda yutuqlar (masalan: 10+ yil tajriba, 50+ mijoz,
   100+ hisobot). E'tiborni tortadigan blok.
4. **Mehnat faoliyatim** — vaqt chizig'i (timeline): ish joylari, yillar,
   lavozimlar va vazifalar.
5. **Xizmatlar** — kartalar ko'rinishida (masalan: buxgalteriya hisobi,
   soliq hisobotlari, moliyaviy tahlil, konsalting, 1C yuritish).
6. **Loyihalarim** — muhim ishlar/keyslar kartalari (nima qilingan, natija).
7. **Blog** — so'nggi maqolalar kartalari; har biri alohida sahifada ochiladi.
8. **Bog'lanish** — telefon, email, Telegram, manzil, ijtimoiy tarmoqlar.
9. **Footer (pastki qism)** — mualliflik huquqi, tezkor havolalar.

---

## 3. Fayllar tuzilishi

```
meningsaytim/
├── index.html            # asosiy sahifa (barcha bo'limlar)
├── css/
│   └── style.css         # dizayn tizimi va barcha uslublar
├── js/
│   └── main.js           # menyu, silliq scroll, statistika animatsiyasi
├── blog/
│   ├── index.html        # (ixtiyoriy) barcha maqolalar ro'yxati
│   └── maqola-1.html     # har bir maqola alohida sahifa
├── assets/
│   ├── img/              # suratlar, ikonkalar, favicon
│   └── cv.pdf            # yuklab olinadigan rezyume
└── README.md
```

---

## 4. Dizayn tizimi (rasmiy va ishonchli)

- **Ranglar:** asosiy — to'q ko'k (ishonch), yordamchi — kulrang/oq (tozalik),
  urg'u — nafis oltin yoki och ko'k.
- **Shrift:** o'qishga qulay, professional (masalan Inter / Manrope).
- **Uslub:** ko'p bo'sh joy, aniq sarlavhalar, yumshoq soyali kartalar,
  yengil animatsiyalar (scrollda paydo bo'lish, statistika sanoqlari).
- **Responsive:** mobil, planshet, kompyuter uchun uch bosqichli moslashuv.

---

## 5. Bosqichlar (ish rejasi)

- **1-bosqich — Poydevor:** HTML skeleti, dizayn tizimi (ranglar, shriftlar),
  menyu va footer.
- **2-bosqich — Bo'limlar:** Hero, Men haqimda, Statistika, Mehnat faoliyati,
  Xizmatlar, Loyihalar bo'limlarini yasash.
- **3-bosqich — Blog:** blog bo'limi va namuna maqola sahifasi.
- **4-bosqich — Aloqa va sayqal:** bog'lanish bloki, responsive tekshiruv,
  SEO/meta teglar, favicon, tezlik.
- **5-bosqich — Joylashtirish:** GitHub Pages orqali bitta ommaviy havola
  chiqarish (keyinchalik shaxsiy domen ulash mumkin).

---

## 6. Sizdan kerak bo'ladigan ma'lumotlar

Saytni haqiqiy mazmun bilan to'ldirish uchun quyidagilar kerak (dastlab
namuna matn bilan tayyorlab beraman, keyin almashtiramiz):

- [ ] Ism-familiya va lavozim (masalan "Bosh buxgalter")
- [ ] Surat (professional foto)
- [ ] Qisqa biografiya (2–4 gap)
- [ ] Ta'lim va sertifikatlar ro'yxati
- [ ] Ish tajribasi: joy, yillar, lavozim, vazifalar
- [ ] Xizmatlar ro'yxati (nomlari va qisqa tavsifi)
- [ ] Loyihalar/keyslar (2–5 ta)
- [ ] Statistika raqamlari (yil, mijoz, loyiha soni)
- [ ] Aloqa: telefon, email, Telegram, manzil, ijtimoiy tarmoqlar
- [ ] CV fayli (PDF) — bo'lmasa, ma'lumot asosida tayyorlab beraman

---

## Keyingi qadam

Ushbu reja ma'qul bo'lsa, **1-bosqich**dan boshlaymiz: sayt skeleti va
dizayn tizimini yasab, namuna mazmun bilan to'ldirib beraman. Siz haqiqiy
ma'lumotlaringizni yuborsangiz, ularni joylashtiramiz.
