# EmailJS Debugging Guide

If you're getting errors with EmailJS, follow these steps to troubleshoot:

## 1. Check Browser Console

Open your browser's developer tools (F12) and check the console for error messages when you submit the form. The error details will help identify the issue.

## 2. Verify Your EmailJS Setup

### Check Service ID
- Go to EmailJS Dashboard → Email Services
- Verify that `service_xmm5nlf` is your correct Service ID
- Make sure the service is connected and active

### Check Template ID
- Go to EmailJS Dashboard → Email Templates
- Verify that `template_4ebhf68` is your correct Template ID
- Make sure the template variables match your form field names:
  - `{{name}}`
  - `{{email}}`
  - `{{subject}}`
  - `{{message}}`

### Check Public Key
- Go to EmailJS Dashboard → Account → API Keys
- Verify that `3IJbDCNm8dkXWYlho` is your correct Public Key

## 3. Common Issues and Solutions

### Issue: "Service not found"
- **Solution**: Check your Service ID and make sure the email service is properly connected

### Issue: "Template not found"
- **Solution**: Check your Template ID and make sure the template exists

### Issue: "Invalid API key"
- **Solution**: Check your Public Key and make sure it's correct

### Issue: "Email service connection failed"
- **Solution**: Reconnect your email service in EmailJS dashboard

### Issue: "Template variables missing"
- **Solution**: Make sure your form field names match the template variables exactly

## 4. Test Your Setup

1. **Test Service Connection**:
   - In EmailJS dashboard, try sending a test email from your service
   - Make sure you receive the test email

2. **Test Template**:
   - In EmailJS dashboard, try sending a test email using your template
   - Make sure the template variables are populated correctly

3. **Test from Your Website**:
   - Fill out the form with test data
   - Check browser console for any errors
   - Check if you receive the email

## 5. Alternative Debugging Method

If you're still having issues, try this alternative approach:

```javascript
// Add this to your handleSubmit function for debugging
console.log('Form data:', formData);
console.log('Form element:', form.current);
console.log('EmailJS credentials:', {
  serviceId: 'service_xmm5nlf',
  templateId: 'template_4ebhf68',
  publicKey: '3IJbDCNm8dkXWYlho'
});
```

## 6. Check EmailJS Plan Limits

- Free plan: 200 emails per month
- Check if you've exceeded your monthly limit
- Upgrade plan if needed

## 7. Contact EmailJS Support

If none of the above solutions work:
1. Check EmailJS documentation: https://www.emailjs.com/docs/
2. Contact EmailJS support with your error details
3. Provide them with your Service ID, Template ID, and error messages 