# EmailJS Setup Guide

This guide will help you set up EmailJS to send contact form submissions to your email address.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your email account (shashankhegde1998@gmail.com)
5. Note down the **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to "Email Templates" in your EmailJS dashboard
2. Click "Create New Template"
3. Use this template structure:

**Subject:**
```
New Contact Form Message from {{name}}
```

**Email Body:**
```
You have received a new message from your portfolio website:

Name: {{name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down the **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys" in your EmailJS dashboard
2. Copy your **Public Key**

## Step 5: Update the Contact Component

Replace the placeholder values in `src/components/Contact.js` with your actual EmailJS credentials:

```javascript
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID',     // Replace with your actual Service ID
  'YOUR_TEMPLATE_ID',    // Replace with your actual Template ID
  form.current,
  'YOUR_PUBLIC_KEY'      // Replace with your actual Public Key
);
```

## Step 6: Test the Form

1. Start your React development server: `npm start`
2. Navigate to the contact section
3. Fill out the form and submit
4. Check your email (shashankhegde1998@gmail.com) for the test message

## Important Notes

- The free EmailJS plan allows 200 emails per month
- Make sure your email service (Gmail) allows "less secure app access" or use OAuth2
- The form will show success/error messages based on the email sending status
- All form data (name, email, subject, message) will be sent to your email address

## Troubleshooting

1. **Email not received**: Check your spam folder
2. **Service connection error**: Reconnect your email service in EmailJS
3. **Template error**: Make sure template variables match form field names
4. **API key error**: Verify your public key is correct

## Security Note

The public key is safe to use in client-side code, but never expose your private keys or service credentials in your frontend code. 