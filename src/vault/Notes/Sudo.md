---
unique_Id: '20250621101648'
title: Sudo
date: 2025-06-21T10:16:48+07:00
update: 2025-06-21T10:16:48+07:00
tags:
  - linux
  - sudo
  - cli
categories:
  - Linux Fundamentals
type: Notes
---

# Sudo

**Super User Do** atau bisa dibilang **Sudo** adalah perintah untuk memasuki akses root atau admin kalau secara mudahnya. Kalau secara analogi seperti ini:

Kamu datang ke warung makan, di warung makan tersebut kamu bisa bebas memesan makanan, minuman, atau cemilan, bisa juga memanfaatkan fasilitas yang ada seperti AC, Toilet, Menonton televisi. Cuma jika kamu mengakses dapur kemudian meminta resep pasti ditolak, karena kamu tidak memiliki hak akses nya. Nah peran Sudo disini, jika pakai Sudo kamu bebas ngapain aja di dapur, tidak hanya meminta resep, bahkan jika mau merusak dapur tersebut juga boleh. Dengan catatan kamu punya izinya (kalau di Linux jika akses Sudo akan diminta password dulu)

## Sederhananya

**Tanpa `sudo`**

```
Perintah: minta resep masakan
Sistem: Akses ditolak
```

**Dengan `sudo`**

```
Perintah: sudo minta resep masakan
Sistem: Resepnya adalah A, B, dan C
```

## Penggunaan Umum

Contoh perintah yang sering membutuhkan `sudo` adalah saat melakukan update sistem di Ubuntu:

```bash
sudo apt update
sudo apt upgrade
```

Perintah sudo akan meminta password dari pengguna (biasanya password akun yang sedang login).

> Gunakan sudo dengan hati-hati. Perintah yang salah saat menggunakan sudo bisa merusak sistem operasi.

---
