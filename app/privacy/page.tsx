import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | India Development Company",
  description:
    "Privacy Policy for India Development Company — covering data collection, usage, cookies, and your rights under Indian law.",
};

export default function PrivacyPage() {
  return (
    <>
      <div className="bg-idc-navy pt-36 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-idc-white">
            Privacy Policy
          </h1>
          <p className="text-idc-sky/70 text-sm mt-2">Last updated: January 2025</p>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-idc-navy prose-p:text-gray-600 prose-li:text-gray-600">

            <p>
              India Development Company (&quot;IDC&quot;, &quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, and safeguard information when you visit our website at{" "}
              <a href="https://indiadevelopmentcompany.in">indiadevelopmentcompany.in</a>.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We may collect the following information when you interact with our website:</p>
            <ul>
              <li>
                <strong>Contact form submissions:</strong> Full name, company name, email address,
                phone number, subject, and message content.
              </li>
              <li>
                <strong>Usage data:</strong> Pages visited, time spent, browser type, and device
                information — collected via analytics tools (if enabled).
              </li>
              <li>
                <strong>Cookies:</strong> Small files stored on your device to improve website
                functionality and user experience.
              </li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>Information collected through this website is used solely to:</p>
            <ul>
              <li>Respond to your business inquiries and quote requests.</li>
              <li>Improve website content and user experience.</li>
              <li>Communicate service updates relevant to your inquiry.</li>
            </ul>
            <p>
              We do not sell, rent, or share your personal information with any third party for
              marketing purposes.
            </p>

            <h2>3. Cookies</h2>
            <p>
              Our website may use essential cookies to ensure basic functionality (e.g., form
              submissions). We do not use third-party advertising cookies. You may disable cookies
              in your browser settings, though this may affect certain features of the website.
            </p>

            <h2>4. Data Retention</h2>
            <p>
              Contact form data is retained only for as long as necessary to respond to your inquiry
              or fulfil a business purpose. We do not maintain marketing databases of website
              visitors.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We implement reasonable technical and organisational measures to protect your personal
              data against unauthorised access, alteration, disclosure, or destruction. However, no
              method of transmission over the internet is 100% secure.
            </p>

            <h2>6. Third-Party Services</h2>
            <p>
              This website may use third-party services (such as form handling, analytics, or image
              hosting) that have their own privacy policies. IDC is not responsible for the privacy
              practices of such third-party services.
            </p>

            <h2>7. Your Rights</h2>
            <p>
              Under applicable Indian law (including the Information Technology Act, 2000 and
              associated rules), you have the right to:
            </p>
            <ul>
              <li>Request access to the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your data, subject to legal obligations.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the details below.
            </p>

            <h2>8. Governing Law</h2>
            <p>
              This Privacy Policy is governed by the laws of India, including the Information
              Technology Act, 2000. Any disputes shall be subject to the jurisdiction of courts in
              Kolkata, West Bengal, India.
            </p>

            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this
              page with a revised date. Continued use of the website constitutes acceptance of the
              updated policy.
            </p>

            <h2>10. Contact for Data Requests</h2>
            <p>
              For any privacy-related queries or data requests, please contact:
            </p>
            <ul>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:jpbanik@indiadevelopmentcompany.in">
                  jpbanik@indiadevelopmentcompany.in
                </a>
              </li>
              <li>
                <strong>Phone:</strong> +91 99036 21231
              </li>
              <li>
                <strong>Address:</strong> 36 Chaulpatty Road, Kolkata 700010, West Bengal, India
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
