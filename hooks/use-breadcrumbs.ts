'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrentPage: boolean;
}

// Map route segments to display names
const routeNameMap: Record<string, string> = {
  dashboard: 'Dashboard',
  home: 'Home',
  // Add more mappings as needed
  // e.g., 'settings': 'Settings', 'profile': 'Profile'
};

export function useBreadcrumbs(): BreadcrumbItem[] {
  const pathname = usePathname();

  return useMemo(() => {
    // Remove leading/trailing slashes and split by '/'
    const segments = pathname.split('/').filter(Boolean);
    
    if (segments.length === 0) {
      return [];
    }

    // Build breadcrumb items
    const breadcrumbs: BreadcrumbItem[] = segments.map((segment, index) => {
      // Build the href by joining all segments up to current index
      const href = '/' + segments.slice(0, index + 1).join('/');
      
      // Get display name from map or capitalize the segment
      const label = routeNameMap[segment] || 
        segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
      
      // Last segment is the current page
      const isCurrentPage = index === segments.length - 1;

      return {
        label,
        href,
        isCurrentPage,
      };
    });

    return breadcrumbs;
  }, [pathname]);
}
