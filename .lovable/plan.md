

## Fix CTA Section Centering

The issue is `whitespace-nowrap` on the h2 -- on certain viewport widths, the text overflows the container and breaks centering since the text won't wrap but can exceed `max-w-4xl`.

### Changes to `src/components/CtaSection.tsx`

1. **Remove `whitespace-nowrap`** from the h2 -- it prevents proper centering when the text is wider than the container
2. **Add `flex flex-col items-center justify-center`** to the content wrapper for robust centering
3. **Add `min-h-[280px]`** to the section to ensure vertical centering looks balanced
4. **Center the button** with `flex justify-center` on the motion.div wrapper

