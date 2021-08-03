Modul 4 - Components

Scrim 1:
Eine Komponente ist eine Abstraktion von einzelnen Elementen.
Es werden also nicht alle Teile des Code in eine einzige Datei geschrieben sondern auf mehrere aufgeteilt.
Zweck:
- Resusability of Code
- Encapsulation
- Eine Komponente kann groß oder klein sein
- Code wird in kleine Teil aufgeteilt (Komponenten)
Komponentenfeatures:
- Eine Komponente hat ihr eigenes Template, Daten, Methoden, berechnete Eigenschaften, etc.
- Komponente dienen als Bausteine
- Komponenten können geteilt werden, nicht nur über das eigene Projekt aber auch außerhalb
Versteckte Vorteile:
- Aktualisiert in der DOM nur Elemente, die aktualisiert werden müssen --> schneller
- Component Scoped CSS: CSS wird für jede Komponente einzeln geschrieben, deshalb keine Klassenkollisionen

Scrim 6: Single File Components
Ab hier wird es erstmal nicht funktionieren, weil vue über npm installiert werden muss.

Scrim 7: Styles in Components
Damit Styles nicht für alle Komponenten zugänglich sind, muss man das directive 
"scoped" in den öffnenden Tag hinzufügen: <style scoped>.
Dadurch sind diese Styles nur innerhalb der Komponente verfügbar.