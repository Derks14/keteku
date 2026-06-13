import React from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

import Card from "@/components/ui/card.tsx";
import Wrapper from "@/components/ui/wrapper.tsx";
import { Controller, useForm } from "react-hook-form";
import {
  detail_validation_schema,
  DetailValidationSchema,
} from "@/components/schemas/detail.schema.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { DetailService } from "@/services/api/detail.service.ts";
import { toast } from "sonner";
import { InputDescription } from "@/components/ui/input-description.tsx";
import { Input } from "@/components/ui/input.tsx";
import DetailMd from "../../../components/sections/detailMd.tsx";
import { Label } from "@/components/ui/label.tsx";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
  bold,
  code,
  codeBlock,
  getCommands,
  handleKeyDown,
  italic,
  link,
  hr,
  image,
  orderedListCommand,
  quote,
  strikethrough,
  shortcuts,
  TextAreaCommandOrchestrator,
  table,
  heading1,
  heading2,
  heading3,
  unorderedListCommand,
} from "@uiw/react-md-editor";

export const Route = createFileRoute("/_layout/projects_/add")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

  const contentTextareaRef = React.useRef<HTMLTextAreaElement | null>(null);
  const orchestratorRef = React.useRef<TextAreaCommandOrchestrator | null>(null);
  const editorCommands = [
    bold,
    italic,
    strikethrough,
    code,
    codeBlock,
    quote,
    link,
    image,
    hr,
    unorderedListCommand,
    orderedListCommand,
    table,
    heading1,
    heading2,
    heading3,
  ];

  React.useEffect(() => {
    if (contentTextareaRef.current) {
      orchestratorRef.current = new TextAreaCommandOrchestrator(contentTextareaRef.current);
    }
  }, []);

  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<DetailValidationSchema>({
    defaultValues: {
      title: "",
      subtitle: "",
      type: "",
      contentFormat: "",
      content: "",
      relevance: "",
      status: "DRAFT",
    },
    resolver: zodResolver(detail_validation_schema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: DetailService.addDetail,
    onSuccess: async (data) => {
      reset();
      toast.success("New Detail Added", {
        description: data.message,
        action: {
          label: "OK",
          onClick: () => console.log(data),
        },
      });
      await navigate({
        to: "/projects/details",
      });
    },
    onError: (error) => {
      toast.error("Failed to add detail", {
        description: new Date().toUTCString(),
        action: {
          label: "OK",
          onClick: () => console.log(error),
        },
      });
    },
  });

  const onContentKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    handleKeyDown(event, 2, false);
    if (orchestratorRef.current) {
      shortcuts(event, getCommands(), orchestratorRef.current);
    }
  };
  const runCommand = (command: (typeof editorCommands)[number]) => {
    if (!orchestratorRef.current) return;
    contentTextareaRef.current?.focus();
    orchestratorRef.current.executeCommand(command);
  };
  const onAddDetail = (data: DetailValidationSchema) => mutate(data);

  return (
    <Wrapper row_cols_class="md:grid-cols-2">
      <Card className="overflow-hidden">
        <div className="border-b border-black/5 px-6 py-5 dark:border-white/10">
          <p className="text-muted-foreground text-sm font-medium tracking-[0.24em] uppercase">
            Add detail
          </p>
          <h1 className="mt-2 text-2xl font-semibold">Create a new detail entry</h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Keep it concise. The form submits directly to the backend when valid.
          </p>
        </div>

        <form className="space-y-6 p-6" onSubmit={handleSubmit(onAddDetail)}>
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Title" {...register("title")} />
            <InputDescription
              activator={!!errors.title}
              default_message="Enter the primary title."
              error_message={errors.title?.message}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subtitle">Subtitle</Label>
            <Input id="subtitle" placeholder="Subtitle" {...register("subtitle")} />
            <InputDescription
              activator={!!errors.subtitle}
              default_message="Add a short supporting line."
              error_message={errors.subtitle?.message}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Type</Label>
              <Controller
                control={control}
                name="type"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="SOFTWARE">Software</SelectItem>
                        <SelectItem value="BLOG">Blog</SelectItem>
                        <SelectItem value="REPORT">Report</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              <InputDescription
                activator={!!errors.type}
                default_message="Pick the content category."
                error_message={errors.type?.message}
              />
            </div>

            <div className="space-y-2">
              <Label>Format</Label>
              <Controller
                control={control}
                name="contentFormat"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="MARKDOWN">Markdown</SelectItem>
                        <SelectItem value="MDX">MDX</SelectItem>
                        <SelectItem value="JSON_BLOCKS">System</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              <InputDescription
                activator={!!errors.contentFormat}
                default_message="Pick the output format."
                error_message={errors.contentFormat?.message}
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Relevance</Label>
              <Controller
                control={control}
                name="relevance"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose relevance" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="EXPERIMENT">Experiment</SelectItem>
                        <SelectItem value="FEATURED">Featured</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              <InputDescription
                activator={!!errors.relevance}
                default_message="Pick the detail relevance."
                error_message={errors.relevance?.message}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <div className="bg-background rounded-2xl border border-black/5 dark:border-white/10">
              <div className="overflow-y-auto-auto flex items-center gap-2 border-b border-black/5 px-2 py-2 dark:border-white/10">
                {editorCommands.map((command) => (
                  <button
                    key={command.name}
                    type="button"
                    title={command.name}
                    aria-label={command.name}
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => runCommand(command)}
                    className="text-muted-foreground hover:text-foreground focus-visible:ring-ring/50 inline-flex h-8 shrink-0 items-center justify-center rounded-md px-1 transition-colors hover:bg-black/5 focus-visible:ring-2 focus-visible:outline-none dark:hover:bg-white/10"
                  >
                    <span className="flex items-center justify-center [&_svg]:size-4">
                      {command.icon}
                    </span>
                  </button>
                ))}
              </div>
              <Controller
                control={control}
                name="content"
                render={({ field }) => (
                  <textarea
                    ref={(node) => {
                      field.ref(node);
                      contentTextareaRef.current = node;
                    }}
                    id="content"
                    placeholder="Write the detail content..."
                    className="placeholder:text-muted-foreground flex w-full resize-y border-0 bg-transparent px-3 py-3 text-base transition-colors outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    onKeyDown={onContentKeyDown}
                  />
                )}
              />
            </div>
            <InputDescription
              activator={!!errors.content}
              default_message="Write the body content here."
              error_message={errors.content?.message}
            />
          </div>

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Saving..." : "Add Detail"}
          </Button>
        </form>
      </Card>

      <Card className="border-dashed">
        <div className="space-y-4 p-6">
          <div>
            <p className="text-muted-foreground text-sm font-medium tracking-[0.24em] uppercase">
              Preview
            </p>
            <h2 className="mt-2 text-xl font-semibold">What gets sent</h2>
          </div>

          <div className="space-y-3 rounded-2xl border border-black/5 bg-black/[0.02] p-4 text-sm dark:border-white/10 dark:bg-white/[0.03]">
            <div>
              <p className="text-muted-foreground">Title</p>
              <p className="font-medium">{watch("title") || "required"}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Subtitle</p>
              <p className="font-medium">{watch("subtitle") || "Supporting text"}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Type</p>
              <p className="font-medium">{watch("type") || "SOFTWARE | BLOG | REPORT"}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Format</p>
              <p className="font-medium">
                {watch("contentFormat") || "MARKDOWN | MDX | JSON_BLOCKS"}
              </p>
            </div>
          </div>

          <DetailMd content={watch("content")} />
        </div>
      </Card>
    </Wrapper>
  );
}
