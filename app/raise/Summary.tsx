import { FormButtons } from "@/app/raise/FormButtons";
import { useFormState } from "@/app/raise/FormContext";
import { SummaryTitle } from "@/app/raise/SummaryTitle";
import { Button } from "@/components/ui/button";
import { EStep } from "@/lib/schema/basic-details.schema";
import { TCompletion } from "@/lib/types/raise.type";
import { cn } from "@/lib/utils";
import { CheckCircle, ChevronRight } from "lucide-react";

const summaryButtons = [
  { label: "1 | Basic Details", step: EStep.BASIC_DETAILS },
  { label: "2 | The Team", step: EStep.TEAM },
  { label: "3 | Project Story", step: EStep.STORY },
  { label: "4 | Funding & Milestones", step: EStep.MILESTONES },
  { label: "5 | Rewards", step: EStep.REWARDS },
];

export const Summary = () => {
  const { setStep, completion } = useFormState();

  return (
    <div className="flex flex-col gap-4 items-start justify-center h-full flex-grow w-full">
      <SummaryTitle />
      <div className="grid grid-rows-5 md:grid-rows-3 grid-flow-col gap-4 w-full">
        {summaryButtons.map(({ label, step }) => (
          <div
            key={label}
            className="flex items-center justify-between w-full gap-4"
          >
            <Button
              variant={"secondary"}
              onClick={() => setStep(step)}
              className="w-full flex justify-between p-4"
            >
              {label}
              <ChevronRight className="w-4 h-4" />
            </Button>
            <CheckCircle
              className={cn(
                "w-12 h-12",
                completion[step as keyof TCompletion]
                  ? "text-success"
                  : "text-gray-300"
              )}
            />
          </div>
        ))}
      </div>
      <FormButtons onSubmit={() => {}} />
    </div>
  );
};