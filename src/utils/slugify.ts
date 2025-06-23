export function slugify(text:string) {
  return text
    .toLowerCase()                   // ubah jadi huruf kecil
    .trim()                          // hilangkan spasi di awal/akhir
    .replace(/[\s_]+/g, '-')         // ganti spasi dan _ jadi -
    .replace(/[^\w\-]+/g, '')        // hilangkan karakter non-alfanumerik (opsional)
    .replace(/\-\-+/g, '-');         // ganti -- jadi -
}
