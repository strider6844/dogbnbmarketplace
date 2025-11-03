import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  title: 'PawMatch - Built with ChatAndBuild',
  description: 'Two-sided dog-care marketplace connecting owners and hosts',
  keywords: 'no-code, app builder, conversation-driven development, marketplace, dog care, pet services',
  openGraph: {
    title: 'PawMatch - Built with ChatAndBuild',
    description: 'Two-sided dog-care marketplace connecting owners and hosts',
    images: ['https://cdn.chatandbuild.com/images/preview.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PawMatch - Built with ChatAndBuild',
    description: 'Two-sided dog-care marketplace connecting owners and hosts',
    images: ['https://cdn.chatandbuild.com/images/preview.png'],
    site: '@chatandbuild',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="PawMatch - Built with ChatAndBuild" />
        <meta property="og:description" content="Two-sided dog-care marketplace connecting owners and hosts" />
        <meta property="og:image" content="https://cdn.chatandbuild.com/images/preview.png" />
        <meta property="keywords" content="no-code, app builder, conversation-driven development, marketplace, dog care, pet services" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="PawMatch - Built with ChatAndBuild" />
        <meta property="twitter:description" content="Two-sided dog-care marketplace connecting owners and hosts" />
        <meta property="twitter:image" content="https://cdn.chatandbuild.com/images/preview.png" />
        <meta property="twitter:site" content="@chatandbuild" />
      </head>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
