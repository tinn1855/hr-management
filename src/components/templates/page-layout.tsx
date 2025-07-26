import * as React from 'react';
import { MoleculePageHeader } from '@/components/molecules/page-header';

export interface TemplatePageLayoutProps {
  title: string;
  description: string;
  actionProps?: {
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
  };
  children: React.ReactNode;
}

export const TemplatePageLayout: React.FC<TemplatePageLayoutProps> = ({
  title,
  description,
  actionProps,
  children,
}) => {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <MoleculePageHeader
        title={title}
        description={description}
        actionProps={actionProps}
      />
      <div className="space-y-4">{children}</div>
    </div>
  );
};
