import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

const Terms = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: `Your continued use of the Cricket11 platform implies your full acceptance of these Terms, including any supplemental rules or amendments that may apply to specific contests or events.

In the event you do not agree with any part of these Terms, please refrain from using our Platform.

These Terms constitute a legally binding agreement between ("User" or "You") and Cricket11. If you do not agree with any part of these Terms, please refrain from using our services.

By accepting these Terms, you also consent to receive communications from Cricket11 and/or its authorized partners, including:
• Personalised announcements
• Promotional notifications
• Contest updates
• Service-related messaging
• Other relevant communications through email, SMS, or in-app notifications

To ensure proper delivery, please mark Cricket11 as a safe sender across your email and SMS platforms.`
    },
    {
      title: "2. User Account Registration",
      content: `To access Cricket11 services, you must register and maintain an active User Account. During registration, you may be required to submit and update the following details:

• Full name
• Chosen team name
• Mobile number
• Residential address and state
• Gender
• Date of birth
• Aadhaar number (or other valid ID)
• PAN ID or equivalent identification
• UPI ID or bank account details

We reserve the right to verify your identity (KYC) at any point within our compliance with applicable laws or at our discretion.`
    },
    {
      title: "3. Eligibility to Participate",
      content: `To participate in Paid Contests on Cricket11, you must:

• Be an Indian citizen
• Be at least 18 years of age; and
• Have a valid Indian mobile number for verification and account creation

As per applicable Indian laws and judicial interpretations, real money gaming is restricted in certain states. Accordingly, users residing in the following states are prohibited from participating in Paid Contests on Cricket11:

• Andhra Pradesh
• Assam
• Nagaland
• Sikkim
• Telangana

By accessing any Paid Contest, you confirm and declare that you are not a resident of any of these Restricted States and that you will not provide false information or misrepresent your location by bypassing geo-location restrictions.

Violation of this provision may lead to permanent suspension of your account and legal reporting in accordance with applicable law.`
    },
    {
      title: "4. Restricted States",
      content: `As per applicable Indian laws and judicial interpretations, real money gaming is restricted in certain states.

Accordingly, users residing in the following states are prohibited from participating in Paid Contests on Cricket11:

• Andhra Pradesh
• Assam
• Nagaland
• Sikkim
• Telangana

By accessing any Paid Contest, you confirm and declare that you are not a resident of any of these Restricted States and that you will not provide false information or misrepresent your location to bypass the law.

Violation of this provision may lead to permanent suspension of your account and legal reporting in accordance with applicable ("Applicable Law").`
    },
    {
      title: "5. Modifications",
      content: `Cricket11 reserves the right to update or modify these Terms at any time. Changes will be posted on the platform, and continued use of the platform after any modifications constitutes acceptance of the revised Terms.

For any queries related to these Terms, you may reach out to our Help & Support team through the platform.

Thank you for choosing Cricket11 — Play responsibly. Win fairly. 🏏`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-navy py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <FileText className="h-8 w-8 text-primary mr-3" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Terms & Conditions
          </h1>
          <p className="text-muted-foreground">Last Updated: November 1, 2025</p>
        </div>

        {/* Introduction */}
        <Card className="mb-8 border-border bg-card">
          <CardContent className="p-6">
            <p className="text-muted-foreground leading-relaxed">
              Welcome to Cricket11, the flagship fantasy sports platform operated by{" "}
              <span className="font-semibold text-card-foreground">STOCKLIFT SOLUTIONS PRIVATE LIMITED</span>.
              By accessing or using our services, you agree to be bound by the following{" "}
              <span className="font-semibold text-card-foreground">Terms and Conditions</span> ("Terms").
              Cricket11 may amend these Terms from time to time, and such changes will be posted on our platform.
              Your continued use of the platform after any such modifications constitutes acceptance of the revised Terms.
            </p>
          </CardContent>
        </Card>

        {/* Terms Sections */}
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

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <Card className="border-border bg-gradient-blue">
            <CardContent className="p-6">
              <p className="text-white font-medium">
                Thank you for choosing Cricket11 — Play responsibly. Win fairly. 🏏
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Terms;