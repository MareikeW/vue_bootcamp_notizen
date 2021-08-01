Modul 2

Scrim 1:
Declarative Rendering & Attributes

Bei Attributen kann man nicht einfach schreiben:
    title="message", // Tooltip: message
sondern man muss schreiben:
    v-bind:title="message"
    oder
    :title="message" // Tooltip: Learning Vue
    --> it's binding to the message property