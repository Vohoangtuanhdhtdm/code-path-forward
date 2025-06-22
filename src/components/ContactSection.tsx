
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  EnvelopeIcon,
  UserIcon,
  LinkIcon
} from "@heroicons/react/24/outline";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tuan-vo-hoang-18aa56307/",
      icon: <LinkIcon className="w-6 h-6" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/Vohoangtuanhdhtdm",
      icon: <LinkIcon className="w-6 h-6" />,
    },
    {
      name: "Email",
      url: "voh81049@gmail.com",
      icon: <EnvelopeIcon className="w-6 h-6" />,
    },
  ];

  return (
    <section id="contact" className="py-20 section-padding bg-gradient-to-br from-gray-100/40 via-white to-gray-50/30">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. My inbox is always
            open. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass-effect rounded-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-700 mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2 flex items-center"
                >
                  <UserIcon className="w-4 h-4 mr-2" />
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-gray-200 focus:border-gray-400 focus:ring-gray-400"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2 flex items-center"
                >
                  <EnvelopeIcon className="w-4 h-4 mr-2" />
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-gray-200 focus:border-gray-400 focus:ring-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2 flex items-center"
                >
                  <EnvelopeIcon className="w-4 h-4 mr-2" />
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-32 border-gray-200 focus:border-gray-400 focus:ring-gray-400"
                  placeholder="Your message..."
                />
              </div>

              <Button type="submit" className="w-full bg-black hover:bg-gray-800">
                Send Message
              </Button>
            </form>
          </div>

          {/* Social Links */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-700 mb-6">
                Connect With Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target={link.name !== "Email" ? "_blank" : undefined}
                    rel={
                      link.name !== "Email" ? "noopener noreferrer" : undefined
                    }
                    className="flex items-center space-x-4 p-4 glass-effect rounded-lg hover:border-gray-300 card-hover border border-gray-200"
                  >
                    <div className="text-gray-600">{link.icon}</div>
                    <span className="text-gray-700 font-medium">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50/80 to-gray-100/60 border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-700 mb-2">
                Quick Response
              </h4>
              <p className="text-sm text-gray-600">
                I typically respond to messages within 24 hours. For urgent
                inquiries, feel free to reach out via LinkedIn or email
                directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
