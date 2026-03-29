import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="font-heading font-bold text-idc-navy text-2xl mb-2">Get in Touch</h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          Reach out to us for chrome plating inquiries, product quotes, or any industrial
          manufacturing requirements. Our team typically responds within one business day.
        </p>
      </div>

      {/* Contact details */}
      <div className="flex flex-col gap-5">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-idc-navy flex items-center justify-center shrink-0">
            <MapPin size={18} className="text-idc-sky" />
          </div>
          <div>
            <p className="font-semibold text-idc-navy text-sm mb-0.5">Address</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              36 Chaulpatty Road,
              <br />
              Kolkata 700010,
              <br />
              West Bengal, India
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-idc-navy flex items-center justify-center shrink-0">
            <Phone size={18} className="text-idc-sky" />
          </div>
          <div>
            <p className="font-semibold text-idc-navy text-sm mb-0.5">Phone</p>
            <a
              href="tel:+919903621231"
              className="block text-gray-500 text-sm hover:text-idc-orange transition-colors"
            >
              +91 99036 21231
            </a>
            <a
              href="tel:+919831171196"
              className="block text-gray-500 text-sm hover:text-idc-orange transition-colors"
            >
              +91 98311 71196
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-idc-navy flex items-center justify-center shrink-0">
            <Mail size={18} className="text-idc-sky" />
          </div>
          <div>
            <p className="font-semibold text-idc-navy text-sm mb-0.5">Email</p>
            <a
              href="mailto:jpbanik@indiadevelopmentcompany.in"
              className="text-gray-500 text-sm hover:text-idc-orange transition-colors break-all"
            >
              jpbanik@indiadevelopmentcompany.in
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-idc-navy flex items-center justify-center shrink-0">
            <Clock size={18} className="text-idc-sky" />
          </div>
          <div>
            <p className="font-semibold text-idc-navy text-sm mb-0.5">Business Hours</p>
            <p className="text-gray-500 text-sm">Monday – Saturday: 9:00 AM – 6:00 PM IST</p>
          </div>
        </div>
      </div>

      {/* Google Maps embed */}
      <div className="rounded-2xl overflow-hidden border border-gray-200 h-64">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.473!2d88.3473!3d22.5726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s36+Chaulpatty+Road+Kolkata+700010!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="India Development Company Location — 36 Chaulpatty Road, Kolkata 700010"
        />
      </div>
    </div>
  );
};

export default ContactInfo;
