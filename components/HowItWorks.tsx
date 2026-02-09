import React, { ReactElement } from "react";
import { CheckCircle, Users, CalendarCheck } from "lucide-react";

interface StepProps {
  icon: ReactElement;
  title: string;
  description: string;
}

function Step({ icon, title, description }: StepProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-slate-600 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="text-sky-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-200">{description}</p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="bg-slate-700 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-16">
          How It Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <Step
            icon={<CheckCircle size={48} />}
            title="Post Your Errand"
            description="Submit your request in minutes and let our team know what help you need."
          />
          <Step
            icon={<Users size={48} />}
            title="Helpers See Your Request"
            description="Local trusted helpers will be notified and can accept your errand."
          />
          <Step
            icon={<CalendarCheck size={48} />}
            title="Get It Done"
            description="Your errand is completed efficiently, and you can provide feedback."
          />
        </div>
      </div>
    </section>
  );
}
