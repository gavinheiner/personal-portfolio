import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
  website: string;
  formStartTime: number; 
}

interface FormStatus {
  loading: boolean;
  error: string | null;
  success: boolean;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    website: '',
    formStartTime: Date.now() 
  });
  
  const [formStatus, setFormStatus] = useState<FormStatus>({
    loading: false,
    error: null,
    success: false
  });
  
  const [submitCount, setSubmitCount] = useState<number>(0);
  
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (submitCount >= 3) {
      setFormStatus({ 
        loading: false, 
        error: "Too many submissions. Please wait a moment before trying again.", 
        success: false 
      });
      
      timer = setTimeout(() => {
        setSubmitCount(0);
        setFormStatus({ loading: false, error: null, success: false });
      }, 60000); 
    }
    
    return () => clearTimeout(timer);
  }, [submitCount]);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitCount(prev => prev + 1);
    
    if (submitCount >= 3) return;
    
    setFormStatus({
      loading: true,
      error: null,
      success: false
    });

    const timeSpent = Date.now() - formData.formStartTime;
    
    if (timeSpent < 3000) {
      setTimeout(() => {
        setFormStatus({ loading: false, error: null, success: true });
        setFormData({ 
          name: '', 
          email: '', 
          message: '', 
          website: '', 
          formStartTime: Date.now() 
        });
      }, 1000);
      return;
    }

    try {
      const emailData = {
        email: formData.email,
        subject: `Contact Form Message from ${formData.name}`,
        message: 
`Name: ${formData.name}
Email: ${formData.email}
Message:

${formData.message}
`,
        website: formData.website 
      };

      const API_URL = import.meta.env.VITE_API_URL;

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message.');
      }

      setFormStatus({ loading: false, error: null, success: true });
      setFormData({ 
        name: '', 
        email: '', 
        message: '', 
        website: '', 
        formStartTime: Date.now() 
      });
      
      setTimeout(() => {
        setFormStatus(prevState => ({
          ...prevState,
          success: false
        }));
      }, 5000);
      
    } catch (error) {
      setFormStatus({ 
        loading: false, 
        error: error instanceof Error ? error.message : 'An unknown error occurred.', 
        success: false 
      });
    }
  };

  return (
    <section id="contact" className="mb-16 scroll-mt-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Get In Touch</h3>
          <p className="text-gray-600 mb-6">
            Feel free to reach out with any questions, opportunities, or just to say hello.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Email</p>
                <a href="mailto:gavin.heiner@gmail.com" className="text-blue-600 hover:underline">gavin.heiner@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Location</p>
                <p className="text-gray-600">Canton, MI</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Send a Message</h3>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            
            {/* Honeypot */}
            <div className="hidden">
              <label>Website (leave this empty)</label>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
            
            <button
              type="submit"
              disabled={formStatus.loading || submitCount >= 3}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 disabled:bg-blue-300"
            >
              {formStatus.loading ? 'Sending...' : 'Send Message'}
            </button>
            
            {formStatus.success && (
              <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
                Thank you! Your message has been sent.
              </div>
            )}
            
            {formStatus.error && (
              <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
                Error: {formStatus.error}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;