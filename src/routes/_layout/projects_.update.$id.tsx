import { createFileRoute, FileRoutesByPath, Link, notFound, UseNavigateResult } from "@tanstack/react-router";
import { ProjectService } from "@/services/api/project.service.ts";
import Wrapper from "@/components/ui/wrapper.tsx";
import Card from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Input } from "@/components/ui/input.tsx";
import { useMutation } from "@tanstack/react-query";
import { pick } from "lodash";
import { SubmitHandler, useForm } from "react-hook-form";
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

import DeleteProject from "@/components/sections/delete-project.tsx";
import AddEngineeringDecision from "@/components/sections/add-engineering-decision.tsx";



export const Route = createFileRoute('/_layout/projects_/update/$id')({
  loader: async ({ params, context }) => {
    return await context.queryClient.ensureQueryData({
      queryKey: ['projects', params.id],
      queryFn: () => ProjectService.getProject(params.id)
    })

  },
  component: RouteComponent,
  //
  onError: (error) => {

    console.log("here we go ", error);
    if (error.status == 404) throw notFound({ data: error});
  },
  notFoundComponent: () => {
    return <div>
      <div>
        <h1 className="text-2xl">Sorry mate, we don't have a project like this</h1>
        <div>
          <p>We might as well go back home</p>
        </div>
        <div>
          <Link to="/projects"> home</Link>
        </div>
      </div>
    </div>
  },
})


function RouteComponent() {
  const params = Route.useParams();
  const { data } = Route.useLoaderData()
  const anchorRef = useComboboxAnchor()


  const navigate:  UseNavigateResult<FileRoutesByPath["/_layout/projects_/update/$id"]["fullPath"]> = Route.useNavigate()

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
      // navigate me to somewhere else
    },

    onError: (error) => {

      // add option if theres no object of such id
      // route back to projects or home
      console.log("error updating project ", error );
    },
  });

  const schema_keys = Object.keys(update_project_validation_schema.shape) as (keyof UpdateProjectValidationSchema)[];

  const projectUpdateForm = useForm<UpdateProjectValidationSchema>({
    resolver: zodResolver(update_project_validation_schema),
    defaultValues: pick(data,schema_keys)
  })

  const {
    register,
    control,
    setValue,
    watch,
    handleSubmit,
    trigger,
    formState: { errors } } = projectUpdateForm;


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
              <div>{watch("hero.techStack")}</div>
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
          
          <div className="p-4 md:p-6">
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

            <div className="my-5">
              <Label htmlFor="tech stacks">Tech Stacks</Label>
              <input type="hidden" value={JSON.stringify(watch("hero.techStack"))} readOnly />

              <Combobox
                multiple
                autoHighlight
                value={watch("hero.techStack")}
                items={tagOptions}
                onValueChange={(next) =>
                  setValue("hero.techStack", next, {
                    shouldDirty: true,
                    shouldTouch: true,
                    shouldValidate: true,
                  })
                }
              >
                <ComboboxChips
                  ref={anchorRef}
                  aria-invalid={!!errors.hero?.techStack}
                  className="w-full max-w-xs"
                >
                  <SearchIcon className="text-muted-foreground size-4" />
                  <span className="text-muted-foreground text-xs">search tech stacks</span>
                  <ComboboxValue>
                    {(values) => (
                      <React.Fragment>
                        {values.map((value: string) => (
                          <ComboboxChip key={value}> {value}</ComboboxChip>
                        ))}
                        <ComboboxChipsInput className="w-full" />
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

            <div>
              <div className="md:flex items-center gap-2">
                <div className="grow">
                  <Label htmlFor="github link">Github</Label>
                  <Input
                    type="url"
                    {...register("hero.links.github")}
                    placeholder="https://github.com/username/url-shortener"
                  />
                  <InputDescription
                    activator={!!errors.hero?.links?.github}
                    default_message="produce the github repo for the project"
                    error_message={errors.hero?.links?.github?.message}
                  />
                </div>

                <div className="grow">
                  <div className="grow">
                    <Label htmlFor="github link">Live Application</Label>
                    <Input
                      type="url"
                      {...register("hero.links.liveDemo")}
                      placeholder="https://short.ly"
                    />
                    <InputDescription
                      activator={!!errors.hero?.links?.liveDemo}
                      default_message="is the project live"
                      error_message={errors.hero?.links?.liveDemo?.message}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>


          <Card>
            <div className="p-4 md:p-6">
              <div>
                <h3 className="text-xl font-semibold">Problem Statement</h3>
              </div>
              <div>
                <Label htmlFor="problem">Problem</Label>
                <Textarea
                  {...register("problemStatement.problem")}
                  placeholder="Existing URL shorteners struggled with scalability and latency under heavy traffic"
                />
                <InputDescription
                  activator={!!errors.problemStatement}
                  error_message={errors.problemStatement?.message}
                  default_message="what problem does this project solve"
                />
              </div>
              <div>
                <Label htmlFor="realWorldMotivation">Real World Motivation</Label>
                <Textarea {...register("problemStatement.realWorldMotivation")}
                          placeholder="Needed a system that could handle viral traffic spikes reliably." />
              </div>
              <div>
                constraints
                // constraints here will have input
              </div>
              <div>
                <Label htmlFor="whyExistingSolutionsFailed">Why Existing Solutions Failed</Label>
                <Textarea {...register("problemStatement.whyExistingSolutionsFailed")}
                          placeholder="Most relied on single-region deployments and synchronous writes" />
              </div>
              <div></div>
            </div>
          </Card>

          <AddEngineeringDecision
            control={control}
            register={register}
            errors={errors}
            watch={watch}
            trigger={trigger}
            setValue={setValue}
          />

          <Card className="">
            <div className="p-4 md:p-6">
              <div>System Architecture</div>
              <div>
                <Label htmlFor="diagramUrl">Diagram Url</Label>
                <Input type="url" {...register("systemArchitecture.diagramUrl")}
                          placeholder="https://cdn.site.com/diagrams/url-shortener-arch.png" />
              </div>

              <div>we will start with image links, we will handle file upload later</div>
              <div>image goes here</div>
              <div>

                dataflow
              // this should have an input that spits out text as array
              </div>
              <div>
                <Label>Design Rationale</Label>
                <Textarea {...register("systemArchitecture.designRationale")}
                          placeholder="Microservices with async processing improved scalability and resilience" />
              </div>
            </div>
          </Card>


          <Card>
            <div className="p-4 md:p-6">
              <div>Implementation Highlights</div>
              <div>
              {/*
              api design goes here
              list of strings goes here
              */}
              </div>
              <div>
                <Label htmlFor="databaseSchemaOverview">Database Schema Overview</Label>
                <Textarea {...register("implementationHighlights.databaseSchemaOverview")}
                          placeholder="Short URLs stored with TTL indexes and click analytics." />
              </div>
              <div>
                <Label htmlFor="BackgroundJobs"> Background Jobs</Label>
              {/*  also another list of strings goes here*/}
              </div>
              <div>
                <Label htmlFor="errorHandling">Error Handling</Label>
                <Textarea {...register("implementationHighlights.errorHandling")}
                          placeholder="Centralised exception handling with structured error codes" />
              </div>
            </div>
          </Card>


          <Card>
            <div className="p-4 md:p-6">
              <div>Outcomes and Learnings</div>
              <div>what worked - list</div>
              <div>what broke - list</div>
              <div>what future improvements - list</div>
            </div>
          </Card>
          <Card>
            <div className="p-4 md:p-6">
              <div>
                <h4 className="text-xl">
                  Call to action
                </h4>
              </div>
              <div>
                <Label htmlFor="label">Label</Label>
                <Input type="text" placeholder="View Code" {...register("callToAction.primary.label")}></Input>
              </div>
              <div>
                <Label htmlFor="url">Url</Label>
                <Input type="url" placeholder="https://github.com/username/url-shortener" {...register("callToAction.primary.url")} />
              </div>
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

          <div className="col-span-2 mt-12">
            <DeleteProject key={params.id} navigate={navigate} projectId={params.id} />
          </div>
        </Wrapper>
      </form>
    </>
  );
}
