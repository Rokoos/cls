import React from "react";
export const aboutUs = (
  <p>
    Bazując na wieloletnim dooświadczeniu wyspecjalizowaliśmy się w sektorze
    fitout powierzchni komercyjnych, a w szczególności powierzchni biurowych
    oraz obiektów użyteczności publicznej. Nasze działania koncentrujemy na
    realizacji instalacji elektrycznych i sieci LAN.
  </p>
);
export const offer = (
  <ul>
    <li>
      Realizacja nowych i modernizacje istniejących instalacji elektrycznych i
      sieci LAN
    </li>
    <li>Konserwacja instalacji elektrycznych w czynnych obiektach</li>
    <li>
      Przeglądy i pomiary okresowe oraz odbiorcze instalacji elektrycznych
    </li>
    <li>
      Pomiary sieci LAN - jesteśmy certyfikowanym instalatorem sieci LAN Schrack
      Technik
    </li>
    <li>
      Zabezpieczenie projektu w niezbędne do jego realizacji certyfikowane
      materiały instalacyjne
    </li>
    <li>
      Przygotowanie pełnej dokumentacji powykonawczej realizowanego zakresu
      robót wraz z pomiarami niezbędnymi do odbioru i przekazania do
      wksploatacji instalacji
    </li>
  </ul>
);

export const special = (
  <ul>
    <li>Wykwalifikowany zespół realizacyjny z uprawnieniami</li>
    <li>Profesjonalny sprzęt i narzędzia pomiarowe</li>
    <li>Prace prowadzone pod nadzorem kierownika robót elektrycznych</li>
    <li>Nie bazujemy na podwykonawcach</li>
    <li>Posiadamy w zespole ratownika medycznego</li>
    <li>Przejrzysta struktura firmy</li>
    <li>Jeden adres e-mailowy upraszczający komunikację</li>
  </ul>
);

export const more = (
  <ul>
    <li>Znamy technologie biurowe oraz specyfikę administracyjną</li>
    <li>Śledzimy trendy projektowe</li>
    <li>Dobrze rozumiemy potrzeby klientów</li>
  </ul>
);

export default [
  {
    id: 1,
    name: "Park Avenue",
    address: "ul. Wspólna 70, Warszawa",
    principal: "Auximo",
    supervision: "Piotr Kozłowski",
    phone: 602721723,
    projects: [
      {
        company: "JP Weber",
        date: "Grudzień 2018 - Styczeń 2019",
        area: 190,
      },
      {
        company: "Jobber 24",
        date: "Luty 2019",
        area: 240,
      },
      {
        company: "Danske Bank",
        date: "Kwiecień - Maj 2019",
        area: 1050,
      },
    ],
    realization: [
      "instalacja elektryczna - położenie nowej oraz rozbudowa istniejącej instalacji shell&core",
      "instalacja multimedialna sal konferencyjnych",
      "sieć LAN",
      "pomiary elektryczne",
      "pomiary sieci LAN",
      "dokumentacja powykonawcza",
    ],
  },
  {
    id: 2,
    name: "Park Avenue",
    address: "ul. Wspólna 70, Warszawa",
    principal: "Park Project",
    supervision: "Brian Steven Kober",
    phone: 600608293,
    projects: [
      {
        company: "Biuro Pokazowe",
        date: "Sierpień 2018",
        area: 450,
      },
      {
        company: "Rubicon",
        date: "Wrzesień - Październik 2018",
        area: 400,
      },
      {
        company: "Unum (Pramerica)",
        date: "Listopad-Grudzień 2018",
        area: 370,
      },
    ],
    realization: [
      "instalacja elektryczna - położenie nowej oraz rozbudowa istniejącej instalacji shell&core",
      "instalacja multimedialna sal konferencyjnych",
      "sieć LAN",
      "pomiary elektryczne",
      "pomiary sieci LAN",
      "dokumentacja powykonawcza",
    ],
  },
  {
    id: 3,
    name: 'Centrum Medyczne "GAMMA"',
    address: "ul. Bobrowiecka 8, Warszawa",
    principal: "Interbiuro",
    supervision: "Kamil Mysera",
    phone: 735978662,
    projects: [
      {
        date: "2 etapy: Marzec - Maj 2018 oraz Czerwiec - Lipiec 2018 ",
        area: 780,
      },
    ],
    realization: [
      "instalacja elektryczna",
      "instalacja multimedialna",
      "sieć LAN",
      "pomiary elektryczne",
      "pomiary sieci LAN",
      "dokumentacja powykonawcza",
    ],
  },
  {
    id: 4,
    name: "Stena Recycling",
    address: "ul. Grójecka 208, Warszawa",
    principal: "Interbiuro",
    supervision: "Aleksander Bielecki",
    phone: 730007765,
    projects: [
      {
        date: "Listopad 2017 - Styczeń 2018",
        area: 900,
      },
    ],
    realization: [
      "instalacja elektryczna - położenie nowej oraz modernizacja istniejącej instalacji",
      "modernizacja układu zasilania",
      "instalacja multimedialna sal konferencyjnych",
      "sieć LAN",
      "pomiary elektryczne",
      "pomiary sieci LAN",
      "dokumentacja powykonawcza",
    ],
  },
  {
    id: 5,
    name: "New City",
    address: "ul. Marynarska 15, Warszawa",
    principal: "Apritech",
    supervision: "Kacper Zaborowski",
    phone: 531034393,
    projects: [
      {
        date: "Marzec - Kwiecień 2018",
        area: 550,
      },
    ],
    realization: [
      "powierzchnie dla najemców: szatnie New City Hines, biuro Brother",
      "instalacja elektryczna - położenie nowej oraz modernizacja elementów istniejącej instalacji",
      "modernizacja układu zasilania",
      "instalacja multimedialna sal konferencyjnych",
      "sieć LAN",
      "pomiary elektryczne",
      "pomiary sieci LAN",
      "dokumentacja powykonawcza",
    ],
  },
  {
    id: 6,
    name: "Wiśniowy Business Park",
    address: "ul. 1 Sierpnia 6C, Warszawa",
    principal: "ELMap",
    supervision: "Przemysław Czerwiński",
    phone: 601804077,
    projects: [
      {
        date: "Kwiecień - Maj 2017",
        area: 600,
      },
    ],
    realization: [
      "powierzchnie dla 3 najemców: Showroom WBP, CargoMind, GreenLights",
      "instalacja elektryczna - położenie nowej oraz modernizacja elementów istniejącej instalacji",
      "modernizacja układu zasilania",
      "sieć LAN",
      "pomiary elektryczne",
      "pomiary sieci LAN",
      "dokumentacja powykonawcza",
    ],
  },
  {
    id: 7,
    name: "4MediaCreations",
    address: "ul. Ratuszowa 11, Warszawa",
    principal: "4MediaCreations",
    supervision: "Anna Powierża",
    phone: 608501261,
    projects: [
      {
        date: "Sierpień - Wrzesień 2017",
        area: 160,
      },
    ],
    realization: [
      "instalacja elektryczna - położenie nowej oraz modernizacja elementów istniejącej instalacji",
      "modernizacja układu zasilania",
      "sieć LAN",
      "pomiary elektryczne",
      "pomiary sieci LAN",
      "dokumentacja powykonawcza",
    ],
  },
  {
    id: 8,
    name: "Żłobek 'Zaczarowane Motylki' ",
    address: "ul. Radziwie 3/7, Warszawa",
    principal: "Agnieszka Pyszka",
    phone: 530321101,
    projects: [
      {
        date: "Lipiec - Sierpień 2017",
        area: 200,
      },
    ],
    realization: [
      "instalacja elektryczna",
      "instalacja domofonowa",
      "sieć LAN",
      "pomiary elektryczne",
      "pomiary sieci LAN",
      "dokumentacja powykonawcza",
    ],
  },
];
