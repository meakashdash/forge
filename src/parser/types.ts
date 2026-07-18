export interface Page {
  title: string;
  layout: string;
  date: string;
  tags: string[];

  content: string;      

  html: string;        

  filePath: string;
  slug: string;

  metadata: Record<string, unknown>;
}