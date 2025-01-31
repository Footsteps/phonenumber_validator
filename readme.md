1) sind es alles Zahlen, -, Leerzeichen, ()?
--> wenn nicht: invalid
2) gibt es den country code? 
   --> alles weg bis auf die Zahlen
   --> ist index 0 die 1?
--> wenn nicht: invalid

3) Klammer:
   --> gibts Klammern?
   falls ja:
   --> alles weg bis auf Klammern und Zahlen
   --> ist index 0 die 1? --> falls ja, weg damit
   --> dann checken: ist ( index 0 und ) index 4?

4) valid:  
optional: 1
optional: Klammer

dann 3 Zahlen

dann optional: Klammer / Leerzeichen / Klammer & Leerzeichen / Bindestrich

dann 3 Zahlen

dann optional: Leerzeichen / Bindestrich

dann 3 Zahlen
dann optional: Leerzeichen / Bindestrich

dann 4 Zahlen