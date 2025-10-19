# EmailJS Setup Guide

## 🚀 **EmailJS Configuration Complete!**

আপনার EmailJS integration সম্পূর্ণ হয়েছে। এখন শুধু EmailJS dashboard এ template setup করতে হবে।

## 📧 **EmailJS Template Setup:**

### **1. EmailJS Dashboard এ যান:**
- [EmailJS Dashboard](https://dashboard.emailjs.com) এ login করুন
- আপনার account: `portfolio`

### **2. Template Setup:**
- **Template ID:** `template_pw8zz0t`
- **Service ID:** `service_f6sp9ta`

### **3. Template Content:**
EmailJS template এ এই variables ব্যবহার করুন:

```html
Subject: Portfolio Contact: {{subject}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
Reply to: {{reply_to}}
```

### **4. Environment Variables (.env.local):**
আপনার project root এ `.env.local` file তৈরি করুন:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_f6sp9ta
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_pw8zz0t
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Important:** EmailJS dashboard থেকে আপনার **Public Key** copy করে `.env.local` এ paste করুন।

### **5. Gmail Setup:**
- Gmail account: `ausiaam83@gmail.com` ✅ (Already connected)
- Service: Gmail ✅ (Already connected)

## 🧪 **Testing:**

1. **Development server start করুন:**
```bash
npm run dev
```

2. **Contact form test করুন:**
- Name: Test User
- Email: test@example.com
- Subject: Test Message
- Message: This is a test message

3. **Check করুন:**
- Console এ success message দেখুন
- Gmail inbox এ email আসবে

## 🔧 **Troubleshooting:**

### **Common Issues:**

1. **"Public key not found" error:**
   - `.env.local` file check করুন
   - Public key correct আছে কিনা check করুন

2. **"Template not found" error:**
   - Template ID correct আছে কিনা check করুন
   - EmailJS dashboard এ template active আছে কিনা check করুন

3. **"Service not found" error:**
   - Service ID correct আছে কিনা check করুন
   - Gmail service connected আছে কিনা check করুন

### **Debug Steps:**
1. Browser console check করুন
2. Network tab এ API calls check করুন
3. EmailJS dashboard এ logs check করুন

## 📱 **Features Added:**

✅ **Form Validation** - Real-time validation
✅ **Loading States** - User feedback during submission
✅ **Success/Error Messages** - Clear user feedback
✅ **EmailJS Integration** - Direct email sending
✅ **Error Handling** - Graceful error management
✅ **TypeScript Support** - Type safety

## 🎯 **Next Steps:**

1. **Environment variables setup করুন**
2. **EmailJS template configure করুন**
3. **Test করুন**
4. **Deploy করুন**

আপনার contact form এখন fully functional! 🎉
