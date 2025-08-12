import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Trophy, Target, Clock, Star } from "lucide-react";

const HowToPlay = () => {
  const steps = [
    {
      title: "Register",
      description: "Download the Cricket11 App or visit our website.\n\nSign up using your mobile login."
    },
    {
      title: "Pick a Match",
      description: "Choose any upcoming cricket match listed on the app. We feature matches from major leagues and tournaments worldwide."
    },
    {
      title: "Create Your Team",
      description: "Build your fantasy team of 11 players using 100 credit points.\n\nKeep in mind:\n• You can select a maximum of 7 players from one real team.\n• Choose wisely across batsmen, bowlers, all-rounders, and wicketkeepers.\n• Select a Captain (2x points) and Vice-Captain (1.5x points) for bonus scoring."
    },
    {
      title: "Join a Contest",
      description: "Cricket11 offers multiple contest types:\n• Practice Contests (Free): Perfect for beginners to learn and test strategies.\n• Cash Contests: Compete for real prizes and cash rewards.\n• Private Contests: Create or join exclusive contests with friends or colleagues."
    },
    {
      title: "Track Your Team's Performance",
      description: "Once the real match starts:\n• Monitor your players' performance live in the app.\n• Your team's score updates in real-time based on player stats like runs, wickets, catches, etc.\n• Check your rank on the leaderboard as the match progresses."
    }
  ];

  const tips = [
    "Stay updated with player form, team news, and pitch conditions.",
    "Always check the final playing XI before the match starts.",
    "Use practice contests to refine your strategy before entering high-stake contests."
  ];

  return (
    <div className="min-h-screen bg-gradient-navy py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How to Play Fantasy Cricket on Cricket11
          </h1>
        </div>

        {/* Introduction */}
        <Card className="mb-8 border-border bg-card">
          <CardHeader>
            <CardTitle className="text-2xl text-card-foreground">Introduction</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Cricket11 brings you an exciting platform to use your cricket knowledge and skills to compete in fantasy contests.
              Build your dream team using real-life players from upcoming matches, score points based on their real-time
              performance, and climb the leaderboard to win!
            </p>
          </CardContent>
        </Card>

        {/* Objective */}
        <Card className="mb-8 border-border bg-card">
          <CardHeader>
            <CardTitle className="text-2xl text-card-foreground flex items-center">
              <Target className="mr-3 h-6 w-6 text-primary" />
              Objective
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              The goal in fantasy cricket on Cricket11 is simple:
            </p>
            <ul className="space-y-2">
              {[
                "Create your fantasy team of 11 players from any upcoming real-world cricket match.",
                "Earn points based on how your selected players perform in the actual game (runs, wickets, catches, etc.).",
                "Compete in contests to win rewards based on your total points and leaderboard position."
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* How to Play Steps */}
        <Card className="mb-8 border-border bg-card">
          <CardHeader>
            <CardTitle className="text-2xl text-card-foreground">
              How to Play Fantasy Cricket on Cricket11
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {steps.map((step, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">
                  Step {index + 1}: {step.title}
                </h3>
                <div className="text-muted-foreground leading-relaxed">
                  {step.description.split('\n').map((line, lineIndex) => (
                    <p key={lineIndex} className={lineIndex > 0 ? "mt-2" : ""}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Tips for Success */}
        <Card className="mb-8 border-border bg-card">
          <CardHeader>
            <CardTitle className="text-2xl text-card-foreground flex items-center">
              <Star className="mr-3 h-6 w-6 text-primary" />
              Tips for Success
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {tips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center bg-gradient-blue rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Start playing now and turn your cricket passion into victory with Cricket11!
          </h3>
          <div className="flex items-center justify-center space-x-2 text-white">
            <Trophy className="h-5 w-5" />
            <span className="font-semibold">Play. Score. Win.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;