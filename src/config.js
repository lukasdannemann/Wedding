
const DEMO = import.meta.env.VITE_DEMO_MODE === 'true';

export const config = {
  demo: DEMO,
  coupleNames: DEMO ? 'Alex & Sam' : 'Calle & Siobhán',
  contactEmail: DEMO ? 'hello@example.com' : 'siobhan.jansson@gmail.com',
  // Klientside-grind, ingen riktig säkerhet — bara en mjuk spärr.
  accessCode: DEMO ? '2025' : '1910',
  // I demoläge är endpointsen tomma → formulären anropar aldrig backend.
  osaEndpoint: DEMO
    ? ''
    : 'https://script.google.com/macros/s/AKfycbxvzEnaWFFOK18SqS65JtlHmaYqUY6W0NN1-b1xv_kpB_u2th022x897qAriqITZYzo/exec',
  talEndpoint: DEMO
    ? ''
    : 'https://script.google.com/macros/s/AKfycbxNwT66Uq1c5hyRVPCPSqLx2_eyUTLZLENPW9_m3t9DDm0FzCBns2dRNKex0qHM3ZIuOA/exec',
  // Fyll i /exec-URL:en efter att Gåvor-scriptet är distribuerat.
  gavaEndpoint: DEMO
    ? ''
    : 'https://script.google.com/macros/s/AKfycbzRsWPVMBxEjIX8N451UwcG4ugO2lEgDePXitSrdBQkz9lp1GsXEt0nvMg1sBUu2diUng/exec',
};
