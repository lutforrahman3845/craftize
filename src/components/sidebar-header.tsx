import { ChevronFirst } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useLayout } from './context';
import Link from 'next/link';

export function SidebarHeader() {
  const { sidebarCollapse, setSidebarCollapse } = useLayout();

  const handleToggleClick = () => {
    setSidebarCollapse(!sidebarCollapse);
  };

  return (
    <div className="sidebar-header hidden lg:flex items-center relative justify-between px-3 lg:px-6 shrink-0 border-b border-border/50">
      <Link href="/" className="flex items-center">
        <div className="dark:hidden flex items-center">
          {!sidebarCollapse ? (
            <img
              src={'/logo/craftize-full.svg'}
              className="h-7 max-w-none"
              alt="Default Logo"
            />
          ) : (
            <img
              src={'/favicon.svg'}
              className="h-8 w-8 max-w-none transform transition-transform duration-300"
              alt="Mini Logo"
            />
          )}
        </div>
        <div className="hidden dark:flex items-center">
          {!sidebarCollapse ? (
            <img
              src={'/logo/craftize-full-dark.svg'}
              className="h-8 max-w-none"
              alt="Default Dark Logo"
            />
          ) : (
            <img
              src={'/favicon.svg'}
              className="h-8 w-8 max-w-none transform transition-transform duration-300"
              alt="Mini Logo"
            />
          )}
        </div>
      </Link>
      <Button
        onClick={handleToggleClick}
        size="sm"
        variant="outline"
        className={cn(
          'size-7 absolute start-full top-2/4 rtl:translate-x-2/4 -translate-x-2/4 -translate-y-2/4',
          sidebarCollapse ? 'ltr:rotate-180' : 'rtl:rotate-180',
        )}
      >
        <ChevronFirst className="size-4!" />
      </Button>
    </div>
  );
}
