import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import remarkBreaks from "remark-breaks";
import { isValidElement, useMemo, type ComponentPropsWithoutRef, type ReactNode } from "react";

import {
  getMarkdownTableOfContents,
  normalizeHeadingTitle,
  type TableOfContentsItem,
} from "@/components/sections/detailMd.utils.ts";

type DetailMdProps = {
  content: string;
  tableOfContents?: TableOfContentsItem[];
};

type MarkdownCodeProps = ComponentPropsWithoutRef<"code"> & {
  inline?: boolean;
};

function getNodeText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(getNodeText).join("");
  if (isValidElement<{ children?: ReactNode }>(node)) return getNodeText(node.props.children);

  return "";
}

function createMarkdownComponents(tableOfContents: TableOfContentsItem[]): Components {
  const headingUseCounts = new Map<string, number>();
  const headingIdsByTitle = tableOfContents.reduce<Record<string, string[]>>((headings, item) => {
    const key = normalizeHeadingTitle(item.title);

    headings[key] = [...(headings[key] ?? []), item.id];

    return headings;
  }, {});

  const getHeadingId = (children: ReactNode) => {
    const key = normalizeHeadingTitle(getNodeText(children));
    const useCount = headingUseCounts.get(key) ?? 0;
    const id = headingIdsByTitle[key]?.[useCount];

    headingUseCounts.set(key, useCount + 1);

    return id;
  };

  return {
    h1: ({ children }) => (
      <h1
        id={getHeadingId(children)}
        className="font-dosis text-foreground mt-8 scroll-mt-24 text-4xl leading-[0.81] font-semibold tracking-tight first:mt-0 md:text-5xl"
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        id={getHeadingId(children)}
        className="font-dosis text-foreground mt-8 scroll-mt-24 border-b border-black/5 pb-2 text-2xl leading-[0.81] font-semibold tracking-tight md:text-3xl dark:border-white/10"
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        id={getHeadingId(children)}
        className="font-dosis text-foreground mt-6 scroll-mt-24 text-xl leading-[0.81] font-semibold tracking-tight md:text-2xl"
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        id={getHeadingId(children)}
        className="text-foreground mt-5 scroll-mt-24 text-lg leading-[0.81] font-semibold tracking-tight"
      >
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="text-muted-foreground my-4 max-w-3xl leading-[1.62rem]">{children}</p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-primary decoration-primary/40 hover:text-foreground hover:decoration-foreground/60 font-medium underline underline-offset-4 transition-colors"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="text-muted-foreground marker:text-primary my-5 list-disc space-y-2 pl-6">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="text-muted-foreground marker:text-primary my-5 list-decimal space-y-2 pl-6">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="pl-1 leading-[1.4175rem]">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-primary/15 bg-primary/5 text-foreground dark:border-primary/20 dark:bg-primary/10 my-6 rounded-2xl border px-5 py-4 shadow-sm">
        <div className="text-muted-foreground text-sm leading-[1.4175rem]">{children}</div>
      </blockquote>
    ),
    hr: () => <hr className="my-8 border-black/10 dark:border-white/10" />,
    table: ({ children }) => (
      <div className="bg-background my-6 overflow-x-auto rounded-2xl border border-black/5 shadow-sm dark:border-white/10">
        <table className="w-full border-collapse text-left text-sm">{children}</table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-black/[0.03] dark:bg-white/[0.05]">{children}</thead>
    ),
    th: ({ children }) => (
      <th className="text-foreground border-b border-black/5 px-4 py-3 font-semibold dark:border-white/10">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="text-muted-foreground border-b border-black/5 px-4 py-3 dark:border-white/10">
        {children}
      </td>
    ),
    img: ({ src, alt }) => (
      <img
        src={src}
        alt={alt}
        className="bg-muted/20 my-6 rounded-3xl border border-black/5 shadow-lg dark:border-white/10"
      />
    ),
    code: ({ inline, className, children, ...props }: MarkdownCodeProps) =>
      inline ? (
        <code
          className="text-foreground rounded-md border border-black/5 bg-black/[0.04] px-1.5 py-0.5 font-mono text-[0.9em] dark:border-white/10 dark:bg-white/[0.08]"
          {...props}
        >
          {children}
        </code>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      ),
    pre: ({ children }) => (
      <pre className="my-6 overflow-x-auto rounded-3xl border border-black/5 bg-[#0f1115] p-5 text-sm text-zinc-100 shadow-xl dark:border-white/10">
        {children}
      </pre>
    ),
  };
}

export default function DetailMd({ content, tableOfContents }: DetailMdProps) {
  const generatedTableOfContents = useMemo(() => getMarkdownTableOfContents(content), [content]);
  const markdownComponents = createMarkdownComponents(tableOfContents ?? generatedTableOfContents);

  return (
    <article className="detail-markdown max-w-none border border-black/5 px-6 py-4 md:px-6 md:py-6 dark:border-white/10 dark:from-white/[0.04]">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkBreaks, remarkToc]}
        components={markdownComponents}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
