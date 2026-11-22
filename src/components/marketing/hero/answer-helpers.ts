import { POLICY_COPY_TEXT } from "./assistant-demo-script";

export function answerShowsCopy(scenario: number, stage: number): boolean {
  return scenario === 2 && stage === 1;
}

export function copyPolicyAnswer() {
  try {
    void navigator.clipboard.writeText(POLICY_COPY_TEXT);
  } catch {
    /* demo only */
  }
}
