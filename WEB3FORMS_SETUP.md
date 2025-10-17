# Web3Forms Integration Setup

This project uses Web3Forms for handling contact form and demo form submissions. Follow these steps to set up the integration:

## 1. Get Web3Forms Access Key

1. Go to [https://web3forms.com/](https://web3forms.com/)
2. Sign up for a free account
3. Create a new form and get your access key
4. Copy the access key

## 2. Configure Access Keys

1. Open `src/config/web3forms.ts`
2. Replace `'YOUR_WEB3FORMS_ACCESS_KEY'` with your actual access key:

```typescript
export const WEB3FORMS_CONFIG = {
  // Demo Form Access Key
  DEMO_FORM_ACCESS_KEY: "your-actual-access-key-here",

  // Contact Form Access Key (can be the same or different)
  CONTACT_FORM_ACCESS_KEY: "your-actual-access-key-here",

  // Web3Forms API URL
  API_URL: "https://api.web3forms.com/submit",
};
```

## 3. Forms Integrated

### Demo Form

- **Location**: Used across multiple pages (Home, About, Agents, Pricing, Contact)
- **Fields**: First Name, Last Name, Email, Phone, Area of Interest, Selected Agent
- **Access Key**: `DEMO_FORM_ACCESS_KEY`

### Contact Form

- **Location**: Contact Page
- **Fields**: First Name, Last Name, Email, Company Name, Phone, Area of Interest, Message
- **Access Key**: `CONTACT_FORM_ACCESS_KEY`

## 4. Features

- ✅ Real-time form submission to Web3Forms
- ✅ Loading states with spinner animations
- ✅ Success/error message display
- ✅ Form validation
- ✅ Auto-reset after successful submission
- ✅ Responsive design
- ✅ TypeScript support

## 5. Testing

1. Start your development server: `npm run dev`
2. Navigate to any page with a "Book a Demo" button
3. Fill out and submit the demo form
4. Check your email for the form submission
5. Test the contact form on the Contact page

## 6. Troubleshooting

- **Forms not submitting**: Check that your access key is correct
- **No emails received**: Check your spam folder and verify the access key
- **Console errors**: Check the browser console for detailed error messages

## 7. Customization

You can customize the form behavior by modifying:

- `src/components/DemoForm.tsx` - Demo form component
- `src/pages/ContactPage.tsx` - Contact form implementation
- `src/config/web3forms.ts` - Configuration settings

## 8. Web3Forms Dashboard

Monitor your form submissions at [https://web3forms.com/dashboard](https://web3forms.com/dashboard)
