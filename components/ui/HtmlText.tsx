interface HtmlTextProps {
  html: string;
  className?: string;
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'div';
}

export default function HtmlText({ html, className = '', as: Tag = 'span' }: HtmlTextProps) {
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
