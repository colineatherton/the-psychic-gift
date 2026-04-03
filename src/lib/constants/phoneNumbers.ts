export const CALL_OPTIONS = [
  {
    title: "Credit/Debit Card",
    number: "0800 915 2345",
    mobileNumber: "0808 156 4931",
    price: "£32.95 for 20 mins, then £1.50/min",
    hours: "Open 8am–10pm",
  },
  {
    title: "Pre-Pay Minutes",
    number: "0808 156 4920",
    price: "£30 for 20 mins, then £1.50/min · 10% Bonus Mins on £60+ spends",
  },
  {
    title: "Pay by Phone Bill",
    number: "0906 110 0960",
    mobileNumber: "0906 110 0951",
    price: "£1.50/min + network access charge",
  },
];

export const NCO_NUMBER = "0808 156 4939";
export const HELPLINE_NUMBER = "0808 156 0022";
export const INTERNATIONAL_NUMBER = "+44 113 732 0619";
export const INTERNATIONAL_MOBILE_NUMBER = "+44 113 732 0633";

// Discover Offer — introductory rate for first-time callers
export const NEW_CLIENT_OFFER_CODE = "DISCOVER";
export const NEW_CLIENT_OFFER_LABEL = "New Client Offer";
export const NEW_CLIENT_OFFER_PRICE = "10 mins for £5";

// April Flash Sale — £5 off 20-min credit/debit card reading, 2nd–15th April 2026
export const FLASH_SALE = {
  label: "April Flash Sale",
  price: "£27.95 for 20 mins",
  perMin: "then £1.50/min",
  saving: "save £5",
  startDate: "2026-04-02",
  endDate: "2026-04-15",
  number: "0800 915 2345",
} as const;
