import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";

import Card from "@/components/ui/card.tsx";
import Wrapper from "@/components/ui/wrapper.tsx";
import { DetailService } from "@/services/api/detail.service.ts";
import { Detail } from "@/services/models/detail.models.ts";

export const Route = createFileRoute("/_layout/projects")({
  component: RouteComponent,
});

export interface fetchProjectParamsType {
  page: number;
  size: number;
  search?: string;
}

export type fetchProjectQueryKeyType = [string, fetchProjectParamsType];

function RouteComponent() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["details"],
    queryFn: DetailService.fetchDetails,
  });

  const details = (data?.data ?? []).filter(
    (detail) => detail.status?.toUpperCase() === "PUBLISHED",
  );

  return (
    <>
      <Wrapper page="Projects" row_cols_class="md:grid-cols-3">
        <div className="col-span-3 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-muted-foreground text-sm font-medium tracking-[0.24em] uppercase">
              Projects
            </p>
            <h1 className="mt-2 text-4xl font-semibold">Published details</h1>
            <p className="text-muted-foreground mt-3 max-w-2xl text-sm leading-7">
              A simple list of published details pulled from the backend and presented in the same
              visual language as the rest of the site.
            </p>
          </div>
        </div>

        {isLoading && (
          <div className="text-muted-foreground col-span-3 rounded-3xl border border-black/5 bg-black/[0.02] p-6 text-sm dark:border-white/10 dark:bg-white/[0.03]">
            Loading published details...
          </div>
        )}

        {isError && (
          <div className="border-destructive/20 bg-destructive/5 text-destructive col-span-3 rounded-3xl border p-6 text-sm">
            Failed to load projects.
          </div>
        )}

        {!isLoading && !isError && details.length === 0 && (
          <div className="col-span-3 rounded-3xl border border-dashed border-black/10 bg-black/[0.02] p-10 text-center dark:border-white/10 dark:bg-white/[0.03]">
            <p className="text-muted-foreground text-sm font-medium tracking-[0.24em] uppercase">
              Empty
            </p>
            <h2 className="mt-3 text-2xl font-semibold">No published projects</h2>
            <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-7">
              projects will appear here once they are available in the backend.
            </p>
          </div>
        )}

        {!isLoading &&
          !isError &&
          details.map((detail: Detail) => {
            return (
              <Link to="/projects/$id" params={{ id: detail.id }}>
                <Card key={detail.id} className="h-full">
                  <div className="flex h-full flex-col justify-between gap-5 p-5 md:p-4">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="border-primary/15 bg-primary/5 text-primary rounded-full border px-3 text-xs font-semibold tracking-[0.2em] uppercase">
                          {formatLabel(detail.type)}
                        </span>
                      </div>

                      <div className="">
                        <h2 className="text-foreground text-2xl font-semibold tracking-tight">
                          {detail.title}
                        </h2>
                        <p className="text-muted-foreground text-sm leading-7">{detail.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
      </Wrapper>
    </>
  );
}

function formatLabel(value?: string) {
  if (!value) return "Unknown";

  const normalized = value.trim();

  if (normalized === normalized.toUpperCase() && normalized.length <= 4) {
    return normalized;
  }

  return normalized
    .replace(/_/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}
