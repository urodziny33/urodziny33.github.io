const loveThings = [
  "Na sam początek, wszystkiego najlepszego! Bardzo dużo dla mnie znaczysz i doceniam to, że spędzasz tyle czasu u mego boku. Zmieniłaś mnie w lepszego człowieka swoją obecnością, otworzyłaś mi oczy na nowe rzeczy dookoła i mega jestem z tego zadowolony. Przez Ciebie teraz czuje prawdziwe szczęście, nie tylko takie wyimaginowane jak kiedyś. A to wszystko twoja zasługa. Zauważyłaś we mnie coś, co sprawiło, że ze mną jesteś pomimo tego, że sam nie umiałem zauważyć w sobie nic wartego uwagi. Jesteś naprawde dobrym człowiekiem i ciesze się, że jesteś w moim życiu. Od tego momentu jest ono kolorowe i pełne szczęścia. Zasługujesz na samo dobro i to, co sobie wymarzysz, bo sama dałas mi to o czym marzyłem od dziecka: prawdziwą miłość i poczucie własnej wartości. You're on my mind 24/7 and it's crazy honestly. Jesteś moim powodem do życia, powodem dla którego chce stawać sie lepszym człowiekiem każdego dnia i zarażać innych pozytywnymi uczuciami , tak jak ty mnie nimi zaraziłaś. Życze Ci samych osiągnięć, tego żebyś zwiedziła miejsca o których marzysz zeby zwiedzić, przyszłości u mojego boku w której bedziesz naprawde szczęśliwa, tego aby twoja muzyka była rozpoznawalna w całym kraju bo zasługujesz na to. Jesteś strasznie utalentowana i chciałbym, aby każdy polak znał nazwe Amelia Bloom i jej piosenki, bo to co tworzysz jest po prostu genialne. Jestem z Ciebie dumny i już zawsze będe, nie pozwól aby twój talent i chęci robienia muzyki poszły na drugi plan przez różne rzeczy. You're my Iris. Czekałem na ten dzień, abyś w końcu to przeczytała. Kocham Cię, jeszcze raz: wszystkiego najlepszego z okazji 20 urodzin kochanie ♡"
];

const ul = document.getElementById("loveList");

loveThings.forEach(thing => {
  const li = document.createElement("li");
  li.textContent = thing;
  ul.appendChild(li);
});
