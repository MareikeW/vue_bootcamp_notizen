Modul 3

Scrim 1:
Attribut: v-once <div v-once>{{ message }}</div>
--> message wird nur einmal aktualisiert

Attribut: v-html="message" <div v-html="message"></div>
            &
          data: {
              message: "<strong>HELLO</strong>"
          }
--> message ist fett
--> v-html macht styling unten in "app" zulässig

Attribut: v-text="message" <div v-text="message"></div> === <div>{{ message }}</div>

            & beides mit:
          data: {
              message: "<strong>HELLO</strong>"
          }
--> zeigt im Browser: <strong>HELLO</strong>

Ternary in html: 
    <div>{{ message === "hello" ? "YES" : "NO" }}</div>
            &
          data: {
              message: false
          }
--> zeigt im Browser: NO
--> sowas sollte man aber lieber mit einer berechneten Eigenschaft machen

Rechnung in html:
    <div>{{ message + 200 }}</div>
            &
          data: {
              message: 100
          }
--> zeigt im Browser: 300

Custom String in title-Attribut:
    <div :title="'before ' + message"></div>
            &
          data: {
              message: "Hello title"
          }