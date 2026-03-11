import { createFileRoute } from '@tanstack/react-router'
import { ProjectService } from "@/services/api/project.service.ts";
import Wrapper from "@/components/ui/wrapper.tsx";
import Card from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Input } from "@/components/ui/input.tsx";
import { useMutation } from "@tanstack/react-query";
import { pick } from "lodash";
import {  SubmitHandler, useForm } from "react-hook-form";
import {
  update_project_validation_schema,
  UpdateProjectValidationSchema
} from "@/components/schemas/project.schema.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { InputDescription } from "@/components/ui/input-description.tsx";
import { queryClient } from "@/services/queryClient.ts";
import { ImSpinner2 } from "react-icons/im";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import { Field, FieldContent, FieldDescription, FieldLabel, FieldTitle } from "@/components/ui/field.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import {
  Combobox,
  ComboboxChip, ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent, ComboboxEmpty, ComboboxItem, ComboboxList, ComboboxValue,
  useComboboxAnchor
} from "@/components/ui/combobox.tsx";
import React from "react";
import { SearchIcon } from "lucide-react";



export const Route = createFileRoute('/_layout/projects_/update/$id')({
  loader: async ({ params, context }) => {
    return await context.queryClient.ensureQueryData({
      queryKey: ['projects', params.id],
      queryFn: () => ProjectService.getProject(params.id)
    })
  },
  component: RouteComponent,
})

function RouteComponent() {
  const params = Route.useParams();
  const { data } = Route.useLoaderData()
  const anchorRef = useComboboxAnchor()


  const { mutate, isPending } = useMutation({
    mutationFn: (data: UpdateProjectValidationSchema) =>
      ProjectService.updateProject({ projectId: params.id, project: data }),

    onSuccess: async (data) => {
      await queryClient.invalidateQueries({ queryKey: ["projects"] });
      toast.success("project updated successfully", {
        description: new Date().toUTCString(),
        action: {
          label: "OK",
          onClick: () => console.log(data),
        },
      });
    },

    onError: (error) => {
      console.log("error updating project ", error);
    },
  });

  const schema_keys = Object.keys(update_project_validation_schema.shape) as (keyof UpdateProjectValidationSchema)[];

  const { register, watch, handleSubmit, formState: { errors } } = useForm<UpdateProjectValidationSchema>({
    resolver: zodResolver(update_project_validation_schema),
    defaultValues: pick(data,schema_keys)
  })

  const onSubmit: SubmitHandler<UpdateProjectValidationSchema> = (data) => mutate(data)

  const tagOptions = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"]

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Wrapper page="Update Project" row_cols_class="md:grid-cols-2 md:grid-rows-4">
          <Card>
            <div className="p-4 pr-8 md:py-6">
              <div>Project</div>
              <div className="my-4">
                <Label htmlFor="title"> Title</Label>
                <Input type="text" {...register("title")} placeholder="Title" />
                <InputDescription
                  activator={!!errors.title}
                  default_message="whats the title of the project"
                  error_message={errors.title?.message}
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Input type="text" {...register("description")} placeholder="Description" />
                <InputDescription
                  activator={!!errors.description}
                  default_message="provide project description"
                  error_message={errors.title?.message}
                />
              </div>
            </div>
          </Card>
          <div className="row-span-2 p-4 md:p-6">
            <div>
              <div className="">
                <div>
                  <h4>Publish Project</h4>
                </div>
                <div>
                  <FieldLabel className="cursor-pointer">
                    <Field orientation="horizontal">
                      <Checkbox />
                      <FieldContent>
                        <FieldTitle>Publish</FieldTitle>
                        <FieldDescription>
                          You can show this project to the public at any time
                        </FieldDescription>
                      </FieldContent>
                    </Field>
                  </FieldLabel>
                </div>
              </div>
            </div>

            <hr className="my-8" />
            <div>
              <Label htmlFor="project name"> Project Name</Label>
              <Input
                type="text"
                {...register("hero.projectName")}
                placeholder="Distributed URL Shortener"
              />
              <InputDescription
                activator={!!errors.hero?.projectName}
                default_message="whats the title of the project"
                error_message={errors.hero?.projectName?.message}
              />
            </div>

            <div className="">
              <Label htmlFor="value statement">Value Statement</Label>
              <Textarea
                {...register("hero.valueStatement")}
                placeholder="A scalable, fault-tolerant URL shortening service handling millions of requests."
              />
            </div>

            {/*  we will resume this component, we need to add this combobox to the form and we will have to try using the controller method */}

            {/*  but first we need to fix the index css and implement dark mode correctly */}

            <div>
              <Combobox multiple autoHighlight items={tagOptions} defaultValue={[tagOptions[0]]}>
                <ComboboxChips ref={anchorRef} className="w-full max-w-xs">


                  <SearchIcon className="size-4 text-muted-foreground" />
                  <span className="text-muted-foreground text-xs">search tech stacks</span>
                  <ComboboxValue>
                    {(values) => (
                      <React.Fragment>
                        {values.map((value: string) => (
                          <ComboboxChip key={value}> {value}</ComboboxChip>
                        ))}



                        <ComboboxChipsInput />
                      </React.Fragment>
                    )}
                  </ComboboxValue>
                </ComboboxChips>
                {
                  // we will ask the why we need an anchor or whats its used for
                }
                <ComboboxContent anchor={anchorRef}>
                  <ComboboxEmpty>no items found</ComboboxEmpty>
                  <ComboboxList>
                    {(item) => (
                      <ComboboxItem key={item} value={item}>
                        {item}
                      </ComboboxItem>
                    )}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </div>
          </div>
          <Card>
            <div className="p-4 md:p-6">
              <div>
                <h3 className="text-xl font-semibold">Problem Statement</h3>
              </div>
              <div>
                <Label htmlFor="problem">Problem</Label>
                <Input
                  type="text"
                  {...register("problemStatement.problem")}
                  placeholder="Existing URL shorteners struggled with scalability and latency under heavy traffic"
                />
              </div>
              <div>
                <Label htmlFor="realWorldMotivation">Real World Motivation</Label>
              </div>
              <div>constraints</div>
              <div>why existing solutions failed</div>
              <div></div>
            </div>
          </Card>
          <Card className="row-span-2">
            <div className="p-4 md:p-6">
              <div>System Architecture</div>
              <div>we will start with image links, we will handle file upload later</div>
              <div>image goes here</div>
              <div>dataflow</div>
              <div>design rationale</div>
            </div>
          </Card>
          <Card>
            <div className="p-4 md:p-6">
              <div>Engineering Decision</div>
              <div>topic </div>
              <div>decision</div>
              <div>reason</div>
            </div>
          </Card>
          <Card>
            <div className="p-4 md:p-6">
              <div>Implementation Highlights</div>
              <div>api design</div>
              <div>database schema overview</div>
              <div>background jobs</div>
              <div>error handling</div>
            </div>
          </Card>
          <Card>
            <div className="p-4 md:p-6">
              <div>Outcomes and Learnings</div>
              <div>what worked - list </div>
              <div>what broke - list </div>
              <div>what future improvements - list </div>
            </div>
          </Card>
          <Card>
            <div className="p-4 md:p-6">
              Call to action
              <div> primary - label</div>
              <div> primary - url</div>
              <div> secondary - label</div>
              <div> secondary - url</div>
            </div>
          </Card>

          <div className="col-span-2 my-4">
            <Button className="font-xl">
              {isPending && (
                <ImSpinner2 data-icon="inline-start" className="font-xl animate-spin" />
              )}
              Save
            </Button>
          </div>
        </Wrapper>
      </form>
    </>
  );
}
