export function exportToCsv(filename: string, rows: any[]) {
  if (!rows || !rows.length) return;

  const headers = Object.keys(rows[0]);
  const csv = [
    headers.join(';'),
    ...rows.map(r => headers.map(h => sanitize(r[h])).join(';'))
  ].join('\n');

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.click();
  URL.revokeObjectURL(url);
}

function sanitize(v: any) {
  if (v == null) return '';
  const s = String(v);
  return /[;\n"]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}
