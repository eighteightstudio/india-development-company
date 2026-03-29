import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | India Development Company",
  description:
    "Terms of Service for the India Development Company website — governing use, liability, intellectual property, and governing law.",
};

export default function TermsPage() {
  return (
    <>
      <div className="bg-idc-navy pt-36 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-idc-white">
            Terms of Service
          </h1>
          <p className="text-idc-sky/70 text-sm mt-2">Last updated: January 2025</p>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-idc-navy prose-p:text-gray-600 prose-li:text-gray-600">

            <p>
              Welcome to the website of India Development Company (&quot;IDC&quot;, &quot;we&quot;,
              &quot;us&quot;, or &quot;our&quot;). By accessing or using this website at{" "}
              <a href="https://indiadevelopmentcompany.in">indiadevelopmentcompany.in</a>, you agree
              to be bound by the following Terms of Service. Please read them carefully.
            </p>

            <h2>1. Use of Website</h2>
            <p>
              This website is intended for informational and business inquiry purposes only. You may
              use this website to:
            </p>
            <ul>
              <li>Learn about India Development Company&apos;s services and products.</li>
              <li>Submit inquiries through the contact form.</li>
              <li>Read educational and industry content published on the blog.</li>
            </ul>
            <p>
              You agree not to use this website for any unlawful purpose, to transmit harmful or
              offensive content, or to attempt to gain unauthorised access to any portion of the
              site or its related systems.
            </p>

            <h2>2. Intellectual Property</h2>
            <p>
              All content on this website — including text, images, logos, technical descriptions,
              and blog articles — is the intellectual property of India Development Company unless
              otherwise noted. Reproduction, distribution, or modification of any content without
              prior written permission from IDC is strictly prohibited.
            </p>

            <h2>3. Accuracy of Information</h2>
            <p>
              IDC makes reasonable efforts to ensure that all information on this website is
              accurate and up to date. However, we do not warrant that the content is free from
              errors. Product specifications, pricing, and availability are subject to change
              without notice. For confirmed specifications, please contact us directly.
            </p>

            <h2>4. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, India Development Company shall not
              be liable for any direct, indirect, incidental, special, or consequential damages
              arising from:
            </p>
            <ul>
              <li>Use or inability to use this website.</li>
              <li>Errors or omissions in website content.</li>
              <li>Any action taken in reliance on the information provided herein.</li>
            </ul>
            <p>
              All services described on this website are subject to separate commercial agreements
              between IDC and its clients.
            </p>

            <h2>5. Third-Party Links</h2>
            <p>
              This website may contain links to third-party websites for reference purposes. IDC
              does not control or endorse such websites and is not responsible for their content or
              privacy practices.
            </p>

            <h2>6. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws
              of India. Any disputes arising from the use of this website shall be subject to the
              exclusive jurisdiction of the courts in Kolkata, West Bengal, India.
            </p>

            <h2>7. Changes to These Terms</h2>
            <p>
              IDC reserves the right to update these Terms of Service at any time. Changes will be
              posted on this page with an updated date. Continued use of the website after changes
              constitutes acceptance of the updated terms.
            </p>

            <h2>8. Contact</h2>
            <p>
              For questions about these Terms of Service, please contact us:
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
