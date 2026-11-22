import type { ProductScreenKey } from "@/data/products/types";
import { AskScreen } from "./AskScreen";
import { ProcessingScreen } from "./ProcessingScreen";
import { UpdateScreen } from "./UpdateScreen";
import { UploadScreen } from "./UploadScreen";
import { RotaAiChangesScreen } from "./rota/RotaAiChangesScreen";
import { RotaAskScreen } from "./rota/RotaAskScreen";
import { RotaBuildScreen } from "./rota/RotaBuildScreen";
import { RotaClashesScreen } from "./rota/RotaClashesScreen";
import { RotaPublishScreen } from "./rota/RotaPublishScreen";

export const PRODUCT_SCREENS: Record<ProductScreenKey, React.ComponentType> = {
  upload: UploadScreen,
  processing: ProcessingScreen,
  ask: AskScreen,
  update: UpdateScreen,
  "rota-build": RotaBuildScreen,
  "rota-ai-changes": RotaAiChangesScreen,
  "rota-clashes": RotaClashesScreen,
  "rota-publish": RotaPublishScreen,
  "rota-ask": RotaAskScreen,
};

export {
  AskScreen,
  ProcessingScreen,
  UpdateScreen,
  UploadScreen,
  RotaBuildScreen,
  RotaAiChangesScreen,
  RotaClashesScreen,
  RotaPublishScreen,
  RotaAskScreen,
};
