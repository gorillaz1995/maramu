# Maramureș photos — credits and usage

These images were chosen for the Pensiune website in Sighetu Marmației and saved as mobile-first, web-optimized files.

## License

All photos are under the [Unsplash License](https://unsplash.com/license) (free). None are Unsplash+ / premium.
Attribution is appreciated but not required. When you hotlink instead of using the local files, use the `images.unsplash.com` URLs (not the unsplash.com photo page URLs).

## Files in this folder

For each photo there are three versions:

- `name-828.webp` — mobile, about 828px wide, WebP, under ~150KB, metadata stripped
- `name-1600.webp` — desktop, about 1600px wide, WebP, quality ~78
- `name-1600.jpg` — JPEG fallback at the same 1600px width

Three hero images also have a 4:5 portrait crop for mobile:

- `maramures-wooden-gate-1-portrait-828.webp`
- `maramures-traditional-house-garden-1-portrait-828.webp`
- `maramures-barsana-monastery-1-portrait-828.webp`

About 90% of visitors are on mobile, so the default `<source>` below serves the 828px (or portrait) WebP first.

## Example `<picture>` / `srcset`

Hero (uses the 4:5 crop on small screens):

```html
<picture>
  <source
    type="image/webp"
    media="(max-width: 767px)"
    srcset="/images/maramures/maramures-wooden-gate-1-portrait-828.webp"
  />
  <source
    type="image/webp"
    srcset="/images/maramures/maramures-wooden-gate-1-828.webp 828w,
            /images/maramures/maramures-wooden-gate-1-1600.webp 1600w"
    sizes="100vw"
  />
  <img
    src="/images/maramures/maramures-wooden-gate-1-1600.jpg"
    alt="Traditional carved wooden gate in Maramureș"
    width="1600"
    height="1066"
    decoding="async"
    fetchpriority="high"
  />
</picture>
```

Regular image (lazy-loaded):

```html
<picture>
  <source
    type="image/webp"
    srcset="/images/maramures/maramures-sapanta-merry-cemetery-1-828.webp 828w,
            /images/maramures/maramures-sapanta-merry-cemetery-1-1600.webp 1600w"
    sizes="(max-width: 767px) 100vw, 1600px"
  />
  <img
    src="/images/maramures/maramures-sapanta-merry-cemetery-1-1600.jpg"
    alt="Hand-painted wooden crosses at the Merry Cemetery in Săpânța"
    width="1600"
    height="2134"
    loading="lazy"
    decoding="async"
  />
</picture>
```

Or hotlink a remote Unsplash file (same license):

```html
<img
  src="https://images.unsplash.com/photo-1727409492345-3c19a2ef2e2c?w=828&q=80&fm=webp"
  srcset="https://images.unsplash.com/photo-1727409492345-3c19a2ef2e2c?w=828&q=80&fm=webp 828w,
          https://images.unsplash.com/photo-1727409492345-3c19a2ef2e2c?w=1600&q=80&fm=webp 1600w"
  sizes="100vw"
  alt="Traditional carved wooden gate in Maramureș"
/>
```

## Photo list

### `maramures-wooden-gate-1`

Traditional carved Maramureș wooden gate (poartă) with a shingle roof, in a village meadow.

- Photographer: [Adrian Botica](https://unsplash.com/@adi_botica)
- Unsplash page: https://unsplash.com/photos/a-painting-of-a-wooden-structure-in-a-field-YHl4dw96nhc
- Direct CDN: https://images.unsplash.com/photo-1727409492345-3c19a2ef2e2c?w=1600&q=80&fm=jpg
- Mobile WebP: `maramures-wooden-gate-1-828.webp` (828×552, 135 KB)
- Desktop WebP: `maramures-wooden-gate-1-1600.webp` (1600×1066, 343 KB)
- JPEG fallback: `maramures-wooden-gate-1-1600.jpg` (1600×1066, 500 KB)
- Mobile 4:5 crop: `maramures-wooden-gate-1-portrait-828.webp` (828×1035, 146 KB)

### `maramures-traditional-house-garden-1`

A large traditional house with a steep shingle roof and a colorful flower garden in front.

- Photographer: [Adrian Botica](https://unsplash.com/@adi_botica)
- Unsplash page: https://unsplash.com/photos/a-house-with-a-thatched-roof-surrounded-by-flowers-2dLjE1wfB9M
- Direct CDN: https://images.unsplash.com/photo-1727409490137-e44fcf2e0038?w=1600&q=80&fm=jpg
- Mobile WebP: `maramures-traditional-house-garden-1-828.webp` (828×1242, 145 KB)
- Desktop WebP: `maramures-traditional-house-garden-1-1600.webp` (1600×2400, 641 KB)
- JPEG fallback: `maramures-traditional-house-garden-1-1600.jpg` (1600×2400, 1043 KB)
- Mobile 4:5 crop: `maramures-traditional-house-garden-1-portrait-828.webp` (828×1035, 141 KB)

### `maramures-barsana-monastery-1`

Twin wooden steeples of Bârsana Monastery, with yellow flowers in the foreground.

- Photographer: [Adrian Botica](https://unsplash.com/@adi_botica)
- Unsplash page: https://unsplash.com/photos/a-church-with-two-steeples-and-a-clock-tower-WXg7NYGlDwk
- Direct CDN: https://images.unsplash.com/photo-1727409491623-37dc2662cd37?w=1600&q=80&fm=jpg
- Mobile WebP: `maramures-barsana-monastery-1-828.webp` (828×1242, 103 KB)
- Desktop WebP: `maramures-barsana-monastery-1-1600.webp` (1600×2400, 328 KB)
- JPEG fallback: `maramures-barsana-monastery-1-1600.jpg` (1600×2400, 526 KB)
- Mobile 4:5 crop: `maramures-barsana-monastery-1-portrait-828.webp` (828×1035, 95 KB)

### `maramures-mocanita-steam-train-1`

The Mocănița steam locomotive coming down the forested Vaser Valley line.

- Photographer: [Adrian Botica](https://unsplash.com/@adi_botica)
- Unsplash page: https://unsplash.com/photos/a-train-traveling-through-a-lush-green-forest-7NGYKxlBGf8
- Direct CDN: https://images.unsplash.com/photo-1727409491394-7e90350a5ff9?w=1600&q=80&fm=jpg
- Mobile WebP: `maramures-mocanita-steam-train-1-828.webp` (828×1242, 117 KB)
- Desktop WebP: `maramures-mocanita-steam-train-1-1600.webp` (1600×2400, 284 KB)
- JPEG fallback: `maramures-mocanita-steam-train-1-1600.jpg` (1600×2400, 587 KB)

### `maramures-haystacks-summer-1`

Traditional conical haystacks (clăi de fân) on a green hillside under a wide summer sky.

- Photographer: [Adrian Botica](https://unsplash.com/@adi_botica)
- Unsplash page: https://unsplash.com/photos/a-grassy-field-with-hay-bales-in-the-foreground-f5AVAMFX188
- Direct CDN: https://images.unsplash.com/photo-1727409490853-9403be5259d6?w=1600&q=80&fm=jpg
- Mobile WebP: `maramures-haystacks-summer-1-828.webp` (828×1242, 104 KB)
- Desktop WebP: `maramures-haystacks-summer-1-1600.webp` (1600×2400, 332 KB)
- JPEG fallback: `maramures-haystacks-summer-1-1600.jpg` (1600×2400, 582 KB)

### `maramures-sapanta-merry-cemetery-1`

Hand-painted wooden crosses at the Merry Cemetery (Cimitirul Vesel) in Săpânța.

- Photographer: [Adrian Botica](https://unsplash.com/@adi_botica)
- Unsplash page: https://unsplash.com/photos/a-group-of-colorfully-decorated-buildings-with-a-fence-in-front-of-them-ixCk-AQlPrc
- Direct CDN: https://images.unsplash.com/photo-1727409491471-43d7f1683321?w=1600&q=80&fm=jpg
- Mobile WebP: `maramures-sapanta-merry-cemetery-1-828.webp` (828×1104, 132 KB)
- Desktop WebP: `maramures-sapanta-merry-cemetery-1-1600.webp` (1600×2134, 309 KB)
- JPEG fallback: `maramures-sapanta-merry-cemetery-1-1600.jpg` (1600×2134, 623 KB)

### `maramures-wooden-church-steeple-1`

Tall shingle steeple of a Maramureș wooden church, with forested mountains behind it.

- Photographer: [Adrian Botica](https://unsplash.com/@adi_botica)
- Unsplash page: https://unsplash.com/photos/a-church-steeple-with-a-cross-on-top-of-it-rvXnNJtQYco
- Direct CDN: https://images.unsplash.com/photo-1727409491693-e80485190fe7?w=1600&q=80&fm=jpg
- Mobile WebP: `maramures-wooden-church-steeple-1-828.webp` (828×1242, 83 KB)
- Desktop WebP: `maramures-wooden-church-steeple-1-1600.webp` (1600×2400, 219 KB)
- JPEG fallback: `maramures-wooden-church-steeple-1-1600.jpg` (1600×2400, 450 KB)

### `maramures-church-through-gate-1`

A wooden church steeple framed by a carved log gateway and red flowers.

- Photographer: [Adrian Botica](https://unsplash.com/@adi_botica)
- Unsplash page: https://unsplash.com/photos/a-view-of-a-building-through-a-window-3KeX-H-0G5c
- Direct CDN: https://images.unsplash.com/photo-1727409492354-dc440e11eb7e?w=1600&q=80&fm=jpg
- Mobile WebP: `maramures-church-through-gate-1-828.webp` (828×1242, 64 KB)
- Desktop WebP: `maramures-church-through-gate-1-1600.webp` (1600×2400, 170 KB)
- JPEG fallback: `maramures-church-through-gate-1-1600.jpg` (1600×2400, 424 KB)

### `maramures-village-house-vines-1`

A traditional village house with a shingle roof and grapevines over the doorway.

- Photographer: [Adrian Botica](https://unsplash.com/@adi_botica)
- Unsplash page: https://unsplash.com/photos/a-house-covered-in-vines-and-flowers-on-a-sunny-day-qaz1-f3D4O8
- Direct CDN: https://images.unsplash.com/photo-1727409494059-fab0acdfa0f3?w=1600&q=80&fm=jpg
- Mobile WebP: `maramures-village-house-vines-1-828.webp` (828×1242, 132 KB)
- Desktop WebP: `maramures-village-house-vines-1-1600.webp` (1600×2400, 329 KB)
- JPEG fallback: `maramures-village-house-vines-1-1600.jpg` (1600×2400, 694 KB)

### `maramures-wooden-house-well-1`

Wooden village house, shingle well, and a herb-drying shed in a grassy courtyard.

- Photographer: [Adrian Botica](https://unsplash.com/@adi_botica)
- Unsplash page: https://unsplash.com/photos/a-couple-of-wooden-buildings-sitting-on-top-of-a-lush-green-field-F1scbpQ30Wo
- Direct CDN: https://images.unsplash.com/photo-1727409493820-fdb15c908de0?w=1600&q=80&fm=jpg
- Mobile WebP: `maramures-wooden-house-well-1-828.webp` (828×1242, 142 KB)
- Desktop WebP: `maramures-wooden-house-well-1-1600.webp` (1600×2400, 450 KB)
- JPEG fallback: `maramures-wooden-house-well-1-1600.jpg` (1600×2400, 862 KB)

### `maramures-sheep-wooden-church-1`

Sheep grazing beside a wooden church in a fenced meadow.

- Photographer: [Adrian Botica](https://unsplash.com/@adi_botica)
- Unsplash page: https://unsplash.com/photos/a-sheep-is-laying-down-in-a-field-OxwwemyTCYw
- Direct CDN: https://images.unsplash.com/photo-1727409491844-c26953a8489d?w=1600&q=80&fm=jpg
- Mobile WebP: `maramures-sheep-wooden-church-1-828.webp` (828×1242, 141 KB)
- Desktop WebP: `maramures-sheep-wooden-church-1-1600.webp` (1600×2400, 414 KB)
- JPEG fallback: `maramures-sheep-wooden-church-1-1600.jpg` (1600×2400, 780 KB)

### `maramures-traditional-porch-1`

Carved wooden porch (prispa) looking out over the hills, with a linen-covered table.

- Photographer: [Adrian Botica](https://unsplash.com/@adi_botica)
- Unsplash page: https://unsplash.com/photos/a-porch-with-a-table-and-chairs-on-it-xuNCa2hpPUk
- Direct CDN: https://images.unsplash.com/photo-1727409492346-8c4726f69392?w=1600&q=80&fm=jpg
- Mobile WebP: `maramures-traditional-porch-1-828.webp` (828×1242, 103 KB)
- Desktop WebP: `maramures-traditional-porch-1-1600.webp` (1600×2400, 271 KB)
- JPEG fallback: `maramures-traditional-porch-1-1600.jpg` (1600×2400, 618 KB)

### `maramures-traditional-interior-1`

Traditional wooden-room interior with an icon, embroidered ștergar, and woven tablecloth.

- Photographer: [Adrian Botica](https://unsplash.com/@adi_botica)
- Unsplash page: https://unsplash.com/photos/a-table-and-chairs-in-front-of-a-window-1PFLg8pk0Z8
- Direct CDN: https://images.unsplash.com/photo-1727409495928-208e88fcee8f?w=1600&q=80&fm=jpg
- Mobile WebP: `maramures-traditional-interior-1-828.webp` (828×1242, 134 KB)
- Desktop WebP: `maramures-traditional-interior-1-1600.webp` (1600×2400, 709 KB)
- JPEG fallback: `maramures-traditional-interior-1-1600.jpg` (1600×2400, 892 KB)

### `maramures-mocanita-from-carriage-1`

The Mocănița steam train seen through the wooden window of a carriage.

- Photographer: [Adrian Botica](https://unsplash.com/@adi_botica)
- Unsplash page: https://unsplash.com/photos/a-train-traveling-through-a-lush-green-countryside-yWRF7AZIriQ
- Direct CDN: https://images.unsplash.com/photo-1727409489545-7683ff34cacc?w=1600&q=80&fm=jpg
- Mobile WebP: `maramures-mocanita-from-carriage-1-828.webp` (828×1159, 127 KB)
- Desktop WebP: `maramures-mocanita-from-carriage-1-1600.webp` (1600×2240, 342 KB)
- JPEG fallback: `maramures-mocanita-from-carriage-1-1600.jpg` (1600×2240, 660 KB)

### `maramures-mountain-fir-trees-1`

A Maramureș mountain slope framed by dark fir trees.

- Photographer: [Adrian Botica](https://unsplash.com/@adi_botica)
- Unsplash page: https://unsplash.com/photos/a-view-of-a-mountain-through-some-trees-pokcAKaQdrc
- Direct CDN: https://images.unsplash.com/photo-1727409492418-151e8fda0623?w=1600&q=80&fm=jpg
- Mobile WebP: `maramures-mountain-fir-trees-1-828.webp` (828×1242, 90 KB)
- Desktop WebP: `maramures-mountain-fir-trees-1-1600.webp` (1600×2400, 233 KB)
- JPEG fallback: `maramures-mountain-fir-trees-1-1600.jpg` (1600×2400, 556 KB)

### `maramures-mountain-flowers-1`

Forested mountain peak with out-of-focus garden flowers in the foreground.

- Photographer: [Adrian Botica](https://unsplash.com/@adi_botica)
- Unsplash page: https://unsplash.com/photos/a-view-of-a-mountain-range-with-flowers-in-the-foreground-X25qDNU_HzQ
- Direct CDN: https://images.unsplash.com/photo-1727409494899-1992268210c4?w=1600&q=80&fm=jpg
- Mobile WebP: `maramures-mountain-flowers-1-828.webp` (828×1242, 65 KB)
- Desktop WebP: `maramures-mountain-flowers-1-1600.webp` (1600×2400, 252 KB)
- JPEG fallback: `maramures-mountain-flowers-1-1600.jpg` (1600×2400, 581 KB)

### `maramures-haystacks-winter-1`

Three frost-covered haystacks in a snowy Maramureș field (same winter series as a photo tagged Maramureș).

- Photographer: [Theodor Vasile](https://unsplash.com/@theodorrr)
- Unsplash page: https://unsplash.com/photos/snow-covered-trees-and-mountain-during-daytime-fStdrho4TWc
- Direct CDN: https://images.unsplash.com/photo-1579350535642-5cdfc01d557d?w=1600&q=80&fm=jpg
- Mobile WebP: `maramures-haystacks-winter-1-828.webp` (828×1242, 95 KB)
- Desktop WebP: `maramures-haystacks-winter-1-1600.webp` (1600×2400, 362 KB)
- JPEG fallback: `maramures-haystacks-winter-1-1600.jpg` (1600×2400, 495 KB)

### `maramures-folk-costume-1`

Woman in traditional Maramureș folk costume (embroidered blouse, sheepskin vest, and floral headscarf) by a wooden house.

- Photographer: [Teslariu Mihai](https://unsplash.com/@mihaiteslariu0)
- Unsplash page: https://unsplash.com/photos/a-woman-in-a-pirate-costume-leaning-against-a-wooden-structure-rR0yh3V_T0M
- Direct CDN: https://images.unsplash.com/photo-1701456031505-370c542910c8?w=1600&q=80&fm=jpg
- Mobile WebP: `maramures-folk-costume-1-828.webp` (828×1242, 51 KB)
- Desktop WebP: `maramures-folk-costume-1-1600.webp` (1600×2399, 143 KB)
- JPEG fallback: `maramures-folk-costume-1-1600.jpg` (1600×2399, 353 KB)

### `maramures-winter-frosted-road-1`

A snow-covered country road lined with frost-covered trees (same Maramureș winter series).

- Photographer: [Theodor Vasile](https://unsplash.com/@theodorrr)
- Unsplash page: https://unsplash.com/photos/bare-trees-under-blue-sky-during-daytime-NSNZkHwqfP8
- Direct CDN: https://images.unsplash.com/photo-1579350535960-6f72968d6204?w=1600&q=80&fm=jpg
- Mobile WebP: `maramures-winter-frosted-road-1-828.webp` (768×1152, 145 KB)
- Desktop WebP: `maramures-winter-frosted-road-1-1600.webp` (1600×2400, 946 KB)
- JPEG fallback: `maramures-winter-frosted-road-1-1600.jpg` (1600×2400, 1132 KB)

### `maramures-wooden-pavilion-mountains-1`

A shingle-roofed wooden pavilion or bell tower set against forested mountains.

- Photographer: [Adrian Botica](https://unsplash.com/@adi_botica)
- Unsplash page: https://unsplash.com/photos/a-wooden-gazebo-with-a-steeple-on-top-of-it-JnBdoRk1kFo
- Direct CDN: https://images.unsplash.com/photo-1727409493589-bfc79aa6356d?w=1600&q=80&fm=jpg
- Mobile WebP: `maramures-wooden-pavilion-mountains-1-828.webp` (828×1242, 141 KB)
- Desktop WebP: `maramures-wooden-pavilion-mountains-1-1600.webp` (1600×2400, 460 KB)
- JPEG fallback: `maramures-wooden-pavilion-mountains-1-1600.jpg` (1600×2400, 815 KB)

## Other free sources you can use or hotlink

Unsplash does not have every landmark covered (for example there were no free, clearly labelled photos of Șurdești or Ieud in this set). These sites have many more Maramureș images, usually under Creative Commons or similar free licenses — check each file’s license and give the required credit:

1. **Wikimedia Commons — Maramureș County**  
   https://commons.wikimedia.org/wiki/Category:Maramureș_County  
   Direct file URLs look like `https://upload.wikimedia.org/wikipedia/commons/...` and can be used in `<img>` tags. See also:
   - Wooden churches: https://commons.wikimedia.org/wiki/Category:Wooden_churches_in_Maramureș
   - Bârsana Monastery: https://commons.wikimedia.org/wiki/Category:Bârsana_Monastery
   - Merry Cemetery: https://commons.wikimedia.org/wiki/Category:Merry_Cemetery_in_Săpânța

2. **Wikimedia Commons — Sighetu Marmației**  
   https://commons.wikimedia.org/wiki/Category:Sighetu_Marmației

3. **Europeana** (museums and archives, many CC / public-domain works)  
   https://www.europeana.eu/en/search?query=Maramureș&qf=TYPE:IMAGE  
   Filter by reusable licenses before you hotlink or download.

4. **Pexels** search for Romania / Maramureș (Pexels License, free to use; hotlink from `images.pexels.com`)  
   https://www.pexels.com/search/maramures/

Machine-readable credits, including exact pixel sizes for every file, are in `credits.json`.
