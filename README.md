# GiardDesign

GiardDesign to nowoczesna, responsywna strona internetowa poświęcona projektowaniu i realizacji ogrodów. Projekt został stworzony na bazie gotowego szablonu w ramach zadania rekrutacyjnego.

Strona została zaprojektowana z uwzględnieniem widoku zarówno na komputery, jak i urządzenia mobilne.

## Technologie

Projekt został wykonany z wykorzystaniem:

* **React** – do budowy interfejsu użytkownika oraz podziału aplikacji na niezależne komponenty,
* **TypeScript** – dla typowania komponentów, propsów i danych,
* **Tailwind CSS** – do stylowania interfejsu i tworzenia responsywnego layoutu,
* **Framer Motion** – do tworzenia animacji i płynnych przejść,
* **Vite** – jako narzędzie do szybkiego uruchamiania i budowania aplikacji.

## Funkcjonalności i responsywność

### Funkcjonalności

W ramach zadania rekrutacyjnego otrzymany gotowy szablon został rozbudowany o funkcjonalności oraz interakcje wymagane w treści zadania:

* **Rozwijane menu „Oferta”** – dodano możliwość rozwijania menu zawierającego dodatkowe opcje oferty.
* **Wysuwająca się wyszukiwarka** – po kliknięciu ikony lupy pojawia się animowany box z polem wyszukiwania.
* **Działający slider w sekcji Hero** – dodano funkcjonalny slider umożliwiający przełączanie slajdów oraz automatyczną zmianę prezentowanych treści.
* **Rozwijana galeria** – dodano możliwość rozwinięcia galerii i wyświetlenia większej liczby realizacji.
* **Popup w galerii** – dodano możliwość otwierania zdjęć w powiększonym widoku oraz ich przeglądania w formie popupu.
* **Pozostałe elementy** – pozostałe funkcjonalności oraz elementy strony zostały zachowane i zaimplementowane zgodnie z otrzymanym szablonem.
  
### Responsywność

Strona została zaprojektowana z uwzględnieniem widoku zarówno na komputery, jak i urządzenia mobilne. Układ oraz poszczególne elementy interfejsu dostosowują się do szerokości ekranu, zapewniając wygodne korzystanie z serwisu na różnych urządzeniach.

Responsywność obejmuje między innymi:

* dostosowanie układu sekcji do różnych rozmiarów ekranów,
* responsywną nawigację,
* mobilne menu rozwijane,
* zmianę układu galerii,
* dostosowanie slidera do urządzeń mobilnych,
* odpowiednie skalowanie i rozmieszczenie elementów interfejsu.


## Struktura komponentów

Projekt został podzielony na niezależne komponenty React, dzięki czemu kod jest uporządkowany i łatwy do rozwijania.

Struktura:

```text
src/
├── components/
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── GallerySection.tsx
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── Icon.tsx
│   └── ServicesSection.tsx
│
├── assets/
│   ├── brush.svg
│   ├── eye.svg
│   ├── sparkle.svg
│   └── logo-adRespect.svg
│
└── App.tsx
```

Główny komponent `App` odpowiada za złożenie poszczególnych sekcji strony oraz obsługę wspólnej nawigacji pomiędzy nimi.
