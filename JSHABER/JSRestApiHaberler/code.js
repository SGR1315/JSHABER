const apiKaynakAdresi = "https://api.collectapi.com/news/getNews?country=tr&tag=general";
const apiAyarlari = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "apikey 4dt29quqTUIne0aMPOL4DL:0l849tJwAWlI1Wy5PlP05N"
  }
};

let veriler;
let sunucuYaniti;

async function haberListele() {
  
    try {
      sunucuYaniti = await fetch(apiKaynakAdresi, apiAyarlari);
      veriler = await sunucuYaniti.json();
      
      veriler.result.forEach(eleman => {
        const haberBasligi = document.createElement('h2');
        const haberLinki = document.createElement('a');
        haberLinki.textContent = eleman.name;
        haberLinki.href = '#'; // Buraya haber detayı linkini eklemelisiniz.
        haberLinki.addEventListener('click', () => {
          console.log(JSON.stringify(eleman, null, 2)); // Detayları JSON formatında ve düzenli bir şekilde console'a yazdırıyoruz.
        });
        haberBasligi.appendChild(haberLinki);
        document.querySelector(".haberler").appendChild(haberBasligi);
      });
      
      
    } catch (error) {
      console.error(error);
    }
}

haberListele();
