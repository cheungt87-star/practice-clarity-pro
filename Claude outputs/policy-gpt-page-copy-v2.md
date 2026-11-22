# Policy GPT product page: copy review and rewrite (v2)

Goal: short, feature-first, plain English. Say what you get, not how it works inside.

## What was wrong
1. Steps explained the machinery ("goes through step 2", "fingerprint", "never mixed in"), not what the customer gets.
2. Step 4 had four bullets of edge cases. One idea per step: replace a policy, answers follow.
3. The FAQ repeated the steps (update, processing time, what happens on upload) and ran long.
4. Hero had two lines saying the same thing.

## Hero
- Chip: New · AI
- H1: Introducing Policy GPT
- Sub (coral): All your policies and SOPs, in one place.
- Intro: Ask in plain English. Get the answer and its source.
  - Alt: Your whole practice can ask. Every answer shows its source.
- Buttons: Start free trial / See how it works
- Small print: 14 days free. No credit card.

## How it works
Lead: Admins upload. Everyone asks.

**1 · Admins · Upload**
Drop in PDF, Word or text files. As many as you like, all at once. Add a category or review date if you want.

**2 · Automatic · Made searchable**
Ready in a few minutes. A status queue shows progress. Every file is read and split into sections, so "sick pay" finds "sickness absence".

**3 · Everyone · Ask**
Ask in plain English. Get a short answer, the exact source and a confidence rating. If your documents don't cover it, it says so instead of guessing.

**4 · Admins · Update**
Policy changed? Upload the new version and pick the document it replaces. Answers switch to the new version once it's ready. The old one stays as read-only history for 12 months.

## FAQs
Lead: Short answers. Tap to open.

### Answers
**Where do answers come from?**
Only from the policies your practice uploaded. Not the internet.

**Can it get things wrong?**
It answers only from your documents, shows the section it used, and checks every quote word for word against your file. If your documents don't cover it, it says so. Low confidence? Check the source. It isn't clinical advice.

**What's the confidence rating?**
How closely the answer matches your documents: high, medium or low.

### Documents
**What can I upload?**
PDF, Word and text files. As many as you like.

**How do I update a policy?**
Upload the new version and pick the document it replaces. Only the new version is used for answers. The old one is kept as read-only history for 12 months, then deleted.

**Can I delete a document?**
Yes. Hit the trash icon. The file and everything made from it are deleted.

**Can I upload patient records?**
No. Policy GPT is for policies, not people. If personal data is uploaded by mistake, tell us and we'll remove it, the same day where we can.

### Access
**Who can upload, replace or delete documents?**
Master and admin users.

**Who can ask questions?**
Everyone in your practice.

**Who can see the questions people ask?**
Only the person who asked. Admins can't see them.

**Can other practices see our documents?**
No. Each practice sees only its own. The database enforces it.

**How does my team join?**
Share your practice's invite code.

### Data
**What gets sent to the AI?**
Your question and a few matching sections of your policies. Not your whole library.

**Do you train AI on my data?**
No. By default, OpenAI doesn't use data sent through its API to train its models. [OpenAI's business data commitments](https://openai.com/business-data/)

**Does the AI provider keep my data?**
No. We use zero data retention, so OpenAI doesn't keep your questions or answers.

**Where is my data stored?**
In Europe.

**How long do you keep questions and answers?**
12 months, then they're deleted automatically. Documents stay until you delete them.

**Can I delete all my data?**
Yes. Ask us to close your organisation and we delete everything and confirm in writing.

**Will you sign a data processing agreement?**
Yes. We'll send the DPA, a sub-processor list and a security overview on request.

## CTA band
**Try Policy GPT free for 14 days.**
Upload your policies. Ask your first question. No credit card.

## Cut and why
- Step 2's four-item list: internal detail, now one sentence.
- "Behind the scenes", "fingerprint", "mixed in": jargon.
- FAQ: "What happens to my documents when I upload them?", "How long does it take to process?", "What happens to the old version?": repeated the steps.
- "Do you meet NHS requirements?": removed earlier.
- Delete-all "[30] days": dropped until the timeline is confirmed.

## Check before launch
- "Admins can't see questions": the privacy FAQ draft says admins can review all questions. Confirm which is true.
- "Zero data retention" and "In Europe": still to be set up (Supabase is in Mumbai today).
