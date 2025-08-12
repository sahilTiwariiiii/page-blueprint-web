import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Star, AlertCircle } from "lucide-react";

const PointsTable = () => {
  const battingPoints = [
    { action: "Run scored", points: "1 point", description: "" },
    { action: "Boundary bonus", points: "1 point", description: "Additional point for each four" },
    { action: "Six bonus", points: "2 points", description: "Additional points for each six" },
    { action: "Half century bonus", points: "20 points", description: "50-99 runs" },
    { action: "Century bonus", points: "50 points", description: "100+ runs" },
  ];

  const bowlingPoints = [
    { action: "Wicket taken", points: "50 points", description: "Excluding run out" },
    { action: "Maiden over", points: "20 points", description: "" },
    { action: "3 wicket bonus", points: "25 points", description: "Additional points for 3+ wickets" },
    { action: "5 wicket bonus", points: "50 points", description: "Additional points for 5+ wickets" },
  ];

  const fieldingPoints = [
    { action: "Catch taken", points: "25 points", description: "" },
    { action: "Stumping", points: "30 points", description: "" },
    { action: "Run out", points: "25 points", description: "Direct hit" },
  ];

  const otherPoints = [
    { action: "Captain", points: "2 points", description: "2x points for captain" },
    { action: "Vice Captain", points: "1.5 points", description: "1.5x points for vice captain" },
  ];

  const importantNotes = [
    "Points are calculated in real-time during live matches",
    "Captain gets 2x points and Vice Captain gets 1.5x points",
    "Economy rate points are calculated only after a minimum of 2 overs bowled",
    "Strike rate points are calculated only after a minimum of 10 balls faced"
  ];

  const PointsRow = ({ action, points, description }: { action: string; points: string; description: string }) => (
    <tr className="border-b border-border">
      <td className="py-3 px-4 text-card-foreground">{action}</td>
      <td className="py-3 px-4">
        <Badge variant="secondary" className="bg-primary text-primary-foreground">
          {points}
        </Badge>
      </td>
      <td className="py-3 px-4 text-muted-foreground text-sm">{description}</td>
    </tr>
  );

  return (
    <div className="min-h-screen bg-gradient-navy py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Trophy className="h-8 w-8 text-primary mr-3" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Points Table
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest standings and fantasy points system
          </p>
        </div>

        {/* Fantasy Points Button */}
        <div className="text-center mb-12">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Fantasy Points
          </Button>
        </div>

        {/* Fantasy Points System */}
        <Card className="mb-8 border-border bg-card">
          <CardHeader>
            <CardTitle className="text-2xl text-card-foreground flex items-center">
              <Star className="mr-3 h-6 w-6 text-primary" />
              Fantasy Points System
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Batting */}
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4 bg-secondary p-3 rounded-lg">
                  Batting
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody>
                      {battingPoints.map((item, index) => (
                        <PointsRow key={index} {...item} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Bowling */}
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4 bg-secondary p-3 rounded-lg">
                  Bowling
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody>
                      {bowlingPoints.map((item, index) => (
                        <PointsRow key={index} {...item} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Fielding */}
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4 bg-secondary p-3 rounded-lg">
                  Fielding
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody>
                      {fieldingPoints.map((item, index) => (
                        <PointsRow key={index} {...item} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Other */}
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4 bg-secondary p-3 rounded-lg">
                  Other
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody>
                      {otherPoints.map((item, index) => (
                        <PointsRow key={index} {...item} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-2xl text-card-foreground flex items-center">
              <AlertCircle className="mr-3 h-6 w-6 text-primary" />
              Important Notes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {importantNotes.map((note, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2 mr-3"></span>
                  <span className="text-muted-foreground">{note}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PointsTable;
