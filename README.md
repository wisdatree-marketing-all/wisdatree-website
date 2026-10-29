# Wisdatree website — Version 7: WhatsApp + Default Email App

## Contact form
All 3 divisions use the same form. The visitor chooses:
- **WhatsApp**: opens a prefilled message in WhatsApp/WhatsApp Web for +91 7010100644. The visitor must press Send.
- **Email**: opens a prefilled email to marketing@wisdatree.com using `mailto:`. The visitor must press Send.

No EmailJS public key, API limits, paid email form service, or backend are required.

**Important:** An email handler must be installed/configured on the visitor's device or browser. Gmail web can act as a mailto handler if set up in the browser, but it will not necessarily open Gmail on every device. A click is not proof of email delivery and the website cannot tell whether the visitor pressed Send.

## Publish
Upload all files and directories to your GitHub Pages repository. Keep CSS, JS, assets and policies together, and wait for GitHub Pages deployment to complete. Test WhatsApp and mailto on both phone and desktop.

## Privacy and policies
The contact form includes a privacy consent checkbox. Please finalize the privacy policy and draft education policies before public launch. Avoid collecting health details in WisdaCare's general enquiry form.


## Version 8 — WhatsApp preferred
WhatsApp is preselected and visually marked Recommended on all three enquiry forms. Visitors review the prefilled message and press Send in WhatsApp. Email remains available as a mailto alternative. The floating WhatsApp link targets +91 7010100644.


Version 9: Corrected WisdaSchool language-pathway art. Internal illustration spans no longer inherit the white label-chip style. Introduced dedicated Tamil அ, Malayalam അ and Hindi अ art and brand blue/green/gold variables. All WhatsApp-first enquiry flows retained.

## Version 10 — Webinar registration
- Added `wisdacare/webinars/motherhood-diaries/index.html` with a standalone registration landing page modelled on the user's existing Netlify webinar page.
- Linked it prominently from `index.html` and `wisdacare.html`.
- Registration opens WhatsApp to +91 7010100644 with prefilled event/name/email/phone/question text. The visitor MUST press Send in WhatsApp. This is NOT a backend form and does NOT automatically save registrations or prove that a registration was sent.
- Email contact is marketing@wisdatree.com. Event is **Sunday 1 November 2026, 11:00 AM IST**, not a recurring first-Sunday event.
- For advertising: use your final GitHub Pages URL to the webinar path. If your custom domain points to your GitHub Pages site at the root, the URL will be `https://wisdatree.com/wisdacare/webinars/motherhood-diaries/`. Otherwise use the actual GitHub Pages project URL/path.
- For reliable Meta conversion optimization and tracking, add server-side registration storage and a confirmation page reached only after successful receipt. Clicking the WhatsApp button does not certify a registration.
- Verify all URLs and WhatsApp message delivery on the deployed site before running ads.
