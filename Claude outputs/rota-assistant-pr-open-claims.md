# Rota Assistant product page — open claims checklist

Do not ship this page as product truth until each item is verified in the live app.

- [ ] Named-person questions ("Where is Dr Patel working next week?", step 5). QA log lists these as not built.
- [ ] Step 3 as shown: the assistant refuses a single day when the person is off and offers to find someone else. Today QA rules say it adds the other days and asks, or replies "Nothing to add".
- [ ] Preview week and Confirm day behave as shown in step 4 (mockup port; confirm against live UI).
- [ ] Every change is recorded in an audit log (who, what, when).
- [ ] Admins can switch AI features off for an organisation.
- [ ] What is sent to the AI: only what the user typed plus the rota context needed, with no contact, pay or HR data.
- [ ] Data stored in Europe. Zero-retention and no-training terms confirmed with Anthropic.
- [ ] Undo all reliably removes everything a message created (QA-20 is still on watch).
- [ ] DPA, sub-processor list and security overview exist and can be sent on request.

## Screenshots

Attach from `Claude outputs/rota-assistant-pr-screenshots/`:

- `rota-1440-top.png` / `rota-1440-step1.png` / `rota-1440-full.png`
- `rota-1100-top.png` / `rota-1100-step1.png`
- `rota-768-top.png` / `rota-768-step1.png`
- `rota-390-top.png` / `rota-390-step1.png`
