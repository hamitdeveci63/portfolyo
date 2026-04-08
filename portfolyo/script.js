const projeVerileri = [
    { baslik: "E-Ticaret Arayüzü", kategori: "Web", aciklama: "Modern bir alışveriş sitesi tasarımı.", resim: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500" },
    { baslik: "Finans Takip Mobil", kategori: "Mobil", aciklama: "Kişisel harcama yönetim uygulaması.", resim: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500" },
    { baslik: "Haber Portalı", kategori: "Web", aciklama: "Dinamik içerikli haber sitesi.", resim: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500" },
    { baslik: "Fitness App", kategori: "Mobil", aciklama: "Antrenman takip yazılımı.", resim: "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=500" },
    { baslik: "Restoran Menü", kategori: "Web", aciklama: "QR kod uyumlu dijital menü.", resim: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500" }
];

const projeKonteyner = document.getElementById("proje-listesi");

function projeleriListele(gelenListe) {
    projeKonteyner.innerHTML = "";
    gelenListe.map(proje => {
        const kartHtml = `
            <div class="proje-karti">
                <img src="${proje.resim}" class="proje-resim" alt="${proje.baslik}">
                <div class="proje-icerik">
                    <h3>${proje.baslik}</h3>
                    <p>${proje.aciklama}</p>
                    <small>Kategori: ${proje.kategori}</small>
                </div>
            </div>
        `;
        projeKonteyner.innerHTML += kartHtml;
    });
}

function projeleriFiltrele(kategoriTuru, secilenButon) {
    document.querySelectorAll('.filtre-btn').forEach(buton => buton.classList.remove('aktif'));
    secilenButon.classList.add('aktif');

    if (kategoriTuru === 'hepsi') {
        projeleriListele(projeVerileri);
    } else {
        const suzulenProjeler = projeVerileri.filter(oge => oge.kategori === kategoriTuru);
        projeleriListele(suzulenProjeler);
    }
}

const temaButonu = document.getElementById("tema-degistir");
temaButonu.onclick = () => {
    const govde = document.documentElement;
    const mevcutTema = govde.getAttribute("data-theme");
    govde.setAttribute("data-theme", mevcutTema === "dark" ? "light" : "dark");
};

const daktiloAlani = document.getElementById("yazi-efekti");
const isimMetni = "Hamit Deveci"; 
let harfSirasi = 0;

function yazmayaBasla() {
    if (harfSirasi < isimMetni.length) {
        daktiloAlani.innerHTML += isimMetni.charAt(harfSirasi);
        harfSirasi++;
        setTimeout(yazmayaBasla, 100);
    }
}

window.onload = () => {
    projeleriListele(projeVerileri);
    yazmayaBasla();
};