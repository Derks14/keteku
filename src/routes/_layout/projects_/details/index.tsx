import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { PencilLineIcon, Trash2Icon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog.tsx";

import Card from "@/components/ui/card.tsx";
import Wrapper from "@/components/ui/wrapper.tsx";
import { queryClient } from "@/services/queryClient.ts";
import { DetailService } from "@/services/api/detail.service.ts";
import { Detail } from "@/services/models/detail.models.ts";
import { toast } from "sonner";

export const Route = createFileRoute("/_layout/projects_/details/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["details"],
    queryFn: DetailService.fetchDetails,
  });

  const { mutate: deleteDetail } = useMutation({
    mutationFn: DetailService.deleteDetail,
    onSuccess: async () => {
      toast.success("Detail deleted successfully");
      await queryClient.invalidateQueries({ queryKey: ["details"] });
    },
    onError: () => {
      toast.error("Failed to delete detail");
    },
  });

  const details = data?.data ?? [];

  return (
    <Wrapper page="Details" row_cols_class="md:grid-cols-3">
      <div className="col-span-3 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-muted-foreground text-sm font-medium tracking-[0.24em] uppercase">
            Details
          </p>
          <h1 className="mt-2 text-4xl font-semibold">Details library</h1>
          <p className="text-muted-foreground mt-3 max-w-2xl text-sm leading-7">
            A compact index of detail records rendered to blend with the rest of the portfolio UI.
          </p>
        </div>

        <Link
          to="/projects/add"
          className="bg-background text-foreground inline-flex h-10 items-center justify-center rounded-full border border-black/5 px-4 text-sm font-medium shadow-sm transition-colors hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10"
        >
          Add detail
        </Link>
      </div>

      {isLoading && (
        <div className="text-muted-foreground col-span-3 rounded-3xl border border-black/5 bg-black/[0.02] p-6 text-sm dark:border-white/10 dark:bg-white/[0.03]">
          Loading details...
        </div>
      )}

      {isError && (
        <div className="border-destructive/20 bg-destructive/5 text-destructive col-span-3 rounded-3xl border p-6 text-sm">
          Failed to load details.
        </div>
      )}

      {!isLoading && !isError && details.length === 0 && (
        <div className="col-span-3 rounded-3xl border border-dashed border-black/10 bg-black/[0.02] p-10 text-center dark:border-white/10 dark:bg-white/[0.03]">
          <p className="text-muted-foreground text-sm font-medium tracking-[0.24em] uppercase">
            Empty
          </p>
          <h2 className="mt-3 text-2xl font-semibold">No details yet</h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-7">
            Create the first record and it will appear here as a styled card list.
          </p>
        </div>
      )}

      {details.map((detail: Detail) => {
        const preview =
          detail.content.length > 180
            ? `${detail.content.slice(0, 180).trimEnd()}...`
            : detail.content;

        return (
          <Card key={detail.id} className="h-full">
            <div className="flex h-full flex-col justify-between gap-5 p-5 md:p-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-muted-foreground rounded-full border border-black/5 bg-black/[0.04] px-3 py-1 text-[11px] font-medium tracking-[0.2em] uppercase dark:border-white/10 dark:bg-white/[0.06]">
                    {detail.type}
                  </span>
                  <span className="border-primary/15 bg-primary/5 text-primary rounded-full border px-3 py-1 text-[11px] font-medium tracking-[0.2em] uppercase">
                    {detail.contentFormat}
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-foreground text-2xl font-semibold tracking-tight">
                    {detail.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-7">{detail.subtitle}</p>
                </div>

                <p className="text-muted-foreground line-clamp-4 text-sm leading-7">{preview}</p>
              </div>

              <div className="flex flex-col gap-3 border-t border-black/5 pt-4 md:flex-row md:items-center md:justify-between dark:border-white/10">
                <div className="flex flex-wrap items-center gap-2">
                  <Link
                    to="/projects/details/update/$id"
                    params={{ id: detail.id }}
                    className="bg-background text-foreground inline-flex h-9 items-center gap-2 rounded-full border border-black/5 px-3 text-sm font-medium shadow-sm transition-colors hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10"
                  >
                    <PencilLineIcon className="size-4" />
                    Edit
                  </Link>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <button
                        type="button"
                        className="border-destructive/20 bg-destructive/5 text-destructive hover:bg-destructive/10 inline-flex h-9 items-center gap-2 rounded-full border px-3 text-sm font-medium transition-colors"
                      >
                        <Trash2Icon className="size-4" />
                        Delete
                      </button>
                    </AlertDialogTrigger>
                    <AlertDialogContent size="sm">
                      <AlertDialogHeader>
                        <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
                          <Trash2Icon />
                        </AlertDialogMedia>
                        <AlertDialogTitle>Delete detail?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This will permanently delete{" "}
                          <span className="text-foreground font-medium">{detail.title}</span>.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => deleteDetail(detail.id)}
                          variant="destructive"
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>

                <div className="text-muted-foreground flex items-center justify-between text-xs md:justify-end md:gap-4">
                  <span>{detail.id}</span>
                  <span>{detail.content.length} chars</span>
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </Wrapper>
  );
}
