export type TableOfContentsItem = {
  id: string;
  level: number;
  title: string;
};

const headingPattern = /^(#{1,4})\s+(.+?)\s*#*\s*$/gm;

export function getMarkdownTableOfContents(content: string): TableOfContentsItem[] {
  const slugCounts = new Map<string, number>();

  return Array.from(content.matchAll(headingPattern)).map((match) => {
    const level = match[1].length;
    const title = cleanHeadingTitle(match[2]);
    const baseSlug = slugifyHeading(title) || "section";
    const count = (slugCounts.get(baseSlug) ?? 0) + 1;

    slugCounts.set(baseSlug, count);

    return {
      id: count === 1 ? baseSlug : `${baseSlug}-${count}`,
      level,
      title,
    };
  });
}

function cleanHeadingTitle(title: string) {
  return title
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[`*_~]/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function slugifyHeading(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function normalizeHeadingTitle(title: string) {
  return title.toLowerCase().replace(/\s+/g, " ").trim();
}
