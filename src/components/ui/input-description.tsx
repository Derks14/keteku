interface InputDescriptionProps {
  activator: boolean;
  default_message?: string;
  error_message: string | undefined;
}

export const InputDescription = ({ activator, default_message, error_message }: InputDescriptionProps ) => {
  return (
    <div className="mt-1">
      { activator ? (
        <p className="text-xs text-red-700"> {error_message ?? default_message }</p>
      ) : (
        <p className="text-xs text-muted-foreground">{default_message}</p>
      )}
    </div>
  )
}