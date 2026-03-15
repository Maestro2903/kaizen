import fs from 'fs';
import path from 'path';

/**
 * Reads public/kaizen.html at request time (Server Component only).
 * Returns the inner body HTML with all <script> tags stripped —
 * scripts are loaded separately via next/script in layout.tsx.
 */
export function getBodyContent(): string {
  const filePath = path.join(process.cwd(), 'public', 'kaizen.html');
  const html = fs.readFileSync(filePath, 'utf-8');

  const bodyStart = html.indexOf('<body');
  const bodyEnd = html.lastIndexOf('</body>');
  if (bodyStart === -1 || bodyEnd === -1) return html;

  // Grab everything between <body ...> and </body>
  const openTagEnd = html.indexOf('>', bodyStart) + 1;
  let body = html.slice(openTagEnd, bodyEnd);

  // Strip <script> blocks — innerHTML does not execute them anyway
  body = body.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

  return body;
}

/**
 * Basic utility: cn() placeholder so @/lib/utils stays importable
 * without needing clsx / tailwind-merge in this project.
 */
export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
