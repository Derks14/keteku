import { createFileRoute } from '@tanstack/react-router'
import Wrapper from "@/components/ui/wrapper.tsx";
import Card from "@/components/ui/card.tsx";
import { DisplayCard } from "@/components/ui/display_card.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Input } from "@/components/ui/input.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import { project_validation_schema, ProjectValidationSchema } from "@/components/schemas/project.schema.ts";
import { InputDescription } from "@/components/ui/input-description.tsx";
import { Button } from "@/components/ui/button.tsx";
import { zodResolver} from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { ProjectService } from "@/services/api/project.service.ts";
import { toast } from "sonner";

export const Route = createFileRoute('/_layout/projects_/add')({
  component: RouteComponent,
})



function RouteComponent() {

  const { mutate, isPending } = useMutation({
    mutationFn: ProjectService.addProject,
    onSuccess: (data) => {
      toast.success("New Draft Project Added", {
        description: "",
        action: {
          label: "OK",
          onClick: () => console.log(data)
        }
      })

    },
    onError: (error) => {
      toast.error("Failed to Add Project", {
        description: new Date().toUTCString(),
        action: {
          label: "OK",
          onClick: () => console.log(error)
        }
      })
    }
  })

  const { register, watch, handleSubmit, formState: { errors }} = useForm<ProjectValidationSchema>({
    resolver: zodResolver(project_validation_schema)
  })

  const onSubmit: SubmitHandler<ProjectValidationSchema> = (data) => mutate(data)


  return <>
    <Wrapper page="Add Project" row_cols_class="md:grid-cols-3 md:grid-rows-2">

      <Card>
        <DisplayCard>
          <div>{ watch("description")} </div>
          <div>{ watch("title")} </div>
        </DisplayCard>
      </Card>

      <Card className="md:col-span-2 md:row-span-2">
        {/*// add project form*/}
        <div className="p-4 m-4">

          <form className="z-50" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Label htmlFor="title">Title</Label>
              <Input type="text"  {...register("title")} placeholder="Title" />
              <InputDescription activator={!!errors.title} default_message="Whats the title of the project" error_message={errors.title?.message} />
            </div>
            <div>
              <Label htmlFor="description"> Description</Label>
              <Input type="text" {...register("description")} placeholder="Description"/>
              <InputDescription activator={!!errors.description} default_message="describe what the project is" error_message={errors.description?.message} />
            </div>

            <div>
              <Button type="submit" disabled={isPending} className="w-full max-w-md">
                { isPending && <span className="material-symbols-rounded">progress_activity</span> }
                Save
              </Button>
            </div>
          </form>

        </div>

      </Card>
      <button></button>

      {/*<Card>*/}
      {/*  <DisplayCard>*/}
      {/*    <div></div>*/}
      {/*  </DisplayCard>*/}
      {/*</Card>*/}






    </Wrapper>
  </>
}
