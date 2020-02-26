# Git Flow Dokumentasi

## Git flow untuk new project

- Set dulu akun global untuk github dengan:
git config --global user.name "Your name"
git config --global user.email “Your email” contoh: example@mail.com
- git init, digunakan untuk inisiasi github dengan folder local
- Setelah itu di add, dengan menggunakan command "git add ." pada git add . artinya memasukkan seluruh file atau bisa juga dengan mengadd file tertentu dengan memasukkan nama file tersebut seperti ini "git add index.html
- Setelah itu di commit, dengan menggunakan command "git commit -m "nama commit" dan jika sudah terlanjur mencommit dan tidak ingin menambah commit terlalu banyak bisa dengan flag "--amend"
- Setelah itu setting remote akun githubnya, dengan remote git remote nama ssh atau https
contoh: git remote add origin git@github.com:prihuda/prihuda.github.io.git
- Setelah itu push dengan command, "git push origin master"
- Lihat di akun github maka akan ada file baru di repository yang telah dibuat sebelumnya

## Membuat static website dengan github

- Pertama-tama buat lah repository dan berikan tambahan github.io pada isian di repository sebagai contoh prihuda.github.io
- Sama seperti diatas jika belum diinisiasi atau pertama kali maka dimulai dengan "git init"
- Setelah itu add dengan "git add index.html", index.html telah dibuat sebelumnya index ini berisi tabel singkat tentang biodata
- Setelah itu di commit, dengan command "git commit -m "nama commit"
- Pastikan sudah diremote, diwindows akan ada terlihat sebuah tanda (master) yang berarti sudah melakukan remote repository secara benar
- Setelah itu di push dengan command, "git push origin master"
- Hasil akan terlihat dengan mengetik "prihuda.github.io" pada browser

## Gitflow pada existing project

- Pertama-tama clone terlebih dahulu project yang telah ditentukan, dengan command "git clone ssh atau https repository"
- Setelah itu arahkan terminal ke folder clone tersebut
-  ubah sesuatu pada folder clone tersebut, sebagai contoh index.html
- lalu git add index.html
- setelah itu commit, dengan command "git commit -m "nama commit"
- buatlah sebuah branch terlebih dahulu, dengan command "git checkout -b nama branch", tujuan dibuat branch supaya kode master tidak terganggu dan bisa direview terlebih dahulu oleh yang punya repo
- lalu push ke branch repository dengan command "git push origin nama branch"
- pada case tertentu seperti master dan yang request ubah code pada baris yang sama maka akan ada konflik
- untuk mengatasi ini bisa dengan "git rebase --continue", maka pada vs code ada tiga pilihan yaitu incoming, current, dan both setelah memilih salah satu maka konflik akan resolve
- git add index.html
- git commit -m "nama commit"
- setelah itu yang request bisa push code lagi ke branch repo untuk direview sampai tuntas oleh master
- jika sudah ok maka pemilik repository bisa melakukan merge request ke master repo

