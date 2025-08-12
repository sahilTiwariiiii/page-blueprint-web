import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronRight, Search, User, Users, Trophy, CreditCard, Settings, HelpCircle } from "lucide-react";

const Help = () => {
  const categories = [
    {
      icon: User,
      title: "Account",
      description: "Account settings, profile management, and verification"
    },
    {
      icon: Users,
      title: "Teams",
      description: "Team creation, player selection, and team management"
    },
    {
      icon: Trophy,
      title: "Contests",
      description: "Contest types, rules, and participation guidelines"
    },
    {
      icon: CreditCard,
      title: "Payments",
      description: "Deposits, withdrawals, and payment methods"
    },
    {
      icon: Settings,
      title: "Rules",
      description: "Game rules, scoring system, and policies"
    },
    {
      icon: HelpCircle,
      title: "Technical",
      description: "App issues, troubleshooting, and technical support"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-navy py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How can we help you?
          </h1>
        </div>

        {/* Search Bar */}
        <div className="relative mb-12">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <Input
            type="text"
            placeholder="Search for questions, topics..."
            className="pl-10 py-4 text-lg bg-card border-border text-card-foreground placeholder:text-muted-foreground"
          />
        </div>

        {/* Help Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="border-border bg-card hover:bg-card/80 transition-all duration-200 cursor-pointer group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-card-foreground mb-1">
                          {category.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Help Section */}
        <div className="mt-16 text-center">
          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Still need help?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to help you with any questions or issues you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Card className="border-border bg-secondary">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-secondary-foreground mb-2">Email Support</h4>
                    <p className="text-sm text-muted-foreground">support@crickets11.com</p>
                  </CardContent>
                </Card>
                <Card className="border-border bg-secondary">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-secondary-foreground mb-2">Response Time</h4>
                    <p className="text-sm text-muted-foreground">Within 24 hours</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Help;