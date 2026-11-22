import { cn } from "@/lib/utils";
import "./screens/rota/rota-stage.css";

type ScaledStageProps = {
  /** Logical canvas height in px (width is always 940). */
  height: 640 | 506;
  /** Ported mockup markup for the stage interior (panels as direct flex children). */
  html?: string;
  children?: React.ReactNode;
  className?: string;
};

/**
 * Scales a fixed 940px-wide stage to fit its container via container queries.
 * Matches the Rota product-page mockup (no JS).
 */
export function ScaledStage({ height, html, children, className }: ScaledStageProps) {
  return (
    <div className={cn("rotaStage", className)}>
      <div
        className="sw"
        style={
          {
            aspectRatio: `940 / ${height}`,
            ["--h" as string]: `${height}px`,
          } as React.CSSProperties
        }
      >
        {html ? (
          <div className="st" dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <div className="st">{children}</div>
        )}
      </div>
    </div>
  );
}
