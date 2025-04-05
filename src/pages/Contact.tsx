
import Layout from "@/components/layout/Layout";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">{t('contactUs')}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or want to learn more about Protsahan? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6 text-blue-700">{t('getInTouch')}</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="text-yellow-500 mr-3 mt-1" size={20} />
                <div>
                  <h3 className="font-medium">{t('email')}</h3>
                  <a href="mailto:aryanfeb17@gmail.com" className="text-blue-600 hover:underline">
                    aryanfeb17@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-yellow-500 mr-3 mt-1" size={20} />
                <div>
                  <h3 className="font-medium">{t('phone')}</h3>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Linkedin className="text-yellow-500 mr-3 mt-1" size={20} />
                <div>
                  <h3 className="font-medium">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/aryy8" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    linkedin.com/in/aryy8
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-yellow-500 mr-3 mt-1" size={20} />
                <div>
                  <h3 className="font-medium">{t('address')}</h3>
                  <p>Delhi, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6 text-blue-700">{t('sendMessage')}</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  {t('yourName')}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t('yourName')}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  {t('email')}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t('yourEmail')}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  {t('yourMessage')}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t('yourMessage')}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                {t('sendMessage')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
