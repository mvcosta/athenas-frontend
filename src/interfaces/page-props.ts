export interface PageProps {
  params: { [key: string]: string | string[] | undefined };
  searchParams: { [key: string]: string | string[] | undefined };
}

export interface LayoutProps extends PageProps {
  children: React.ReactNode;
}
