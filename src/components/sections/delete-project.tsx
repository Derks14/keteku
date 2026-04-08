import {
  AlertDialog, AlertDialogAction, AlertDialogCancel,
  AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
  AlertDialogHeader, AlertDialogMedia, AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Trash2Icon } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { ProjectService } from "@/services/api/project.service.ts";
import { queryClient } from "@/services/queryClient.ts";
import { toast } from "sonner";
import { FileRoutesByPath, UseNavigateResult } from "@tanstack/react-router";

interface DeleteProjectProp {
  projectId: string;
  navigate:  UseNavigateResult<FileRoutesByPath["/_layout/projects_/update/$id"]["fullPath"]>

}

const DeleteProject = ({projectId, navigate}: DeleteProjectProp) => {

  const { mutate } = useMutation({
    mutationFn: () => ProjectService.deleteProject(projectId),
    onSuccess: async (data) => {
      toast.success("project deleted successfully", {
        description: new Date().toUTCString(),
        action: {
          label: "OK",
          onClick: () => console.log(data)
        }
      })

      await queryClient.invalidateQueries({ queryKey: ["projects"]})

      await navigate({
        to: "/projects"
      });

    },
    onError: error => {
      toast.error("failed to delete project", {
        description: new Date().toUTCString(),
        action: {
          label: "Retry",
          onClick: () => mutate()
        }
      })
      console.log("error deleting project project", error);
    }
  })
  
  const deleteItem = () => mutate();
  
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger className="w-full">
          <span className="w-full">Delete Project</span>
        </AlertDialogTrigger>

        <AlertDialogContent size="sm">
          <AlertDialogHeader>
            <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
              <Trash2Icon />
            </AlertDialogMedia>
            <AlertDialogTitle>Delete Project?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this project. View{" "}
              <a href="#">Settings</a> delete all items that come along with this project
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={deleteItem} variant="destructive">Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

    </>
  )
}

export default DeleteProject