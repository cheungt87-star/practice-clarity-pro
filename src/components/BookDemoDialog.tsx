import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

interface BookDemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const emptyForm = {
  firstName: "",
  lastName: "",
  jobTitle: "",
  email: "",
  painPoint: "",
};

const BookDemoDialog = ({ open, onOpenChange }: BookDemoDialogProps) => {
  const [form, setForm] = useState(emptyForm);

  const update = (field: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo request received!",
      description: "We'll be in touch within 24 hours.",
    });
    onOpenChange(false);
    setForm(emptyForm);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto border-neutral-200 bg-white text-neutral-900 shadow-xl">
        <DialogHeader>
          <DialogTitle className="font-display text-xl text-neutral-900">Book a Demo</DialogTitle>
          <DialogDescription className="font-body text-left text-neutral-600">
            See how SuperGP can transform your practice. Fill in your details and we&apos;ll be in touch.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 mt-2 [&_input]:border-neutral-200 [&_input]:bg-white [&_input]:text-neutral-900 [&_input]:placeholder:text-neutral-400 [&_input]:ring-offset-white [&_textarea]:border-neutral-200 [&_textarea]:bg-white [&_textarea]:text-neutral-900 [&_textarea]:placeholder:text-neutral-400 [&_textarea]:ring-offset-white"
        >
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="firstName">First Name *</Label>
              <Input id="firstName" required value={form.firstName} onChange={(e) => update("firstName", e.target.value)} placeholder="Jane" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input id="lastName" required value={form.lastName} onChange={(e) => update("lastName", e.target.value)} placeholder="Smith" />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="jobTitle">What is your job? *</Label>
            <Input id="jobTitle" required value={form.jobTitle} onChange={(e) => update("jobTitle", e.target.value)} placeholder="Practice Manager" />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="jane@surgery.nhs.uk" />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="painPoint">What is your biggest pain point right now? *</Label>
            <Textarea
              id="painPoint"
              required
              value={form.painPoint}
              onChange={(e) => update("painPoint", e.target.value)}
              placeholder="Tell us what is most challenging for your practice…"
              rows={4}
              className="resize-y min-h-[100px]"
            />
          </div>

          <p className="text-xs leading-relaxed text-neutral-500">
            By submitting this form, you agree that we may contact you about your demo request. We use your details only for that purpose and do not sell them. See our{" "}
            <a href="#" className="text-neutral-700 underline underline-offset-2 hover:text-neutral-900">
              Privacy
            </a>{" "}
            page for more information.
          </p>

          <Button type="submit" className="w-full font-display font-semibold text-base py-5">
            Book now
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookDemoDialog;
