# Pedrotti MVP — Complete Technical README

Acest document explică **arhitectura completă a MVP-ului Pedrotti**, inclusiv:
- stack-ul ales
- structura proiectului
- fiecare componentă importantă
- flow-ul de conversie
- integrarea WhatsApp + geolocation
- Google Analytics 4
- deploy pe Vercel
- pași de extindere

---

# 1) Stack

Am ales:

- **Next.js (App Router)**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **lucide-react** pentru iconițe
- **Google Analytics 4** pentru tracking
- **Vercel** pentru deploy

## De ce acest stack

Este ideal pentru:
- landing pages rapide
- SEO bun
- performanță
- imagini optimizate
- mobile-first
- MVP rapid
- scalare ulterioară

---

# 2) Structura proiectului

```txt
app/
  layout.tsx
  page.tsx

components/
  hero/
    Hero.tsx
    HeroLogo.tsx
    HeroContent.tsx
    HeroActions.tsx
  layout/
    SectionContainer.tsx
  Services.tsx
  FleetGallery.tsx
  Locations.tsx
  StickyMobileBar.tsx
  LocationWhatsAppButton.tsx
  LegalFooter.tsx

lib/
  site-data.ts
  service-icons.ts
  gtag.ts

public/
  images/
    logo-pedrotti.png
    fleet/
      tow-truck-1.jpg
      heavy-recovery.jpg
      workshop-lift.jpg
      tire-service.jpg
```

---

# 3) Arhitectura paginii

Ordinea secțiunilor:

1. Hero
2. Services
3. FleetGallery
4. Locations
5. LegalFooter
6. StickyMobileBar

## Flow UX

### Hero
Scop: conversie imediată

- logo puternic
- headline
- CTA-uri
- call
- WhatsApp
- GPS location

### Services
Explică serviciile Pedrotti.

### FleetGallery
Proof vizual cu flota reală.

### Locations
Sedii + Maps + contact.

### StickyMobileBar
Conversie permanentă pe mobil.

---

# 4) Date centralizate — `site-data.ts`

Toate datele importante sunt într-un singur loc:

- company
- hero
- services
- locations

Avantaj:

Dacă schimbăm:
- telefon
- adresă
- servicii
- CTA text

modificăm doar un singur fișier.

---

# 5) Hero

## `Hero.tsx`
Este containerul principal.

Compune:
- HeroLogo
- HeroContent
- HeroActions

## `HeroLogo.tsx`
Afișează logo-ul Pedrotti.

Important:
logo-ul are width controlat pe breakpoint-uri.

## `HeroContent.tsx`
Conține:
- badge
- H1
- subtitle

H1 a fost optimizat pentru mobil:

```tsx
text-2xl sm:text-5xl md:text-6xl
```

## `HeroActions.tsx`
Client component.

Conține:
- Chiama ora
- WhatsApp
- Invia posizione

Este client pentru că folosește:
- onClick
- analytics
- componentă cu geolocation

---

# 6) Geolocation V2 + WhatsApp

## `LocationWhatsAppButton.tsx`
Aceasta este una dintre cele mai importante componente.

## Flow

1. user click
2. browser cere locația
3. luăm lat/lng
4. construim Google Maps URL
5. deschidem WhatsApp cu linkul în mesaj

## Logică principală

```tsx
navigator.geolocation.getCurrentPosition(...)
```

## Success

Construim:

```txt
https://www.google.com/maps?q=lat,lng
```

și îl punem în mesajul WhatsApp.

## Fallback

Dacă:
- user refuză
- browserul eșuează
- nu există geolocation

se deschide WhatsApp cu mesaj pentru trimitere manuală.

## De ce e bună componentizarea

Această componentă este reutilizată în:
- HeroActions
- StickyMobileBar

Fără duplicare de logică.

---

# 7) Services

## Structură corectă

Fiecare serviciu are:

```ts
{
  title,
  description,
  iconKey
}
```

Exemplu:

```ts
{
  title: "Autofficina",
  description: "Diagnosi e riparazioni.",
  iconKey: "wrench"
}
```

## De ce `iconKey`

Este mult mai robust decât array după index.

Dacă schimbăm ordinea serviciilor, iconițele rămân corecte.

## `service-icons.ts`
Mapează:

```ts
wrench -> Wrench
truck -> Truck
car -> Car
```

Separăm:
- datele
- UI
- icon logic

Best practice.

---

# 8) FleetGallery

Această secțiune crește mult încrederea.

Imagini:
- tow truck
- heavy recovery
- workshop
- tire service

## De ce e importantă

Pedrotti vinde:
- capacitate operațională
- heavy recovery
- mezzi pesanti
- infrastructură reală

Imaginile reale convertesc mai bine decât textul.

## Next Image

Folosim:

```tsx
<Image fill sizes="(max-width: 639px) 100vw, 50vw" />
```

### De ce `sizes`
Pentru performanță și Core Web Vitals.

---

# 9) Locations

Această secțiune conține:

- cele 2 sedii
- buton Maps
- contact general

## Structură date

```ts
{
  name,
  addressLine1,
  addressLine2,
  mapsUrl
}
```

## Maps CTA

Fiecare card are:

```tsx
Apri su Maps
```

care deschide Google Maps.

## Contact card

Conține:
- telefon
- email
- website

Toate sunt linkuri funcționale.

---

# 10) StickyMobileBar

Una dintre cele mai bune componente pentru conversii.

Vizibilă doar pe mobil:

```tsx
md:hidden
```

Conține:
- Call
- WhatsApp
- Position

## De ce este importantă

Userul poate:
- scrolla mult
- fi stresat
- avea telefonul într-o mână

CTA-urile rămân mereu accesibile.

---

# 11) Analytics — Google Analytics 4

Measurement ID folosit:

```txt
G-11N01GEZSR
```

## `lib/gtag.ts`
Conține:

- `GA_MEASUREMENT_ID`
- `trackEvent()`

### helper

```ts
trackEvent("phone_click")
```

Este folosit peste tot.

## `app/layout.tsx`
GA4 este injectat global prin:

```tsx
<GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
```

Asta activează automat:
- page views
- realtime reports

---

# 12) Event tracking implementat

## Hero

### Call

```ts
phone_click
```

### WhatsApp

```ts
whatsapp_click
```

### GPS

```ts
location_click
```

## Locations

### Maps

```ts
maps_click
```

---

# 13) KPI-uri urmărite

Aceste evenimente sunt direct KPI de business:

- apeluri
- WhatsApp
- locații GPS
- deschideri Maps

Asta permite calcul ROI.

Exemplu:

> 120 phone clicks / lună
> 80 WhatsApp starts
> 35 GPS shares

---

# 14) Deploy

Deploy pe **Vercel**.

Avantaje:
- HTTPS
- geolocation merge perfect
- preview links
- deploy rapid
- ideal pentru Next.js

URL curent:

```txt
https://pedrotti.vercel.app/
```

---

# 15) Recomandări pentru next iteration

## High ROI

### 1. SEO local

- Trento
- Mori
- soccorso stradale
- mezzi pesanti
- autogrù

### 2. Google Business optimization

### 3. Google Ads local emergency intent

### 4. Lead dashboard

### 5. CRM / WhatsApp Business API

---

# 16) MVP status

## MVP este production ready

Include:

- UI premium
- mobile first
- geolocation reală
- WhatsApp automation
- Maps
- analytics
- deploy live

Acesta este deja un MVP foarte bun pentru demo client și primele lead-uri.

---

# 17) Business positioning

Acest MVP poate fi vândut ca:

## Pacchetto MVP Landing + Tracking

Include:
- redesign homepage
- CTA conversion system
- WhatsApp GPS
- Google Analytics
- deploy
- maintenance

Perfect pentru piața din Italia.

