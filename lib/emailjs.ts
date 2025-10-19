import emailjs from '@emailjs/browser';

// EmailJS configuration
export const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_f6sp9ta',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_pw8zz0t',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key_here',
};

// Initialize EmailJS
export const initializeEmailJS = () => {
  if (typeof window !== 'undefined') {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }
};

// Send email function
export const sendEmail = async (templateParams: {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  to_email: string;
  reply_to: string;
}) => {
  try {
    const result = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );
    
    return {
      success: true,
      status: result.status,
      text: result.text
    };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

// Template parameter types
export interface EmailTemplateParams {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  to_email: string;
  reply_to: string;
}
