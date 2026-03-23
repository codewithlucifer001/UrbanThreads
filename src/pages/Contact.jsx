import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors({});
      setIsSubmitted(true);
      // Here you would typically send the form data to a server
      console.log('Form Submitted:', formData);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };
  
  return (
    <div className="bg-dark text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4">Get In Touch</h1>
          <div className="w-32 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          {isSubmitted ? (
            <div className="bg-dark-card p-8 rounded-lg text-center">
              <span className="text-2xl">✅</span>
              <h3 className="text-2xl font-bold mt-4">Message sent successfully!</h3>
              <p className="text-gray-400 mt-2">We will get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-dark-card p-8 rounded-lg space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className={`w-full bg-secondary-background p-3 rounded-lg border-2 ${formErrors.name ? 'border-red-500' : 'border-gray-700'} focus:border-gold focus:outline-none transition-colors`}/>
                  {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                </div>
                <div>
                  <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className={`w-full bg-secondary-background p-3 rounded-lg border-2 ${formErrors.email ? 'border-red-500' : 'border-gray-700'} focus:border-gold focus:outline-none transition-colors`}/>
                  {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                </div>
              </div>
              <div>
                <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} className={`w-full bg-secondary-background p-3 rounded-lg border-2 ${formErrors.subject ? 'border-red-500' : 'border-gray-700'} focus:border-gold focus:outline-none transition-colors`}/>
                {formErrors.subject && <p className="text-red-500 text-sm mt-1">{formErrors.subject}</p>}
              </div>
              <div>
                <textarea name="message" placeholder="Message" rows="4" value={formData.message} onChange={handleChange} className={`w-full bg-secondary-background p-3 rounded-lg border-2 ${formErrors.message ? 'border-red-500' : 'border-gray-700'} focus:border-gold focus:outline-none transition-colors`}></textarea>
                {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
              </div>
              <div className="text-center">
                <button type="submit" className="bg-gold text-dark font-bold py-3 px-8 rounded-lg hover:bg-gold-light transition-colors duration-300">
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default Contact;
