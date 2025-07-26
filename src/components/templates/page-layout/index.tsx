import { cn } from '@/lib/utils';

export interface TemplatePageLayoutProps {
  header?: React.ReactNode;
  content: React.ReactNode;
  footer?: React.ReactNode;
  sidebar?: React.ReactNode;
  className?: string;
}

export function TemplatePageLayout({
  header,
  content,
  footer,
  sidebar,
  className,
}: TemplatePageLayoutProps) {
  return (
    <div className={cn('min-h-screen bg-background', className)}>
      {header && (
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-6 py-4">{header}</div>
        </header>
      )}

      <div className="flex flex-1">
        {sidebar && (
          <aside className="w-64 border-r bg-background/95">{sidebar}</aside>
        )}

        <main className="flex-1">
          <div className="container mx-auto px-6 py-8">{content}</div>
        </main>
      </div>

      {footer && (
        <footer className="border-t bg-background/95">
          <div className="container mx-auto px-6 py-4">{footer}</div>
        </footer>
      )}
    </div>
  );
}

TemplatePageLayout.displayName = 'TemplatePageLayout';
