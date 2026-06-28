import { SEOHead } from "@/components/SEOHead";

const PrivacyPolicy = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy | OTNO Access Solutions Kenya"
        description="Read the privacy policy for OTNO Access Solutions. Learn how we collect, use, and protect your information when you visit our website."
        canonicalPath="/privacy-policy"
      />
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative min-h-[45vh] flex items-center overflow-hidden bg-card">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60 z-10" />
          <div className="container mx-auto px-4 md:px-6 relative z-20 py-24 md:py-32">
            <div className="max-w-3xl">
              <p className="text-minimal text-muted-foreground mb-4">LEGAL</p>
              <h1 className="text-4xl md:text-6xl font-light text-architectural mb-6">
                Privacy Policy
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                This page is maintained by OTNO Access Solutions Limited to explain how we handle information on this website. It describes our current practices and is not a certification or legal guarantee.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-12 md:space-y-16">
              <div>
                <h2 className="text-xl md:text-2xl font-light text-architectural mb-4">Who we are</h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  OTNO Access Solutions Limited provides rope access, scaffolding, mobile access, and netting & decking services in Kenya and East Africa. Our registered office is in Nairobi, Kenya.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-light text-architectural mb-4">Information we collect</h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  We collect only the information you choose to provide when you contact us, such as your name, email address, phone number, and project details. We also receive standard technical data from your browser (for example, IP address, browser type, and pages visited) through our hosting and analytics providers.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-light text-architectural mb-4">How we use your information</h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  We use your information to respond to enquiries, prepare quotations, schedule work, and improve our website. We do not sell personal information to third parties.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>To respond to contact form submissions and emails</li>
                  <li>To provide quotes and project proposals</li>
                  <li>To maintain website security and performance</li>
                  <li>To understand how visitors use our site</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-light text-architectural mb-4">Cookies and analytics</h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Our site may use cookies and analytics tools to understand traffic and improve user experience. You can disable cookies in your browser settings. Analytics data is processed by third-party providers and is governed by their privacy policies.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-light text-architectural mb-4">Data sharing and subprocessors</h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We share information only with service providers who help us operate the website, communicate with customers, or manage projects. These providers may include hosting services, email providers, and analytics platforms. We require them to protect your information and use it only for the services they provide to us.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-light text-architectural mb-4">Data retention</h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We keep contact and project information for as long as needed to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. You may ask us to delete or update your information at any time.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-light text-architectural mb-4">Your rights</h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  You have the right to access, correct, or delete the personal information we hold about you. To make a request, contact us using the details below. We will respond as promptly as practicable.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-light text-architectural mb-4">Security</h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We use reasonable technical and organizational measures to protect the information we collect. However, no internet-based service can be completely secure, and we cannot guarantee the security of information transmitted to or from our site.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-light text-architectural mb-4">Changes to this policy</h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We may update this privacy policy from time to time. Changes will be posted on this page with the effective date noted below. Please review this page periodically.
                </p>
              </div>

              <div className="pt-8 border-t border-border">
                <h2 className="text-xl md:text-2xl font-light text-architectural mb-4">Contact us</h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  If you have questions about this privacy policy or how we handle your information, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    Email:{" "}
                    <a href="mailto:otnoacess@gmail.com" className="text-foreground hover:text-muted-foreground transition-colors duration-300">
                      otnoacess@gmail.com
                    </a>
                  </p>
                  <p>
                    WhatsApp:{" "}
                    <a href="https://wa.me/254723124739" target="_blank" rel="noreferrer" className="text-foreground hover:text-muted-foreground transition-colors duration-300">
                      +254 723 124739
                    </a>
                  </p>
                  <p>P.O. BOX 142-00502 Nairobi Karen</p>
                </div>
                <p className="text-minimal text-muted-foreground mt-6">
                  Effective date: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;
