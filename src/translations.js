import { config } from './config';

const D = config.demo;

export const translations = {
  sv: {
    nav: {
      hem: 'Hem',
      osa: 'OSA',
      tal: 'Tal',
    },
    gate: {
      label: 'KOD FRÅN INBJUDAN:',
      submit: 'Öppna inbjudan',
      error: 'Fel kod, försök igen',
    },
    error: {
      title: 'Sidan finns inte',
      text: 'Länken kanske är gammal eller felskriven. Inga problem.',
      button: 'Till startsidan',
    },
    hero: {
      intro: ["Välkommen till vårt bröllop på Gamla Riksarkivet! Vigsel äger rum på plats klockan 15:00, därefter blir det mingel följt av middag och fest.",
        "Mer detaljerad info kommer närmare inpå bröllopsdagen."
      ],
      date: D ? 'Lördagen den 12 juni 2027' : 'Lördagen den 19 september 2026',
    },
    info: {
      datetime_label: 'DATUM & TID',
      datetime: D ? '12 juni 2027 · 15:00' : '19 september 2026 · 15:00',
      location_label: 'PLATS',
      location: 'Gamla Riksarkivet, Riddarholmen, Stockholm',
      dresscode_label: 'KLÄDKOD',
      dresscode: 'Mörk kavaj',
      // additionalInfo_label: 'BRA ATT VETA',
      // additionalInfo: [
      //   {
      //     gifts_label: 'Gåvor',
      //     gifts: 'Vi tar gärna emot gåvor'
      //   },
      //     {
      //       holdingTimes_label: 'Hålltider',
      //       holdingTimes: ['Vigsel: 15:00', 'Middag: 17:00', 'Lokal stänger: 02:00']
      //     }
      // ]
    },
    footer: {
      contact: 'Frågor? Kontakta oss på',
      venue: 'Gamla Riksarkivet, Stockholm',
    },
    osa: {
      header: 'O.S.A.',
      deadline: `Här kan du meddela din närvaro! Vänligen OSA senast den ${D ? '12:e maj' : '19:e augusti'}. Fyll i uppgifter för alla i ditt sällskap.`,
      name_label: 'Namn',
      name_placeholder: 'Förnamn Efternamn',
      attendance_label: 'Kommer ni?',
      yes: 'Ja, vi kommer!',
      no: 'Tyvärr kan vi inte',
      allergies_label: 'Allergier eller specialkost',
      allergies_placeholder: 'T.ex. gluten',
      message_label: 'Hälsning till brudparet',
      message_placeholder: 'Skriv en hälsning...',
      submit: 'Skicka svar',
      sending: 'Skickar',
      thanks_title: 'Tack för ditt svar!',
      thanks_text: 'Vi ser fram emot att fira tillsammans med er!',
      guest: 'Gäst',
      add_guest: 'Lägg till gäst',
      remove_guest: 'Ta bort',
    },
    tal: {
      header: 'Anmäl Tal',
      subtext: 'Vill du hålla tal? Fyll i formuläret för att meddela toastmastern!',
      name_label: 'Ditt namn',
      name_placeholder: 'Förnamn Efternamn',
      contact_label: 'E-post eller telefon',
      contact_placeholder: 'Så vi kan nå dig',
      type_label: 'Vad vill du göra?',
      opt_tal: 'Hålla tal',
      opt_video: 'Visa video/bilder',
      opt_annat: 'Annat',
      requirements_label: 'Behöver du teknik? (Mikrofon, projektor etc.)',
      requirements_placeholder: 'T.ex. Ja, en mikrofon',
      submit: 'Anmäl till toastmastern',
      sending: 'Skickar',
      thanks_title: 'Tack för din anmälan!',
      thanks_text: 'Toastmastern har fått din information och hör av sig om det behövs.',
    },
  },
  en: {
    nav: {
      hem: 'Home',
      osa: 'RSVP',
      tal: 'Speech',
    },
    gate: {
      label: 'CODE FROM THE INVITATION:',
      submit: 'Open invitation',
      error: 'Incorrect code, please try again',
    },
    error: {
      title: 'Page not found',
      text: 'The link might be outdated or mistyped. No worries.',
      button: 'Back to home',
    },
    hero: {
      intro: [
        "Welcome to our wedding at Gamla Riksarkivet! The ceremony will take place on-site at 3:00 PM, followed by a reception, dinner, and party.",
        "More detailed info will be available closer to the wedding day."
      ],
      date: D ? 'Saturday 12 June 2027' : 'Saturday 19 September 2026',
    },
    info: {
      datetime_label: 'DATE & TIME',
      datetime: D ? '12 June 2027 · 3:00 PM' : '19 September 2026 · 3:00 PM',
      location_label: 'LOCATION',
      location: 'Gamla Riksarkivet, Riddarholmen, Stockholm',
      dresscode_label: 'DRESS CODE',
      dresscode: 'Dark suit',
      // additionalInfo_label: 'GOOD TO KNOW',
      // additionalInfo: [
      //   {
      //     gifts_label: 'Gifts',
      //     gifts: 'We would like to receive gifts'
      //   },
      //   {
      //     holdingTimes_label: 'Schedule',
      //     holdingTimes: ['Ceremony - 3:00 PM', 'Dinner - 5:00 PM', 'Building closes - 02:00 AM']
      //   }
      // ]
    },
    footer: {
      contact: 'Questions? Contact us at',
      venue: 'Gamla Riksarkivet, Stockholm',
    },
    osa: {
      header: 'R.S.V.P.',
      deadline: `Let us know if you will attend! Please reply by the ${D ? '12th of May' : '19th of August'}. Fill in details for everyone in your party.`,
      name_label: 'Name',
      name_placeholder: 'First name Last name',
      attendance_label: 'Will you attend?',
      yes: 'Yes, we will be there!',
      no: 'Unfortunately we cannot make it',
      allergies_label: 'Allergies or dietary requests',
      allergies_placeholder: 'E.g. nut allergy',
      message_label: 'Message to the couple',
      message_placeholder: 'Write a message...',
      submit: 'Send reply',
      sending: 'Sending',
      thanks_title: 'Thank you!',
      thanks_text: 'We look forward to celebrating with you!',
      guest: 'Guest',
      add_guest: 'Add guest',
      remove_guest: 'Remove',
    },
    tal: {
      header: 'Register a Speech',
      subtext: 'Would you like to make a speech? Fill in the form to notify the toastmaster!',
      name_label: 'Your name',
      name_placeholder: 'First name Last name',
      contact_label: 'Email or phone',
      contact_placeholder: 'So we can reach you',
      type_label: 'What would you like to do?',
      opt_tal: 'Give a speech',
      opt_video: 'Show a video/slideshow',
      opt_annat: 'Other',
      requirements_label: 'Do you need any equipment? (Microphone, projector etc.)',
      requirements_placeholder: 'E.g. Yes, a microphone',
      submit: 'Send to the toastmaster',
      sending: 'Sending',
      thanks_title: 'Thank you for registering!',
      thanks_text: 'The toastmaster has received your information and will reach out if needed.',
    },
  },
};
