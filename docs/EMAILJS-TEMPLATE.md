# EmailJS Templates — Creative Pro Construction

Modern email templates matching the CPC website (dark footer `#0f171a`, accent green `#22c55e`, clean typography).

Use these in the [EmailJS Dashboard](https://dashboard.emailjs.com/) → **Email Templates**.

---

## 1. Template Variables (map from your booking form)

When you wire up EmailJS in `ServiceBookingForm.tsx`, send these fields:

| EmailJS variable   | Form field / source        | Example                          |
|--------------------|----------------------------|----------------------------------|
| `{{name}}`         | `name`                     | John Smith                       |
| `{{phone}}`        | `phone` (as entered)       | 201-555-0123                     |
| `{{phone_dial}}`   | `phone.replace(/\D/g, '')` | 2015550123 (for `tel:` links)    |
| `{{street_address}}` | `streetAddress`          | 123 Main St, Clifton, NJ         |
| `{{contact_time}}` | `contactTime`              | Morning                          |
| `{{service}}`      | `service` (display label)  | Roof Replacement                 |
| `{{service_slug}}` | `service` (raw slug)       | roof-replacement                 |
| `{{submitted_at}}` | JS `new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })` | Jun 8, 2026, 2:30 PM |
| `{{page_url}}`     | `window.location.href`     | https://creativeproconstruction.com/services/roof-replacement |
| `{{site_name}}`    | static                     | Creative Pro Construction        |

**Recommended subject line (Template → Settings → Subject):**

```
🛠️ New Call Request — {{service}} | {{name}}
```

**Reply-To:** not available from form (no email field). Use `tel:{{phone_dial}}` on the CTA button to dial the lead’s number on mobile.

---

## 2. Template A — Admin Notification (copy into EmailJS HTML body)

**Template name:** `cpc_admin_call_request`  
**To email:** `creativeproconstruction0@gmail.com`  
**From name:** `CPC Website`

Paste everything below into the EmailJS **Content → HTML** editor (switch to HTML mode if available).

**Font:** Uses **Geist** (same body font as the website). The font file is hosted at:
`https://creativeproconstruction.com/fonts/Geist-Regular.ttf`

> **Note:** Gmail web may fall back to Arial. Apple Mail, iOS Mail, and most modern clients will show Geist. Outlook uses Arial via MSO conditional.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Call Request — Creative Pro Construction</title>

  <style>
    @font-face {
      font-family: 'Geist';
      font-style: normal;
      font-weight: 400;
      mso-font-alt: 'Arial';
      src: url('https://creativeproconstruction.com/fonts/Geist-Regular.ttf') format('truetype');
    }
    body, table, td, p, a, span, h1 {
      font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
    }
  </style>

  <!--[if mso]>
  <style type="text/css">
    body, table, td, p, a, span, h1 { font-family: Arial, Helvetica, sans-serif !important; }
  </style>
  <![endif]-->
</head>
<body style="margin:0;padding:0;background-color:#f5f5f4;font-family:'Geist',-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">

  <!-- Preheader (hidden preview text) -->
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">
    New lead: {{name}} requested a call about {{service}}. Phone: {{phone}}
  </div>

  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f5f5f4;padding:32px 16px;">
    <tr>
      <td align="center">

        <!-- Main card -->
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(15,23,26,0.12);">

          <!-- Header -->
          <tr>
            <td style="background-color:#0f171a;padding:28px 32px;text-align:center;">
              <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#22c55e;">
                Creative Pro Construction
              </p>
              <h1 style="margin:0;font-size:26px;font-weight:700;line-height:1.2;color:#ffffff;letter-spacing:0.02em;">
                New Call Request
              </h1>
              <p style="margin:10px 0 0;font-size:14px;line-height:1.5;color:rgba(255,255,255,0.75);">
                Roofing &amp; Construction in New Jersey
              </p>
            </td>
          </tr>

          <!-- Accent bar -->
          <tr>
            <td style="height:4px;background:linear-gradient(90deg,#22c55e 0%,#4ade80 100%);font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Lead badge -->
          <tr>
            <td style="padding:28px 32px 0;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="background-color:rgba(34,197,94,0.12);border:1px solid rgba(34,197,94,0.25);border-radius:999px;padding:6px 14px;">
                    <span style="font-size:12px;font-weight:700;color:#15803d;text-transform:uppercase;letter-spacing:0.08em;">
                      ● New Lead — Action Required
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Intro -->
          <tr>
            <td style="padding:20px 32px 8px;">
              <p style="margin:0;font-size:16px;line-height:1.6;color:#404040;">
                A homeowner submitted a <strong style="color:#171717;">Request a Call</strong> form on your website. Follow up as soon as possible while the lead is hot.
              </p>
            </td>
          </tr>

          <!-- Details card -->
          <tr>
            <td style="padding:16px 32px 28px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f5f5f4;border-radius:12px;border:1px solid #e5e5e5;">
                <tr>
                  <td style="padding:20px 24px;">

                    <!-- Row: Name -->
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom:16px;">
                      <tr>
                        <td width="130" valign="top" style="padding-bottom:4px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#737373;">Name</td>
                        <td valign="top" style="font-size:16px;font-weight:700;color:#171717;">{{name}}</td>
                      </tr>
                    </table>

                    <!-- Row: Phone -->
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom:16px;">
                      <tr>
                        <td width="130" valign="top" style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#737373;">Phone</td>
                        <td valign="top">
                          <a href="tel:{{phone}}" style="font-size:18px;font-weight:700;color:#22c55e;text-decoration:none;">{{phone}}</a>
                        </td>
                      </tr>
                    </table>

                    <!-- Row: Preferred time -->
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom:16px;">
                      <tr>
                        <td width="130" valign="top" style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#737373;">Best Time</td>
                        <td valign="top" style="font-size:15px;color:#404040;">{{contact_time}}</td>
                      </tr>
                    </table>

                    <!-- Row: Service -->
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom:16px;">
                      <tr>
                        <td width="130" valign="top" style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#737373;">Service</td>
                        <td valign="top">
                          <span style="display:inline-block;background-color:#0f171a;color:#ffffff;font-size:13px;font-weight:700;padding:6px 12px;border-radius:6px;text-transform:uppercase;letter-spacing:0.05em;">{{service}}</span>
                        </td>
                      </tr>
                    </table>

                    <!-- Divider -->
                    <hr style="border:none;border-top:1px solid #e5e5e5;margin:20px 0;" />

                    <!-- Meta -->
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td width="130" valign="top" style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#737373;">Submitted</td>
                        <td valign="top" style="font-size:13px;color:#737373;">{{submitted_at}} (ET)</td>
                      </tr>
                    </table>
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-top:12px;">
                      <tr>
                        <td width="130" valign="top" style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#737373;">Page</td>
                        <td valign="top" style="font-size:13px;color:#737373;word-break:break-all;">
                          <a href="{{page_url}}" style="color:#22c55e;text-decoration:underline;">{{page_url}}</a>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA buttons -->
          <tr>
            <td style="padding:0 32px 32px;text-align:center;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
                <tr>
                  <td style="border-radius:10px;background-color:#22c55e;">
                    <a href="tel:{{phone}}" style="display:inline-block;padding:14px 32px;font-size:15px;font-weight:700;color:#0f171a;text-decoration:none;letter-spacing:0.02em;">
                      📞 Call {{name}} Now
                    </a>
                  </td>
                  <td width="12">&nbsp;</td>
                  <td style="border-radius:10px;border:2px solid #0f171a;">
                    <a href="mailto:creativeproconstruction0@gmail.com?subject=Re:%20Call%20Request%20-%20{{name}}&amp;body=Hi%20{{name}},%0A%0AThank%20you%20for%20contacting%20Creative%20Pro%20Construction..." style="display:inline-block;padding:12px 24px;font-size:14px;font-weight:700;color:#0f171a;text-decoration:none;">
                      ✉️ Log Follow-Up
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Trust strip -->
          <tr>
            <td style="background-color:#0f171a;padding:20px 32px;text-align:center;">
              <p style="margin:0 0 6px;font-size:12px;color:rgba(255,255,255,0.55);">
                Licensed #13VH13624900 · Fully Insured · Serving All of New Jersey
              </p>
              <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.85);">
                <a href="tel:2018000710" style="color:#22c55e;text-decoration:none;font-weight:700;">201-800-0710</a>
                &nbsp;·&nbsp;
                <a href="mailto:creativeproconstruction0@gmail.com" style="color:#22c55e;text-decoration:none;">creativeproconstruction0@gmail.com</a>
              </p>
            </td>
          </tr>

        </table>

        <!-- Footer note -->
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;width:100%;margin-top:20px;">
          <tr>
            <td style="text-align:center;padding:0 16px;">
              <p style="margin:0;font-size:11px;line-height:1.6;color:#a3a3a3;">
                This email was sent automatically from the booking form at
                <a href="https://creativeproconstruction.com" style="color:#737373;">creativeproconstruction.com</a>.
                Do not reply to this message — contact the lead directly at {{phone}}.
              </p>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>

</body>
</html>
```

---

## 3. Template B — Plain-text fallback (optional)

EmailJS → **Content → Plain text**:

```
NEW CALL REQUEST — Creative Pro Construction
============================================

Name:          {{name}}
Phone:         {{phone}}
Address:       {{street_address}}
Best time:     {{contact_time}}
Service:       {{service}}
Area:          {{area}}

Submitted:     {{submitted_at}} (ET)
Page:          {{page_url}}

---
Call the lead: tel:{{phone}}
Licensed & insured in New Jersey · 201-800-0710
```

---

## 4. Template C — Customer Auto-Reply (optional, requires email field)

Add an **Email** field to the booking form first, then use this template.

**Subject:**

```
We received your request — Creative Pro Construction
```

**HTML body (short version):**

```html
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background:#f5f5f4;font-family:Arial,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;width:100%;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
        <tr>
          <td style="background:#0f171a;padding:32px;text-align:center;">
            <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.2em;color:#22c55e;text-transform:uppercase;">Creative Pro Construction</p>
            <h1 style="margin:0;font-size:24px;color:#fff;">Thanks, {{name}}!</h1>
          </td>
        </tr>
        <tr><td style="height:4px;background:#22c55e;font-size:0;">&nbsp;</td></tr>
        <tr>
          <td style="padding:32px;">
            <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#404040;">
              We received your request for <strong>{{service}}</strong>. A licensed CPC team member will call you at <strong>{{phone}}</strong> during your preferred time (<em>{{contact_time}}</em>).
            </p>
            <p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:#737373;">
              Need us sooner? Call <a href="tel:2018000710" style="color:#22c55e;font-weight:700;">201-800-0710</a>.
            </p>
            <table role="presentation" cellspacing="0" cellpadding="0" align="center">
              <tr>
                <td style="background:#22c55e;border-radius:10px;">
                  <a href="https://creativeproconstruction.com" style="display:inline-block;padding:14px 28px;font-size:14px;font-weight:700;color:#0f171a;text-decoration:none;">Visit Our Website</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background:#0f171a;padding:20px;text-align:center;">
            <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.7);">
              © {{site_name}} · Licensed &amp; insured in New Jersey<br/>
              14 Sherman Pl, Clifton, NJ 07011
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>
```

---

## 5. EmailJS Dashboard Setup Checklist

1. **Account** → [emailjs.com](https://www.emailjs.com/) → create free account  
2. **Email Services** → connect **Gmail** (`creativeproconstruction0@gmail.com`)  
3. **Email Templates** → Create New → paste **Template A** HTML  
4. Set **Subject** → `🛠️ New Call Request — {{service}} | {{name}}`  
5. **To Email** → `creativeproconstruction0@gmail.com`  
6. Copy **Service ID**, **Template ID**, **Public Key**

---

## 6. Environment Variables (for Next.js integration)

Add to `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

---

## 7. Form → EmailJS payload (reference for dev)

When wiring `ServiceBookingForm.tsx`, send this object via `emailjs.send()`:

```typescript
const templateParams = {
  name: formData.name,
  phone: formData.phone,
  phone_dial: formData.phone.replace(/\D/g, ""),
  street_address: formData.streetAddress || "Not specified",
  contact_time: formData.contactTime || "Not specified",
  service: formatServiceTitle(selectedService.title),
  service_slug: formData.service,
  submitted_at: new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "medium",
    timeStyle: "short",
  }),
  page_url: window.location.href,
  site_name: "Creative Pro Construction",
};
```

---

## 8. Brand Reference (from website)

| Token            | Value                          |
|------------------|--------------------------------|
| Dark background  | `#0f171a`                      |
| Accent green     | `#22c55e`                      |
| Accent light     | `#4ade80`                      |
| Body font          | **Geist** (hosted at `/fonts/Geist-Regular.ttf`) |
| Body text          | `#404040`                      |
| Muted text       | `#737373`                      |
| Card background  | `#f5f5f4`                      |
| Company phone    | `201-800-0710`                 |
| Company email    | `creativeproconstruction0@gmail.com` |
| License          | `#13VH13624900`                |
| Address          | `14 Sherman Pl, Clifton, NJ 07011` |

---

*Last updated: June 2026 — matches Creative Pro Construction website branding.*
