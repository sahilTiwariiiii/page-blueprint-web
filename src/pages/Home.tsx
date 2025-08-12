import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Star, Trophy, Users, Shield, TrendingUp, Zap, BarChart3, DollarSign } from "lucide-react";
import mobileAppImage from "@/assets/mobile-app.png";

const Home = () => {
  const features = [
    {
      icon: Trophy,
      title: "Win Big Rewards",
      description: "Compete in contests and win exciting cash prizes based on your team's performance and strategy.",
    },
    {
      icon: Users,
      title: "Create Multiple Teams",
      description: "Build up to different teams for a single match to increase your chances of winning big.",
    },
    {
      icon: TrendingUp,
      title: "Live Score Updates",
      description: "Get real-time updates and watch your fantasy points grow as the live match progresses.",
    },
    {
      icon: Zap,
      title: "Quick Withdrawals",
      description: "Enjoy hassle-free and instant withdrawals directly to your bank account or UPI.",
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Your data and transactions are protected with bank-grade security protocols.",
    },
    {
      icon: BarChart3,
      title: "Expert Analysis",
      description: "Get expert tips and analysis to help you make informed team selections.",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Sign Up",
      description: "Create your account and verify your mobile number and email address.",
    },
    {
      number: "2",
      title: "Create Your Team",
      description: "Select 11 players within budget using our intelligent team builder.",
    },
    {
      number: "3",
      title: "Join Contests",
      description: "Enter contests with different entry fees and participate in various formats.",
    },
    {
      number: "4",
      title: "Win Prizes",
      description: "Score points as your players perform and win real cash prizes instantly.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-navy py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Experience Fantasy Cricket Like Never Before
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
                Create your dream team, compete with friends, and win big with
                Cricket11 - India's most exciting fantasy cricket platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white">
                  📱 Download Android App
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                  Play on Web <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src={mobileAppImage}
                  alt="Cricket11 Mobile App"
                  className="w-80 h-auto max-w-full rounded-3xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-blue rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-purple/20 rounded-full opacity-20 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Cricket11 Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Cricket11
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the ultimate fantasy cricket platform with features designed to enhance your
              gameplay and winning chances.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-border bg-card hover:bg-card/80 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How Cricket11 Works */}
      <section className="py-20 bg-brand-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Cricket11 Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started with fantasy cricket in four simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Players Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of happy users who have already experienced the thrill of fantasy cricket on
              Cricket11
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-border bg-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <Star className="h-5 w-5 text-gray-300" />
                  <span className="ml-2 text-sm text-muted-foreground">Won ₹50,000</span>
                </div>
                <blockquote className="text-lg text-card-foreground mb-6">
                  "What I appreciate most about Cricket11 is the transparency. The points system is fair and there's
                  always a detailed analysis. Highly recommended!"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold">AR</span>
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-card-foreground">Abrar Patel</div>
                    <div className="text-sm text-muted-foreground">Verified Player</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-blue">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Fantasy Cricket Journey?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join millions of cricket fans and experience the thrill of creating your dream
            team and winning big rewards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white">
              📱 Download Android App
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              🌐 Play on Web
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;