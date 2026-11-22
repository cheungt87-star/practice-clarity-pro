import { ScaledStage } from "@/components/product/ScaledStage";
import { rotaAiChangesMarkup } from "./markup-ai-changes";

export function RotaAiChangesScreen() {
  return <ScaledStage height={640} html={rotaAiChangesMarkup} />;
}
