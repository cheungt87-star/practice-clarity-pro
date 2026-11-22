import { ScaledStage } from "@/components/product/ScaledStage";
import { rotaPublishMarkup } from "./markup-publish";

export function RotaPublishScreen() {
  return <ScaledStage height={640} html={rotaPublishMarkup} />;
}
