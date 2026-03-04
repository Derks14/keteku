import { useTheme} from "next-themes";
import { Toaster as Sonner, type ToasterProps} from "sonner";
import * as React from "react";

const Toaster = ({...props}: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner theme={ theme as ToasterProps["theme"]}
            className="toaster group"
            icons={{
              success: ( <span className="material-symbols-rounded">circle_check_rounded</span>),
              info: (<span className="material-symbols-rounded">info</span>),
              warning: ( <span className="material-symbols-rounded">brightness_alert</span> ),
              error: ( <span className="material-symbols-rounded">error</span> ),
              loading: ( <span className="material-symbols-rounded">progress_activity</span> )
            }}
            style={{
              "--normal-bg": "var(--popover)",
              "--normal-text": "var(--popover-foreground)",
              "--normal-border": "var(--border)",
              "--border-radius": "var(--radius)",
            } as React.CSSProperties
          }
            toastOptions={{
              classNames: {
                toast: "cn-toast"
              },
            }}
            {...props}
    >

    </Sonner>
  )
}

export { Toaster }