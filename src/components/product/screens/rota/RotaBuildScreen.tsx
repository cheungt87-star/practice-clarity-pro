import { ScaledStage } from "@/components/product/ScaledStage";
import { rotaBuildMarkup } from "./markup-build";

export function RotaBuildScreen() {
  return <ScaledStage height={640} html={rotaBuildMarkup} />;
}
