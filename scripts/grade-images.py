# Warm "film" grade so own photos match the Unsplash Maramures set.
import os, sys
from PIL import Image, ImageEnhance, ImageChops, ImageOps
src_root, out_root = sys.argv[1], sys.argv[2]
JOBS = {
  # name: (source, purple_kill)
  'room-dd': ('camere/dd.jpg', True), 'room-dubla-1': ('camere/dubla1.jpg', True),
  'room-dubla-2': ('camere/dubla2.jpg', True), 'room-dubla-3': ('camere/dubla3.jpg', True),
  'room-dubla-extra': ('camere/dublaextra.jpg', True), 'room-single': ('camere/signle.jpg', True),
  'room-tripla-1': ('camere/tripla1.jpg', True), 'room-tripla-2': ('camere/tripla2.jpg', True),
  'room-tripla-3': ('camere/tripla3.jpg', True), 'room-tripla-4': ('camere/tripla4.jpg', True),
  'house-summer': ('var1.webp', False), 'house-winter': ('iar1.webp', False),
  'bonfire': ('foct.jpg', False), 'table-spread': ('has.webp', False),
  'food-1': ('mancare1.webp', False), 'food-2': ('mancare2.webp', False), 'food-3': ('mancare3.webp', False),
  'restaurant': ('restaurant.jpg', False), 'band': ('trupa.jpg', False),
  'girl-summer': ('vara.webp', False), 'girl-winter': ('iarna.webp', False),
  'att-borsa': ('obiective/borsa.webp', False), 'att-cavnic': ('obiective/cavnic.jpg', False),
  'att-sapanta': ('obiective/cimitir_v.jpeg', False), 'att-mocanita': ('obiective/mocanitax.jpg', False),
  'att-muzeu': ('obiective/muzeu_sat_maramu.jpg', False), 'att-vadu-izei': ('obiective/vad_izei.jpg', False),
}
def kill_purple(im):
    from PIL import ImageFilter
    h, s, v = im.convert('HSV').split()
    hue = h.point(lambda x: 255 if 178 <= x <= 250 else 0)
    sat = s.point(lambda x: 255 if x > 28 else int(x * 9))
    mask = ImageChops.multiply(hue, sat).filter(ImageFilter.GaussianBlur(max(4, im.width // 300)))
    neutral = ImageEnhance.Color(im).enhance(0.0)
    r, g, b = neutral.split()
    neutral = Image.merge('RGB', (r.point(lambda x: min(255, int(x * 1.04 + 4))), g, b.point(lambda x: int(x * 0.92))))
    return Image.composite(neutral, im, mask)
def grade(im, purple):
    im = ImageOps.exif_transpose(im).convert('RGB')
    if purple: im = kill_purple(im)
    im = ImageEnhance.Color(im).enhance(0.84)
    im = ImageEnhance.Contrast(im).enhance(0.94)
    r, g, b = im.split()
    r = r.point(lambda x: min(255, int(x * 1.035 + 6)))
    g = g.point(lambda x: min(255, int(x * 1.005 + 5)))
    b = b.point(lambda x: min(255, int(x * 0.93 + 8)))
    return Image.merge('RGB', (r, g, b))
os.makedirs(out_root, exist_ok=True)
for name, (rel, purple) in JOBS.items():
    im = grade(Image.open(os.path.join(src_root, rel)), purple)
    for w in (1600, 828):
        c = im.copy()
        if c.width > w: c = c.resize((w, round(c.height * w / c.width)), Image.LANCZOS)
        c.save(os.path.join(out_root, f'{name}-{w}.webp'), 'WEBP', quality=78, method=6)
    print(name, im.size)
