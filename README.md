# DHL Barcode Generator

Website: https://pratt.de/dhl-barcode

Bei diesem Projekt handelt es sich um eine kleine Lebenserleichterung.

Die neuen DHL-Karten haben keinen Barcode mehr aufgedruckt, weshalb man an Packstationen nun immer die Postnummer über den Touchscreen eingeben muss. Die Karte ist also eigentlich völlig nutzlos geworden.

Die Packstationen (auch die neuen) haben natürlich aber weiterhin einen Barcode-Scanner, der auch die Postnummer einlesen kann.

Leider akzeptieren die Packstationen nur einen unnötig kompliziert berechneten Wert als Barcode, nicht direkt die Postnummer.

## Voraussetzungen

- die vorhandene Postnummer muss 8-stellig sein (die Postnummer findet ihr übrigens auch im DHL-Account)

## Berechnung und Generierung des Barcode

Die Berechnung der Nummer für den Barcode läuft folgendermaßen ab:

1. man multipliziert die Postnummer mit 631 (Postnummer * 631)
2. [Luhn-Prüfziffer](https://de.wikipedia.org/wiki/Luhn-Algorithmus) der in Schritt 1 berechneten Zahl berechnen
3. zusammensetzen der Nummer: "3000" + Ergebnis aus Schritt 1 + Luhn-Prüfziffer
4. aus dieser Zahlenkombination muss ein ITF-Barcode erzeugt werden

## Danksagung

Danke an folgende Projekte, deren Code eingebunden ist:

- [JsBarcode](https://github.com/lindell/JsBarcode)
- [SimplyCalc](https://simplycalc.com/luhn-source.php#:~:text=The%20Luhn%20algorithm%2C%20a%20simple,is%20in%20the%20public%20domain.) für den Luhn-Algorithmus

## Mitarbeit

Das hier ist mein allererstes Javascript-Projekt und ich bin wirklich kein Programmierer - demnach freue ich mich über alle Anmerkungen, Kommentare, Kritik, ... :)