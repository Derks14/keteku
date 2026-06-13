import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeftIcon, FileTextIcon } from "lucide-react";
import { useMemo } from "react";

import Card from "@/components/ui/card.tsx";
import Wrapper from "@/components/ui/wrapper.tsx";
import { DetailService } from "@/services/api/detail.service.ts";
import { Detail } from "@/services/models/detail.models.ts";
import DetailMd from "@/components/sections/detailMd.tsx";
import {
  getMarkdownTableOfContents,
  type TableOfContentsItem,
} from "@/components/sections/detailMd.utils.ts";

export const Route = createFileRoute("/_layout/projects_/$id")({
  loader: async ({ params, context }) => {
    return await context.queryClient.ensureQueryData({
      queryKey: ["details", params.id],
      queryFn: () => DetailService.getDetail(params.id),
    });
  },
  component: RouteComponent,
  onError: (err) => {
    if (err.status == 404) throw notFound({ data: err });
  },

  notFoundComponent: notFound,
});

function RouteComponent() {
  const detail = (Route.useLoaderData() as { data: Detail }).data;

  const tableOfContents = useMemo(() => {
    const normalizedFormat = detail.contentFormat?.toUpperCase() ?? "";

    if (normalizedFormat !== "MARKDOWN" && normalizedFormat !== "MDX") {
      return [];
    }

    return getMarkdownTableOfContents(detail.content ?? "");
  }, [detail.content, detail.contentFormat]);

  return (
    <Wrapper page="Detail" row_cols_class="md:grid-cols-3">
      <div className="col-span-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <Link
            to="/projects"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm font-medium transition-colors"
          >
            <ArrowLeftIcon className="size-4" />
            Back to projects
          </Link>
          <div>
            <p className="text-muted-foreground text-sm font-medium tracking-[0.24em] uppercase">
              Published project
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
              {detail.title}
            </h1>
            <p className="text-muted-foreground mt-3 max-w-3xl text-sm leading-7 md:text-base">
              {detail.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-3 grid gap-3 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <Card className="h-auto overflow-hidden">
          <div className="p-5 md:p-6">
            {renderContent(detail.content, detail.contentFormat, tableOfContents)}
          </div>
        </Card>
        <OnThisPage tableOfContents={tableOfContents} />
      </div>
    </Wrapper>
  );
}

function OnThisPage({ tableOfContents }: { tableOfContents: TableOfContentsItem[] }) {
  return (
    <aside className="lg:sticky lg:top-4 lg:self-start">
      <Card className="h-auto cursor-default overflow-hidden">
        <nav
          aria-label="On this page"
          className="max-h-[calc(100vh-2rem)] overflow-y-auto p-5 md:p-6"
        >
          <div className="text-foreground flex items-center gap-2 text-sm font-semibold">
            <FileTextIcon className="size-4" />
            On this page
          </div>

          {tableOfContents.length > 0 ? (
            <ol className="mt-4 space-y-2">
              {tableOfContents.map((item) => (
                <li
                  key={item.id}
                  style={{ paddingLeft: `${Math.max(item.level - 1, 0) * 0.75}rem` }}
                >
                  <a
                    href={`#${item.id}`}
                    className="text-muted-foreground hover:text-foreground block rounded-lg px-2 py-1.5 text-sm leading-5 transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-muted-foreground mt-4 text-sm leading-6">
              No sections found for this content.
            </p>
          )}
        </nav>
      </Card>
    </aside>
  );
}

function renderContent(content: string, format: string, tableOfContents: TableOfContentsItem[]) {
  const normalized = format?.toUpperCase() ?? "";

  if (normalized === "MARKDOWN" || normalized === "MDX") {
    return <DetailMd content={content} tableOfContents={tableOfContents} />;
  }

  if (normalized === "JSON_BLOCKS") {
    try {
      const parsed = JSON.parse(content);

      return (
        <pre className="overflow-x-auto rounded-3xl border border-black/5 bg-[#0f1115] p-5 text-sm text-zinc-100 shadow-xl dark:border-white/10">
          {JSON.stringify(parsed, null, 2)}
        </pre>
      );
    } catch {
      return (
        <div className="bg-muted/20 text-muted-foreground rounded-3xl border border-black/5 px-6 py-5 leading-8 whitespace-pre-wrap dark:border-white/10 dark:bg-white/[0.04]">
          {content}
        </div>
      );
    }
  }

  return (
    <div className="bg-muted/20 text-muted-foreground rounded-3xl border border-black/5 px-6 py-5 leading-8 whitespace-pre-wrap dark:border-white/10 dark:bg-white/[0.04]">
      {content}
    </div>
  );
}
