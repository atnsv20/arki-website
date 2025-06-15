import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, BookOpenText, CreditCard, MessageSquareText, Megaphone } from "lucide-react";

const features = [
  { name: "Calendar", icon: CalendarDays },
  { name: "Online Booking", icon: BookOpenText },
  { name: "Sales & Payments", icon: CreditCard },
  { name: "Two-way Texting", icon: MessageSquareText },
  { name: "Marketing", icon: Megaphone },
];

export default function MiniFeatureSnapshot() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <Card key={feature.name} className="h-full">
                <CardContent className="flex flex-col items-center justify-center p-6 space-y-2 text-center">
                  <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{feature.name}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
