import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

const Privacy = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      content: `We collect information in various ways, including what you provide directly.

A. Information You Provide Directly:
• Name and contact details
• Date of birth
• Location information (including PIN code)
• Payment and transaction details

B. Information We Collect Automatically:
• Usage details and interaction data
• IP address and browser details
• Game performance and interaction logs
• Information through cookies and similar technologies

C. Information from Third Parties:
We may also collect personal data about you from third parties, such as:
• Authorized service providers for payment and other core functions
• Marketing and affiliate partners for promotional campaigns and enhancing experiences
• Social media platforms when you interact with our social media content
• Government databases for verification and regulatory compliance`
    },
    {
      title: "2. How We Use Your Information",
      content: `The information gathered serves us in:

• Providing our services and platform functionalities
• Identity verification and regulatory compliance 
• Customer support and communication services
• Sending updates and promotional offers via email, in-app, or messaging
• Data analytics to understand customer needs and improve features
• Preventing fraud and enhancing platform security

We will use your information to:
• Provide and improve our products and services
• Process transactions and send related information
• Send you promotional offers and contest-related messages
• Communicate about policy changes and service-related notifications
• Provide customer support services
• Monitor usage and improve user experience`
    },
    {
      title: "3. Sharing and Disclosure of Information",
      content: `We may share your information with:

• Authorized service providers (including, e.g., payment processing services)
• Marketing and affiliate partners for promotional campaigns and customer outreach
• Regulatory agencies and enforcement agencies in accordance with legal requirements
• Other parties when you explicitly consent

We share your information in compliance with applicable laws and when required for legitimate business purposes. We don't sell or rent personally identifiable information about you to any third parties for their marketing purposes.`
    },
    {
      title: "4. Cookies and Tracking Technologies",
      content: `We use cookies, pixels, and other tracking tools to:

• Provide analytics and understand user
• Deliver personalized experiences and advertising
• Enhance our services and analyze usage patterns
• Monitor user preferences and behavioral trends for improvement opportunities or service optimization 

Cookies are files placed and stored on your device. Most browsers automatically accept cookies, but you can disable cookies through your browser settings if desired, though this may limit functionality.`
    },
    {
      title: "5. Data Security",
      content: `We implement industry-standard security measures, security protocols, and safeguards including:

• Encryption in transit and strong access controls
• Secure payment processing aligned with industry guidelines
• Regular security assessments to ensure protection

While we strive to be the most secure platform, no completely impossible security incidents. Therefore, we urge all users to practice safe browsing and security and report any suspicious activity to help us maintain platform security.

• We use TLS (Transport Layer Security) to encrypt data in transit
• All payment information is processed using industry standard encryption
• We regularly audit and update our security procedures`
    },
    {
      title: "6. Advertising and Analytics",
      content: `We may have arrangements and agreements with partners who help us provide analytics and serve ads that are more relevant to users. These partners may capture personally identifiable information across multiple devices or through various data.

Our advertising partners may use cookies and other tracking technologies to show you personalized advertisements both on and off our services. Analytics help us understand user behavior and improve our services.`
    },
    {
      title: "7. Data Retention",
      content: `We'll retain data as follows:

• As long as it's necessary for the purposes identified in this Privacy Policy
• In accordance with our record retention and data deletion procedures
• As long as there are legal obligations, regulatory, customer requests, or disputes

Upon account deactivation or deletion, most of the data associated with your account will be available from our system. However, some items like transaction and compliance records may remain in line with statutory obligations.

Personal and transaction data will be retained in line with regulatory requirements, especially in relation to financial transactions and anti-money laundering legislation.`
    },
    {
      title: "8. Your Rights - Account & Data Deletion",
      content: `You can:

• Access or update your information
• Request deletion of personal data
• File a formal complaint to the Nodal & Grievance Contact listed on our website if you consider the collection or processing of your data contrary to our policies or prevailing regulations`
    },
    {
      title: "9. Governing Law and Jurisdiction",
      content: `This Privacy Policy shall be interpreted, construed, and governed in accordance with laws of India. You agree to submit to the exclusive jurisdiction and venue of the courts located in India in the event disputes arise from this Privacy Policy.`
    },
    {
      title: "10. Updating Your Information",
      content: `You are responsible for keeping your profile information current, complete, and accurate as shown through our platform. You may update your information through your account settings.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-navy py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-primary mr-3" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">Last Updated: November 1, 2025</p>
        </div>

        {/* Introduction */}
        <Card className="mb-8 border-border bg-card">
          <CardContent className="p-6">
            <p className="text-muted-foreground leading-relaxed">
              At Cricket11, operated by{" "}
              <span className="font-semibold text-card-foreground">STOCKLIFT SOLUTIONS PRIVATE LIMITED</span>,
              we value your privacy and want you to be familiar with how we collect, use, and share your information.
              This Privacy Policy outlines how we gather and use personal information when you visit our website
              and use our services. We encourage you to read it carefully.
            </p>
          </CardContent>
        </Card>

        {/* Privacy Policy Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <Card key={index} className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  {section.content.split('\n\n').map((paragraph, pIndex) => (
                    <div key={pIndex}>
                      {paragraph.split('\n').map((line, lIndex) => {
                        if (line.startsWith('•')) {
                          return (
                            <div key={lIndex} className="flex items-start ml-4">
                              <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2 mr-3"></span>
                              <span>{line.substring(2)}</span>
                            </div>
                          );
                        }
                        return (
                          <p key={lIndex} className={lIndex > 0 ? "mt-2" : ""}>
                            {line}
                          </p>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <Card className="mt-12 border-border bg-card">
          <CardHeader>
            <CardTitle className="text-xl text-card-foreground">Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions or concerns regarding this Privacy Policy or your personal information, please contact us:
            </p>
            <div className="mt-4 text-muted-foreground">
              <p><span className="font-semibold text-card-foreground">Help & Support:</span> help@crickets11.com</p>
              <p><span className="font-semibold text-card-foreground">Phone:</span> +91 9876543210</p>
            </div>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <Card className="border-border bg-gradient-blue">
            <CardContent className="p-6">
              <p className="text-white font-medium">
                Thank you for choosing Cricket11 — Your privacy is our priority. 🏏
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Privacy;