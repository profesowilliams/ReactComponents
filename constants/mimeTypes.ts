// Define and export MIME types as a reusable constant
export const mimeTypeToLabel: Record<string, string> = {
  // Documents
  'application/pdf': 'PDF',
  'application/msword': 'DOC',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
    'DOCX',
  'application/vnd.ms-excel': 'XLS',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'XLSX',
  'application/vnd.ms-powerpoint': 'PPT',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation':
    'PPTX',
  'text/plain': 'TXT',
  'text/csv': 'CSV',

  // Images
  'image/jpeg': 'JPEG',
  'image/png': 'PNG',
  'image/gif': 'GIF',
  'image/bmp': 'BMP',
  'image/webp': 'WEBP',
  'image/svg+xml': 'SVG',
  'image/tiff': 'TIFF',

  // Audio
  'audio/mpeg': 'MP3',
  'audio/wav': 'WAV',
  'audio/ogg': 'OGG',
  'audio/x-ms-wma': 'WMA',
  'audio/aac': 'AAC',

  // Video
  'video/mp4': 'MP4',
  'video/x-msvideo': 'AVI',
  'video/x-ms-wmv': 'WMV',
  'video/webm': 'WEBM',
  'video/quicktime': 'MOV',
  'video/x-matroska': 'MKV',

  // Compressed Files
  'application/zip': 'ZIP',
  'application/x-7z-compressed': '7Z',
  'application/x-rar-compressed': 'RAR',
  'application/gzip': 'GZIP',
  'application/x-tar': 'TAR',

  // Code and Markup Files
  'text/html': 'HTML',
  'application/javascript': 'JS',
  'text/css': 'CSS',
  'application/json': 'JSON',
  'application/xml': 'XML',
  'application/x-sh': 'Shell Script',
  'text/markdown': 'Markdown',
};
