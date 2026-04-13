import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { type FormEvent, useState } from "react";
import { SERVICES } from "@/data/services";
import constructionModern from "@/assets/construction-modern-skyscrapers.jpg";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("fullName") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const message = String(formData.get("message") || "");

    const subject = `Enquiry from ${name}`;
    const body = [`Name: ${name}`, `Email: ${email}`, `Phone: ${phone}`, "", message].join("\n");
    window.location.href = `mailto:otnoacess@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero with image */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-card">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40 z-10" />
        <img
          src={constructionModern}
          alt="Modern construction skyscrapers"
          className="absolute right-0 top-0 h-full w-2/3 object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="container mx-auto px-6 relative z-20 py-32">
          <div className="max-w-2xl">
            <p className="text-minimal text-muted-foreground mb-4">GET IN TOUCH</p>
            <h1 className="text-6xl md:text-8xl font-light text-architectural mb-8">
              CONTACT US
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              Let's discuss how we can deliver safe and efficient access solutions for your next project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact details + form */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20">
              <div>
                <h2 className="text-4xl md:text-5xl font-light text-architectural mb-12">
                  Let's Discuss
                  <br />
                  Your Project
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">EMAIL</h3>
                    <a
                      href="mailto:otnoacess@gmail.com"
                      className="text-xl hover:text-muted-foreground transition-colors duration-300"
                    >
                      otnoacess@gmail.com
                    </a>
                  </div>

                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">WHATSAPP</h3>
                    <a
                      href="https://wa.me/254723124739"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xl hover:text-muted-foreground transition-colors duration-300"
                    >
                      Chat with us
                    </a>
                  </div>

                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">POSTAL ADDRESS</h3>
                    <p className="text-xl">P.O. BOX 142-00502 Nairobi Karen</p>
                  </div>

                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">OFFICE</h3>
                    <address className="text-xl not-italic">
                      Embakasi, Old North Airport Rd
                      <br />
                      Next to Naivas Embakasi
                    </address>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-minimal text-muted-foreground mb-6">SEND AN ENQUIRY</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <Input name="fullName" placeholder="Full Name" required className="bg-transparent border-border" />
                  <Input name="email" type="email" placeholder="Email Address" required className="bg-transparent border-border" />
                  <Input name="phone" placeholder="Phone Number" required className="bg-transparent border-border" />
                  <Textarea name="message" rows={6} placeholder="Tell us about your project requirements" required className="bg-transparent border-border" />
                  <button
                    type="submit"
                    className="text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300 relative group"
                  >
                    SEND ENQUIRY
                    <span className="absolute bottom-0 left-0 w-full h-px bg-foreground group-hover:bg-muted-foreground transition-colors duration-300" />
                  </button>
                </form>
                {submitted && (
                  <p className="mt-6 text-muted-foreground">Your email client should have opened. Thank you for your enquiry.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
