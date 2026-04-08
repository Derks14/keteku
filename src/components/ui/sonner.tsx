import { useTheme} from "next-themes";
import { Toaster as Sonner, type ToasterProps} from "sonner";
import * as React from "react";
import { PiSealCheckLight } from "react-icons/pi";
import { TiWarning } from "react-icons/ti";
import { FaInfo } from "react-icons/fa";
import { BiSolidErrorAlt } from "react-icons/bi";
import { TbProgress } from "react-icons/tb";

const Toaster = ({...props}: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner theme={ theme as ToasterProps["theme"]}
            className="toaster group"
            icons={{
              success: ( <PiSealCheckLight /> ),
              info: (<FaInfo /> ),
              warning: (<TiWarning /> ),
              error: ( <BiSolidErrorAlt className="size-5" /> ),
              loading: ( <TbProgress className="size-5" /> )
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