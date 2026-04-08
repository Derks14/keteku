import {
  Control,
  FieldErrors,
  useFieldArray,
  UseFormRegister, UseFormResetField, UseFormSetValue,
  UseFormTrigger, UseFormWatch
} from "react-hook-form";
import { UpdateProjectValidationSchema } from "@/components/schemas/project.schema.ts";
import Card from "@/components/ui/card.tsx";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Label } from "@/components/ui/label.tsx";
import { Input } from "@/components/ui/input.tsx";
import { InputDescription } from "@/components/ui/input-description.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Button } from "@/components/ui/button.tsx";
import React, { useState } from "react";
import { toast } from "sonner";

interface AddEngineeringDecisionProps {
  control: Control<UpdateProjectValidationSchema>
  register: UseFormRegister<UpdateProjectValidationSchema>
  errors: FieldErrors<UpdateProjectValidationSchema>
  watch:UseFormWatch<UpdateProjectValidationSchema>
  trigger: UseFormTrigger<UpdateProjectValidationSchema>
  setValue: UseFormSetValue<UpdateProjectValidationSchema>
}


const AddEngineeringDecision = ({ control, register, errors, watch, trigger, setValue }: AddEngineeringDecisionProps) => {

  const [activeIdx, setActiveIdx] = useState(0);
  const [updating, setUpdating] = useState(false);

  const { fields,append, remove } = useFieldArray({
    control,
    name: "engineeringDecision"
  })



  const onSubmit = async (e: Event) => {
    e.preventDefault();
    // check if form fields are valid or theres something in there before you proceed
    // add empty array element
    // update the active index to plus one
    const isValid =  await trigger([
      `engineeringDecision.${activeIdx}.topic`,
      `engineeringDecision.${activeIdx}.decision`,
      `engineeringDecision.${activeIdx}.reason`,
    ])

    if (!isValid) {
      toast.error("One engineering Decision field is empty", {
        description: new Date().toUTCString()
      })
      return
    }


    if (updating) return;

    const next_row = activeIdx + 1
    setActiveIdx(next_row);
    append({topic: "", decision: "", reason: ""})

    // setValue(`engineeringDecision.${next_row}.topic`, "", {
    //   shouldDirty: true,
    //   shouldTouch: true,
    //   shouldValidate: false,
    // })
    // setValue(`engineeringDecision.${next_row}.decision`, "", {
    //   shouldDirty: true,
    //   shouldTouch: true,
    //   shouldValidate: false,
    // })
    // setValue(`engineeringDecision.${next_row}.reason`, "", {
    //   shouldDirty: true,
    //   shouldTouch: true,
    //   shouldValidate: false,
    // })

  };

  const onRemove = (event: Event, idx: number) => {
    event.preventDefault();
    // remove at this index and set the active index to the size of the array
    setActiveIdx(fields.length)

    remove(idx)
  }

  const onUpdate = (idx) => {
    setUpdating(true);
    setValue(`engineeringDecision.${idx}.topic`, watch(`engineeringDecision.${idx}.topic`), {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: false,
    })
    setValue(`engineeringDecision.${idx}.decision`, watch(`engineeringDecision.${idx}.decision`), {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: false,
    })
    setValue(`engineeringDecision.${idx}.reason`, watch(`engineeringDecision.${idx}.reason`), {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: false,
    })

    setActiveIdx(idx)
  }

  const decisions = watch("engineeringDecision") ?? [];


  const hasContent = (decision?: { topic?: string, decision?: string, reason?: string }) => {
    return !!(  decision?.topic?.trim() || decision?.decision?.trim() || decision?.reason?.trim() );
  }




  return (
    <Card>
      <div className="p-4">
        { fields.filter((_, idx) => hasContent(decisions[idx])).map( (item, idx) => (
          <div className="flex gap-4 mb-4 items-stretch">
            <a onClick={ () => onUpdate(idx) }  className="grow rounded-lg border border-transparent hover:border-foreground px-4 py-2 bg-black/[0.09] dark:bg-white/[0.09]">
              <div className="font-semibold">{item.topic}</div>
              <div className="">{item.decision}</div>
              <div className="">{item.reason}</div>
            </a>
            <a onClick={ (event) =>  onRemove(event, idx) } className="bg-destructive/20 hover:border hover:border-destructive rounded-lg flex items-center justify-center" >
              <span className="px-1 cursor-pointer my-auto">
                <TrashIcon className="size-6 text-destructive"  />
              </span>
            </a>

          </div>
        ) )}
      </div>
      <div className="p-4">
        <div>
          <Label htmlFor="topic">Topic</Label>
          <Input
            type="text"
            {...register(`engineeringDecision.${activeIdx}.topic` as const)}
            placeholder="Server Framework"
          />
          <InputDescription
            activator={!!errors.engineeringDecision?.[activeIdx]?.topic}
            error_message={errors.engineeringDecision?.[activeIdx]?.topic?.message}
            default_message="on what did you have to choose "
          />
        </div>
        <div>
          <Label htmlFor="decision">Decision</Label>
          <Input
            type="text"
            {...register(`engineeringDecision.${activeIdx}.decision` as const)}
            placeholder="Spring boot"
          />
          <InputDescription
            activator={!!errors.engineeringDecision?.[activeIdx]?.decision}
            error_message={errors.engineeringDecision?.[activeIdx]?.decision?.message}
            default_message="what did you conclude on"
          />
        </div>
        <div>
          <Label htmlFor="reason">Reason</Label>
          <Textarea
            {...register(`engineeringDecision.${activeIdx}.reason` as const)}
            placeholder="Strong ecosystem, production-ready features, and JVM performance."
            rows={3}
          />
          <InputDescription
            activator={!!errors.engineeringDecision?.[activeIdx]?.reason}
            error_message={errors.engineeringDecision?.[activeIdx]?.reason?.message}
            default_message="what did you conclude on"
          />
        </div>

        <div>
          <Button
            type="button"
            onClick={onSubmit}
          >
            Add Engineering Decision
          </Button>
        </div>
      </div>
    </Card>

  )

}

export default AddEngineeringDecision