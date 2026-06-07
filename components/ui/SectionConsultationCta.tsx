import { ConsultationButton } from "@/components/ui/ConsultationButton";

type SectionConsultationCtaProps = {
  className?: string;
};

/** Same CTA as below the New Jersey service map */
export function SectionConsultationCta({
  className = "flex justify-center",
}: SectionConsultationCtaProps) {
  return (
    <div className={className}>
      <ConsultationButton
        variant="header"
        className="!rounded-full !bg-neutral-900 !px-10 !text-white hover:!bg-neutral-800"
      />
    </div>
  );
}
