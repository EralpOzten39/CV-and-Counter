import PersInfo from "./components/PersInfo";
import AddInfo from "./components/AddInfo";
import "./app.css";

function App() {
  const persInfo = [
    { id: "1", title: "Ad Soyad", explanation: "Eralp Özten" },
    { id: "2", title: "Adres", explanation: "Edirne, Merkez,..." },
    { id: "3", title: "Telefon", explanation: "0534 322 ** **" },
    { id: "4", title: "Email", explanation: "eralpozten39@outlook.com" },
    {
      id: "5",
      title: "Doğum Tarihi",
      explanation: new Date(2000, 7, 20).toLocaleDateString(),
    },
    { id: "6", title: "Cinsiyet", explanation: "Erkek" },
    { id: "7", title: "Uyruk", explanation: "T.C." },
  ];

  const addInfo = [
    { id: "1", title: "İş Deneyimleri", explanation: "" },
    {
      id: "2",
      title: "Eğitim Geçmişi",
      explanation:
        "Lise / Sayısal / Babaeski Şehit Ersan Yenici Anadolu Lisesi\n" +
        "Üniversite / Trakya Üniversitesi/ Bilgisayar Mühendisliği  ",
    },
    {
      id: "2",
      title: "Yabancı Dil",
      explanation: "İngilizce = Konuşma: Orta, Anlama: İyi, Yazma: İyi",
    },
    {
      id: "3",
      title: "Bildiği Yazılım Dilleri",
      explanation:
        "Python:   Orta   Java:   İyi\n" + 
        "C:        Orta   C#:     İyi",
    },
    { id: "4", title: "Referanslar", explanation: "" },
  ];

  return (
    <div className="sApp">
      <PersInfo items={persInfo} />
      <AddInfo items={addInfo} />
    </div>
  );
}

export default App;
